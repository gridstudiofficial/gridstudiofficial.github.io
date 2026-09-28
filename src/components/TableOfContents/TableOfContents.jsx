import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TableOfContents.css';
import {slugify} from "./slugify.js";



export default function TableOfContents({ containerRef }) {
	const { t } = useTranslation();
	const [headings, setHeadings] = useState([]);
	const [activeId, setActiveId] = useState('');
	const [isTocVisible, setIsTocVisible] = useState(false);

	// Extract headings from container
	useEffect(() => {
		const target = containerRef?.current || document.body;
		if (!target) return;

		const updateHeadings = () => {
			const headingElements = target.querySelectorAll('h1, h2, h3, h4');
			const list = Array.from(headingElements).map((el) => {
				const text = el.textContent || '';
				let id = el.id;
				if (!id) {
					id = slugify(text);
					if (id) {
						el.id = id;
					}
				}
				return {
					id: id || `heading-${Math.random().toString(36).substr(2, 9)}`,
					text,
					level: parseInt(el.tagName.substring(1), 10),
				};
			}).filter(h => h.text.trim() !== '');
			setHeadings(list);
		};

		updateHeadings();

		// Use MutationObserver to detect dynamic content changes (like async markdown)
		const observer = new MutationObserver(() => {
			updateHeadings();
		});

		observer.observe(target, {
			childList: true,
			subtree: true,
			characterData: true,
		});

		return () => observer.disconnect();
	}, [containerRef]);

	// Intersection Observer for highlighting active section
	useEffect(() => {
		if (headings.length === 0) return;

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveId(entry.target.id);
				}
			});
		};

		const observerOptions = {
			root: null,
			rootMargin: '-80px 0px -50% 0px',
			threshold: 0,
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);
		headings.forEach((h) => {
			const el = document.getElementById(h.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [headings]);

	// Handle initial hash scroll
	useEffect(() => {
		if (headings.length > 0) {
			const hash = window.location.hash;
			const parts = hash.split('#');
			const targetId = parts[parts.length - 1];
			if (targetId) {
				const el = document.getElementById(targetId);
				if (el) {
					setTimeout(() => {
						el.scrollIntoView({ behavior: 'smooth', block: 'start' });
						setActiveId(targetId);
					}, 150);
				}
			}
		}
	}, [headings]);

	const handleTocClick = (e, id) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			setActiveId(id);
			const basePath = window.location.hash.split('#')[1] || window.location.pathname;
			const cleanPath = basePath.split('?')[0];
			window.location.hash = `#${cleanPath}#${id}`;
		}
	};

	if (headings.length === 0) {
		return null;
	}

	const minLevel = Math.min(...headings.map((h) => h.level));

	return (
		<>
			{!isTocVisible && (
				<button
					className="toc-toggle-floating"
					onClick={() => setIsTocVisible(true)}
					title={t('toc.show_index') || 'Show Index'}
				>
					<span>☰ {t('toc.show_index') || 'Show Index'}</span>
				</button>
			)}

			{isTocVisible && (
				<aside className="toc-sidebar">
					<div className="toc-header">
						<span className="toc-title">{t('toc.toc') || t('toc') || 'Table of Contents'}</span>
						<button
							className="toc-close-btn"
							onClick={() => setIsTocVisible(false)}
							title={t('toc.hide_index') || 'Hide Index'}
						>
							✕
						</button>
					</div>
					<nav className="toc-nav">
						<ul>
							{headings.map((h) => {
								const indentLevel = h.level - minLevel;
								const isActive = activeId === h.id;
								return (
									<li
										key={h.id}
										style={{ paddingLeft: `${indentLevel * 12}px` }}
										className={isActive ? 'active' : ''}
									>
										<a
											href={`#${h.id}`}
											onClick={(e) => handleTocClick(e, h.id)}
											title={h.text}
										>
											{h.text}
										</a>
									</li>
								);
							})}
						</ul>
					</nav>
				</aside>
			)}
		</>
	);
}

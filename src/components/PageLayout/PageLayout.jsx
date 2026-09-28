import { useRef } from 'react';
import TableOfContents from '../TableOfContents/TableOfContents.jsx';
import './PageLayout.css';

export default function PageLayout({ children }) {
	const contentRef = useRef(null);

	return (
		<div className="page-layout-container" ref={contentRef}>
			<div className="page-content-wrapper">
				{children}
			</div>
			<TableOfContents containerRef={contentRef} />
		</div>
	);
}

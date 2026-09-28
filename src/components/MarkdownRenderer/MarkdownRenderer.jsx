import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // 1. Importar el plugin
import {MermaidBlock, rehypeMermaid} from 'react-markdown-mermaid';
import './MarkdownRenderer.css';

export default function MarkdownRenderer({fileName}) {
	const {t} = useTranslation();
	const [markdownText, setMarkdownText] = useState('');
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		const publicPath = fileName.replace(/^\/?public/, '');

		fetch(publicPath, {signal: controller.signal})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Could not find document at ${publicPath}`);
				}
				return response.text();
			})
			.then((text) => {
				setMarkdownText(text);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err.name !== 'AbortError') {
					setError(err.message);
					setIsLoading(false);
				}
			});

		return () => controller.abort();
	}, [fileName]);

	if (error) {
		return <div className="markdown-renderer-error">{t('markdown.error', {path: fileName})}</div>;
	}

	if (isLoading) {
		return <div className="markdown-renderer-loading">{t('markdown.loading')}</div>;
	}

	return (
		<div className="markdown-renderer">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[
					rehypeRaw, // 2. Agregar rehypeRaw aquí arriba
					[
						rehypeMermaid,
						{
							mermaidConfig: {
								theme: 'dark',
								look: 'neo',
								themeVariables: {
									darkMode: true,
									background: '#191a1c',
									primaryColor: '#2b2d31',
									primaryTextColor: '#eaeaea',
									primaryBorderColor: '#646cff',
									lineColor: '#8a8f98',
									secondaryColor: '#232529',
									tertiaryColor: '#1f2023',
									fontFamily: "'Noto Sans Variable', Arial, sans-serif",
									fontSize: '1em',

									cScale0: '#646cff',
									cScale1: '#4c9f70',
									cScale2: '#c97b3d',
									cScale3: '#c94f4f',
									cScale4: '#9b59b6',
									cScale5: '#3498db',
									cScale6: '#e67e22',
									cScale7: '#1abc9c',
									cScale8: '#e91e63',
									cScale9: '#2ecc71',
									cScale10: '#f39c12',
									cScale11: '#8e44ad',
								},
								flowchart: {
									padding: 20,
								},
								securityLevel: 'loose',
							},
						},
					],
				]}
				components={{MermaidBlock}}
			>
				{markdownText}
			</ReactMarkdown>
		</div>
	);
}
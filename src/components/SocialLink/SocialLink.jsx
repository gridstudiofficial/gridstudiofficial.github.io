import GithubIcon from '../../assets/socials/Octicons-mark-github.svg?react';
import LinkedinIcon from '../../assets/socials/LinkedIn_icon.svg?react';
import './SocialLink.css';

const SOCIAL_NETWORKS = [
	{
		id: 'github',
		name: 'GitHub',
		pattern: /github\.com/i,
		size: 1.5,
		icon: "Octicons-mark-github.svg"
	}, {
		id: 'twitter', name: 'Twitter / X', pattern: /twitter\.com|x\.com/i, size: 1.4,
	}, {
		id: 'linkedin', name: 'LinkedIn', pattern: /linkedin\.com/i, size: 1.5, icon: "LinkedIn_icon.svg"
	}, {
		id: 'instagram', name: 'Instagram', pattern: /instagram\.com|instagr\.am/i, size: 1.5,
	}, {
		id: 'youtube', name: 'YouTube', pattern: /youtube\.com|youtu\.be/i, size: 1.6,
	}, {
		id: 'discord', name: 'Discord', pattern: /discord\.gg|discord\.com/i, size: 1.5,
	}, {
		id: 'tiktok', name: 'TikTok', pattern: /tiktok\.com/i, size: 1.5,
	}, {
		id: 'spotify', name: 'Spotify', pattern: /spotify\.com/i, size: 1.5,
	}, {
		id: 'twitch', name: 'Twitch', pattern: /twitch\.tv/i, size: 1.5,
	}, {
		id: 'reddit', name: 'Reddit', pattern: /reddit\.com/i, size: 1.6,
	}, {
		id: 'whatsapp', name: 'WhatsApp', pattern: /wa\.me|whatsapp\.com/i, size: 1.5,
	}, {
		id: 'telegram', name: 'Telegram', pattern: /t\.me|telegram\.me|telegram\.org/i, size: 1.5,
	}, {
		id: 'email',
		name: 'Email (Mailto)',
		pattern: /mailto:|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i,
		size: 1.4,
	}, {
		id: 'default', name: 'Website / Default', pattern: /.*/i, size: 1.4,
	}];

const SOCIAL_ICONS = {
	'Octicons-mark-github.svg': GithubIcon,
	'LinkedIn_icon.svg': LinkedinIcon,
};

function detectSocialNetwork(url) {
	if (!url || typeof url !== 'string') {
		return SOCIAL_NETWORKS.find(n => n.id === 'default');
	}

	const matched = SOCIAL_NETWORKS.find(network => {
		if (network.id === 'default') return false;
		if (network.pattern instanceof RegExp) {
			return network.pattern.test(url);
		}
		if (typeof network.pattern === 'string') {
			return url.toLowerCase().includes(network.pattern.toLowerCase());
		}
		return false;
	});

	return matched || SOCIAL_NETWORKS.find(n => n.id === 'default');
}

export default function SocialLink({
									   url = '', hasBackground = true, className = '', onClick, ...props
								   }) {
	const network = detectSocialNetwork(url);
	const fontSizeEm = `${network.size || 1.5}em`;
	const IconComponent = network.icon ? SOCIAL_ICONS[network.icon] : null;

	const bgStyles = hasBackground ? {
		backgroundColor: network.bgColor,
		color: "#b8b8b8"
	} : {backgroundColor: 'transparent', color: network.bgColor};

	return (
		<a
			href={url || '#'}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Visit link for ${network.name}`}
			title={network.name}
			onClick={onClick}
			className={`social-link ${className}`}
			style={{
				padding: hasBackground ? '0.25em' : '0.5em', ...bgStyles
			}}
			{...props}
		>
			{IconComponent ? (
				<IconComponent
					aria-hidden="true"
					style={{height: fontSizeEm, width: 'auto'}}
				/>
			) : null}
			<span className="social-name">{network.name}</span>
		</a>);
}

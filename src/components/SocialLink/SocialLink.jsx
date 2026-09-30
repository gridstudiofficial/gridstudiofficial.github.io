import GithubIcon from '../../assets/socials/Octicons-mark-github.svg?react';
import LinkedinIcon from '../../assets/socials/LinkedIn_icon.svg?react';
import TwitterIcon from '../../assets/socials/Twitter-X_icon.svg?react';
import BlueskyIcon from '../../assets/socials/Bluesky_icon.svg?react';
import InstagramIcon from '../../assets/socials/Instagram_icon.svg?react';
import ItchIoIcon from '../../assets/socials/itch-io_icon.svg?react';
import YouTubeIcon from '../../assets/socials/YouTube_icon.svg?react';
import LinktreeIcon from '../../assets/socials/Linktree_icon.svg?react';

import './SocialLink.css';

const SOCIAL_NETWORKS = [
	{
		id: 'github',
		name: 'GitHub',
		pattern: /github\.com/i,
		size: 1.5,
		icon: "Octicons-mark-github.svg"
	}, {
		id: 'twitter', name: 'Twitter / X', pattern: /twitter\.com|x\.com/i, size: 1.4, icon: "Twitter_icon.svg"
	}, {
		id: 'linkedin', name: 'LinkedIn', pattern: /linkedin\.com/i, size: 1.5, icon: "LinkedIn_icon.svg"
	}, {
		id: 'instagram', name: 'Instagram', pattern: /instagram\.com|instagr\.am/i, size: 1.5, icon: "Instagram_icon.svg"
	}, {
		id: 'youtube', name: 'YouTube', pattern: /youtube\.com|youtu\.be/i, size: 1.5, icon: "YouTube_icon.svg"
	}, {
		id: 'itchio', name: 'Itch.io', pattern: /itch.io/i, size: 1.8, icon: "itch-io_icon.svg"
	}, {
		id: 'bluesky', name: 'Bluesky', pattern: /bsky.app/i, size: 1.5, icon: "Bluesky_icon.svg"
	}, {
		id: 'linktree', name: 'Linktree', pattern: /linktr.ee/i, size: 1.5, icon: "Linktree_icon.svg"
	}, {
		id: 'discord', name: 'Discord', pattern: /discord\.gg|discord\.com/i, size: 1.5,
	}, {
		id: 'tiktok', name: 'TikTok', pattern: /tiktok\.com/i, size: 1.5,
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
	"Octicons-mark-github.svg": GithubIcon,
	"LinkedIn_icon.svg": LinkedinIcon,
	"Twitter_icon.svg": TwitterIcon,
	"Instagram_icon.svg": InstagramIcon,
	"YouTube_icon.svg": YouTubeIcon,
	"itch-io_icon.svg": ItchIoIcon,
	"Bluesky_icon.svg": BlueskyIcon,
	"Linktree_icon.svg": LinktreeIcon
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

export default function SocialLink({url = ''}) {
	const network = detectSocialNetwork(url);
	const fontSizeEm = `${network.size || 1.5}em`;
	const IconComponent = network.icon ? SOCIAL_ICONS[network.icon] : null;

	return (
		<a
			href={url || '#'}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Visit link for ${network.name}`}
			title={network.name}
			className={`social-link`}
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

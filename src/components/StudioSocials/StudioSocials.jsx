import SocialLink from "../SocialLink/SocialLink.jsx";
import "./StudioSocials.css";

export default function StudioSocials() {
	return (
		<div className="studio-socials">
			<SocialLink url={"https://linktr.ee/gridstudiofficial"}/>
			<SocialLink url={"https://www.youtube.com/channel/UCAzZ3EusBxjVk9B3PuvHyrA"}/>
			<SocialLink url={"https://gridstudio.itch.io/"}/>
			<SocialLink url={"https://bsky.app/profile/gridstudioofficial.bsky.social"}/>
		</div>
	)
}
import "./GridTacticsFirstImpression.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import StudioSocials from "../StudioSocials/StudioSocials.jsx";

export function GridTacticsFirstImpression() {
	const { t } = useTranslation("pages");

	return (
		<>
			<section className="home-socials">
				<h2>{t('home.socialTitle')}</h2>
				<p>{t('home.socialIntro')}</p>
				<StudioSocials />
			</section>

			<img
				src="/grid_studio_logo/Grid%20Studio%20Logo%20Wide.svg"
				alt="Grid Studio Logo"
				className="logo logo-wide"
			/>

			<img
				src="/grid_studio_logo/Grid%20Studio%20Logo%20Square.svg"
				alt="Grid Studio Logo"
				className="logo logo-mobile"
			/>

			<section className="home-hero">
				<div className="home-hero__content">
					<div className="home-hero__title-container">
						<div className="home-tank home-tank--red">
							<img src="/Sprites/RedTank/tank_idle_rojo_1.png" alt="" />
							<img src="/Sprites/RedTank/tank_idle_rojo_2.png" alt="" />
							<img src="/Sprites/RedTank/tank_idle_rojo_3.png" alt="" />
							<img src="/Sprites/RedTank/tank_idle_rojo_4.png" alt="" />
						</div>

						<h2>{t('home.title')}</h2>

						<div className="home-tank home-tank--green">
							<img src="/Sprites/GreenTank/tank_idle_verde_1.png" alt="" />
							<img src="/Sprites/GreenTank/tank_idle_verde_2.png" alt="" />
							<img src="/Sprites/GreenTank/tank_idle_verde_3.png" alt="" />
							<img src="/Sprites/GreenTank/tank_idle_verde_4.png" alt="" />
						</div>
					</div>

					<p>{t('home.description')}</p>

					<div className="home-hero__buttons">
						<Link to="/portfolio" className="home-button home-button--primary">
							Portfolio
						</Link>

						<Link to="/about" className="home-button home-button--primary">
							Descubre nuestro juego
						</Link>



						<Link to="/docs" className="home-button home-button--secondary">
							{t('nav.docs', { ns: "common" })}
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
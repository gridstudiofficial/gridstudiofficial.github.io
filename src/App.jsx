import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Docs from './pages/Docs.jsx';
import SocialPage from './pages/SocialPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';
import Footer from "./components/Footer/Footer.jsx";
import Portfolio from "./pages/Portfolio.jsx";

function App() {
	return (
		<HashRouter>
			<header className="app-header">
				<Navbar/>
			</header>

			<main>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/docs" element={<Docs/>}/>
					<Route path="/social" element={<SocialPage/>}/>
					<Route path="/portfolio" element={<Portfolio/>}/>
				</Routes>
			</main>
			<Footer/>
		</HashRouter>
	);
}

export default App;

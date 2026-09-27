import {createHashRouter, Outlet, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Docs from './pages/Docs.jsx';
import SocialPage from './pages/SocialPage.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function Layout() {
	return (
		<>
			<header className="app-header">
				<Navbar/>
			</header>
			<main>
				<Outlet/>
			</main>
			<Footer/>
		</>
	);
}

const router = createHashRouter([
	{
		element: <Layout/>,
		children: [
			{path: '/', element: <Home/>},
			{path: '/docs', element: <Docs/>},
			{path: '/social', element: <SocialPage/>},
			{path: '/portfolio', element: <Portfolio/>},
		],
	},
]);

function App() {
	return <RouterProvider router={router}/>;
}

export default App;
import {createHashRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Docs from './pages/Docs.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageLayout from './components/PageLayout/PageLayout.jsx';
import './App.css';
import About from './pages/About.jsx';
import Marketing from './pages/Marketing.jsx';
import Programming from './pages/Programming.jsx';

function Layout() {
	return (
		<>
			<header className="app-header">
				<Navbar/>
			</header>
			<main>
				<PageLayout>
					<Outlet/>
				</PageLayout>
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
			{path: '/social', element: <Navigate to="/" replace/>},
			{path: '/portfolio', element: <Portfolio/>},
			{path: '/about', element: <About/>},
			{path: '/marketing', element: <Marketing/>},
			{path: '/programming', element: <Programming/>},
		],
	},
]);

function App() {
	return <RouterProvider router={router}/>;
}

export default App;
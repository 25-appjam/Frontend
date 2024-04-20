import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import Recommend from './pages/recommend/index';
import Roulette from './pages/recommend/roulette';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/recommend/" element={<Recommend />} />
				<Route path="/recommend/roulette" element={<Roulette />} />
			</Routes>
		</BrowserRouter>
	);
};

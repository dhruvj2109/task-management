import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Messages from './pages/messages';
import Notification from './pages/notifications';
import Settings from './pages/settings';
import Menu from './sections/menu';

function App() {
	return (
		<div className={styles['App']}>
			<Router>
				<Menu />
				<div className={styles['page-con']}>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/messages" element={<Messages />} />
						<Route path="/notifications" element={<Notification />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;

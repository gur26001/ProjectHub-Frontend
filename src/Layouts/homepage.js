import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
	return (
		<div>
			<Header />
			<Outlet
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			/>
			<Footer />
		</div>
	);
}

export default App;

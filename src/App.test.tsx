import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

describe('App', () => {
	it('renders the Login component when the path is "/"', () => {
		render(
			<Router>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</Router>,
		);

		expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
	});
});

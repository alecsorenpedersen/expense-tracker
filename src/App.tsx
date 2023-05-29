import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { t } from 'i18next';
import SignOutButton from './components/SignOutButton.tsx/SignOutButton';

import { useSelector } from 'react-redux';
import { RootState } from './redux/reducers';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitch';

function App() {
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated,
	);
	return (
		<Router>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h5'
						component='div'
						sx={{ flexGrow: 1 }}
						data-testid='app-title'>
						{t('expenseTracker')}
					</Typography>
					<LanguageSwitcher />
					<Box sx={{ flexGrow: 1 }} />
					{isAuthenticated && <SignOutButton />}
				</Toolbar>
			</AppBar>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;

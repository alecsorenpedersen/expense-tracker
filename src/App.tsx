import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import SignOutButton from './components/SignOutButton.tsx/SignOutButton';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitch';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

function App() {
	const { t } = useTranslation();
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
					<LanguageSwitcher data-testid='language-switcher' />
					<Box sx={{ flexGrow: 1 }} />
					<SignOutButton data-testid='sign-out-button' />
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

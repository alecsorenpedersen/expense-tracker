import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { t } from 'i18next';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitch';
import SignOutButton from '../components/SignOutButton.tsx/SignOutButton';
import { LayoutContainer, LayoutMain } from '../styles/theme';
import { LayoutProps } from '../types';

const Layout = ({ children, ...props }: LayoutProps) => {
	return (
		<>
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
			<LayoutMain data-testid='layout-main' style={{ padding: '20px' }}>
				<LayoutContainer data-testid='layout-container'>
					{children}
				</LayoutContainer>
			</LayoutMain>
		</>
	);
};

export default Layout;

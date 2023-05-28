import { LayoutContainer, LayoutMain } from '../styles/theme';
import { LayoutProps } from '../types';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SignOutButton from '../components/SignOutButton.tsx/SignOutButton';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/languageSwitcher/LanguageSwitch';

const Layout = ({ children }: LayoutProps) => {
	const { t } = useTranslation();
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
					<LanguageSwitcher />
					<Box sx={{ flexGrow: 1 }} />
					<SignOutButton />
				</Toolbar>
			</AppBar>
			<LayoutMain data-testid='layout-main'>
				<LayoutContainer data-testid='layout-container'>
					{children}
				</LayoutContainer>
			</LayoutMain>
		</>
	);
};

export default Layout;

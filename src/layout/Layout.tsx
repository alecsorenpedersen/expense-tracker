import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { t } from 'i18next';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitch';
import SignOutButton from '../components/SignOutButton.tsx/SignOutButton';
import { LayoutContainer, LayoutMain } from '../styles/theme';
import { LayoutProps } from '../types';

const Layout = ({ children, ...props }: LayoutProps) => {
	return (
		<LayoutMain data-testid='layout-main' style={{ padding: '20px' }}>
			<LayoutContainer data-testid='layout-container'>
				{children}
			</LayoutContainer>
		</LayoutMain>
	);
};

export default Layout;

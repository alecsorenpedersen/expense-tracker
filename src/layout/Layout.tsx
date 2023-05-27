import { LayoutContainer, LayoutMain } from '../styles/theme';
import { LayoutProps } from '../types';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SignOutButton from '../components/SignOutButton.tsx/SignOutButton';

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
						Expense Tracker
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<SignOutButton />
				</Toolbar>
			</AppBar>
			<LayoutMain>
				<LayoutContainer>{children}</LayoutContainer>
			</LayoutMain>
		</>
	);
};

export default Layout;

import { Box, useMediaQuery } from '@mui/material';

const SideNav = () => {
	const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

	if (!lgUp) {
		return null;
	}

	return (
		<Box
			sx={{
				width: 280,
				height: '100%',
				position: 'fixed',
				left: 0,
				top: 0,
				backgroundColor: '#ffffff',
				boxShadow: 3,
			}}
		/>
	);
};

export default SideNav;

import { Card, Typography, createTheme, styled } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#DD3333	',
			dark: '#E94443',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
		background: {
			default: '#FCFCFC',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	},
	shape: {
		borderRadius: 10,
	},
	spacing: 10,
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
	},
});

export const CardContainer = styled(Card)({
	marginTop: '10%',
	height: '100%',
	overflow: 'auto',
});

export const Title = styled(Typography)({
	marginBottom: '10px',
});

export const Header = styled(Typography)({
	align: 'center',
	fontSize: '1.5rem',
});

export const LayoutMain = styled('div')({
	display: 'flex',
	flex: '1 1 auto',
	maxWidth: '100%',
});

export const LayoutContainer = styled('div')({
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	width: '100%',
});

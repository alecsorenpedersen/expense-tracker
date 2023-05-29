import { Card, CardContent, Grid } from '@mui/material';
import { Header } from '../../styles/theme';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../layout/Layout';

const Login = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate('/dashboard');
	};

	return (
		<Layout>
			<Grid container spacing={3} style={{ padding: '40px' }}>
				<Grid item xs={12} md={12}>
					<Header variant='h1' align='center' paddingBottom='-100px'>
						{t('login')}
					</Header>
				</Grid>
				<Grid item xs={12} md={4}></Grid>
				<Grid item xs={12} md={4}>
					<Card>
						<CardContent>
							<LoginForm onSubmit={handleSubmit} />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={4}></Grid>
			</Grid>
		</Layout>
	);
};

export default Login;

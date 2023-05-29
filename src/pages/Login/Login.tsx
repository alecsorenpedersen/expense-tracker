import { Card, CardContent, Grid } from '@mui/material';
import { Header } from '../../styles/theme';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate('/dashboard');
	};

	return (
		<Grid container justifyContent='center'>
			<Grid item xs={12} sm={8} md={6} lg={4}>
				<Card>
					<CardContent>
						<Header variant='h1' align='center' paddingBottom='-100px'>
							{t('login')}
						</Header>
						<LoginForm onSubmit={handleSubmit} />
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Login;

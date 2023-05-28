import { Grid } from '@mui/material';
import { Title } from '../../styles/theme';
import LoginForm from './LoginForm';
import Card from '../Card/CardWrapper';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

const Login = () => {
	const navigate = useNavigate();
	const handleSubmit = (values: { username: string; password: string }) => {
		if (values.username === 'admin' && values.password === 'password') {
			navigate('/dashboard');
		} else {
			alert('Invalid credentials!');
		}
	};

	return (
		<Grid container justifyContent='center'>
			<Grid item xs={12} sm={8} md={6} lg={4}>
				<Card>
					<Title variant='h5'>{t('login')}</Title>
					<LoginForm onSubmit={handleSubmit} />
				</Card>
			</Grid>
		</Grid>
	);
};

export default Login;

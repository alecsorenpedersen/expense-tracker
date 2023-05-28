import { Grid } from '@mui/material';
import { Title } from '../../styles/theme';
import LoginForm from './LoginForm';
import Card from '../Card/CardWrapper';
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
					<Title variant='h5'>{t('login')}</Title>
					<LoginForm onSubmit={handleSubmit} />
				</Card>
			</Grid>
		</Grid>
	);
};

export default Login;

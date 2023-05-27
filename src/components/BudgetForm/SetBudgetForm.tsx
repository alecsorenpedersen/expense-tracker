import { Button } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { TextField } from 'formik-mui';
import { useDispatch } from 'react-redux';
import { Title } from '../../styles/theme';
import Card from '../Card/CardWrapper';
import { setBudget } from '../../actions';
import * as Yup from 'yup';

const validationSchema = Yup.object({
	budget: Yup.number()
		.required('Budget is required')
		.positive('Budget must be a positive number'),
});

const initialValues = {
	budget: '',
};

const SetBudgetForm = () => {
	const dispatch = useDispatch();

	const onSubmit = (
		values: typeof initialValues,
		{ resetForm }: FormikHelpers<typeof initialValues>,
	) => {
		dispatch(setBudget(Number(values.budget)));
		resetForm();
	};

	return (
		<Card>
			<Title variant='h5'>Set Budget</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}>
				{() => (
					<Form>
						<Field
							component={TextField}
							fullWidth
							margin='normal'
							label='Budget'
							variant='outlined'
							name='budget'
							type='number'
						/>
						<Button variant='contained' color='primary' fullWidth type='submit'>
							Set Budget
						</Button>
					</Form>
				)}
			</Formik>
		</Card>
	);
};

export default SetBudgetForm;

import { Button } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { TextField } from 'formik-mui';
import { useDispatch } from 'react-redux';
import { Title } from '../../styles/theme';
import { setBudget } from '../../actions';
import { budgetValidationSchema } from '../../schema/validation';

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
		<>
			<Title variant='h5'>Set Budget</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={budgetValidationSchema}
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
		</>
	);
};

export default SetBudgetForm;

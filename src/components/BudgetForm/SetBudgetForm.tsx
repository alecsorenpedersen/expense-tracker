import { Button } from '@mui/material';
import { Formik, Form, FormikHelpers } from 'formik';

import { useDispatch } from 'react-redux';
import { Title } from '../../styles/theme';
import { setBudget } from '../../actions';
import { budgetValidationSchema } from '../../schema/validation';
import CurrencyField from '../CurrencyField/CurrencyField';
import { useTranslation } from 'react-i18next';

const initialValues = {
	budget: '',
};

const SetBudgetForm = () => {
	const { t } = useTranslation();
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
			<Title variant='h5'> {t('setBudget')}</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={budgetValidationSchema}
				onSubmit={onSubmit}>
				{() => (
					<Form>
						<CurrencyField name='budget' label={t('budget')} />
						<Button variant='contained' color='primary' fullWidth type='submit'>
							{t('setBudget')}
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default SetBudgetForm;

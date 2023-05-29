import { Button } from '@mui/material';
import { Formik, Form, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { Title } from '../../styles/theme';

import { budgetValidationSchema } from '../../schema/validation';
import CurrencyField from '../common/CurrencyField/CurrencyField';
import { useTranslation } from 'react-i18next';
import { setBudget } from '../../redux/actions';

const initialValues = {
	budget: '',
};

const onSubmit = (
	values: typeof initialValues,
	{ resetForm }: FormikHelpers<typeof initialValues>,
	dispatch: ReturnType<typeof useDispatch>,
) => {
	dispatch(setBudget(Number(values.budget)));
	resetForm();
};

const SetBudgetForm = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	return (
		<>
			<Title variant='h5'>{t('setBudget')}</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={budgetValidationSchema}
				onSubmit={(values, formikHelpers) =>
					onSubmit(values, formikHelpers, dispatch)
				}>
				<Form>
					<CurrencyField name='budget' label={t('budget')} />

					<Button variant='contained' color='primary' fullWidth type='submit'>
						{t('setBudget')}
					</Button>
				</Form>
			</Formik>
		</>
	);
};

export default SetBudgetForm;

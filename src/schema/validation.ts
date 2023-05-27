import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
	username: Yup.string().required('Required'),
	password: Yup.string().required('Required'),
});

export const recordValidationSchema = Yup.object({
	date: Yup.string().required('Required'),
	info: Yup.string().required('Required'),
	value: Yup.number().required('Required'),
	type: Yup.string().oneOf(['income', 'expense']).required('Required'),
});

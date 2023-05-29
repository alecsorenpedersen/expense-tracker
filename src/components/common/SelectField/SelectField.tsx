import { MenuItem, TextField } from '@mui/material';
import { useField } from 'formik';
import { SelectFieldProps } from '../../../types';

const SelectField = ({ name, label, items }: SelectFieldProps) => {
	const [field, meta] = useField(name);

	return (
		<TextField
			select
			fullWidth
			name={name}
			label={label}
			variant='outlined'
			margin='normal'
			value={field.value}
			onChange={field.onChange}
			error={meta.touched && !!meta.error}
			helperText={meta.touched ? meta.error : ''}
			aria-label={`${label}-input`}>
			{items.map((item) => (
				<MenuItem key={item.value} value={item.value}>
					{item.label}
				</MenuItem>
			))}
		</TextField>
	);
};

export default SelectField;

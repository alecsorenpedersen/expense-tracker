import { MenuItem } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';

interface SelectFieldProps {
	name: string;
	label: string;
	items: { value: string; label: string }[];
}

const SelectField = ({ name, label, items }: SelectFieldProps) => (
	<Field
		component={TextField}
		select
		fullWidth
		name={name}
		label={label}
		variant='outlined'
		margin='normal'>
		{items.map((item: any) => (
			<MenuItem value={item.value} key={item.value}>
				{item.label}
			</MenuItem>
		))}
	</Field>
);

export default SelectField;

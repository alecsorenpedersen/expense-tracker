import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { AddRecordAction } from '../../actions';
import useDashboard from '../../hooks/useForm';
import { Title } from '../../styles/theme';
import Card from '../Card/CardWrapper';

const ExpenseList = () => {
	const { records } = useDashboard();

	return (
		<Card>
			<Title variant='h5'>Records</Title>
			<List>
				{records.map((record: AddRecordAction['payload'], index: number) => (
					<ListItem key={index}>
						<ListItemText
							primary={
								<>
									<Typography
										component='span'
										style={{
											color: record.type === 'income' ? 'green' : 'red',
										}}>
										{`${record.date} - ${record.info} - ${record.type} - ${record.value}-${record.category}`}
									</Typography>
								</>
							}
						/>
					</ListItem>
				))}
			</List>
		</Card>
	);
};

export default ExpenseList;

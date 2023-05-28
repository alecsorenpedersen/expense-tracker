import { useState } from 'react';
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TextField,
} from '@mui/material';
import { AddRecordAction } from '../../actions';
import useDashboard from '../../hooks/useForm';
import { Title } from '../../styles/theme';
import Card from '../Card/CardWrapper';
import RecordDetailDialog from './ListModel';
import { formatCurrency, formatDate } from '../../utils/utils';

const columns = [
	{ id: 'date', label: 'Date', minWidth: 50, align: 'left' },
	{ id: 'info', label: 'Info', minWidth: 100, align: 'left' },
	{ id: 'value', label: 'Value', minWidth: 50, align: 'left' },
];

const ExpenseList = () => {
	const { records } = useDashboard();
	const [open, setOpen] = useState(false);
	const [currentRecord, setCurrentRecord] = useState<
		AddRecordAction['payload'] | null
	>(null);

	const handleClickOpen = (record: AddRecordAction['payload']) => {
		setCurrentRecord(record);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Card>
			<Title variant='h5'>Records</Title>
			<TableContainer>
				<Table>
					<TableHead>
						<Title>Click items for more info</Title>
						<TableRow>
							{columns.map((columns) => (
								<TableCell
									key={columns.id}
									style={{
										alignItems: 'center',
									}}>
									{columns.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{records.map((record: any, index: any) => (
							<TableRow
								key={index}
								sx={{
									'&:last-child td, &:last-child th': { border: 0 },
									backgroundColor:
										record.type === 'income' ? '#33dd5e' : '#DD3333',
									color: 'white',
									cursor: 'pointer',
									wordBreak: 'break-word',
								}}
								onClick={() => handleClickOpen(record)}>
								{columns.map((column) => (
									<TableCell key={column.id}>
										<span style={{ color: 'white' }}>
											{column.id === 'value'
												? formatCurrency(record[column.id])
												: column.id === 'date'
												? formatDate(record[column.id])
												: record[column.id]}
										</span>
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<RecordDetailDialog
				open={open}
				record={currentRecord}
				onClose={handleClose}
			/>
		</Card>
	);
};

export default ExpenseList;

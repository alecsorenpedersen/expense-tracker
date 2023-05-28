import { useState } from 'react';
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
} from '@mui/material';
import { AddRecordAction } from '../../actions';
import useDashboard from '../../hooks/useForm';
import { Title } from '../../styles/theme';
import Card from '../Card/CardWrapper';
import RecordDetailDialog from './ListModel';

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
									backgroundColor: record.type === 'income' ? 'green' : 'red',
									color: 'white',
									cursor: 'pointer',
									wordBreak: 'break-word',
								}}
								onClick={() => handleClickOpen(record)}>
								{columns.map((column) => (
									<TableCell key={column.id}>{record[column.id]}</TableCell>
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

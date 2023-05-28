import { useState } from 'react';
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Button,
} from '@mui/material';
import { AddRecordAction } from '../../actions';
import useDashboard from '../../hooks/useForm';
import { Title } from '../../styles/theme';
import Card from '../Card/CardWrapper';
import RecordDetailDialog from './ListModel';
import { formatCurrency, formatDate } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// Detail fields for each record
const detailFields = [
	{ field: 'date', displayName: 'Date' },
	{ field: 'info', displayName: 'Information' },
	{ field: 'type', displayName: 'Type' },
	{ field: 'value', displayName: 'Value' },
	{ field: 'category', displayName: 'Category' },
];

const ExpenseList = () => {
	const { t } = useTranslation();
	const { records } = useDashboard();
	const [open, setOpen] = useState(false);
	const [currentRecord, setCurrentRecord] = useState<
		AddRecordAction['payload'] | null
	>(null);

	const columns = [
		{ id: 'date', label: t('date'), minWidth: 50, align: 'left' },
		{ id: 'info', label: t('info'), minWidth: 100, align: 'left' },
		{ id: 'value', label: t('amount'), minWidth: 50, align: 'left' },
	];

	const handleClickOpen = (record: AddRecordAction['payload']) => {
		setCurrentRecord(record);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const exportToExcel = () => {
		const dataToDownload = records.map((record: any) => {
			const updatedRecord = { ...record };
			detailFields.forEach(({ field }) => {
				updatedRecord[field] =
					record[field as keyof AddRecordAction['payload']];
			});
			return updatedRecord;
		});

		const wb = XLSX.utils.book_new();
		const ws = XLSX.utils.json_to_sheet(dataToDownload);
		XLSX.utils.book_append_sheet(wb, ws, 'Records');
		const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
		saveAs(new Blob([buf]), 'records.xlsx');
	};

	return (
		<Card>
			<Title variant='h5'>{t('transactions')}</Title>
			<Button onClick={exportToExcel}>Export to Excel</Button>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell colSpan={columns.length}>
								<Title>{t('moreInfo')}</Title>
							</TableCell>
						</TableRow>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column.id} style={{ alignItems: 'center' }}>
									{column.label}
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

import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Button,
	styled,
	CardContent,
	Card,
} from '@mui/material';
import { Title } from '../../styles/theme';
import RecordDetailDialog from './ListModel';
import useExpenseList from '../../hooks/useTrasactionList';
import { useTranslation } from 'react-i18next';
import { formatCurrency, formatDate } from '../../utils/utils';
import useDashboard from '../../hooks/useForm';

const StyledTableCell = styled(TableCell)`
	cursor: pointer;
	word-break: break-word;
`;

const ExpenseRow = styled(TableRow)`
	background-color: #dd3333;
`;

const IncomeRow = styled(TableRow)`
	background-color: #33dd5e;
`;

const ExpenseList = () => {
	const { t } = useTranslation();
	const { records } = useDashboard();

	const {
		open,
		currentRecord,
		columns,
		handleClickOpen,
		handleClose,
		exportToExcel,
	} = useExpenseList();
	return (
		<Card data-testid='expense-list'>
			<CardContent>
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
			</CardContent>
		</Card>
	);
};

export default ExpenseList;

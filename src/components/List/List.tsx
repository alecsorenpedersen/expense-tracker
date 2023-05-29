import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Button,
	styled,
} from '@mui/material';
import { Title } from '../../styles/theme';
import Card from '../common/Card/CardWrapper';
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
			<Title variant='h5'>{t('transactions')}</Title>
			<Button onClick={exportToExcel}>Export to Excel</Button>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell colSpan={columns.length}>
								<Title>{t('moreInfo')}</Title>
							</StyledTableCell>
						</TableRow>
						<TableRow>
							{columns.map((column) => (
								<StyledTableCell key={column.id}>
									{column.label}
								</StyledTableCell>
							))}
						</TableRow>
					</TableHead>

					<TableBody>
						{records.map((record: any, index: any) => {
							const Row = record.type === 'income' ? IncomeRow : ExpenseRow;

							return (
								<Row
									key={record.id || index}
									onClick={() => handleClickOpen(record)}>
									{columns.map((column) => (
										<StyledTableCell key={column.id}>
											{column.id === 'value'
												? formatCurrency(record[column.id])
												: column.id === 'date'
												? formatDate(record[column.id])
												: record[column.id]}
										</StyledTableCell>
									))}
								</Row>
							);
						})}
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

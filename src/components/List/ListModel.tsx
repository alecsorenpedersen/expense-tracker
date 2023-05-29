import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
} from '@mui/material';
import { AddRecordAction } from '../../redux/actions';
import { formatCurrency } from '../../utils/utils';
import { RecordDetailDialogProps } from '../../types';
import { useTranslation } from 'react-i18next';

const RecordDetailDialog = ({
	open,
	record,
	onClose,
}: RecordDetailDialogProps) => {
	const { t } = useTranslation();

	const detailFields = [
		{ field: 'date', displayName: t('date') },
		{ field: 'info', displayName: t('info') },
		{ field: 'type', displayName: t('type') },
		{ field: 'value', displayName: t('amount') },
		{ field: 'category', displayName: t('category') },
	];

	return (
		<Dialog open={open} onClose={onClose} data-testid='record-detail-dialog'>
			<DialogTitle>{t('transactionDetails')}</DialogTitle>
			<DialogContent>
				{record &&
					detailFields.map(({ field, displayName }) => (
						<DialogContentText key={field}>
							<Typography variant='body1' color='textPrimary' component='span'>
								<strong>{displayName}:</strong>{' '}
								{field === 'value'
									? formatCurrency(
											record[
												field as keyof AddRecordAction['payload']
											] as number,
									  )
									: record[field as keyof AddRecordAction['payload']]}
							</Typography>
						</DialogContentText>
					))}
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>{t('close')}</Button>
			</DialogActions>
		</Dialog>
	);
};

export default RecordDetailDialog;

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
} from '@mui/material';
import { AddRecordAction } from '../../actions';
import { formatCurrency } from '../../utils/utils';
import { RecordDetailDialogProps } from '../../types';
import { t } from 'i18next';

const detailFields = [
	{ field: 'date', displayName: t('date') },
	{ field: 'info', displayName: t('info') },
	{ field: 'type', displayName: t('type') },
	{ field: 'value', displayName: t('amount') },
	{ field: 'category', displayName: t('category') },
];

const RecordDetailDialog = ({
	open,
	record,
	onClose,
}: RecordDetailDialogProps) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Record Details</DialogTitle>
			<DialogContent>
				{record &&
					detailFields.map(({ field, displayName }) => (
						<DialogContentText key={field}>
							<Typography variant='body1' color='textPrimary'>
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
				<Button onClick={onClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
};

export default RecordDetailDialog;

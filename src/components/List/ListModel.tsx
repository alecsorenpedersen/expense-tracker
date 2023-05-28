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

interface RecordDetailDialogProps {
	open: boolean;
	record: AddRecordAction['payload'] | null;
	onClose: () => void;
}

const detailFields = [
	{ field: 'date', displayName: 'Date' },
	{ field: 'info', displayName: 'Information' },
	{ field: 'type', displayName: 'Type' },
	{ field: 'value', displayName: 'Value' },
	{ field: 'category', displayName: 'Category' },
];

const RecordDetailDialog: React.FC<RecordDetailDialogProps> = ({
	open,
	record,
	onClose,
}) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Record Details</DialogTitle>
			<DialogContent>
				{record &&
					detailFields.map(({ field, displayName }) => (
						<DialogContentText key={field}>
							<Typography variant='body1' color='textPrimary'>
								<strong>{displayName}:</strong>{' '}
								{record[field as keyof AddRecordAction['payload']]}
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

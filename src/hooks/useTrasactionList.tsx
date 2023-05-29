import { useState } from 'react';
import { AddRecordAction } from '../redux/actions';
import useDashboard from './useForm';
import { useTranslation } from 'react-i18next';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Record } from '../types';
const detailFields = [
	{ field: 'date', displayName: 'Date' },
	{ field: 'info', displayName: 'Information' },
	{ field: 'type', displayName: 'Type' },
	{ field: 'value', displayName: 'Value' },
	{ field: 'category', displayName: 'Category' },
];

const useExpenseList = () => {
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

	const mapRecordsForDownload = (records: Record[]) => {
		return records.map((record) => {
			const updatedRecord: Record = { ...record };
			detailFields.forEach(({ field }) => {
				updatedRecord[field] = record[field as keyof Record];
			});
			return updatedRecord;
		});
	};

	const exportToExcel = () => {
		const dataToDownload = mapRecordsForDownload(records);
		const wb = XLSX.utils.book_new();
		const ws = XLSX.utils.json_to_sheet(dataToDownload);
		XLSX.utils.book_append_sheet(wb, ws, 'Records');
		const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
		saveAs(new Blob([buf]), 'records.xlsx');
	};

	return {
		records,
		open,
		currentRecord,
		columns,
		handleClickOpen,
		handleClose,
		exportToExcel,
	};
};

export default useExpenseList;

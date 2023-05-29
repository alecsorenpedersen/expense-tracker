import { ApexOptions } from 'apexcharts';
import { ReactNode } from 'react';
import { AddRecordAction } from '../redux/actions';

export interface LoginFormProps {
	onSubmit: (values: { username: string; password: string }) => void;
}

export type LayoutProps = {
	children?: ReactNode;
};

export interface FormValues {
	date: string;
	info: string;
	value: string;
	type: 'income' | 'expense';
	category: string;
}

export interface Record {
	date: string;
	info: string;
	value: number;
	type: 'income' | 'expense';
	category: string;
	[key: string]: string | number;
}
export interface RootState {
	records: Record[];
}

export interface CardProps {
	children: ReactNode;
}

export interface CurrencyFieldProps {
	name: string;
	label: string;
}

export type ChartWrapperProps = {
	options: ApexOptions;
	series: any[];
	type: 'bar' | 'line' | 'radialBar' | 'pie';
	title: string;
};

export interface RecordDetailDialogProps {
	open: boolean;
	record: AddRecordAction['payload'] | null;
	onClose: () => void;
}

export interface SelectFieldProps {
	name: string;
	label: string;
	items: { value: string; label: string }[];
}

export interface UseExpenseListResult {
	records: Record[];
	open: boolean;
	currentRecord: AddRecordAction['payload'] | null;
	columns: {
		id: string;
		label: string;
		minWidth: number;
		align: 'left' | 'right';
	}[];
	handleClickOpen: (
		record: AddRecordAction['payload'] & { type: 'expense' | 'income' },
	) => void;
	handleClose: () => void;
	exportToExcel: () => void;
}

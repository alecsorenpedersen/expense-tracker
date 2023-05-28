import { ApexOptions } from 'apexcharts';
import { ReactNode } from 'react';
import { AddRecordAction } from '../actions';

export interface LoginFormProps {
	onSubmit: (values: { username: string; password: string }) => void;
}

export type LayoutProps = {
	children: React.ReactNode;
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
	type: string;
	category: string;
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

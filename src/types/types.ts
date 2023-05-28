import { ReactNode } from 'react';

export interface LoginFormProps {
	onSubmit: (values: { username: string; password: string }) => void;
}

export type LayoutProps = {
	children: React.ReactNode;
};

export interface FormValues {
	date: any;
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

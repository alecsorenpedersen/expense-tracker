export interface LoginFormProps {
	onSubmit: (values: { username: string; password: string }) => void;
}

export type LayoutProps = {
	children: React.ReactNode;
};

export interface LoginFormProps {
	onSubmit: (values: { username: string; password: string }) => void;
}

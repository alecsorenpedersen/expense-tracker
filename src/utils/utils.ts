export function formatCurrency(value: number): string {
	return new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
	}).format(value);
}

export function formatDate(dateString: string) {
	const date = new Date(dateString);
	const year = date.getFullYear().toString().padStart(4, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	return `${day}/${month}/${year}`;
}

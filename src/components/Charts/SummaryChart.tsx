import { useTranslation } from 'react-i18next';
import { useTotalIncome, useTotalExpenses } from '../../hooks/useSelectors';
import { formatCurrency } from '../../utils/utils';
import ChartWrapper from './ChartWrapper';

const SummaryChart = () => {
	const { t } = useTranslation();
	const totalIncome = useTotalIncome();
	const totalExpenses = useTotalExpenses();

	const series = [
		{
			name: 'Summary',
			data: [totalIncome, totalExpenses],
		},
	];

	const options = {
		chart: {
			type: 'bar' as const,
			foreColor: '#333',
			toolbar: {
				show: true,
			},
		},
		plotOptions: {
			bar: {
				horizontal: true,
				colors: {
					ranges: [
						{ from: 0, to: totalIncome, color: '#33dd5e' },
						{ from: totalIncome, to: totalExpenses, color: '#DD3333' },
					],
				},
				dataLabels: {
					position: 'top',
					formatter: (value: number) => formatCurrency(value),
				},
			},
		},
		xaxis: {
			categories: [t('income'), t('expense')],
			labels: {
				formatter: (value: string) => formatCurrency(Number(value)),
			},
		},
		tooltip: {
			y: {
				formatter: (value: number) => formatCurrency(value),
			},
		},
		grid: {
			borderColor: '#f6f6f6',
			row: {
				colors: ['white', 'transparent'],
			},
		},
	};

	return (
		<ChartWrapper
			options={options}
			series={series}
			type='bar'
			title={t('summary')}
			data-testid='summary-chart'
		/>
	);
};

export default SummaryChart;

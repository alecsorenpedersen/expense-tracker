import { PieChart, Pie, Cell } from 'recharts';
import useForm from '../../hooks/useForm';
import { COLORS, generateChartData } from './chartData';
import Card from '../Card/CardWrapper';

const PieChartComponent = () => {
	const { records } = useForm();
	const data = generateChartData(records);

	return (
		<Card>
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					cx={200}
					cy={200}
					labelLine={false}
					outerRadius={80}
					fill='#8884d8'
					dataKey='value'>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</Card>
	);
};

export default PieChartComponent;

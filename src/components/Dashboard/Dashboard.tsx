import { Grid } from '@mui/material';
import EntryForm from '../Form/Form';
import ExpenseList from '../List/List';
import PieChartComponent from '../Charts/PieChart';

const Dashboard = () => {
	return (
		<Grid container spacing={2} style={{ padding: '20px' }}>
			<Grid item xs={12} md={4}>
				<EntryForm />
			</Grid>
			<Grid item xs={12} md={4}>
				<ExpenseList />
			</Grid>
			<Grid item xs={12} md={4}>
				<PieChartComponent />
			</Grid>
		</Grid>
	);
};

export default Dashboard;

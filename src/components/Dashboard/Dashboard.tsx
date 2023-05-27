import { Grid } from '@mui/material';
import EntryForm from '../Form/Form';
import ExpenseList from '../List/List';
import PieChartComponent from '../Charts/PieChart';
import Layout from '../../layout/Layout';

const Dashboard = () => {
	return (
		<Layout>
			<Grid container spacing={2} style={{ padding: '20px' }}>
				<Grid item xs={12} md={3}>
					<EntryForm />
				</Grid>
				<Grid item xs={12} md={3}>
					<ExpenseList />
				</Grid>
				<Grid item xs={12} md={3}>
					<PieChartComponent />
				</Grid>
				<Grid item xs={12} md={3}>
					<PieChartComponent />
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Dashboard;

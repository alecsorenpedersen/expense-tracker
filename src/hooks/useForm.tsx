import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const useForm = () => {
	const records = useSelector((state: RootState) => state.records);

	return {
		records,
	};
};

export default useForm;

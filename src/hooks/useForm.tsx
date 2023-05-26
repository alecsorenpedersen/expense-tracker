import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

const useForm = () => {
	const records = useSelector((state: RootState) => state.records);

	return {
		records,
	};
};

export default useForm;

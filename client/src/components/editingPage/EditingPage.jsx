import { useForm } from 'react-hook-form';
import {
	StyledCheckbox,
	StyledInputContainer,
	StyledLabel
} from './editingPage.styles';

const EditingPage = ({ user, setUser, setEditingPage, userId }) => {
	const { register } = useForm({
		defaultValues: {
			fullName: user.fullName,
			email: user.email,
			dateOfBirth: user.dateOfBirth,
			phoneNumber: user.phoneNumber,
			active: user.active
		}
	});
	return (
		<form>
			<StyledInputContainer>
				<StyledLabel>
					<StyledCheckbox type='checkbox' {...register('active')} />
					Active
				</StyledLabel>
			</StyledInputContainer>
		</form>
	);
};
export default EditingPage;

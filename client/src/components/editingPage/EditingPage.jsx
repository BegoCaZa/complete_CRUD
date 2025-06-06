import { useForm } from 'react-hook-form';
import {
	StyledButtonContainer,
	StyledCancelButton,
	StyledCheckbox,
	StyledErrorMessage,
	StyledForm,
	StyledInput,
	StyledInputContainer,
	StyledLabel,
	StyledSaveButton
} from './editingPage.styles';
import { FORM_VALIDATIONS } from '../../constants/form_validation';
import { updateDataById } from '../../lib/utils/api';

const EditingPage = ({ user, setUser, setEditingPage, userId }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			fullName: user.fullName,
			email: user.email,
			dateOfBirth: user.dateOfBirth,
			phoneNumber: user.phoneNumber,
			active: user.active
		}
	});

	//aqui valido y espero la info
	const onSubmit = async data => {
		const updatedUser = await updateDataById(userId, data); //le mando esta info
		setUser(updatedUser);
		setEditingPage(false); //cierra el editor
		console.log(updatedUser);
		//guarda pero no actualiza el api
	};

	const handleCancel = () => {
		setEditingPage(false);
		//regresa
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<StyledInputContainer>
				<StyledLabel>
					<StyledCheckbox type='checkbox' {...register('active')} />
					Active
				</StyledLabel>
			</StyledInputContainer>

			<StyledInputContainer>
				<StyledLabel>Name</StyledLabel>
				<StyledInput
					type='text'
					{...register('fullName', FORM_VALIDATIONS.FULL_NAME)}
				/>
				{errors.fullName && (
					<StyledErrorMessage>{errors.fullName.message}</StyledErrorMessage>
				)}
			</StyledInputContainer>

			<StyledInputContainer>
				<StyledLabel>Email</StyledLabel>
				<StyledInput
					type='text'
					{...register('email', FORM_VALIDATIONS.EMAIL)}
				/>
				{errors.email && (
					<StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
				)}
			</StyledInputContainer>

			<StyledInputContainer>
				<StyledLabel>Date of Birth</StyledLabel>
				<StyledInput
					type='date'
					{...register('dateOfBirth', FORM_VALIDATIONS.DATE_OF_BIRTH)}
				/>
				{errors.dateOfBirth && (
					<StyledErrorMessage>{errors.dateOfBirth.message}</StyledErrorMessage>
				)}
			</StyledInputContainer>

			<StyledInputContainer>
				<StyledLabel>Phone</StyledLabel>
				<StyledInput
					type='text'
					{...register('phoneNumber', FORM_VALIDATIONS.PHONE_NUMBER)}
				/>
				{errors.phoneNumber && (
					<StyledErrorMessage>{errors.phoneNumber.message}</StyledErrorMessage>
				)}
			</StyledInputContainer>

			<StyledButtonContainer>
				<StyledSaveButton type='submit'>SAVE USER</StyledSaveButton>
				<StyledCancelButton type='button' onClick={handleCancel}>
					CANCEL
				</StyledCancelButton>
			</StyledButtonContainer>
		</StyledForm>
	);
};
export default EditingPage;

import { useMutation } from '@apollo/client';
import React from 'react';
import CREATE_USER from '../graphql/mutations/createUser.mutation';
import { IFormInput } from '../interface/IFormInput';
import { formInputs } from "../JSON/formInputs";
  import {toast } from 'react-toastify';

const UserRegisterForm = () => {
	const [createUser, { data, loading, error }] = useMutation<any>(CREATE_USER);

	const [formData, setFormData] = React.useState<any>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password) {
			toast.error('All fields are required');
			return;
		} else if (formData.password !== formData.confirmPassword) {
			toast.error('Passwords do not match');
			return;
		}

		const formDataCopy = { ...formData };
		delete formDataCopy.confirmPassword;

		createUser({
			variables: {
				user: formDataCopy,
			},
		});
		
	};

	React.useEffect(() => {
		if (data) {
			toast.success('User created successfully');
		} else if (error) {
			toast.error(error.message);
		}
	}, [data, error]);

	return (
		<form onSubmit={handleSubmit}>
			{formInputs.map((input: IFormInput,index:number) => {
				return (
					<div className='form-group mb-4' key={index}>
						<label htmlFor={input.name} className='mb-3'>
							{input.label}
						</label>
						<input
							className='form-control'
							placeholder='Enter name'
							type={input.type}
							id={input.name}
							name={input.name}
							value={formData[input.name]}
							onChange={(e) => {
								setFormData({
									...formData,
									[input.name]: e.target.value,
								});
							}}
						/>
					</div>
				);
			})}
            <button className='btn bg-dark text-white w-100 py-2 mt-4 btn-block' type='submit'  disabled={loading}>
				{
					loading ? 'Loading...' : 'Submit'
				}
				</button>
		</form>
	);
};

export default UserRegisterForm;

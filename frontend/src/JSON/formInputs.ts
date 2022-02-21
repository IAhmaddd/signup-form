import {IFormInput} from "../interface/IFormInput";

export const formInputs: IFormInput[] = [
	{
		name: 'firstName',
		label: 'First Name',
		type: 'text',
	},
	{
		name: 'lastName',
		label: 'Last Name',
		type: 'text',
	},
	{
		name: 'email',
		label: 'Email',
		type: 'email',
	},
	{
		name: 'phone',
		label: 'Phone',
		type: 'number',
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
	},
	{
		name: 'confirmPassword',
		label: 'Confirm Password',
		type: 'password',
	},
];

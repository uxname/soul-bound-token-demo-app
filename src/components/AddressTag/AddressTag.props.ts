import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface AddressTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'l';
	address: string;
}

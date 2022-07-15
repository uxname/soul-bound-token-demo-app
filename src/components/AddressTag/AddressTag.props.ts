import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface AddressTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'l';
	children: ReactNode;
}

import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface MyAccountProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}

import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	color?: 'white' | 'black';
	children: ReactNode;
}

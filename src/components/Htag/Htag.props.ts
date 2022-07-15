import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	children: ReactNode;
}

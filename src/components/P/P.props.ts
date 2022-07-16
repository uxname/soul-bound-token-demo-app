import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
    weight?: 'thin' | 'normal' | 'bold';
    children: ReactNode;
}

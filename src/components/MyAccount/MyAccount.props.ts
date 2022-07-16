import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface MyAccountProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    address: string;
}

import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface SlideTabProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean;
}


import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface SlideTabProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean;
    data: INftData | undefined;
}

interface INftData {
    address: string,
    image: string,
    creator_name: string,
    name: string,
    description: string,
    attributes: IAttributes[]
}

interface IAttributes {
    key: string,
    value: string
}


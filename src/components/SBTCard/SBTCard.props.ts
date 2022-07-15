import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface SBTCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image: string;
    address: string;
    ownerIcon: string;
    ownerAddress: string;
}

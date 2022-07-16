import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

export interface InputProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
}

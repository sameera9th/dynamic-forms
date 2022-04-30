import React from 'react';
import { TextField, OutlinedTextFieldProps } from '@mui/material';

interface InputProps extends OutlinedTextFieldProps {
    error: boolean,
    value: string
}

export const Input = ({
    error,
    value,
    ...rest
}: InputProps) => {
    return (
        <TextField
            error={error}
            value={value}
            {...rest}
        />
    );
};
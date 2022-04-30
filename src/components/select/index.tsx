import React from 'react';
import { InputLabel, Select, MenuItem, FormControl, SelectProps } from '@mui/material';

interface DropdownProps extends SelectProps {
    value: string,
    label?: string,
    items: string[]
}

export const Dropdown = ({
    label,
    value,
    items,
    ...rest
}: DropdownProps) => {
    return (
        <FormControl variant="standard">
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={value}
                label={label}
                {...rest}
            >
                {
                    items.map((item) => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};
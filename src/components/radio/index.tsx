import React from 'react';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, RadioProps } from '@mui/material';

interface RadioButtonProps extends RadioProps {
    label?: string
    items: string[]
}

export const RadioButton = ({
    label,
    items
}: RadioButtonProps) => {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                {items.map((item) => (
                    <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                ))}
            </RadioGroup>
        </FormControl>
    );
};
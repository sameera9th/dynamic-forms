import React, { useEffect, memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Typography, Button, Box, InputLabel, Select, Stack, MenuItem, TextField, Alert, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';
import { ReduxStateTypes } from '../../redux/reducers/index';
import { fetchFormFields, hanldeFormFields, handleJSONVisibility } from '../../redux/actions';
import { ActionType } from '../../redux/types';
import { Fields } from '../../interfaces/fields';

const Home = memo(() => {

    const disptach = useDispatch();
    const {
        data,
        error,
        fetching,
        fieldsJSON,
        JSONVisibility
    } = useSelector((state: ReduxStateTypes) => state.formFields);

    useEffect(() => {
        disptach(fetchFormFields());
    }, []);

    const renderFormElements = (elements: Fields[]) => {

        return elements.map((item: Fields, index) => {
            if (item.type === 'email' || item.type === 'telephone') {
                return (
                    <Box mb={2}>
                        <TextField
                            error={!fieldsJSON[item.label as string].isValid}
                            key={index}
                            required={!item.isOptional}
                            label={item.label}
                            defaultValue={item.default}
                            hidden={item.isHidden}
                            type={item.type}
                            value={fieldsJSON[item.label as string].value}
                            onChange={(e) => {
                                disptach(hanldeFormFields({
                                    type: item.type === 'email' ? ActionType.HANDLE_EMAIL : ActionType.HANDLE_TELEPHONE,
                                    label: item.label!,
                                    value: e.target.value
                                }));
                            }}
                        />
                    </Box>
                )
            } else if (item.type === 'radio') {
                return (
                    <Box mb={2}>
                        <FormControl key={index}>
                            <FormLabel id="demo-radio-buttons-group-label">{item.label}</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={item.default}
                                name="radio-buttons-group"
                                onChange={(e) => {
                                    disptach(hanldeFormFields({
                                        type: ActionType.HANDLE_RADIO,
                                        label: item.label!,
                                        value: e.target.value
                                    }));
                                }}
                            >
                                {item.value && Array.isArray(item.value) && item.value.map((item) => (
                                    <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Box>
                )
            } else if (item.type === 'select') {
                return (
                    <Box mb={2} >
                        <FormControl variant="standard" key={index}>
                            <InputLabel id="demo-simple-select-label">{item.label}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={fieldsJSON[item.label as string].value}
                                label={fieldsJSON[item.label as string].value || item.default}
                                onChange={(e) => {
                                    disptach(hanldeFormFields({
                                        type: ActionType.HANDLE_SELECT,
                                        label: item.label!,
                                        value: e.target.value
                                    }));
                                }}
                            >
                                {
                                    item.value && Array.isArray(item.value) && item.value.map((item) => (
                                        <MenuItem key={item} value={item}>{item}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                )
            }
        })
    }

    return (
        <React.Fragment>
            {error && <Box my={4}><Alert severity="error">{error}</Alert></Box>}
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h5" component="h5" align='center'>
                        Form Fields
                    </Typography>
                    <Stack
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch', mt: 2 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {renderFormElements(data)}
                        <Button variant="outlined"
                            onClick={() => {
                                disptach(handleJSONVisibility(!JSONVisibility));
                            }}
                        >Submit</Button>
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h5" component="h5" align='center'>
                        JSON Output
                    </Typography>
                    {JSONVisibility && <Box ml={10} mt={2}>
                        <pre id="json">
                            {JSON.stringify(fieldsJSON, undefined, 2)}
                        </pre>
                    </Box>}
                </Grid>
            </Grid>

        </React.Fragment>
    );
});

export default Home;
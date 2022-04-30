import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from '../../styles/home.styles';
import { Grid, Typography, Button, Box, Stack, Alert, CircularProgress } from '@mui/material';
import { ReduxStateTypes } from '../../redux/reducers/index';
import { fetchFormFields, hanldeFormFields, handleJSONVisibility } from '../../redux/actions';
import { ActionType } from '../../redux/types';
import { Fields } from '../../interfaces/fields';
import { Dropdown, Input, RadioButton } from '../../components';
import { lans } from '../../utils/vars'

const Home = memo(() => {

    const disptach = useDispatch();
    const classes = useStyles();
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

    const renderInputField = (item: Fields, key: string | number) => {
        return (
            <Box mb={2}>
                <Input
                    variant='outlined'
                    error={!fieldsJSON[item.label as string].isValid}
                    key={key}
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
    }

    const renderRadioField = (item: Fields, key: string | number) => {
        return (
            <Box mb={2}>
                <RadioButton
                    key={key}
                    label={item.label}
                    defaultValue={item.default}
                    onChange={(e) => {
                        disptach(hanldeFormFields({
                            type: ActionType.HANDLE_RADIO,
                            label: item.label!,
                            value: e.target.value
                        }));
                    }}
                    items={item.value && Array.isArray(item.value) ? item.value : []}
                />
            </Box>
        )
    }

    const renderDropdownField = (item: Fields, key: string | number) => {
        return (
            <Box mb={2} >
                <Dropdown
                    key={key}
                    label={item.label || item.default}
                    value={fieldsJSON[item.label as string].value}
                    onChange={(e) => {
                        disptach(hanldeFormFields({
                            type: ActionType.HANDLE_SELECT,
                            label: item.label!,
                            value: e.target.value as string
                        }));
                    }}
                    items={item.value && Array.isArray(item.value) ? item.value : []}
                />
            </Box>
        )
    }

    const renderFormElements = (elements: Fields[]) => {
        return elements.map((item: Fields, index) => {
            switch (item.type) {
                case "email":
                case "telephone":
                    return renderInputField(item, index);
                case "radio":
                    return renderRadioField(item, index);
                case "select":
                    return renderDropdownField(item, index);
                default:
                    return (<></>)
            }
        })
    }

    const loader = () => {
        return (
            <Box className={classes.loader}>
                <CircularProgress />
                <Typography>
                    {lans.loading}
                </Typography>
            </Box>
        )
    }

    return (
        <React.Fragment>
            {fetching && loader()}
            {!fetching && error && <Box my={4}><Alert severity="error">{error}</Alert></Box>}
            {!fetching && !error && <Grid container>
                <Grid item md={6}>
                    <Typography variant="h5" component="h5" align='center'>
                        {lans.section_title1}
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
                        >{lans.submit_btn_text} ({`${JSONVisibility? "Hide" : "Show"}`})</Button>
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h5" component="h5" align='center'>
                        {lans.section_title2}
                    </Typography>
                    {JSONVisibility && <Box ml={10} mt={2}>
                        <pre id="json">
                            {JSON.stringify(fieldsJSON, undefined, 2)}
                        </pre>
                    </Box>}
                </Grid>
            </Grid>}

        </React.Fragment>
    );
});

export default Home;
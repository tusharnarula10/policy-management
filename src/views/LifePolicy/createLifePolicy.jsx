import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Moment from '@date-io/moment';

export default function CreateLifePolicy() {

    return (
        <>
            <Paper>
                <TextField
                    label='Name of Policy Holder'
                />

                <MuiPickersUtilsProvider utils={Moment}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date of Commencement"
                        format="MM/dd/yyyy"
                        //value={selectedDate}
                        //onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField
                    label='Plan/ Term'
                />
                <InputLabel id="demo-simple-select-helper-label">Payment Mode</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                // value={age}
                // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <TextField
                    label='Installment Premium'
                    type='number'
                />
                <TextField
                    label='GST'
                    type='number'
                />
                <TextField
                    label='Total Premium'
                    type='number'
                    value='30'
                    disabled
                />
                <TextField
                    label='Policy Copy'
                    type='file'
                />
                <Button color='primary' label='Save'>Save</Button>
            </Paper>
        </>
    );
}

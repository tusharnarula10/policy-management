import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Moment from "@date-io/moment";

export default function CreateLifePolicy() {
  return (
    <>
      <Paper className="outerPaper">
        <TextField className="nameInput" label="Name of Policy Holder" />

        <MuiPickersUtilsProvider utils={Moment}>
          <KeyboardDatePicker
            margin="normal"
            className="datePicker"
            id="date-picker-dialog"
            label="Date of Commencement"
            format="MM/dd/yyyy"
            //value={selectedDate}
            //onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField label="Plan/ Term" className="planInput" />
        <InputLabel id="demo-simple-select-helper-label">
          Payment Mode
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          className="paymentModeSelect"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <TextField
          className="installmentPremiumInput"
          label="Installment Premium"
          type="number"
        />
        <TextField className="gstInput" label="GST" type="number" />
        <TextField
          className="totalPremiumOutput"
          label="Total Premium"
          type="number"
          value="30"
          disabled
        />
        <TextField className="fileInput" label="Policy Copy" type="file" />
        <Button className="saveLifePolicyBtn" color="primary" label="Save">
          Save
        </Button>
      </Paper>
    </>
  );
}

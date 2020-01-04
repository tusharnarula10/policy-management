import React from "react";
// @material-ui/core
import styles from "./lifePolicyStyles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  FormControl
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Moment from "@date-io/moment";

const useStyles = makeStyles(styles);

export default function CreateLifePolicy() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.outerPaper}>
        <div className={classes.elementDiv}>
          <Typography variant="h5">
            Create Life Insurance Policy Record
          </Typography>
        </div>
        <div className={classes.elementDiv}>
          <TextField
            className={classes.nameInput}
            label="Name of Policy Holder"
          />
        </div>
        <div className={classes.elementDiv}>
          <TextField
            className={classes.mobileNumber}
            label="Mobile"
            type="number"
          />
        </div>
        <div className={classes.elementDiv}>
          <MuiPickersUtilsProvider utils={Moment}>
            <KeyboardDatePicker
              margin="normal"
              className={classes.datePicker}
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
        </div>
        <div className={classes.elementDiv}>
          <TextField label="Plan/Term" className={classes.planInput} />
        </div>
        <div className={classes.elementDiv}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Payment Mode
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={age}
              // onChange={handleChange}
              // labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.elementDiv}>
          <TextField
            className={classes.installmentPremiumInput}
            label="Installment Premium"
            type="number"
          />
        </div>
        <div className={classes.elementDiv}>
          <TextField className={classes.gstInput} label="GST" type="number" />
        </div>
        <div className={classes.elementDiv}>
          <TextField
            className={classes.totalPremiumOutput}
            label="Total Premium"
            type="number"
            value="30"
            disabled
          />
        </div>
        <div className={classes.elementDiv}>
          <TextField className="fileInput" label="Policy Copy" type="file" />
        </div>
        <div style={{ "text-align": "right" }}>
          <Button
            className={classes.saveLifePolicyBtn}
            color="primary"
            label="Save"
          >
            Save
          </Button>
        </div>
      </Paper>
    </>
  );
}

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
  FormControl,
  Input
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Moment from "@date-io/moment";

const useStyles = makeStyles(styles);

export default function CreateLifePolicy() {
  const classes = useStyles();
  const [customerName, setName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState();
  const [selectedDate, setDate] = React.useState(new Date());
  const [installmentPremium, setInstallmentPremium] = React.useState();
  const [paymentMode, setPaymentMode] = React.useState();
  const [plan, setPlan] = React.useState();
  const [gst, setGst] = React.useState();
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleMobileChange = e => {
    if (e.target.value > 0) {
      setMobileNumber(e.target.value);
    }
  };
  const handleInstallmentPremiumChange = e => {
    if (e.target.value > 0) {
      setInstallmentPremium(e.target.value);
    }
  };
  const handlePaymentModeChange = e => {
    setPaymentMode(e.target.value);
  };
  const handlePlanChange = e => {
    setPlan(e.target.value);
  };

  return (
    <>
      <Paper className={classes.outerPaper}>
        <div>
          <Typography className={classes.paperTitle} align="left" variant="h5">
            Create Life Insurance Policy Record
          </Typography>
        </div>
        <div className={classes.elementDiv}>
          <TextField
            className={classes.nameInput}
            label="Name of Policy Holder"
            value={customerName}
            onChange={handleNameChange}
          />
        </div>
        <div className={classes.elementDiv}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel className={classes.inputLabel}>Mobile</InputLabel>
            <Input
              className={classes.mobileNumber}
              label="Mobile"
              type="number"
              value={mobileNumber}
              onChange={e => setMobileNumber(e.target.value)}
            />
          </FormControl>
        </div>
        <div className={classes.elementDiv}>
          <MuiPickersUtilsProvider utils={Moment}>
            <KeyboardDatePicker
              margin="normal"
              className={classes.datePicker}
              id="date-picker-dialog"
              label="Date of Commencement"
              format="DD/MM/YYYY"
              value={selectedDate}
              onChange={date => setDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className={classes.elementDiv}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Plan/Term</InputLabel>
            <Input
              label="Plan/Term"
              className={classes.planInput}
              value={plan}
              onChange={handlePlanChange}
            />
          </FormControl>
        </div>
        <div className={classes.elementDiv}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Payment Mode
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={paymentMode}
              onChange={handlePaymentModeChange}
            >
              <MenuItem value={10}>Yearly</MenuItem>
              <MenuItem value={20}>Half-Yearly</MenuItem>
              <MenuItem value={30}>Quarterly</MenuItem>
              <MenuItem value={30}>Monthly</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.elementDiv}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Installment Premium
            </InputLabel>
            <Input
              className={classes.installmentPremiumInput}
              label="Installment Premium"
              type="number"
              value={installmentPremium}
              onChange={e => {
                setInstallmentPremium(e.target.value);
              }}
            />
          </FormControl>
        </div>
        <div className={classes.elementDiv}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">GST</InputLabel>
            <Input
              className={classes.gstInput}
              label="GST"
              type="number"
              value={gst}
              onChange={e => {
                setGst(e.target.value);
              }}
            />
          </FormControl>
        </div>
        <div className={classes.elementDiv}>
          <TextField
            className={classes.totalPremiumOutput}
            label="Total Premium"
            type="number"
            value={+gst + +installmentPremium}
            disabled
          />
        </div>
        <div
          style={{ marginLeft: "10vh", marginTop: "3vh" }}
          className={classes.elementDiv}
        >
          <input
            color="primary"
            className="fileInput"
            label="Policy Copy"
            type="file"
            accept=".jpg,.jpeg,.png, .pdf, doc, .docx"
          />
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

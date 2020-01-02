import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import TabContainer from 'components/TabContainer/TabContainer.js';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { TextField, Typography } from "@material-ui/core";

import CreateLifePolicy from './createLifePolicy';

const useStyles = makeStyles(styles);

export default function LifePolicyPage() {
  
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
        setValue(newValue);
      };

  const classes = useStyles();
  return (
    <div>
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Create Policy" />
          <Tab label="Search Policy" />
        </Tabs>

      <SwipeableViews
         axis='x-reverse'
         index={value}
      >
      <TabContainer className={value === 0 ? 'force-show' : 'force-hide'} dir='x-reverse'>
        <CreateLifePolicy /> 
      </TabContainer>
      <TabContainer className={value === 1 ? 'force-show' : 'force-hide'} dir='x-reverse'>
      <Typography>c bsjh</Typography>
      </TabContainer>
        
      </SwipeableViews>
     
    </div>
  );
}

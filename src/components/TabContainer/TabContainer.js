import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
// import {tabContainerStyles} from './TabContainerStyles';

function TabContainer({ children, dir, className }) {
  return (
    <Typography className={className} component="div" dir={dir} >
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TabContainer;
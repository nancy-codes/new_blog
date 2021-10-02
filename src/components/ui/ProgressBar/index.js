import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const ProgressBar = ({ title, percentage }) => (
  <Styled.ProgressBar>
    <Styled.Title>{title}</Styled.Title>
  </Styled.ProgressBar>
);

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default ProgressBar;

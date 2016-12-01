import React, { PropTypes } from 'react';

const Widget = ({ title, unit, wind }) => (
  <li>
    <span>{title}, {unit}, {wind === true ? 'It\'s windy!' : 'It\'s not windy!'}</span>
  </li>
);

Widget.propTypes = {
  title: PropTypes.string,
  unit: PropTypes.string,
  wind: PropTypes.bool,
};

export default Widget;

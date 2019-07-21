import React from 'react';
import PropTypes from 'prop-types';

import './HexagonItem.scss';

export const HexagonItem = (props) => {
  const { icon: IconComponent, headerText, description } = props;

  return (
    <div className="hexagon-item">
      <div id="hex1" className="hexagon-wrapper">
        <div id="color1" className="hexagon">
          <IconComponent className="hexagon-icon" />
        </div>
      </div>
      <div className="hexagon-header">{headerText}</div>
      <div className="hexagon-description">{description}</div>
    </div>
  );
};

HexagonItem.propTypes = {
  icon: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

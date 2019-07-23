import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './HexagonItem.scss';
import useIntersect from '../../../hooks/useIntersect';

export const HexagonItem = (props) => {
  const {
    icon: IconComponent, headerText, description, animationDelay,
  } = props;

  const [hexTextAnimation, setHexTextAnimation] = useState(false);
  const [hexAnimation, setHexAnimation] = useState(false);

  const [hexagonRef, hexagonEntry] = useIntersect({
    rootMargin: '0px 0px -200px 0px',
  });
  const [hexagonTextRef, hexagonTextEntry] = useIntersect({
    rootMargin: '0px 0px -280px 0px',
  });

  useEffect(() => {
    if (hexagonEntry.intersectionRatio === 1) setHexAnimation(true);
    if (hexagonTextEntry.intersectionRatio === 1) setHexTextAnimation(true);
  }, [hexagonTextEntry, hexagonEntry]);

  return (
    <div className="hexagon-item" ref={hexagonRef}>
      <div
        id="hex1"
        style={{ animationDelay }}
        className={`hexagon-wrapper${hexAnimation ? ' flip-in-x' : ''}`}
      >
        <div id="color1" className="hexagon">
          <IconComponent className="hexagon-icon" />
        </div>
      </div>
      <div
        ref={hexagonTextRef}
        style={{ animationDelay }}
        className={`hexagon-text${hexTextAnimation ? ' fade-in' : ''}`}
      >
        <div className="hexagon-header">{headerText}</div>
        <div className="hexagon-description">{description}</div>
      </div>
    </div>
  );
};

HexagonItem.propTypes = {
  icon: PropTypes.func.isRequired,
  animationDelay: PropTypes.string,
  headerText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

HexagonItem.defaultProps = {
  animationDelay: '0.0s',
};

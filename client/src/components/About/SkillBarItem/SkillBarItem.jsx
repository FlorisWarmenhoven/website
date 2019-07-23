import React from 'react';
import './SkillBarItem.scss';
import PropTypes from 'prop-types';

const EXPERIENCE_LEVELS = {
  novice: '45%',
  intermediate: '65%',
  advanced: '85%',
  expert: '100%',
};

export const SkillBarItem = ({ skill, experience, delay }) => (
  <div className="skill-bar-item">
    <div
      className="skill-bar-fill"
      style={{ width: EXPERIENCE_LEVELS[experience], transitionDelay: delay }}
    >
      <div className="skill-text">{skill}</div>
    </div>
    <div className="experience">{experience}</div>
  </div>
);

SkillBarItem.propTypes = {
  skill: PropTypes.string.isRequired,
  experience: PropTypes.oneOf(Object.keys(EXPERIENCE_LEVELS)).isRequired,
  delay: PropTypes.string,
};

SkillBarItem.defaultProps = {
  delay: '0.0s',
};

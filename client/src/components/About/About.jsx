import React from 'react';
import './About.scss';
import { FaRegHeart } from 'react-icons/fa';
import { HexagonItem } from './HexagonItem/HexagonItem';

export const About = () => (
  <div className="about">
    <HexagonItem
      icon={FaRegHeart}
      description="Coding makes my heart beat faster, and I lose track of time"
      headerText="Passionate"
    />
  </div>
);

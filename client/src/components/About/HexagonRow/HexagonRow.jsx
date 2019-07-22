import React from 'react';
import { FaRegHeart, FaFutbol, FaBeer } from 'react-icons/fa';

import { IoMdSchool } from 'react-icons/io';
import { HexagonItem } from '../HexagonItem/HexagonItem';
import './HexagonRow.scss';

export const HexagonRow = () => (
  <div className="hexagon-row">
    <HexagonItem
      icon={FaRegHeart}
      description="Coding makes my heart beat faster, and I lose track of time"
      headerText="Passionate"
    />
    <HexagonItem
      icon={IoMdSchool}
      animationDelay="0.2s"
      description="I love learning new technologies"
      headerText="Fast Learner"
    />
    <HexagonItem
      icon={FaFutbol}
      animationDelay="0.4s"
      description="Colaborating on projects is amazing"
      headerText="Teamplayer"
    />
    <HexagonItem
      icon={FaBeer}
      animationDelay="0.6s"
      description="Going out with colleagues and friends excites me"
      headerText="Sociable"
    />
  </div>
);

import React from 'react';
import { FaRegHeart, FaFutbol, FaClipboardList } from 'react-icons/fa';

import { IoMdSchool } from 'react-icons/io';
import { HexagonItem } from '../HexagonItem/HexagonItem';
import './HexagonRow.scss';

export const HexagonRow = () => (
  <div className="hexagon-row">
    <HexagonItem
      icon={FaRegHeart}
      headerText="Passionate"
      description="Coding makes my heart beat faster"
    />
    <HexagonItem
      icon={IoMdSchool}
      headerText="Fast Learner"
      description="I love learning new technologies"
      animationDelay="0.2s"
    />
    <HexagonItem
      icon={FaFutbol}
      headerText="Teamplayer"
      description="Colaborating on projects is amazing"
      animationDelay="0.4s"
    />
    <HexagonItem
      icon={FaClipboardList}
      headerText="Organized"
      description="Failing to plan is planning to fail"
      animationDelay="0.6s"
    />
  </div>
);

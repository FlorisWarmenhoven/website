import React, { useState, useEffect } from 'react';
import './SkillBarList.scss';
import useIntersect from '../../../hooks/useIntersect';
import { SkillBarItem } from '../SkillBarItem/SkillBarItem';

export const SkillBarList = () => {
  const [skillBarListRef, skillBarListEntry] = useIntersect({
    rootMargin: '0px 0px -200px 0px',
  });

  const [skillBarListAnimation, setSkillBarListAnimation] = useState(false);

  useEffect(() => {
    if (skillBarListEntry.intersectionRatio === 1) setSkillBarListAnimation(true);
  }, [skillBarListEntry]);

  return (
    <div
      className={`skill-bar-list ${skillBarListAnimation ? 'animated fade-in-from-left' : ''}`}
      ref={skillBarListRef}
    >
      <SkillBarItem skill="React" experience="advanced" delay="0.2s" />
      <SkillBarItem skill="Node" experience="intermediate" delay="0.4s" />
      <SkillBarItem skill="SCSS" experience="intermediate" delay="0.6s" />
      <SkillBarItem skill="Docker" experience="novice" delay="0.8s" />
    </div>
  );
};

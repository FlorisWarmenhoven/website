import React, { useEffect, useState } from 'react';
import './About.scss';
import { HexagonRow } from './HexagonRow/HexagonRow';
import useIntersect from '../../hooks/useIntersect';

export const About = () => {
  const [aboutHeaderRef, aboutHeaderEntry] = useIntersect({
    rootMargin: '0px 0px -200px 0px',
  });

  const [aboutHeaderAnimation, setAboutHeaderAnimation] = useState(false);

  useEffect(() => {
    if (aboutHeaderEntry.intersectionRatio === 1) setAboutHeaderAnimation(true);
  }, [aboutHeaderEntry]);

  return (
    <div className="about">
      <div
        className={`about-header${aboutHeaderAnimation ? ' fade-in-from-right' : ''}`}
        ref={aboutHeaderRef}
      >
        ABOUT
      </div>
      <div className={`hr${aboutHeaderAnimation ? ' fade-in-from-right' : ''}`} />
      <HexagonRow />
    </div>
  );
};

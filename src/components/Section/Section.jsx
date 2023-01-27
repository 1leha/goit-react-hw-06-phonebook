import React from 'react';

import { SectionStyled, SectionTitleStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <SectionTitleStyled>{title}</SectionTitleStyled>
      {children}
    </SectionStyled>
  );
};

export default Section;

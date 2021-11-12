import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2018, text: 'Head of Freshers Committee'},
  { number: 4, text: 'Class Representative (2017-2021)', },
  { number: 10, text: 'Enjoy Reading (Books Read)', },
  { number: 3, text: 'Cricket, Calisthenics, Travelling', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements / Interests</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

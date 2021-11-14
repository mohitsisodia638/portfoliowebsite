import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2018, text: 'Year: Head of Freshers Committee'},
  { number: 4, text: 'No. of years: Class Representative', },
  { number: 10, text: 'No. of books read: Enjoy Reading', },
  { number: 3, text: 'Interests: Cricket, Calisthenic, Travelling', }
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

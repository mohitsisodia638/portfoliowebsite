import React from 'react';
//import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";



const Technologies = () =>  (
  <Section id="certificate">
    <SectionDivider divider />
    <SectionTitle>Certifications</SectionTitle>
    <SectionText>
      I've completed various certifications in FINANCE & I.T. domain.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <IoIosCheckmarkCircleOutline size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>NPTEL</ListTitle>
          <ListParagraph>
            Financial Accounting
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <IoIosCheckmarkCircleOutline size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UDEMY & FINLATICS</ListTitle>
          <ListParagraph>
            Financial Analyst <br />
            Financial Market Experience
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <IoIosCheckmarkCircleOutline size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>COURSERA</ListTitle>
          <ListParagraph>
            Financial Markets <br /> Portfolio and Risk Management <br />
            Neural Networks and Deep Learning
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

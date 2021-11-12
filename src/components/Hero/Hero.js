import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Mohit Sisodia <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        About Me <br /> I am a highly competent final year student of NMIMS university with a proven track record. I have strong financial skills as well as excellent interpersonal skills. My greatest passion in life is using my knowledge and abilities for the benefit of the society.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
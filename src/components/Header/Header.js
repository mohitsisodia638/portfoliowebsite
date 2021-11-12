import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#internships">
          <NavLink>Internships</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#certificate">
          <NavLink>Certifications</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#academics">
          <NavLink>Academics</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#achievements">
          <NavLink>Interest</NavLink>
        </Link>
      </li>           */}
    </Div2>
      <Div3>
        <SocialIcons href="https://linkedin.com/in/mohit-sisodia-3aa66919a">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/mohitsisodia638">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/sisodia_mohit/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;

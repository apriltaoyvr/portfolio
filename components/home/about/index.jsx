import Biography from './Biography/index';
import Skills from './Skills/index';
import {StyledMain} from './index.styled';

const About = () => {
  return (
    <StyledMain id='about'>
      <Biography />
      <Skills />
    </StyledMain>
  );
};

export default About;
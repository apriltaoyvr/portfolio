import styled from 'styled-components';
import { motion } from 'framer-motion';

const Circle = styled(motion.div)`
  background: ${(props) => props.background};
  border: 1px solid ${(props) => props.border};

  aspect-ratio: 1;
  min-width: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const ThemeItem = (props) => {
  const setTheme = (palette) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', JSON.stringify(palette));
    }
    props.setTheme(palette);
  };

  return (
    <Circle
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(props.palette)}
      background={props.background}
      border={props.border}
    />
  );
};

export default ThemeItem;

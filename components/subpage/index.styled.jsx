import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledArticle = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  place-content: center;
  place-items: center;
  width: min(80vw, 75%);
  text-align: justify;
`;

export const StyledFooter = styled(motion.footer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledVideo = styled(motion.video)`
  margin-bottom: 1rem;
  width: min(80vw, 75%);
`;

export const Gallery = styled(motion.figure)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 1rem;
`;
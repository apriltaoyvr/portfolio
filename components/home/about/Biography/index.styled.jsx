import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 1200px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ParagraphWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2rem;
  max-width: 40ch;
  text-align: justify;

  @media screen and (min-width: 1200px) {
    grid-column-start: 2;
    margin: 0 1rem;
    max-width: 65ch;
  }
`;

export const CaptionWrapper = styled(motion.figcaption)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 100%;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.25);

  & h6 {
    position: absolute;
    padding: 1rem;
    max-inline-size: 100%;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 1px;
    font-size: 0.9rem;

    @media screen and (max-width: 876px) {
      font-size: 0.8rem;
    }
  }
`;

export const ImageWrapper = styled(motion.figure)`
  border: 1px solid ${({ theme }) => theme.main.accent};
  box-shadow: 7px 7px ${({ theme }) => theme.main.bg},
    7px 7px 0 1px ${({ theme }) => theme.main.accent},
    rgba(0, 0, 0, 0.24) 8px 8px 0 0;

  @media screen and (min-width: 1200px) {
    grid-column-start: 3;
    margin: 0 1rem;
    max-width: 65ch;
  }
`;

export const SkillWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 15.625rem);
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 15.625rem);
  }
`;

export const StyledCard = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.main.accentSecondary};
  padding: 1rem;
  width: 250px;
  text-align: center;
  &:hover {
    border: 1px solid ${({ theme }) => theme.main.accent};
  }
`;

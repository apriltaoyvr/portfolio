import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillWrapper = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(1, 15.625rem);
  gap: 16px;
  justify-content: center;
  padding-left: 0;
  list-style: none;

  @media screen and (min-width: 75rem) {
    grid-template-columns: repeat(3, 15.625rem);
  }
`;

export const StyledCard = styled(motion.li)`
  border: 1px solid ${({ theme }) => theme.main.accentSecondary};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 1rem;
  width: 250px;
  text-align: center;
  text-decoration: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.main.accent};
  }
`;

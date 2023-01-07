import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
const MotionLink = motion(Link);

export const WorkWrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectWrapper = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  padding-top: 2rem;
  max-width: 80%;

  @media screen and (min-width: 1200px) {
    /* Center last child of grid 
       By https://www.billerickson.net/css-grid-center-last-item/ */
    grid-template-columns: repeat(4, 1fr);

    .item {
      grid-column: span 2;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      &:nth-last-child(1):nth-child(odd) {
        grid-column: 2 / span 2;
      }
    }
  }
`;

export const StyledProject = styled(MotionLink)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
import { StyledCard } from './index.styled.jsx';
import { motion } from 'framer-motion';
import { slideItem } from '../../../utility/framer';

const SkillCard = ({ skill, index }) => {
  return (
    <StyledCard
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      variants={slideItem}
    >
      <motion.p>{skill}</motion.p>
    </StyledCard>
  );
};

export default SkillCard;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fadeItem } from '../framer';
import { IconWrapper } from './index.styled';
import { motion } from 'framer-motion';

const IconLink = ({ href, icon, rel, ariaLabel }) => {
  const MotionLink = motion(IconWrapper);
  
  return (
    <MotionLink
      variants={fadeItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      rel={rel}
      aria-label={ariaLabel}
      passHref
    >
      <FontAwesomeIcon icon={icon} size='3x' />
    </MotionLink>
  );
};

export default IconLink;

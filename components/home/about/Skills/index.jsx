import { useTranslation } from 'next-i18next';
import { motion, MotionConfig } from 'framer-motion';
import { slideSubContainer, slideItem } from '../../../utility/framer';

import { SkillWrapper } from './index.styled';
import SkillCard from './SkillCard';

const Skills = () => {
  const { t } = useTranslation('common');

  return (
    <MotionConfig reducedMotion='user'>
      <motion.section
        variants={slideSubContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.h3 variants={slideItem}>{t('skills.title')}</motion.h3>
        <SkillWrapper>
          {t('skills.skillList', { returnObjects: true }).map(
            (skill, index) => (
              <SkillCard key={index} index={index} skill={skill} />
            )
          )}
        </SkillWrapper>
      </motion.section>
    </MotionConfig>
  );
};

export default Skills;

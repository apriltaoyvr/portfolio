import {
  MarqueeLine,
  TextWrapper,
  HollowText,
  SolidText,
} from './index.styled';

/* Remember to use StyledMarquee from index.styled.jsx as a wrapper when imported */
const MarqueeText = ({ speed, text }) => {
  return (
    <MarqueeLine gradient={false} speed={speed} pauseOnHover={true}>
      <TextWrapper>
        <SolidText>{text}</SolidText>
        <HollowText aria-hidden='true'>{text}</HollowText>
        <SolidText aria-hidden='true'>{text}</SolidText>
        <HollowText aria-hidden='true'>{text}</HollowText>
        <SolidText aria-hidden='true'>{text}</SolidText>
        <HollowText aria-hidden='true'>{text}</HollowText>
        <SolidText aria-hidden='true'>{text}</SolidText>
        <HollowText aria-hidden='true'>{text}</HollowText>
      </TextWrapper>
    </MarqueeLine>
  );
};

export default MarqueeText;

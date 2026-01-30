import { GrainGradient, type GrainProps } from '@paper-design/shaders-react';

export default function GrainBackground(props: GrainProps) {
  const defaultProps = {
    width: 1280,
    height: 720,
    colors: ["#ad63f2", "#896ef7", "#d2ebfe", "#9c45a5"],
    colorBack: "black",
    softness: 0.5,
    intensity: 0.5,
    noise: 0.2,
    shape: "corners" as const,
    speed: 1,
    rotation: 0.5,
    style: { width: '100%', height: '100%' },
  };

  return (
    <GrainGradient
      {...defaultProps}
      {...props}
      style={{ ...defaultProps.style, ...props.style }}
    />
  );
}

import styled from 'styled-components';
import { transparentize } from 'polished';

export const NavbarStyled = styled.nav`
  position: sticky;
  top: 0;

  display: flex;
  place-content: center;
  place-items: center;

  width: 100vw;
  min-height: 4.75rem;

  background: ${(props) => transparentize(0.9, props.theme.palette.bg)};
  backdrop-filter: blur(4px);
  border-bottom: 1px solid
    ${(props) => transparentize(0.9, props.theme.palette.fg)};
`
import styled from 'styled-components';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {font} from 'src/utils/specFont';

const H1 = styled.h1`
  ${fontCssGenerator(font.h1)}
  transform: translateX(-0.065em);
`;

export default H1;

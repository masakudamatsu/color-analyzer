import styled from 'styled-components';
import PropTypes from 'prop-types';

import {responsiveBoxSize} from 'src/utils/getLayoutCss';
import {formHex} from 'src/utils/specLayout';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {scale, typescale} from 'src/utils/specFont';

import {color} from 'src/utils/color';
import {mediaQuery} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormHex = styled.form`
  color: ${props => (props.lightMode ? color.fontLightMode : color.font)};
  display: flex;
  flex-direction: column;
  position: relative;
  ${responsiveBoxSize(formHex.diameter, formHex.diameter)}
`;

FormHex.Input = styled(Input)`
  ${fontCssGenerator(typescale.inputMedium)}
  background-color: ${props => props.backgroundColor};
  border-width: ${props => props.lightMode && `0`};
  border-radius: 100%;
  color: inherit;
  height: 100%;
  text-align: center;
  width: 100%;
`;

FormHex.Label = styled(Label)`
  align-self: center;
  color: inherit;
  position: absolute;
  top: ${remify(formHex.whitespace.aboveLabel + 1)};
  @media only screen and ${mediaQuery.font} {
    top: ${remify((formHex.whitespace.aboveLabel + 1) * scale)};
  }
`;

FormHex.propTypes = {
  lightMode: PropTypes.bool,
};
FormHex.Input.propTypes = {
  backgroundColor: PropTypes.string,
  lightMode: PropTypes.bool,
};

export default FormHex;

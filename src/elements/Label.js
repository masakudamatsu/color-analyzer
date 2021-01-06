import styled from 'styled-components';
import PropTypes from 'prop-types';

import {textcrop, typescale} from 'src/utils/typography';

const Label = styled.label`
  ${props => (props.numberLarge ? typescale.large : typescale.small)}
  ${props => (props.numberLarge ? textcrop.large : textcrop.small)}
  color: inherit;
`;

Label.propTypes = {
  numberLarge: PropTypes.bool,
};

export default Label;

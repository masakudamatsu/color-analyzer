import React from 'react';
import PropTypes from 'prop-types';

import FormValues from 'src/blocks/FormValues';

const TextFieldForHsl = ({h, s, l}) => {
  return (
    <FormValues>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="h">H</FormValues.Label>
        <FormValues.InputNumber id="h" value={h} />
      </FormValues.Wrapper>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="s">S</FormValues.Label>
        <FormValues.InputNumber id="s" value={s} />
      </FormValues.Wrapper>
      <FormValues.Wrapper>
        <FormValues.Label htmlFor="l">L</FormValues.Label>
        <FormValues.InputNumber id="l" value={l} />
      </FormValues.Wrapper>
    </FormValues>
  );
};

TextFieldForHsl.propTypes = {
  h: PropTypes.number,
  s: PropTypes.number,
  l: PropTypes.number,
};

export default TextFieldForHsl;

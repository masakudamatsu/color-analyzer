import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormNumberLarge from 'src/blocks/FormNumberLarge';
import Spacer from 'src/elements/Spacer';
import Span from 'src/elements/Span';

const ChromaLuminanceForm = ({type, value}) => {
  const inputId = type === 'chroma' ? 'chroma' : 'luminance';

  const sublabelId =
    type === 'chroma' ? 'chroma-sublabel' : 'luminance-sublabel';

  const helperTextId = type === 'chroma' ? 'chroma-helper' : 'luminance-helper';

  const helperText =
    type === 'chroma' ? (
      <FormNumberLarge.Paragraph id={helperTextId} rightAligned>
        0% for gray <Span dash>–</Span> 100% for pure hue
      </FormNumberLarge.Paragraph>
    ) : (
      <FormNumberLarge.Paragraph id={helperTextId} rightAligned>
        <Span ratio>1:1</Span> for black <Span dash>–</Span>{' '}
        <Span ratio>21:1</Span> for white
      </FormNumberLarge.Paragraph>
    );

  const unit =
    type === 'chroma' ? (
      <FormNumberLarge.Unit>%</FormNumberLarge.Unit>
    ) : (
      <FormNumberLarge.Unit>
        <Span colon>:</Span>1
      </FormNumberLarge.Unit>
    );

  return (
    <FormNumberLarge>
      <FormNumberLarge.Label numberLarge htmlFor={inputId}>
        {type === 'chroma' ? 'Chroma' : 'Luminance'}
      </FormNumberLarge.Label>
      <Spacer height="10px" width="100%" />
      <FormNumberLarge.Paragraph id={sublabelId}>
        {type === 'chroma'
          ? 'Pure hue share in the mix with gray'
          : 'Contrast ratio against pure black'}
      </FormNumberLarge.Paragraph>
      <FormNumberLarge.InnerWrapper>
        <FormNumberLarge.Input
          numberLarge
          aria-describedby={`${sublabelId} ${helperTextId}`}
          id={inputId}
          value={value}
        />
        {unit}
      </FormNumberLarge.InnerWrapper>
      {helperText}
    </FormNumberLarge>
  );
};

ChromaLuminanceForm.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
};

export default ChromaLuminanceForm;

// This code snippet is adapted from https://github.com/kentcdodds/react-hooks/blob/main/src/final/02.extra-3.js
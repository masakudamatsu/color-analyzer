import React from 'react';
import styled from 'styled-components';

import CanvasWrapper from 'src/components/CanvasWrapper';
import ChromaLuminanceForm from 'src/components/ChromaLuminanceForm';
import Cross from 'src/components/Cross';
import Spacer from 'src/elements/Spacer';
import TextFieldForHex from 'src/components/TextFieldForHex';
import TextFieldForHsl from 'src/components/TextFieldForHsl';
import TextFieldForRgb from 'src/components/TextFieldForRgb';
import TextInputForm from 'src/components/TextInputForm';
import colorAnalyzer from 'src/utils/colorAnalyzer';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color
import {regex} from 'src/utils/regex';
import useWindowWidth from 'src/utils/useWindowWidth';

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 310px;
`;

const RgbHslWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  width: 200px;
`;

const ContrastRatioWrapper = styled.div`
  position: relative;
  padding: 40px;
  width: 310px;
`;

const userColorReducer = (state, action) => {
  return {...state, ...action};
};

function HomePage() {
  const windowWidth = useWindowWidth();
  let pixelSize;
  if (windowWidth < 535) {
    pixelSize = 3;
  } else {
    pixelSize = 5;
  } // see https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app for why this style of case handling is best for performance
  console.log(`The pixel size is set to be ${pixelSize}`);

  const [userColor, setUserColor] = React.useReducer(userColorReducer, {
    cssCode: '',
    hex: '#000000',
    r: 0,
    g: 0,
    b: 0,
    h: 0,
    s: 0,
    l: 0,
    validCode: 'rgb(0, 0, 0)',
  });

  function updateUserColor(validColorCode, colorCodeType) {
    if (
      colorCodeType !== 'hex' &&
      colorCodeType !== 'rgb' &&
      colorCodeType !== 'hsl'
    ) {
      throw new Error(
        `A wrong second argument for updateUserColor. It should be either "hex", "rgb", or "hsl". But you provided ${colorCodeType}.`,
      );
    }
    const {hex, rgb, hsl} = parseColor(validColorCode);
    if (!hex || !rgb || !hsl) {
      throw new Error(
        `A wrong first argument for updateUserColor. It should be a valid CSS color code. But you provided ${validColorCode}.`,
      );
    }
    switch (colorCodeType) {
      case 'hex':
        setUserColor({
          cssCode: hex,
          hex: hex,
          r: rgb[0],
          g: rgb[1],
          b: rgb[2],
          h: hsl[0],
          s: hsl[1],
          l: hsl[2],
          validCode: hex,
        });
        break;
      case 'rgb':
        const rgbCode = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        setUserColor({
          cssCode: rgbCode,
          hex: hex,
          r: rgb[0],
          g: rgb[1],
          b: rgb[2],
          h: hsl[0],
          s: hsl[1],
          l: hsl[2],
          validCode: rgbCode,
        });
        break;
      case 'hsl':
        const hslCode = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
        setUserColor({
          cssCode: hslCode,
          hex: hex,
          r: rgb[0],
          g: rgb[1],
          b: rgb[2],
          h: hsl[0],
          s: hsl[1],
          l: hsl[2],
          validCode: hslCode,
        });
        break;
      default:
        throw new Error('updateUserColor has thrown an impossible error.');
        break;
    }
  }

  const handleChangeCssCode = event => {
    const newCssCode = event.target.value.trim().replace(/\s/g, '');
    if (regex.hex.test(newCssCode)) {
      updateUserColor(newCssCode, 'hex');
    } else if (regex.hsl.test(newCssCode)) {
      updateUserColor(newCssCode, 'hsl');
    } else if (regex.rgb.test(newCssCode)) {
      updateUserColor(newCssCode, 'rgb');
    } else {
      setUserColor({
        cssCode: event.target.value,
      });
    }
  };

  const handleChangeHex = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.hex.test(newUserValue)) {
      updateUserColor(newUserValue, 'hex');
    } else {
      setUserColor({
        hex: event.target.value,
      });
    }
  };

  const handleChangeR = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.rgbValues.test(newUserValue)) {
      const rgb = `rgb(${newUserValue}, ${userColor.g}, ${userColor.b})`;
      const {hex, hsl} = parseColor(rgb);
      setUserColor({
        cssCode: rgb,
        hex: hex,
        r: newUserValue,
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        validCode: rgb,
      });
    } else {
      setUserColor({
        r: event.target.value,
      });
    }
  };

  const handleChangeG = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.rgbValues.test(newUserValue)) {
      const rgb = `rgb(${userColor.r}, ${newUserValue}, ${userColor.b})`;
      const {hex, hsl} = parseColor(rgb);
      setUserColor({
        cssCode: rgb,
        hex: hex,
        g: newUserValue,
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        validCode: rgb,
      });
    } else {
      setUserColor({
        g: event.target.value,
      });
    }
  };

  const handleChangeB = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.rgbValues.test(newUserValue)) {
      const rgb = `rgb(${userColor.r}, ${userColor.g}, ${newUserValue})`;
      const {hex, hsl} = parseColor(rgb);
      setUserColor({
        cssCode: rgb,
        hex: hex,
        b: newUserValue,
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        validCode: rgb,
      });
    } else {
      setUserColor({
        b: event.target.value,
      });
    }
  };

  const handleChangeH = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.hValue.test(newUserValue)) {
      const hsl = `hsl(${newUserValue}, ${userColor.s}%, ${userColor.l}%)`;
      const {hex, rgb} = parseColor(hsl);
      setUserColor({
        cssCode: hsl,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        h: newUserValue,
        validCode: hsl,
      });
    } else {
      setUserColor({
        h: event.target.value,
      });
    }
  };

  const handleChangeS = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.slValues.test(newUserValue)) {
      console.log('saturation value passes the test');
      const hsl = `hsl(${userColor.h}, ${newUserValue}%, ${userColor.l}%)`;
      const {hex, rgb} = parseColor(hsl);
      setUserColor({
        cssCode: hsl,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        s: newUserValue,
        validCode: hsl,
      });
    } else {
      setUserColor({
        s: event.target.value,
      });
    }
  };

  const handleChangeL = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.slValues.test(newUserValue)) {
      const hsl = `hsl(${userColor.h}, ${userColor.s}%, ${newUserValue}%)`;
      const {hex, rgb} = parseColor(hsl);
      setUserColor({
        cssCode: hsl,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        l: newUserValue,
        validCode: hsl,
      });
    } else {
      setUserColor({
        l: event.target.value,
      });
    }
  };

  // Prepare prop values
  const {luminance, chroma, hue, neutralColor} = colorAnalyzer(
    userColor.validCode,
  );
  const pureHue = hue
    ? {
        r: parseColor(hue.rgb).rgb[0],
        g: parseColor(hue.rgb).rgb[1],
        b: parseColor(hue.rgb).rgb[2],
      }
    : {r: 188, g: 188, b: 188}; // contrast ratio 11.04 (the middle value between 1 and 21)

  // Prepare prop value for TextFieldForHex
  const lightMode = luminance > Math.sqrt(21);

  // Prop values for TextFieldForRgb
  return (
    <FlexContainer>
      <TextInputForm
        inputId="colorCode"
        labelText="Enter CSS color code"
        handleChange={handleChangeCssCode}
        userColor={userColor.cssCode}
      />
      <Spacer height="10px" width="100%" />
      <FormWrapper>
        <TextFieldForHex
          backgroundColor={userColor.validCode}
          handleChange={handleChangeHex}
          lightMode={lightMode}
          value={userColor.hex}
        />
        <RgbHslWrapper>
          <Cross position="topLeft" />
          <TextFieldForRgb
            handleChange={{
              r: handleChangeR,
              g: handleChangeG,
              b: handleChangeB,
            }}
            r={userColor.r}
            g={userColor.g}
            b={userColor.b}
          />
          <Spacer height="10px" width="100%" />
          <TextFieldForHsl
            handleChange={{
              h: handleChangeH,
              s: handleChangeS,
              l: handleChangeL,
            }}
            h={userColor.h}
            s={userColor.s}
            l={userColor.l}
          />
          <Cross position="bottomRight" />
        </RgbHslWrapper>
      </FormWrapper>
      <CanvasWrapper
        pixelSize={pixelSize}
        luminance={luminance}
        pureHue={pureHue}
        chroma={chroma}
        updateUserColor={updateUserColor}
      />
      <ContrastRatioWrapper>
        <Cross position="topLeft" large />
        <ChromaLuminanceForm type="chroma" value={chroma} />
        <Cross position="bottomRight" large />
      </ContrastRatioWrapper>
      <ContrastRatioWrapper>
        <Cross position="topLeft" large />
        <ChromaLuminanceForm type="luminance" value={luminance} />
        <Cross position="bottomRight" large />
      </ContrastRatioWrapper>
    </FlexContainer>
  );
}

export default HomePage;

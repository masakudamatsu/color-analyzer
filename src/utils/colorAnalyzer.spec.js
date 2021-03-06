import cases from 'jest-in-case';
import parseColor from 'parse-color';

import colorAnalyzer from './colorAnalyzer';

cases(
  'returns the correct output:',
  options => {
    const {luminance, chroma, hue, neutralColor} = colorAnalyzer(
      options.rgbCode,
    );
    const [inputRed, inputGreen, inputBlue] = parseColor(options.rgbCode).rgb;
    const [pureHueRed, pureHueGreen, pureHueBlue] = parseColor(hue.rgb).rgb;

    const restoredRed =
      (pureHueRed * chroma + neutralColor * (100 - chroma)) / 100;
    const restoredGreen =
      (pureHueGreen * chroma + neutralColor * (100 - chroma)) / 100;
    const restoredBlue =
      (pureHueBlue * chroma + neutralColor * (100 - chroma)) / 100;

    expect([inputRed - 1, inputRed, inputRed + 1]).toContain(
      Math.round(restoredRed),
    );
    expect([inputGreen - 1, inputGreen, inputGreen + 1]).toContain(
      Math.round(restoredGreen),
    );
    expect([inputBlue - 1, inputBlue, inputBlue + 1]).toContain(
      Math.round(restoredBlue),
    );
    expect(luminance).toEqual(options.luminance);
  },
  {
    'Twitter blue': {
      rgbCode: 'rgb(29, 161, 242)', // source: https://brandcolors.net/
      luminance: 7.43,
    },
    'McDonalds red': {
      rgbCode: 'rgb(191, 12, 12)',
      luminance: 3.27,
    },
    'WhatsApp green': {
      rgbCode: 'rgb(37, 211, 102)',
      luminance: 10.59,
    },
  },
);
cases(
  'properly handles special types of input color:',
  options => {
    expect(colorAnalyzer(options.rgbCode)).toEqual(options.outputs);
  },
  {
    'Neutral color': {
      rgbCode: 'rgb(128, 128, 128)',
      outputs: {
        luminance: 5.32,
        chroma: 0,
        hue: null,
        neutralColor: 128,
      },
    },
    'Primary color': {
      rgbCode: 'rgb(255, 0, 0)',
      outputs: {
        luminance: 5.25,
        chroma: 100,
        hue: {
          hsl: 'hsl(0, 100, 50)',
          rgb: 'rgb(255, 0, 0)',
        },
        neutralColor: null,
      },
    },
    'Secondary color': {
      rgbCode: 'rgb(255, 255, 0)',
      outputs: {
        luminance: 19.56,
        chroma: 100,
        hue: {
          hsl: 'hsl(60, 100, 50)',
          rgb: 'rgb(255, 255, 0)',
        },
        neutralColor: null,
      },
    },
    'Tertiary color': {
      rgbCode: 'rgb(255, 127, 0)',
      outputs: {
        luminance: 8.29,
        chroma: 100,
        hue: {
          hsl: 'hsl(30, 100, 50)',
          rgb: 'rgb(255, 127, 0)',
        },
        neutralColor: null,
      },
    },
    'Saturated dark hue': {
      rgbCode: 'rgb(144, 144, 0)',
      outputs: {
        luminance: 6.18,
        chroma: 56.47,
        hue: {
          hsl: 'hsl(60, 100, 50)',
          rgb: 'rgb(255, 255, 0)',
        },
        neutralColor: 0,
      },
    },
  },
);

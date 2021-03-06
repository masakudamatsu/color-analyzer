import getCanvasMetrics from './getCanvasMetrics';
import {font, poppins, scale} from './specFont';

const canvasSmall = getCanvasMetrics(3);
const canvasLarge = getCanvasMetrics(5);
export const canvas = {
  width: {
    small: canvasSmall.canvasWidth,
    large: canvasLarge.canvasWidth,
  },
};
// Scale factor to enlarge fonts beyond the tablet screen width of 728px
export const triangleWidth = 303;

export const marginLeft = 10;

export const cross = {
  width: {
    default: 30,
    large: 60,
  },
};
export const input = {
  borderWidth: {
    active: 2,
    inactive: 1,
  },
};

export const header = {
  borderBottomWidth: 1,
  capheight: {
    h1: font.h1.capHeight,
  },
  logo: {
    height: 30,
    width: 30,
  },
  whitespace: {
    aboveH1: 15,
    belowH1: 15,
    betweenLogoAndH1: marginLeft,
  },
  get height() {
    return (
      this.capheight.h1 + this.whitespace.aboveH1 + this.whitespace.belowH1
    );
  },
};

export const formColorCode = {
  capheight: {
    label: font.label.capHeight,
    inputValue: font.formColorCode.capHeight,
  },
  whitespace: {
    aboveLabel: 10,
    aboveInputValue: 20,
    belowInputValue: 20,
    left: marginLeft,
  },
  get height() {
    return (
      this.whitespace.aboveLabel +
      this.capheight.label +
      this.whitespace.aboveInputValue +
      this.capheight.inputValue +
      this.whitespace.belowInputValue +
      input.borderWidth.inactive * 2
    );
  },
  width: triangleWidth,
};

export const formHex = {
  capheight: {
    label: font.label.capHeight,
    inputValue: font.formHex.capHeight,
  },
  whitespace: {
    aboveLabel: 18,
    aboveInputValue: 19,
    belowInputValue: 47,
  },
  get diameter() {
    return (
      this.whitespace.aboveLabel +
      this.capheight.label +
      this.whitespace.aboveInputValue +
      this.capheight.inputValue +
      this.whitespace.belowInputValue
    );
  },
};

export const formNumberLarge = {
  capheight: {
    h2: font.h2.capHeight,
    paragraph: font.paragraph.capHeight,
    output: font.output.capHeight,
  },
  whitespace: {
    padding: cross.width.large * (2 / 3),
    belowH2: 10,
    aboveOutput: 20,
    belowOutput: 20,
  },
  get height() {
    return (
      this.whitespace.padding * 2 +
      this.capheight.h2 +
      this.whitespace.belowH2 +
      this.capheight.paragraph +
      this.whitespace.aboveOutput +
      this.capheight.output +
      this.whitespace.belowOutput +
      this.capheight.paragraph
    );
  },
  get width() {
    return triangleWidth + this.whitespace.padding;
  },
};

export const formNumberSmall = {
  capheight: {
    label: font.label.capHeight,
    inputValue: font.formNumberSmall.capHeight,
  },
  whitespace: {
    aboveLabel: 5,
    aboveInputValue: 6,
    belowInputValue: 12,
  },
  get diameter() {
    return (
      this.whitespace.aboveLabel +
      this.capheight.label +
      this.whitespace.aboveInputValue +
      this.capheight.inputValue +
      this.whitespace.belowInputValue
    );
  },
};

export const rgbHslWrapper = {
  padding: cross.width.default * (2 / 3),
  whitespace: {
    betweenRgbAndHsl: 10,
  },
  get height() {
    return (
      this.padding * 2 +
      formNumberSmall.diameter * 2 +
      this.whitespace.betweenRgbAndHsl
    );
  },
};

export const page = {
  whitespace: {
    aboveColorCode: 10,
    betweenColorCodeAndRgb: 10,
    betweenComponents: 20,
    bottomMargin: 40,
    sideMargin: 40,
    topMargin: 40,
  },
  get height() {
    return (
      (formColorCode.height +
        rgbHslWrapper.height +
        formNumberLarge.height * 2) *
        scale +
      this.whitespace.topMargin +
      this.whitespace.betweenColorCodeAndRgb +
      this.whitespace.bottomMargin
    );
  },
};

export const flexbox = {
  height: {
    twoColumns:
      (formColorCode.height +
        rgbHslWrapper.height +
        formNumberLarge.height * 2 +
        page.whitespace.betweenColorCodeAndRgb) *
      scale,
  },
};

export const footer = {
  xheight:
    (font.footer.capHeight / poppins.light.capHeight) * poppins.light.xHeight,
  modularScale: font.footer.betweenLinesRatio / font.footer.xHeightRatio,
  get aboveParagraph() {
    return this.xheight * Math.pow(this.modularScale, 2);
  },
  get belowParagraph() {
    return this.xheight * Math.pow(this.modularScale, 2);
  },
  get height() {
    return this.xheight + this.aboveParagraph + this.belowParagraph;
  },
};

export const paragraphAlert = {
  marginLeft: marginLeft / 2, // Make the error message look temporary by disaligning it with the input field
  xheight:
    (font.paragraph.capHeight / poppins.light.capHeight) *
    poppins.light.xHeight,
  modularScale: font.paragraph.betweenLinesRatio / font.paragraph.xHeightRatio,
  get aboveParagraph() {
    return this.xheight * Math.pow(this.modularScale, 2);
  },
  get belowParagraph() {
    return this.xheight * Math.pow(this.modularScale, 2);
  },
  get sideMargin() {
    return this.xheight * Math.pow(this.modularScale, 2);
  },
};

export const threeColumns = {
  minWidth:
    canvas.width.small +
    formColorCode.width * scale +
    formNumberLarge.width * scale +
    page.whitespace.betweenComponents * 2 +
    page.whitespace.sideMargin * 2,
  minHeight:
    header.height * scale +
    header.borderBottomWidth +
    formNumberLarge.height * scale * 2 +
    page.whitespace.topMargin +
    page.whitespace.bottomMargin +
    header.borderBottomWidth +
    footer.height * scale,
};

export const twoColumns = {
  minWidth:
    canvas.width.small +
    formNumberLarge.width * scale +
    page.whitespace.sideMargin * 2,
  minHeight:
    header.height * scale +
    header.borderBottomWidth +
    flexbox.height.twoColumns +
    page.whitespace.topMargin +
    page.whitespace.bottomMargin +
    header.borderBottomWidth +
    footer.height * scale,
};

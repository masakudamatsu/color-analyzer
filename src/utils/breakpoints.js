import {
  canvas,
  flexbox,
  formColorCode,
  formNumberLarge,
  page,
  rgbHslWrapper,
  scale,
} from './designSpecs';

const threeColumns = {
  minWidth:
    canvas.width.small +
    formColorCode.width * scale +
    formNumberLarge.width * scale +
    page.whitespace.betweenComponents * 2 +
    page.whitespace.sideMargin * 2,
  minHeight:
    canvas.width.small +
    page.whitespace.topMargin +
    page.whitespace.bottomMargin,
};

export const twoColumns = {
  minWidth:
    canvas.width.small +
    formNumberLarge.width * scale +
    page.whitespace.betweenComponents +
    page.whitespace.sideMargin * 2,
  minHeight:
    flexbox.height.twoColumns +
    page.whitespace.topMargin +
    page.whitespace.bottomMargin,
};

export const mediaQuery = {
  canvas: `(min-width: 535px)`,
  font: `(min-width: 728px)`,
  threeColumns: `(min-width: ${threeColumns.minWidth.toFixed()}px) and (min-height: ${threeColumns.minHeight.toFixed()}px)`,
  twoColumns: `(min-width: ${twoColumns.minWidth.toFixed()}px)`,
};

//  and (min-height: ${twoColumns.minHeight.toFixed()}px)

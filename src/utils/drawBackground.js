import {color} from './specColor';
import getCanvasMetrics from './getCanvasMetrics';

// Draw the color triangle encircled
export default function drawBackground(canvasContext, pixelSize) {
  const {
    canvasWidth,
    circleCenterX,
    circleCenterY,
    circleRadius,
  } = getCanvasMetrics(pixelSize);

  // clipping
  const radius = circleRadius;
  const centerX = circleCenterX;
  const centerY = circleCenterY;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  canvasContext.clip(); // Erase any drawing outside the circle

  // background
  canvasContext.fillStyle = color.input.background;
  canvasContext.fillRect(0, 0, canvasWidth, canvasWidth);
}

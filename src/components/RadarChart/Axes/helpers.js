/**
 *
 * @param {number} radius context radius
 * @param {number} radians number of radians rotated (clockwise)
 * @return {number[]} gives an x y array of numbers
 */
const getXY = (radius, radians) => {
  const rads = radians + Math.PI / 2;
  return [
    -radius * Math.cos(rads),
    -radius * Math.sin(rads),
  ];
};

export {
  getXY,
};

import PT from 'prop-types';
import axisDef from './axis';

export const shape = {
  d3Curve: PT.func,
  name: PT.string.isRequired,
  axes: PT.arrayOf(axisDef).isRequired,
};

export default PT.shape(shape);

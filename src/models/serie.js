import PT from 'prop-types';
import axisDef from './axis';

export const shape = {
  name: PT.string.isRequired,
  axes: PT.arrayOf(axisDef).isRequired,
};

export default PT.shape(shape);

import PT from 'prop-types';

export const shape = {
  name: PT.string.isRequired,
  val: PT.number.isRequired,
  valDomain: PT.arrayOf(PT.number).isRequired,
};

export default PT.shape(shape);

import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components/macro';
import { useSpring } from 'react-spring';
import { interpolate } from 'flubber';

const propTypes = {
  path: PT.string.isRequired,
  children: PT.func.isRequired,
};
const defaultProps = {};

const Animator = ({ path, children }) => {
  const [flubberPaths, setFlubberPaths] = React.useState([path, path]);
  const flubberOptions = { maxSegmentLength: 5 };
  const interpolator = interpolate(...flubberPaths, flubberOptions);
  const spring = useSpring({
    t: 1,
    from: { t: 0 },
    reset: true,
    config: {
      mass: 0.5,
      tension: 350,
      friction: 50,
      clamp: true,
      velocity: 10,
    },
  });

  React.useEffect(() => {
    setFlubberPaths((oldflubberPaths) => ([
      oldflubberPaths[1],
      path,
    ]));
  }, [path]);

  const animatedPath = spring.t.interpolate((t) => interpolator(t));

  return (
    <AnimatorWrap>
      {children(animatedPath)}
    </AnimatorWrap>
  );
};
Animator.propTypes = propTypes;
Animator.defaultProps = defaultProps;

export default Animator;

const AnimatorWrap = styled.g``;

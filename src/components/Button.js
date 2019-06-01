import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonComp = styled.button`
  position: relative;
`;
const Button = ({
  children,
}) => {
  return (
    <ButtonComp>{children}</ButtonComp>
  );
};

Button.propTypes = {
  children: PropTypes.any,
};
export default Button;

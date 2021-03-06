import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  ${({ isSearchBox }) => !isSearchBox && 'margin-bottom: 17px'}
`;

const Input = styled(Text)`
  text-overflow: ellipsis;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.color};
  padding: ${({ padding }) => padding || '12px 16px'};
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border-color: ${theme.colors.error.color};
    & + span {
      color: ${theme.colors.error.color};
      font-size: 11px;
      }
  `}
  ${({ isSearchBox }) => isSearchBox && 'padding-left: 2.7rem'}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  error,
  isTouched,
  isSearchBox,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;
  return (
    <InputWrapper
      isSearchBox={isSearchBox}
    >
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        isSearchBox={isSearchBox}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {isFieldInvalid && (
        <Text
          variant="smallestException"
          color="error.main"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  error: undefined,
  isTouched: undefined,
  isSearchBox: false,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  isSearchBox: PropTypes.bool,
};

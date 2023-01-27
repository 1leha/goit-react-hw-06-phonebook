import styled from 'styled-components';
import { HiUserAdd } from 'react-icons/hi';

import { Field } from 'formik';

export const LabelStyled = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
`;

export const FieldStyled = styled(Field)`
  margin-bottom: ${p => p.theme.space[1]}px;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.m};

  border-radius: ${p => p.theme.radii.rounded};

  border: none;
  outline: none;

  transition: ${p => p.theme.transitions.standart};

  background-color: ${p => p.theme.colors.secondary};

  :focus {
    box-shadow: ${p => p.theme.shadows.onFocus};
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.rounded};

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};

  transition: ${p => p.theme.transitions.standart};

  border: none;
  outline: none;

  :hover {
    color: ${p => p.theme.colors.notification};
    box-shadow: ${p => p.theme.shadows.onHover};
  }
`;

export const ButtonIconStyled = styled(HiUserAdd)`
  margin-right: ${p => p.theme.space[2]}px;
`;

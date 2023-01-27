import styled from 'styled-components';

export const ContactButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  padding-top: ${p => p.theme.space[0]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[0]}px;

  margin-left: ${p => p.theme.space[0]}px;

  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.rounded};

  background-color: transparent;
  color: ${p => p.theme.colors.primary};

  border: none;
  outline: none;

  transition: ${p => p.theme.transitions.standart};

  :hover {
    color: ${p => p.theme.colors.notification};
  }
`;

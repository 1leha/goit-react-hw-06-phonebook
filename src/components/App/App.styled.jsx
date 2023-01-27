import styled from 'styled-components';

export const AppStyled = styled.div`
  width: 340px;

  border: ${p => p.theme.borders.none};
  border-radius: 20px;

  box-shadow: ${p => p.theme.shadows.standart};

  overflow: hidden;
`;

export const AppTitleStyled = styled.h1`
  margin-top: ${p => p.theme.space[0]};

  font-size: ${p => p.theme.fontSizes.xxl};
`;

export const VersionStyled = styled.span`
  position: absolute;
  display: inline-block;

  top: 42px;
  right: 0;

  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.s};

  border-radius: ${p => p.theme.radii.standart};

  background-color: ${p => p.theme.colors.notification};
  color: ${p => p.theme.colors.secondary};
`;

export const ClearButtonStyled = styled.button`
  position: absolute;

  top: ${p => p.theme.space[4]}px;
  right: ${p => p.theme.space[4]}px;

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

  :hover:enabled {
    color: ${p => p.theme.colors.notification};
  }

  :disabled {
    color: ${p => p.theme.colors.third};
  }
`;

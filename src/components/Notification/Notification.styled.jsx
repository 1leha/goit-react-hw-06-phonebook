import styled from 'styled-components';

export const NotificationStyled = styled.div`
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.notification};
`;

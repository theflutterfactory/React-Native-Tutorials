import styled from 'styled-components'

export const Title = styled.Text`
  font-size: 40px;
  color: ${props => props.theme.colors.textLight || 'black'};
  text-align: center;
  margin: 16px;
`

export const ContentText = styled.Text`
  font-size: 26px;
  color: ${props => props.theme.colors.textLight || 'black'};
  margin: 16px;

`
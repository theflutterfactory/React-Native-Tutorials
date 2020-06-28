import styled from 'styled-components'

export const CustomImage = styled.Image`
  width: 100px;
  height: 100px;
  border-color: ${props => props.theme.colors.light || 'white'};
  border-width: 2px;
  border-radius: 50px;
`
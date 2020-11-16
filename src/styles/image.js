import styled from 'styled-components'

export const CustomImage = styled.Image`
  width: 180px;
  height: 180px;
  border-color: ${props => props.theme.colors.light || 'white'};
  border-width: 2px;
  border-radius: 100px;
`
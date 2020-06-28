import styled from 'styled-components'

export const RoundedInput = styled.TextInput.attrs(props => ({
  secureTextEntry: props.password ? true : false,
  placeholderTextColor: '#00000070'

}))
  `
  font-size: 18px;
  background-color: ${props => props.theme.colors.input || 'black'};
  color: ${props => props.theme.colors.textDark || 'black'};
  width: 80%;
  height: 60px;
  margin: 16px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
    padding: 16px;
`
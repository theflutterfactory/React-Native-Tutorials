import styled from 'styled-components'
import React from 'react';


export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const TouchableOpacity = styled.TouchableOpacity`
  height: 60px;
  width: ${props => props.width || '180'}px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.button || 'red'};
  margin-top: 16px;
`

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.textDark || 'white'};
  font-size: ${props => props.size || '16px'};
`

export const CheetahButton = ({ onPress, title, fontSize, width }) =>
  <TouchableOpacity
    onPress={onPress}
    width={width}
    activeOpacity={0.5}
  >
    <ButtonText size={fontSize}>{title}</ButtonText>
  </TouchableOpacity>
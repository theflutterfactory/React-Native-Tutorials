import styled from 'styled-components'
import React from 'react';

const RoundedTouchableOpacity = styled.TouchableOpacity`
  height: 60px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  width: ${props => props.width || '180px'};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.button || 'red'};
  margin-top: 16px;
`

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.textLight || 'white'};
  font-size: ${props => props.size || '16px'};
`

export const RoundedButton = ({ onPress, title, fontSize, width }) =>
  <RoundedTouchableOpacity
    onPress={onPress}
    width={width}
    activeOpacity={0.5}
  >
    <ButtonText size={fontSize}>{title}</ButtonText>
  </RoundedTouchableOpacity>
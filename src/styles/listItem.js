import styled from 'styled-components'
import React from 'react';

export const ListItemContainer = styled.View`
  margin: 16px;
  align-items: center;
  justify-content: center;
`

export const ListItemText = styled.Text`
  font-size: 22px;
  color: ${props => props.theme.colors.textLight || 'black'};
  margin: 16px;
`

export const ListDivider = styled.View`
  height: 1px;
  background: white;
`
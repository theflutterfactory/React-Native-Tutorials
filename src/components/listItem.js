import { ListItemContainer, ListItemText } from "../styles/listItem";
import React from 'react';

export const ListItem = ({ name }) =>
    <ListItemContainer>
        <ListItemText>{name}</ListItemText>
    </ListItemContainer>
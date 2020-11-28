import React, { FC } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Box,
} from '@material-ui/core';
import { ToDoItem } from '..//shared/types';

type Props = {
  items?: ToDoItem[];
  onItemClick: (i: number) => void;
};

const ToDoList: FC<Props> = ({ items = [], onItemClick }) => {
  return (
    <Box>
      {!!items?.length && (
        <>
          <List dense={true}>
            {items.map((item, i) => {
              const labelId = `checkbox-list-icon-label-${i}`;
              return (
                <ListItem
                  style={{ alignItems: 'center', alignContent: 'space-evenly' }}
                  key={i}
                  onClick={() => onItemClick(i)}
                  button
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={item.complete}
                      onClick={() => onItemClick(i)}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={item.value} />
                </ListItem>
              );
            })}
          </List>
        </>
      )}
      {!items?.length && (
        <Box width={'100%'} style={{ textAlign: 'center' }}>
          no items bruh, add some shit and get to work
        </Box>
      )}
    </Box>
  );
};

export default ToDoList;

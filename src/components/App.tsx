import React, { FC, useState, useEffect } from 'react';
import {
  Box,
  Grid,
  ThemeProvider,
  Paper,
  Container,
  CssBaseline,
  Button,
  Input,
} from '@material-ui/core';
import Header from './Header';
import theme from '../shared/theme';
import Clock from './Clock';
import { ToDoItem } from '../shared/types';
import ToDoList from './ToDoList';

type UserConfig = {
  militaryClock: boolean;
};

const App: FC = () => {
  const fetchToDoListFromLocalStorage = () => {
    let list: ToDoItem[] = [];
    if (localStorage['items']) {
      list = JSON.parse(localStorage['items']);
    }
    return list;
  };
  const [items, setToDoListItems] = useState<ToDoItem[]>(() =>
    fetchToDoListFromLocalStorage()
  );
  const [inputValue, setInputValue] = useState('');
  const [placeHolder, setPlaceHolder] = useState('add tasks');
  const onInputChange = (e: any) => {
    let value = e.target.value;
    setInputValue(value);
  };
  const onInputKeypress = (e: any) => {
    if (e.charCode === 13 && inputValue) {
      let newItem: ToDoItem = {
        id: items.length + 1,
        value: inputValue,
        complete: false,
      };
      setToDoListItems([...items, newItem]);
      setInputValue('');
    }
  };
  const onItemClick = (i: number) => {
    let newItems = JSON.parse(JSON.stringify(items));
    let updatedItem = newItems[i];
    updatedItem.complete = !updatedItem.complete;
    newItems[i] = updatedItem;
    setToDoListItems(newItems);
  };
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  const removeCompleted = () => {
    let newItems = items.filter((item: ToDoItem) => !item.complete);
    setToDoListItems(newItems);
  };
  const [userConfig, setUserConfig] = useState<UserConfig>({
    militaryClock: false,
  });
  const handleSwitchClock = () => {
    setUserConfig({ ...userConfig, militaryClock: !userConfig.militaryClock });
    console.log(userConfig);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        title={'onus'}
        switchClock={handleSwitchClock}
        militaryTime={userConfig.militaryClock}
      />
      <Container maxWidth={'sm'}>
        <Box m={2} />
        <Grid
          container
          direction="column"
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              {/* <Paper variant={'outlined'} square>
                <Box p={2}>
                  <Clock military={userConfig.militaryClock} />
                </Box>
              </Paper> */}
              <Box m={2} />
              <Paper variant={'outlined'} square>
                <Box p={2}>
                  <Input
                    placeholder={placeHolder}
                    onKeyPress={onInputKeypress}
                    value={inputValue}
                    onChange={onInputChange}
                    fullWidth={true}
                    color={'secondary'}
                    onFocus={() =>
                      setPlaceHolder(placeHolder ? '' : 'add tasks')
                    }
                    onBlur={() =>
                      setPlaceHolder(placeHolder ? '' : 'add tasks')
                    }
                  />
                </Box>
              </Paper>
              <Box m={2} />
              <Paper variant={'outlined'} square>
                <Box p={2}>
                  <ToDoList items={items} onItemClick={onItemClick} />
                </Box>
              </Paper>
              {!!items.length && items.some((item: ToDoItem) => item.complete) && (
                <>
                  <Box m={2} />
                  <Button
                    fullWidth={true}
                    variant={'contained'}
                    color={'secondary'}
                    onClick={removeCompleted}
                  >
                    Remove
                  </Button>
                </>
              )}
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;

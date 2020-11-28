import React, { FC, useState } from 'react';
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Switch,
  FormControlLabel,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box/Box';

type Props = {
  title: string;
  switchClock(): void;
  militaryTime: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuTitle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  })
);

const Header: FC<Props> = ({ title, switchClock, militaryTime }) => {
  const classes = useStyles();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <>
      <Box paddingTop={3} />
      <AppBar position={'static'}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            align={'center'}
            color={'secondary'}
            style={{ fontWeight: 'bold' }}
            className={classes.menuTitle}
          >
            {title}
          </Typography>
          <Menu
            id="menu-appbar"
            anchorEl={anchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>
              <FormControlLabel
                label="24-hour clock"
                control={
                  <Switch onChange={switchClock} checked={militaryTime} />
                }
              />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

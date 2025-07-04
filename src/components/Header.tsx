'use client';
import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './ThemeRegistry';
import Link from 'next/link';

const Header = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Contact', path: '/contact' },
    { title: 'Services', path: '/services' },
  ];

  const drawer = (
    <List>
      {navLinks.map((link) => (
        <ListItem key={link.title} disablePadding>
          <Link href={link.path} passHref>
            <ListItemButton component="a">
              <ListItemText primary={link.title} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0} sx={{
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${theme.palette.divider}`
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              {navLinks.map((link) => (
                <Link href={link.path} passHref key={link.title}>
                  <Button color="inherit">
                    {link.title}
                  </Button>
                </Link>
              ))}
            </>
          )}
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

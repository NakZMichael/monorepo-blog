import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { 
  AppBar, 
  MenuItem,
  Menu,
  Button,
  Box,
  Toolbar,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import {CustomLink} from '@monorepo-blog/shared/ui'

const pages:{
  name:string,
  path:string,
}[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path:'/about',
  },
  {
    name: 'Articles',
    path: '/articles'
  },
];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const logo = "Muka Nakazato"

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (

    <AppBar 
      position="static" 
      color="primary"
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ 
              mr: 2, 
              display: 
              { xs: 'none', md: 'flex' },
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {logo}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              MenuListProps={{
                'aria-labelledby': 'lock-button',
                role: 'listbox',
              }}
            >
              {pages.map((page) => (
                <CustomLink
                  href={page.path}
                  key={page.path}
                >
                  <MenuItem 
                      onClick={handleCloseNavMenu}
                      sx={{
                        color:(theme)=>theme.palette.primary.main,
                        display:'block'
                      }}
                      style={{
                        // color:'white',
                        // marginTop:2,
                        // marginBottom:2,
                        // display:'block',
                      }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </CustomLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'flex', md: 'none' },
              color:'white',
            }}
          >
            {logo}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'flex-end' }}>
            {pages.map((page) => (
              <CustomLink
                key={page.path}
                href={page.path}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  style={{
                    color:'white',
                    marginTop:2,
                    marginBottom:2,
                    display:'block',
                  }}
                  // sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </CustomLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

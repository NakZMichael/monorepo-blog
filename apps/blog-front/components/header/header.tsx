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
  ButtonBase,
  Link as MuiLink
} from '@mui/material';
// import {CustomLink,Logo as Logo_} from '@monorepo-blog/shared/ui'
import { grey } from '@mui/material/colors';
import { useMode } from '../../theme/mode';
import {GiUbisoftSun,GiEvilMoon} from 'react-icons/gi'
import Link from 'next/link';

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
    name: 'Blog',
    path: '/blog'
  },
];

const twiAndGit: { name: string, path: string }[] = [
  {
    name: 'Twitter',
    path: `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`
  },
  {
    name: 'GitHub',
    path: process.env.NEXT_PUBLIC_GITHUB_URL
  }
]


export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const {mode,setMode} = useMode()

  const logo = "Muka Nakazato"

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        borderBottom: 1,
        borderBottomColor: grey[400],
        marginX: 2,
        marginBottom:4,
        paddingY:2,
      }}
    >
    <Box
      sx={{
        width: '100%',
        maxWidth:theme=>theme.breakpoints.values.lg,
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        paddingX: { xs: 0,md:5,lg:10 },
        borderBottomColor: grey[400],
        marginX: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          paddingBottom: {
            sx: 1,
            md:2,
          },
        }}
      >
        <Logo />
        {/* <Logo mode={mode} /> */}
        <Box>
          <IconButton
            sx={{
              "& svg": {
                fontSize: 30
              }
              }}
              onClick={()=> mode==='light'? setMode('dark'):setMode('light')}
          >
            {
              mode === 'light' ?
                <GiEvilMoon /> :
                <GiUbisoftSun />
            }
          </IconButton>
        </Box>
      </Box>
      <NormalMenu />
      <XsMenu />

      </Box>
    </Box>
  );
};
export default Header;

const Logo = () => (
  <Typography
    variant='h1'
    sx={{
      fontSize: theme => [
        theme.typography.h3.fontSize,
        theme.typography.h1.fontSize,
      ]
    }}
  >
    Nakazato&apos;s blog
  </Typography>
)

const NormalMenu = () => (
  <Box
    sx={{
      display: {xs:'none',sm:'flex'},
      justifyContent: 'flex-between',
      width: '100%',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexGrow: 1,
      }}
    >
      {pages.map(page => (
        <Link href={page.path} key={page.path} passHref>
          <MuiLink
            href={page.path}
            underline='none'
          >
            <Button
              sx={{
                color: theme => theme.palette.grey[600],
                fontSize: theme => theme.typography.h5.fontSize,
                textTransform: 'none',
              }}
            >
              {page.name}
            </Button>
          </MuiLink>
        </Link>
      ))}
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {twiAndGit.map(item => (
        <Link href={item.path} key={item.path} passHref>
          <MuiLink
            href={item.path}
            underline='none'
          >
            <Button
              sx={{
                color: theme => theme.palette.grey[600],
                fontSize: theme => theme.typography.h5.fontSize,
                textTransform: 'none',
                minWidth:'100%',
              }}
            >
              {item.name}
            </Button>
          </MuiLink>
        </Link>
      ))}
    </Box>
  </Box>
)
const XsMenu = () => (
  <Box
    sx={{
      display: {xs:'flex',sm:'none'},
      justifyContent: 'space-around',
      width:'100%',
    }}
  >
    {pages.concat(twiAndGit).map(page => (
      <Link href={page.path} key={page.path} passHref>
        <MuiLink
          href={page.path}
          underline='none'
        >
          <Button
            sx={{
              color: theme => theme.palette.grey[600],
              fontSize: theme => theme.typography.h5.fontSize,
              textTransform: 'none',
              minWidth: 0,
              paddingX:'4px',
            }}
          >
            {page.name}
          </Button>
        </MuiLink>
      </Link>
    ))}
  </Box>
)

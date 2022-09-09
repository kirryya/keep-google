import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  InputBase,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const RIGHT_LEFT_VALUE = 2;
const SPACING_VALUE = 4;

export const AppBar = styled(
  MuiAppBar,
  {},
)<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'inset 0 -1px 0 0 #dadce0',
  height: '70px',
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#e1e0e0',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, RIGHT_LEFT_VALUE),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'primary',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(SPACING_VALUE)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '30px',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '50ch',
        boxShadow: '1px 3px 1em 0 #dadce0',
        backgroundColor: '#ffffff',
      },
    },
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  margin: '30px',
  fontSize: '22px',
}));

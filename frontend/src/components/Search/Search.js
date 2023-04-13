import { styled ,alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';

const Search = styled("div")(({ theme }) => ({
    position: 'relative',
    borderRadius:20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight:theme.spacing(2),
    width:"100%"
}))

export default Search;
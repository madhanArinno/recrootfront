import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const styles={
    box:{
        width:{lg:'1166px',md:'900px',sm:'650px',xs:'320px'},

    },
    grid:{
        pt:'65px',
        pb:'65px',
        justifyContent:'space-around'
    },
    btn: {
        backgroundColor:'#fff',
        color:'#4F9AFF',
        textTransform: 'capitalize',
        height:'56px',
        width:'137px',
        marginTop: '3px',
        boxShadow: 'none'
    },
    input : {
    height:'52px',
    width:{lg:'321px',md:'321px',sm:'321px',xs:'200px'},
    input: { color: 'white'}
    },
    fstgrd:{
        
        textAlign:{lg:'left',sm:'center',xs:'center'},
        color:'white',
    },
    scdgrd:{
        display:'flex',
        gap:'10px',
        flexDirection: {xs:'column',md:'row',sm:'row'},
        alignItems:'center',
        justifyContent:'center'
    }
}


export  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      }, '&:hover fieldset': {
        borderColor: 'white',
      },
      
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });
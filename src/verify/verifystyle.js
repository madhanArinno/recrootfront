import img1 from "./logo/bar1.svg"
import img2 from "./logo/bar2.svg"


export const styles={
    img:{
        marginTop:'24px'
    },
    sinup:{
        fontWeight: 700,
        fontSize: '48px',
        lineHeight: '70px',
        letterSpacing:'1.5px',
        marginTop:{md:'50px',xs:'20px'},
        textAlign:'center'
    },
    verifytxt:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        textAlign:'center',
        gap:'50px',
        mt:'110px'
    },
    blue:{
        backgroundColor:'#4F9AFF',
        height:'100vh',
        display:{md:'block',xs:'none'},
        backgroundImage: `url(${img1}),url(${img2})`,
        backgroundPosition: 'right top -225px',
        backgroundRepeat: "no-repeat",
    },
}
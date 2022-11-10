
import subscribe from './logo/subscribe.png'
import bgcard from './logo/bgcard.svg'

export const styles={
    logo:{
     marginTop:'20px',
    marginLeft:'18px',
    width:'167px'
    },
listtxt:{
    color:'white'
},
listico:{
    ml:'15px',
    color:'white',
    border:'2px solid white',
    padding:'2px',
    borderRadius:'8px',
    "&.MuiButtonBase-root-MuiListItemButton-root:hover": {
        backgroundColor:'#A1CBFD',
      },
},icons:{
display:'flex',
ml:'auto'
},
sortbtn:{
  textTransform:'capitalize',
  color:'White',
  width:'150px',
  height:'50px',
  borderRadius:'7px',
  mt:'15px',
  backgroundColor:'#4fa9ff'
},
helotxt:{
    fontWeight:700,
    fontSize:20,
    lineHeight:'20px',
    width:'203px',
    height:'50px',
    backgroundColor:'#A1CBFD',
    fontFamily:'GreycliffCF-bold',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    borderRadius:'0px 32px 32px 0px',
    mb:'40px',
    mt:'25px'
},
subscribe:{
    height:'209px',
    width:'189px',
    borderRadius:'25px',
    backgroundImage: `url(${subscribe})`,
    backgroundPosition: 'cover',
    backgroundSize: 'contain',
    backgroundRepeat: "round",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    ml:'22px'
},
subscribetxt:{
  color:'white',
  fontStyle: 'normal',
fontWeight: 700,
fontSize: '14px',
lineHeight: '20px',
ml:'10px'
},
rlogo:{
    width:'26px',
    height:'39px',
    alignSelf:'flex-start',
    marginLeft:'10px'
},
linktext:{
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
  textAlign:'center',
  color:'white',
},
reserve:{
    color:'#fff',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
  textAlign:'center',
  mt:'70px'
},
canditatecard:{
  // widht:{md:'256px',xs:'auto'},
  
  mt:'10px',
  borderRadius:'16px',
  width:{md:'auto',xs:'280px'},

},
canditatecardsel:{
  // widht:{md:'256px',xs:'auto'},
  border:'1px solid #4fa9ff',
  boxShadow:' -1px 3px 18px #CACACA;',
  mt:'10px',
  borderRadius:'16px',
  width:{md:'auto',xs:'280px'},

},
titlename:{
display:'flex',
justifyContent:'space-between',
padding:'10px',
alignItems:'center',
m:'0 12px 0 15px',
cursor:'pointer'
},

candname:{
  color:'#4f9aff',
  fontWeight: 700,
fontSize: '20px',
lineHeight: '20px',
},
roletxt:{
  fontWeight: 700,
fontSize: '14px',
lineHeight: '14px',
color: '#9197B3',
textTransform:'capitalize'

},
rolecnt:{
  display:'flex',
alignItems:'center',
gap:'10px',
p:'10px'
},
applytxt:{
color: '#6a6a6a',
fontStyle: 'normal',
fontWeight: 400,
fontSize: '12px',
lineHeight: '14px',
ml:'8px'
},
applytxt3:{
color: '#6a6a6a',
fontStyle: 'normal',
fontWeight: 400,
fontSize: '12px',
lineHeight: '14px',
ml:'30px'
},
rating:{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding:'10px',
  m:'0 0 0 15px'
},
bgcard:{
  backgroundImage: `url(${bgcard})`,
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  backgroundRepeat: "no-repeat",
  // height:'149px'
},
cardname:{
  color:'black',
  fontWeight: 700,
fontSize: '24px',
lineHeight: '20px',
},
profpic:{
  position: 'relative',
    top: '95px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
},
abouttxt:{
  mt:'108px',
  display:'flex',
  padding:'20px',
  alignItems: 'center',
  justifyContent: 'space-between',

},
txtabt:{
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '20px',
},
txtabtful:{
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color:'#6a6a6a',
},
msgbtn:{
  color:'#4fa9ff',
  border:'1px solid #4fa9ff',
  width:{md:'147px',xs:'75px'},
  height:'52px',
  fontWeight: 700,
  fontSize: {md:'20px',xs:'12px'},
  textTransform:'capitalize'
},
morebtn:{
  backgroundColor:'#4fa9ff',
  width:'52px',
  height:'52px'
},
msggrp:{
  display:'flex',
  alignItems: 'center',
  gap:'15px'
},
roleloc:{
  fontWeight: 700,
fontSize: '16px',
lineHeight: '18px',
color: '#9197B3',
textTransform:'capitalize'
},
applytxt2:{
color: '#6a6a6a',
fontStyle: 'normal',
fontWeight: 400,
fontSize: '16px',
lineHeight: '18px'
},
locappl:{
  display:'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding:'20px',

}
,
locmain:{
  display:'flex',
  alignItems:'center',
  gap:'10px',
},
profbtn:{
  color:'#4fa9ff' , 
  width:'100%',
  textTransform:'capitalize',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '23px',
  p:'15px',
  boxShadow:'0px 4px 60px rgba(187, 187, 187, 0.25)'
},
cvstxt:{
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '20px',
},
downbtn:{
  textTransform:'capitalize',
  backgroundColor:'#4f9aff'
},
rendhead:{
  display:'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding:'20px'
},
cvrender:{
  display:'flex',
  alignItems: 'center',
  flexDirection:'column',
},
titleexp:{
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '20px',
  padding:'20px',
  mt:'20px'
},
bdytitex:{
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '20px',
  color:'#6a6a6a'
},
bdytitexsub:{
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '20px',
  color:'#9297B3'
},
bdytitexsube:{
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '20px',
  color:'#9297B3',
  width:"200px"
},
bodysub:{
  display:'flex',
  flexDirection:'column',
  gap:'15px'
},
mainsub:{
  display:'flex',
  justifyContent: 'space-between',
  p:'20px',
  flexWrap:'wrap',
  gap:'10px'
},
leftcard:{
  display:'flex',
  // flexWrap:'wrap',
  flexDirection:{md:'column',xs:'row'},
  gap:'30px',
  height:{md:'800px',xs:'250px'},
  overflowY:{md:'scroll',xs:'hidden'},
  overflowX:{md:'hidden',xs:'scroll'},
        '&::-webkit-scrollbar': {
           
            width: '8px',
            color:'#8A8A8A',
            height:'5px'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            backgroundColor:'#D9D9D9',
            borderRadius:'50px',
            height:'5px',
           


          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#8A8A8A',
            borderRadius:'50px',
            color:'#8A8A8A',
           

          },
          p:'5px'

},

rightcard:{
  height:'920px',
  overflowY:'auto',
        '&::-webkit-scrollbar': {
            marginLeft:'5px',
            width: '8px',
            color:'#8A8A8A',
            height:'5px'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            backgroundColor:'#D9D9D9',
            borderRadius:'50px',
            height:'5px',
            marginLeft:'5px',


          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#8A8A8A',
            borderRadius:'50px',
            color:'#8A8A8A',
            marginLeft:'5px',

          },
          p:'5px'

},
innercard:{
  display: 'flex',
    flexDirection: {md:'column',xs:'row'},
    gap: '20px'
},
left:{
  marginBottom: '15px',
  // overflow: 'auto',
  // width: '320px',
  // display: 'flex',
  // flexDirection: {md:'column',xs:'row'},
  // gap: '20px',
  // '&::-webkit-scrollbar': {   
  //   width: '8px',
  //   color:'#8A8A8A',
  //   height:'5px'
  // },
  // '&::-webkit-scrollbar-track': {
  //   boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  //   webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  //   backgroundColor:'#D9D9D9',
  //   borderRadius:'50px',
  //   height:'5px',
  // },
  // '&::-webkit-scrollbar-thumb': {
  //   backgroundColor: '#8A8A8A',
  //   borderRadius:'50px',
  //   color:'#8A8A8A',
  // },
  // p:'10px',
  // mt:'25px'
  position: 'relative',
  top: {md:'-70px',xs:'0px'},

},
cardslist:{
  height: {md:'900px',xs:'250px'},

  display: 'flex',
  width: {xs:'320px',sm:'auto'},
  flexDirection: {md:'column',xs:'row'},
  overflow: 'auto',
  '&::-webkit-scrollbar': {   
    width: '8px',
    color:'#8A8A8A',
    height:'5px'
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    backgroundColor:'#D9D9D9',
    borderRadius:'50px',
    height:'5px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#8A8A8A',
    borderRadius:'50px',
    color:'#8A8A8A',
  },
  p:'10px',
  mt:'25px',
  gap:'20px'
},
tabbtn:{
  backgroundColor: "#A1CBFD",
}
} 

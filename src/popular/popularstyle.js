import curve from ".//logo/popular.png";
export const styles = {
  popular: {
    backgroundColor: " #F6F7FC",
    paddingBottom: "57px",
    backgroundImage: `url(${curve})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    paddingLeft: { xl: "44px" },
    paddingRight: { xl: "44px" },
  },
  maintitle: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: " 47px",
    letterSpacing: "0em",
    textAlign: "center",
    paddingTop: "57px",
  },
  subtitle: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: " 47px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#4F9AFF",
  },
  card: {
    height: "124px",
    width: "340px",
    marginTop: "20px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: `10px 10px 11px rgba(33,33,33,.2)`,
    },
    // display:'flex',
    // boxShadow:'0px 10px 60px rgba(226, 236, 249, 0.25);'
  },
  cardg: {
    height: "124px",
    width: "318px",
    marginTop: "62px",
    boxShadow: 1,
    backgroundColor: "#4F9AFF",
    color: "white",
    // display:'flex',
    // boxShadow:'0px 10px 60px rgba(226, 236, 249, 0.25);'
  },
  cards: {
    marginTop: "11px",
    marginBottom: "60px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // marginTop:'16px'
  },
  jobtitle: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "29px",
    textTransform: "capitalize",
  },
  subjbtitle: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    // color:'#5D658C'
  },
  subjbtitleg: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#ffff",
  },
  category: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  categoryg: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    color: "white",
  },
};

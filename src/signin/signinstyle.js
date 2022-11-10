import img1 from "./logo/bar1.svg";
import img2 from "./logo/bar2.svg";

export const styles = {
  signin: {
    display: "flex",
  },
  img: {
    marginTop: "24px",
  },
  sinin: {
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "70px",
    letterSpacing: "1.5px",
    marginTop: { md: "112px", xs: "20px" },
    ml: { md: "30px" },
  },
  resin: {
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "70px",
    letterSpacing: "1.5px",
    marginTop: { md: "112px", xs: "20px" },
    textAlign: "center",
  },
  loginbtn: {
    mt: 3,
    mb: 2,
    width: 442,
    maxWidth: 450,
    height: 60,
    backgroundColor: "#4F9AFF",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "20px",
  },
  blue: {
    backgroundColor: "#4F9AFF",
    display: { md: "block", xs: "none" },
    // backgroundImage: `url(${img})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: 'right top',
    // backgroundImage: `url(${img1}),url(${img2})`,
    // zIndex:'-100'
  },
  bluetxt: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "38px",
    lineHeight: "50px",
    paddingLeft: "68px",
    paddingRight: "29px",
    fontFamil: "GreycliffCF-Regular",
    color: "white",
    // letterSpacing:'1.5px',
  },
  bluesub: {
    fontWeight: "300",
    fontSize: "23px",
    paddingLeft: "68px",
    paddingRight: "60px",
    color: "white",
    fontFamil: "GreycliffCF-Regular",
    marginTop: "13px",
  },
  bluemain: {
    marginTop: "155px",
  },
  btmimg: {
    float: "right",

    //  marginTop:'264px',
  },
  input: {
    marginTop: "40px",
  },
  grid: {
    justifyContent: "center",
  },
  bluesml: {
    display: { xs: "flex", md: "none" },
    backgroundColor: "#4F9AFF",
    height: "fit-content",
    width: "auto",
    borderRadius: "10px",
    backgroundImage: `url(${img1}),url(${img2})`,
    backgroundPosition: "right top -225px",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "30px",
  },
  bluetxtsml: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "38px",
    lineHeight: "50px",
    padding: "20px 20px 20px 20px ",
    fontFamil: "GreycliffCF-Regular",
    color: "white",
  },
  bluesubsml: {
    fontWeight: "300",
    fontSize: "23px",
    color: "white",
    fontFamil: "GreycliffCF-Regular",
  },
  sigup: {
    display: "flex",
    gap: "10px",
  },
  card: {
    boxShadow: "30px 50px 21px rgba(33,33,33,.2)",
    borderRadius: "20px",
    padding: "20px",
    margin: "10px",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    justifyContent: "center",
  },
};

import { NEUTRAL } from "../Theme/Colors";

export const styles = {
  btn1: {
    width: "156px",
    height: "42px",
    textTransform: "capitalize",
    justifyContent: "space-around",
    color: "#4F9AFF",
  },
  card: {
    width: "340px",
    height: "265px",
    backgroundColor: NEUTRAL,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    transition: "box-shadow .3s",
    "&:hover": {
      boxShadow: "10px 5px 11px rgba(33,33,33,.2)",
    },
  },
  icon: {
    height: "40px",
    width: "35px",
    padding: "6px",
    pl: 2,
    pr: 2,
    border: "1px solid #87858569",
    borderRadius: "8px",
  },
  companytext: {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "23px",
  },
  boxico: {
    display: "flex",
    gap: "25px",
    justifyContent: "space-between",
    mb: "17px",
  },
  locationtxt: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#4fa9ff",
    mt: "3px",
  },
  roletxt: {
    textTransform: "uppercase",
    fontWeight: "800",
    fontSize: "14px",
    textAlign: "left",
    fontFamily: "GreycliffCF-Bold",
    color: "rgb(0, 120, 140)",
  },
  smalltxt: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  innertxt: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "30px",
    color: " #4A4A4A",
  },
  innericon: {
    width: "15px",
    height: "15px",
    color: "#4F9AFF",
    marginBottom: "2px",
  },
  amttxt: {
    fontSize: "16px",
    fontWeight: "700",
    display: "flex",
  },
  hrtbtn: {
    maxWidth: "35px",
    minWidth: "35px",
    maxHeight: "30px",
    minHeight: "30px",
    borderRadius: "8px",
    backgroundColor: "#D7E8FF",
    border: "none",
  },
  hrticon: {
    color: "#4F9AFF",
  },
  action: {
    justifyContent: "flex-start",
    // justifyContent: "start",
    paddingLeft: "16px",
    gap: "15px",
  },
  actactionOfSalaryion: {
    justifyContent: "space-between",
    // justifyContent: "start",
    paddingLeft: "16px",
  },
  selectedBackgorund: {
    // backgroundColor: "#e4f0fe",
    border: "2px solid #4F9AFF",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
};

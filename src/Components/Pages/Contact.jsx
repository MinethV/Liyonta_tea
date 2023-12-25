import React from "react";
import "./contact.css";
import "custom-input-aslam/build/index.css";
import { AiFillHome } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { Grid, Card } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    alignContent: "center",
    marginBottom: "80px",
    margin: "0 auto"
  }
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="contact-us">
        <div className={"contact"} align="center">
          <Grid item xs={10} sm={8} container justify="center">
            <Card className={"contact-card"}>
              <div className="Aihome" style={{ color: "#015B2F" }}>
                <AiFillHome size={82} />
                <br />
                <br />
                <p1>
                  {" "}
                  Liyonta Tea Factory
                  <br /> Dangala, Alapaladeniya.
                </p1>
              </div>
            </Card>
          </Grid>
          <Grid item xs={20} sm={8} container justify="center">
            <Card className={"contact-card"}>
              <div className="Aiphone" style={{ color: "#015B2F" }}>
                <AiFillPhone size={82} />
                <br />
                <br />
                <p1>
                  +94 413 130 665
                  <br />
                  +94 711804101
                </p1>
              </div>
            </Card>
          </Grid>
          <Grid item xs={20} sm={8} container justify="center">
            <Card className={"contact-card"}>
              <div className="Aimail" style={{ color: "#015B2F" }}>
                <AiFillMail size={82} />
                <br />
                <br />
                <p1>
                  {" "}
                  info@liyontatea.com
                  <br /> sales@liyontatea.com
                </p1>
              </div>
            </Card>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Contact;

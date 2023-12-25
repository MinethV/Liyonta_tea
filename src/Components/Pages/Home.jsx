import React from "react";
import "./home.css";
import {
  Grid,
  Card,
  Button,
  CardMedia,
  CardContent,
  CardActionArea
} from "@material-ui/core";
const Home = () => {
  return (
    <div className="home">
      <Grid className="homescreenimg">
        <Grid item xs={12}>
          <p>
            Want To Taste <br />
            Our <p2>Tea?</p2>
          </p>
          <p1>
            Choose one of our teas, and get
            <br />
            delivered to your home!
          </p1>
          <br />
          <br />
          <Button variant="outlined" className="homescreenimgbt">
            Shop
          </Button>
        </Grid>
        <Grid item xs={12}>
          <img src="/homescreenimg.jpg"></img>
        </Grid>
      </Grid>
      <br />
      <br />

      <div>
        <center>
          <p3>Our Special Teas</p3>
        </center>
        <Grid className="producthome">
          <Grid item xs={12}>
            <img src="/image1.jpg"></img>
            <br />
            <br />
            <p5>Quality</p5>
            <br />
            <p6>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit, sed do
            </p6>
          </Grid>
          <Grid item xs={12}>
            <Card className="productcard" elevation={3}>
              <img src="/image3.jpg"></img>
              <br />
              <br />
              <div className="productcardtext">
                <p5>Quality</p5>
                <br />
                <p6>
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit, sed do
                </p6>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <img src="/image2.jpg"></img>
            <br />
            <br />
            <p5>Quality</p5>
            <br />
            <p6>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit, sed do
            </p6>
          </Grid>
        </Grid>
      </div>

      <br />
      <div>
        <Grid className="About">
          <Grid item xs={12}>
            <img src="/we_are_the_best.png"></img>
          </Grid>
          <Grid item xs={12} className="Aboutdescription">
            <p3>We are the Best</p3> <br /> <br />
            <p4>
              Liyonta Tea is produced in an award winning tea
              <br />
              factory in Southern province in Sri Lanka.
              <br />
              We combine the traditional methods of producing tea
              <br />
              and latest technological methods to bring a quality
              <br />
              product to the tea market. The factory utilizes <br />
              modern, environmentally friendly technologies to
              <br />
              produce this quality tea with a view to minimizing
              <br />
              damage to the environment.
            </p4>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;

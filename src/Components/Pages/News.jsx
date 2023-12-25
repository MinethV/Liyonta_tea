import React from "react";
import useFirestore from "./News/useFirestore";
import { motion } from "framer-motion";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea
} from "@material-ui/core";
import "./news.css";

const News = () => {
  const { docs } = useFirestore("news");
  return (
    <div className="img-grid">
      <br />
      <br />
      <br />
      <div className="specialtea">
        <div className="Countgrid">
          <div className="stat">
            <div className={"statgrid"}>
              <Grid container justify="center">
                {docs &&
                  docs.map((doc) => (
                    <Grid key={doc.id} item xs={12} sm={6} md={5}>
                      <Card className="newscard">
                        <p>{doc.createdAt}</p>
                        <p1>{doc.headline}</p1>
                        <div align="center">
                           {" "}
                          <motion.img
                            src={doc.url}
                            alt="uploaded pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="newsimg"
                          />
                        </div>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

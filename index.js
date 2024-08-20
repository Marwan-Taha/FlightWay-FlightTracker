import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL = "https://api.aviationstack.com/v1";
const API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/get-flight", async (req, res) => {
  let config = {};

  if (req.body.hasOwnProperty("flight_iata")) {
    config = {
      params: {
        access_key: API_KEY,
        flight_iata: req.body.flight_iata,
      },
    };
  } else if (req.body.hasOwnProperty("dep_iata")) {
    config = {
      params: {
        access_key: API_KEY,
        dep_iata: req.body.dep_iata,
        arr_iata: req.body.arr_iata,
      },
    };
  }

  try {
    const response = await axios.get(`${API_URL}/flights`, config);
    const result = response.data;
    if (result.data.length === 0) {
      throw {
        message: "Flight not found",
      };
    }
    res.render("search.ejs", { results: result.data });
  } catch (error) {
    console.log(error.message);
    res.render("search.ejs", { error: error.message });
  }
});

app.get("/search", (req, res) => {
  res.render("search.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

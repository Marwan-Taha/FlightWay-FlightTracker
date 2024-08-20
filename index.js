import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

const API_URL = "https://api.aviationstack.com/v1";



app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/get-flight", async(req, res) => {
    
    let config = {};
    
    if(req.body.hasOwnProperty('flight_iata')) {
        config = {
            params: {
                access_key: "d954056a42905817befea96faefdaff8",
                flight_iata: req.body.flight_iata,                
            }
        }
    } else {
        config = {
            params: {
                access_key: "d954056a42905817befea96faefdaff8",
                dep_iata: req.body.dep_iata,
                arr_iata: req.body.arr_iata,
            }
        }
    }


    try {
        // const response = await axios.get(`${API_URL}/flights`, config);
        //departure:
        // data. flight_status, departure.airport, departure.iata, departure.terminal, departure.gate, departure.scheduled, departure.estimated

        //arrival:
        // .airport, .iata, .terminal, .gate, .baggage, .scheduled, .estimated

        //airline:
        // .name

        //flight:
        // .iata

        //live:
        // .updated, .latitude, .longitude, .altitude, .direction

        // const result = response.data;
        // console.log(result.data);
        res.render("search.ejs", {results: [
            {
              flight_date: '2024-08-18',
              flight_status: 'scheduled',
              departure: {
                airport: 'Logan International',
                timezone: 'America/New_York',
                iata: 'BOS',
                icao: 'KBOS',
                terminal: 'B',
                gate: null,
                delay: 1283,
                scheduled: '2024-08-18T08:00:00+00:00',
                estimated: '2024-08-18T08:00:00+00:00',
                actual: null,
                estimated_runway: null,
                actual_runway: null
              },
              arrival: {
                airport: 'Charlotte Douglas',
                timezone: 'America/New_York',
                iata: 'CLT',
                icao: 'KCLT',
                terminal: 'N',
                gate: 'B13',
                baggage: 'CD4',
                delay: null,
                scheduled: '2024-08-18T10:30:00+00:00',
                estimated: '2024-08-18T10:30:00+00:00',
                actual: null,
                estimated_runway: null,
                actual_runway: null
              },
              airline: { name: 'American Airlines', iata: 'AA', icao: 'AAL' },
              flight: {
                number: '1004',
                iata: 'AA1004',
                icao: 'AAL1004',
                codeshared: null
              },
              aircraft: null,
              live: null
            },
            {
              flight_date: '2024-08-18',
              flight_status: 'scheduled',
              departure: {
                airport: 'Charlotte Douglas',
                timezone: 'America/New_York',
                iata: 'CLT',
                icao: 'KCLT',
                terminal: null,
                gate: 'C15',
                delay: null,
                scheduled: '2024-08-18T11:20:00+00:00',
                estimated: '2024-08-18T11:20:00+00:00',
                actual: null,
                estimated_runway: null,
                actual_runway: null
              },
              arrival: {
                airport: 'Orlando International',
                timezone: 'America/New_York',
                iata: 'MCO',
                icao: 'KMCO',
                terminal: 'B',
                gate: '57',
                baggage: '24',
                delay: null,
                scheduled: '2024-08-18T13:08:00+00:00',
                estimated: '2024-08-18T13:08:00+00:00',
                actual: null,
                estimated_runway: null,
                actual_runway: null
              },
              airline: { name: 'American Airlines', iata: 'AA', icao: 'AAL' },
              flight: {
                number: '1004',
                iata: 'AA1004',
                icao: 'AAL1004',
                codeshared: null
              },
              aircraft: null,
              live: null
            },
            {
              flight_date: '2024-08-17',
              flight_status: 'landed',
              departure: {
                airport: 'Logan International',
                timezone: 'America/New_York',
                iata: 'BOS',
                icao: 'KBOS',
                terminal: 'B',
                gate: 'B10',
                delay: 19,
                scheduled: '2024-08-17T08:00:00+00:00',
                estimated: '2024-08-17T08:00:00+00:00',
                actual: '2024-08-17T08:18:00+00:00',
                estimated_runway: '2024-08-17T08:18:00+00:00',
                actual_runway: '2024-08-17T08:18:00+00:00'
              },
              arrival: {
                airport: 'Charlotte Douglas',
                timezone: 'America/New_York',
                iata: 'CLT',
                icao: 'KCLT',
                terminal: 'C',
                gate: 'C12',
                baggage: 'C3',
                delay: null,
                scheduled: '2024-08-17T10:30:00+00:00',
                estimated: '2024-08-17T10:30:00+00:00',
                actual: '2024-08-17T10:06:00+00:00',
                estimated_runway: '2024-08-17T10:06:00+00:00',
                actual_runway: '2024-08-17T10:06:00+00:00'
              },
              airline: { name: 'American Airlines', iata: 'AA', icao: 'AAL' },
              flight: {
                number: '1004',
                iata: 'AA1004',
                icao: 'AAL1004',
                codeshared: null
              },
              aircraft: {
                registration: 'N903AA',
                iata: 'A321',
                icao: 'A321',
                icao24: 'AC7A52'
              },
              live: null
            },
            {
              flight_date: '2024-08-17',
              flight_status: 'landed',
              departure: {
                airport: 'Charlotte Douglas',
                timezone: 'America/New_York',
                iata: 'CLT',
                icao: 'KCLT',
                terminal: null,
                gate: 'C14',
                delay: 14,
                scheduled: '2024-08-17T11:20:00+00:00',
                estimated: '2024-08-17T11:20:00+00:00',
                actual: '2024-08-17T11:34:00+00:00',
                estimated_runway: '2024-08-17T11:34:00+00:00',
                actual_runway: '2024-08-17T11:34:00+00:00'
              },
              arrival: {
                airport: 'Orlando International',
                timezone: 'America/New_York',
                iata: 'MCO',
                icao: 'KMCO',
                terminal: 'B',
                gate: '57',
                baggage: '24',
                delay: null,
                scheduled: '2024-08-17T13:08:00+00:00',
                estimated: '2024-08-17T13:08:00+00:00',
                actual: '2024-08-17T12:42:00+00:00',
                estimated_runway: '2024-08-17T12:42:00+00:00',
                actual_runway: '2024-08-17T12:42:00+00:00'
              },
              airline: { name: 'American Airlines', iata: 'AA', icao: 'AAL' },
              flight: {
                number: '1004',
                iata: 'AA1004',
                icao: 'AAL1004',
                codeshared: null
              },
              aircraft: {
                registration: 'N186US',
                iata: 'A321',
                icao: 'A321',
                icao24: 'A158C9'
              },
              live: null
            }
          ]});
    } catch (error) {
        console.log(error.message);
        res.render("index.ejs", {error: error.message});
    }
});

app.get("/search", (req, res) => {
    res.render("search.ejs");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

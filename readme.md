# FlightWay - Real-Time Flight Tracking Web App

Welcome to FlightWay, a sleek and modern web application that allows users to track flights in real-time. Built with Node.js, Express, and modern web technologies, FlightWay offers a seamless experience for users to monitor global air traffic.

## Features

- **Real-Time Flight Tracking:** Track flights across the globe with up-to-the-minute data.
- **User-Friendly Interface:** A clean, intuitive design that makes tracking flights effortless.
- **Search by Flight Number:** Simply enter a flight number to get detailed flight information.
- **Responsive Design:** Fully optimized for both desktop and mobile devices.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **npm**: npm is installed automatically with Node.js.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/skytrack.git

2. **Install the dependencies:**<br />
Run the following command to install all necessary dependencies: <br />
    ```bash
    npm install 

3. **Set up environment variables:**<br />
Create a .env file in the root directory of the project and add your AviationStack API key:<br />
You can get an API key by Signing up on Aviationstack from [here](https://aviationstack.com/login)
    ```bash
    API_KEY=your_aviationstack_api_key
    
4. **Start the server**:\
    Use the following command to start the server:
    ```bash
    node index.js
    ```
    Alternatively, if you are developing and want      to enable automatic restarting when files          change, you can use ```nodemon```
    ```bash
    nodemon index.js
    ```

5.  **Access the application**: <br />
    Open your browser and go to:
    ```bash
    http://localhost:3000
    ```
    You should see the FlightWay homepage where you can begin tracking flights.



### Usage

1. Enter the required flight details in the search form.
2. Submit the form to retrieve real-time flight information.
3. Submit the form to retrieve real-time flight information.



### Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.


### License
This project is licensed under the MIT License. 

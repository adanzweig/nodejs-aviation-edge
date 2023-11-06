# Flight Data Retrieval Service

This service is designed to fetch real-time data for specific flights using the Aviation Edge API. By providing the IATA flight code, users can retrieve detailed information about flights, such as status, departure and arrival times, and other relevant data.

## Features

- Fetch flight data using IATA flight codes.
- Environment variables for API security.
- Asynchronous API calls for real-time data retrieval.
- Error handling for robust service performance.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need Node.js and npm installed on your system to run this service. You can download and install them from [Node.js official website](https://nodejs.org/).

Aviation-edge apiKey from [Aviation-edge](https://aviation-edge.com/)

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/adanzweig/nodejs-aviation-edge.git
```

Then, navigate to the project directory:

```bash
cd nodejs-aviation-edge
```

Install the required dependencies:

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory of your project. Add the following line and replace `YourApiKey` with your actual API key from Aviation Edge:

```env
API_KEY=YourApiKey
```

### Running the Service

To start the service, run the following command:

```bash
node index.js
```

Replace `index.js` with the actual filename of your script.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Aviation Edge API for providing the flight data.
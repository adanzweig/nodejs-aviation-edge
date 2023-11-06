// Load the environment variables from the .env file
require('dotenv').config();

/**
 * Asynchronously fetches flight data for a given flight code.
 * @param {string} flightCode - The IATA code of the flight to retrieve data for.
 * @returns {Promise<Object>} - A promise that resolves to the flight data.
 */
async function getFlightData(flightCode) { // Example flightCode: 'AA953'
    try {
        // Construct the API request URL using the provided flight code and the API key from environment variables
        const request = await fetch(`https://aviation-edge.com/v2/public/flights?key=${process.env.API_KEY}&flightIata=${flightCode}`);
        // Parse the JSON response from the API request
        const response = await request.json();
        // Return the parsed flight data
        return response;
    } catch (error) {
        // Log any errors that occur during the API request or JSON parsing
        console.error('Error', error);
    }
}

// Self-invoking anonymous function to use async/await at the top level
(async () => {
    // Retrieve flight information using the getFlightData function
    const flightInfo = await getFlightData('AA953');
    // Log the flight information to the console
    console.log(flightInfo);
})();

const fetch = require('node-fetch');

exports.handler = async (event) => {
    try {
        const response = await fetch("https://api.printful.com/sync/products", {
            method: "GET",
            headers: {
                "Authorization": "Bearer I3rUXUDVvQRxC9eedtBPzud02LeW5gIPP76qzvGgULmO3EENwcvSzNllwVZp96ud",
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch products from Printful" })
        };
    }
};

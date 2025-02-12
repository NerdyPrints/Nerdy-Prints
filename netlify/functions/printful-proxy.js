const fetch = require('node-fetch');

exports.handler = async (event) => {
    try {
        const response = await fetch("https://api.printful.com/sync/products", {
            method: "GET",
            headers: {
                "Authorization": "Bearer vWBya1OJD02RC0ONWNZmshKSfRPE0uS52v8N7ybQ",
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

const fetch = require('node-fetch');

exports.handler = async (event) => {
    const productId = event.queryStringParameters.product_id; // If a product ID is passed, get that specific product
    const endpoint = productId
        ? `https://api.printful.com/sync/products/${productId}`
        : "https://api.printful.com/sync/products";

    try {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Authorization": "Bearer vWBya1OJD02RC0ONWNZmshKSfRPE0uS52v8N7ybQ",
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        return {
            statusCode: response.status,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch data from Printful" })
        };
    }
};

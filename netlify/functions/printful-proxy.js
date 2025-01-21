const fetch = require('node-fetch');

exports.handler = async (event) => {
    try {
        const response = await fetch('https://api.printful.com/products', {
            headers: {
                Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
            },
        });
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error('Error fetching data from Printful:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch products' }),
        };
    }
};

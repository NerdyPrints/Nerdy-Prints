const fetch = require('node-fetch');

exports.handler = async (event) => {
    try {
        const response = await fetch('https://api.printful.com/products', {
            headers: {
                Authorization: 'Bearer vdwuBwWE9JefftyUluEMxJwk1yFC17mDXNsX9rxjXMnSWvmAkL9qLxOb72E0aODm'
            }
        });
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch products', details: error.message }),
        };
    }
};

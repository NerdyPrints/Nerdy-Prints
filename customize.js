
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product_id');
    const container = document.getElementById('product-details');

    try {
        const response = await fetch('https://nerdyprints.netlify.app/.netlify/functions/printful-proxy');
        const data = await response.json();
        const product = data.result.find(p => p.id == productId);
        if (product) {
            container.innerHTML = `
                <h1>${product.name}</h1>
                <p>Customize your ${product.name} here!</p>
            `;
        } else {
            container.innerHTML = '<p>Product not found</p>';
        }
    } catch (error) {
        container.innerHTML = '<p>Error loading product details</p>';
    }
});

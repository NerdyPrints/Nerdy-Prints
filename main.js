
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('product-container');

    try {
        const response = await fetch('https://nerdyprints.netlify.app/.netlify/functions/printful-proxy');
        const data = await response.json();
        if (data && data.result) {
            data.result.forEach(product => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h3>${product.name}</h3>
                    <a href="customize.html?product_id=${product.id}">Customize</a>
                `;
                container.appendChild(div);
            });
        } else {
            container.innerHTML = '<p>No products available</p>';
        }
    } catch (error) {
        container.innerHTML = '<p>Error loading products</p>';
    }
});

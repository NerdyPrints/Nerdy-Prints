document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('product-container');

    try {
        const response = await fetch('https://nerdyprints.netlify.app/.netlify/functions/printful-proxy');
        const data = await response.json();

        // Ensure we have a valid product list
        if (data && data.result && Array.isArray(data.result)) {
            container.innerHTML = ''; // Clear previous content

            data.result.forEach(product => {
                if (product.name && product.id) {
                    const div = document.createElement('div');
                    div.classList.add('product-card');

                    div.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>${product.description ? product.description : 'Customizable product'}</p>
                        <a href="customize.html?product_id=${product.id}">Customize</a>
                    `;

                    container.appendChild(div);
                }
            });
        } else {
            container.innerHTML = '<p>No products available</p>';
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        container.innerHTML = '<p>Error loading products</p>';
    }
});

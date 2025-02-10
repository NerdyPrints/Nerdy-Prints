document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('product-container');

    try {
        const response = await fetch('https://nerdyprints.netlify.app/.netlify/functions/printful-proxy');
        const data = await response.json();

        console.log("API Response:", data); // Debugging: View the API response

        if (data && data.result && Array.isArray(data.result)) {
            container.innerHTML = ''; // Clear previous content

            data.result.forEach(product => {
                console.log("Processing product:", product); // Debugging: Check each product's data

                // Check which field actually contains the name
                const productName = product.type_name ? product.type_name : 'Unnamed Product';
                const productImage = product.thumbnail_url ? product.thumbnail_url : 'https://via.placeholder.com/150';

                if (product.id && productName) {
                    const div = document.createElement('div');
                    div.classList.add('product-card');

                    div.innerHTML = `
                        <img src="${productImage}" alt="${productName}">
                        <h3>${productName}</h3>
                        <p>${product.description ? product.description : 'Customizable product'}</p>
                        <a href="customize.html?product_id=${product.id}">Customize</a>
                    `;

                    container.appendChild(div);
                } else {
                    console.warn("Skipping product with missing data:", product);
                }
            });
        } else {
            console.error("Invalid product data structure:", data);
            container.innerHTML = '<p>No products available</p>';
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        container.innerHTML = '<p>Error loading products</p>';
    }
});

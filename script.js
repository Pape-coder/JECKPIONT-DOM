document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.item');

    cartItems.forEach(item => {
        const decreaseButton = item.querySelector('.decrease');
        const increaseButton = item.querySelector('.increase');
        const removeButton = item.querySelector('.remove');
        const likeButton = item.querySelector('.like');
        const quantityDisplay = item.querySelector('.item-quantity');
        const priceDisplay = item.querySelector('.item-price');
        const price = parseFloat(priceDisplay.dataset.price);

        // Fonction pour mettre à jour le total
        const updateTotal = () => {
            const totalPriceDisplay = document.querySelector('.total-price');
            const total = Array.from(cartItems).reduce((acc, curr) => {
                const quantity = parseInt(curr.querySelector('.item-quantity').textContent);
                const itemPrice = parseFloat(curr.querySelector('.item-price').dataset.price);
                return acc + (quantity * itemPrice);
            }, 0);
            totalPriceDisplay.textContent = `${total} €`;
        };

        // Événement pour diminuer la quantité
        decreaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityDisplay.textContent);
            if (quantity > 1) {
                quantityDisplay.textContent = quantity - 1;
                updateTotal();
            }
        });

        // Événement pour augmenter la quantité
        increaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityDisplay.textContent);
            quantityDisplay.textContent = quantity + 1;
            updateTotal();
        });

        // Événement pour supprimer l'article
        removeButton.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });

        // Événement pour aimer l'article
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });

    // Met à jour le total initial
    updateTotal();
});

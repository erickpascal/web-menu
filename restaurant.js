const restaurants = [
    {
        id: 1,
        name: "KFC Maputo",
        cuisine: "Fried Chicken",
        rating: 4.5,
        deliveryTime: "20-30 min",
        price: "$$",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60",
        featured: true
    },
    {
        id: 2,
        name: "Jimmy's Burgers",
        cuisine: "American Burgers",
        rating: 4.7,
        deliveryTime: "25-35 min",
        price: "$$$",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
        featured: false
    },
    {
        id: 3,
        name: "Pizza Moz",
        cuisine: "Italian Pizza",
        rating: 4.3,
        deliveryTime: "30-45 min",
        price: "$$",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60",
        featured: true
    },
    {
        id: 4,
        name: "Matapa King",
        cuisine: "Local Mozambican",
        rating: 4.8,
        deliveryTime: "15-25 min",
        price: "$",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&auto=format&fit=crop&q=60",
        featured: false
    }
];

// Render restaurants to mobile view
function renderRestaurants() {
    const container = document.getElementById('restaurant-list');
    container.innerHTML = '';

    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-sm overflow-hidden';
        card.innerHTML = `
            <div class="relative">
                <img src="${restaurant.image}" alt="${restaurant.name}" class="w-full h-40 object-cover">
                ${restaurant.featured ? 
                    '<span class="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">Featured</span>' : ''}
            </div>
            <div class="p-4">
                <div class="flex justify-between">
                    <h3 class="font-bold">${restaurant.name}</h3>
                    <span class="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full">${restaurant.rating} ★</span>
                </div>
                <p class="text-gray-500 text-sm mt-1">${restaurant.cuisine} • ${restaurant.price}</p>
                <div class="flex justify-between items-center mt-3">
                    <span class="text-sm">${restaurant.deliveryTime}</span>
                    <button class="bg-primary text-white px-3 py-1 rounded-full text-sm add-to-cart" 
                            data-id="${restaurant.id}">Order</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', renderRestaurants);
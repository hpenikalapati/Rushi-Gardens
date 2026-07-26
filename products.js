const defaultProducts = [
  { id: 'green-okra', name: 'Green Okra', pricePerLb: 3.50, inStock: true },
  { id: 'eggplant', name: 'Eggplant', pricePerLb: 1.99, inStock: true },
  { id: 'gongura', name: 'Gongura', pricePerLb: 7, inStock: true },
  { id: 'mango', name: 'Mangos', pricePerLb: 6, inStock: true },
  { id: 'tomato', name: 'Tomatoes', pricePerLb: 1.49, inStock: true },
  { id: 'guava', name: 'Guavas', pricePerLb: 3.99, inStock: true },
  { id: 'lychee', name: 'Lychees', pricePerLb: 5.99, inStock: false }
];

// Helper functions to manage LocalStorage persistence
function getInventory() {
  const saved = localStorage.getItem('rushi_inventory');
  return saved ? JSON.parse(saved) : defaultProducts;
}

function saveInventory(inventory) {
  localStorage.setItem('rushi_inventory', JSON.stringify(inventory));
}

const defaultProducts = [
  { id: 'green-okra', name: 'Green Okra', pricePerLb: 3.50, inStock: true },
  { id: 'red-okra', name: 'Red Okra', pricePerLb: 3.00, inStock: true },
  { id: 'eggplant', name: 'Eggplant', pricePerLb: 3.00, inStock: true },
  { id: 'gongura', name: 'Gongura', pricePerLb: 7.00, inStock: true },
  { id: 'green-chilies', name: 'Green Chilies', pricePerLb: 5.00, inStock: true },
  { id: 'tomato', name: 'Indian Tomatoes', pricePerLb: 3.00, inStock: true },
  { id: 'cluster-beans', name: 'Cluster Beans', pricePerLb: 4.00, inStock: true },
  { id: 'ridge-gourd', name: 'Ridge Gourd', pricePerLb: 2.00, inStock: true },
  { id: 'mango', name: 'Mangos', pricePerLb: 6.00, inStock: true },
  { id: 'suppota', name: 'Suppota', pricePerLb: 6.00, inStock: true },
  { id: 'sugar-apple', name: 'Sugar Apple', pricePerLb: 15, inStock: true },
  { id: 'guava', name: 'Guavas', pricePerLb: 5.00, inStock: true },
  { id: 'lychee', name: 'Lychees', pricePerLb: 11.00, inStock: false },
  { id: 'banana', name: 'Indian Karpuravali Banana', pricePerLb: 1.49, inStock: false },
  { id: 'jackfruit-whole', name: 'Whole Jackfruit', pricePerLb: 1.00, inStock: true },
  { id: 'jackfruit-pieces', name: 'Jackfruit Pieces', pricePerLb: 1.25, inStock: true },
  { id: 'tindora', name: 'Tindora', pricePerLb: 4.00, inStock: true },
  { id: 'paan-leaves', name: 'Paan Leaves', pricePerLb: 0.20, inStock: true },
  { id: 'eggs', name: 'Eggs', pricePerLb: 9.00, inStock: true }
];

// Helper functions to manage LocalStorage persistence
function getInventory() {
  const saved = localStorage.getItem('rushi_inventory');
  return saved ? JSON.parse(saved) : defaultProducts;
}

function saveInventory(inventory) {
  localStorage.setItem('rushi_inventory', JSON.stringify(inventory));
}

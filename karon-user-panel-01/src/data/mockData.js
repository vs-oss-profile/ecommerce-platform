export const categories = [
  { id: 'electronics', name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80' },
  { id: 'fashion', name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80' },
  { id: 'home', name: 'Home & Decor', image: 'https://images.unsplash.com/photo-1484101403033-57105d2b77ca?w=500&q=80' },
  { id: 'sports', name: 'Sports', image: 'https://images.unsplash.com/photo-1461896708112-614f1088496c?w=500&q=80' },
];

export const products = [
  {
    id: 'p1',
    name: 'Wireless Headphones',
    price: 99.99,
    category: 'electronics',
    description: 'High-quality wireless headphones with noise-canceling technology.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    details: 'Immerse yourself in high-fidelity sound with our latest wireless headphones. Featuring up to 30 hours of battery life and active noise cancellation, they are perfect for travel and daily use.'
  },
  {
    id: 'p2',
    name: 'Smart Watch',
    price: 199.99,
    category: 'electronics',
    description: 'Track your fitness and stay connected with this stylish smart watch.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    details: 'Stay ahead of your health goals with advanced heart rate monitoring and GPS tracking. Receive notifications from your favorite apps right on your wrist.'
  },
  {
    id: 'p3',
    name: 'Classic Leather Jacket',
    price: 249.99,
    category: 'fashion',
    description: 'A timeless leather jacket for any wardrobe.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
    details: 'Crafted from premium genuine leather, this jacket offers a modern fit and durable construction that only gets better with age.'
  },
  {
    id: 'p4',
    name: 'Denim Jeans',
    price: 59.99,
    category: 'fashion',
    description: 'Comfortable and stylish denim jeans.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
    details: 'These slim-fit jeans are made with a touch of stretch for all-day comfort. Featuring a classic five-pocket design and a versatile wash.'
  },
  {
    id: 'p5',
    name: 'Modern Table Lamp',
    price: 45.00,
    category: 'home',
    description: 'Sleek and modern lamp to brighten up your desk.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
    details: 'The minimalist design of this table lamp adds a touch of sophistication to any workspace. Features adjustable brightness and a warm glow.'
  },
  {
    id: 'p6',
    name: 'Yoga Mat',
    price: 29.99,
    category: 'sports',
    description: 'Durable non-slip yoga mat for all exercise types.',
    image: 'https://images.unsplash.com/photo-1592432676556-947f81498b04?w=500&q=80',
    details: 'Eco-friendly and extra thick for added comfort during your practice. The non-slip surface provides excellent grip even during intense sessions.'
  }
];

export const orders = [
  {
    id: 'ORD-1001',
    date: '2024-03-15',
    total: 299.98,
    status: 'Delivered',
    items: [
      { id: 'p1', name: 'Wireless Headphones', price: 99.99, quantity: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
      { id: 'p2', name: 'Smart Watch', price: 199.99, quantity: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' }
    ]
  },
  {
    id: 'ORD-1002',
    date: '2024-03-20',
    total: 249.99,
    status: 'Processing',
    items: [
      { id: 'p3', name: 'Classic Leather Jacket', price: 249.99, quantity: 1, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80' }
    ]
  },
  {
    id: 'ORD-0995',
    date: '2024-02-10',
    total: 45.00,
    status: 'Returned',
    items: [
      { id: 'p5', name: 'Modern Table Lamp', price: 45.00, quantity: 1, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80' }
    ]
  }
];

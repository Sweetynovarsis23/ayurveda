export const products = [
  {
    id: 1,
    name: "Ashwagandha Extract",
    category: "Supplements",
    price: 24.99,
    rating: 4.8,
    reviewCount: 124,
    tags: ["Organic", "Stress Relief", "Best Seller"],
    description: "Premium root extract for stress relief and energy support. 100% organic and ethically harvested.",
    fullDescription: "Our Ashwagandha Extract is derived from the highest quality roots, processed using traditional methods to preserve the full spectrum of beneficial alkaloids. This powerful adaptogen helps the body manage stress, promotes better sleep, and supports holistic vitality.",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800",
    benefits: ["Reduces Stress", "Boosts Immunity", "Improves Sleep"],
    ingredients: ["Ashwagandha Root (500mg)", "Black Pepper Extract", "Vegan Capsule"],
    instructions: "Take 1 capsule twice daily with milk or water.",
    faqs: [
      { q: "Is it safe for daily use?", a: "Yes, our extract is designed for long-term supportive use." },
      { q: "When should I take it?", a: "Ideally once in the morning and once before bed." }
    ],
    reviews: [
      { user: "Sarah J.", rating: 5, date: "2024-03-12", text: "Truly life-changing! My anxiety levels have dropped significantly." },
      { user: "Mark R.", rating: 4, date: "2024-02-28", text: "Great quality, though it took about 2 weeks to notice the full effect." }
    ]
  },
  {
    id: 2,
    name: "Kumkumadi Facial Oil",
    category: "Oils / Skincare",
    price: 45.00,
    rating: 4.9,
    reviewCount: 89,
    tags: ["Natural Glow", "Traditional", "Pure Saffron"],
    description: "Tranditional Ayurvedic serum for glowing skin and anti-aging benefits. Infused with saffron and natural herbs.",
    fullDescription: "Known as the 'Miraculous Elixir', this oil is a blend of 26 rare herbs and pure Kashmiri Saffron. It's formulated to brighten the complexion, reduce dark spots, and provide a natural, youthful radiance.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    benefits: ["Brightens Skin", "Evens Tone", "Reduces Dark Spots"],
    ingredients: ["Kashmiri Saffron", "Sandalwood Oil", "Manjistha", "Goat Milk"],
    instructions: "Apply 2-3 drops on clean face before bed.",
    faqs: [
      { q: "Can I use it on oily skin?", a: "Yes, it is non-comedogenic and helps balance natural oils." },
      { q: "How long does a bottle last?", a: "With daily use, one bottle lasts approx. 3 months." }
    ],
    reviews: [
      { user: "Elena P.", rating: 5, date: "2024-03-15", text: "The glow is real! I've stopped wearing foundation thanks to this oil." }
    ]
  },
  {
    id: 3,
    name: "Moringa Green Tea",
    category: "Teas",
    price: 18.50,
    rating: 4.7,
    reviewCount: 56,
    tags: ["Detox", "Antioxidant Rich", "Caffeine Light"],
    description: "Detoxifying blend of organic moringa leaves and Himalayan green tea. Rich in antioxidants.",
    fullDescription: "A superfood blend that combines the nutrient density of Moringa leaves with the refreshing taste of Himalayan Green Tea. Perfect for a morning detox or a mid-day energy lift without the jitters.",
    image: "https://images.unsplash.com/photo-1639241181542-b20bc1d0a1dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: ["Detoxifies Body", "Boosts Metabolism", "Rich in Vitamins"],
    ingredients: ["Organic Moringa Leaves", "Himalayan Green Tea Leaves", "Lemon Peel"],
    instructions: "Steep 1 bag in hot water for 3-5 minutes.",
    faqs: [
      { q: "Does it contain caffeine?", a: "It contains a very low amount of natural caffeine from green tea." }
    ],
    reviews: [
      { user: "James T.", rating: 5, date: "2024-01-20", text: "Best tasting green tea I've found. Very refreshing." }
    ]
  },
  {
    id: 4,
    name: "Brahmi Hair Oil",
    category: "Oils / Haircare",
    price: 22.00,
    rating: 4.6,
    reviewCount: 78,
    tags: ["Hair Growth", "Root Strength", "Herbal"],
    description: "Nourishing oil for hair growth and scalp health. Infused with Brahmi and coconut oil.",
    fullDescription: "Traditional head massage oil that promotes hair growth by stimulating the scalp and nourishing the follicles. Brahmi is known in Ayurveda to also have a cooling effect on the mind.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
    benefits: ["Promotes Growth", "Prevents Hairfall", "Cools Scalp"],
    ingredients: ["Brahmi Extract", "Organic Coconut Oil", "Amla Oil", "Bhringraj"],
    instructions: "Massage into scalp once or twice a week.",
    faqs: [
      { q: "Should I leave it overnight?", a: "Yes, for best results leave it on for at least 2 hours or overnight." }
    ],
    reviews: [
      { user: "Aisha K.", rating: 4, date: "2024-02-12", text: "Reduced my hair fall by half in a month. Smells very herbal." }
    ]
  },
  {
    id: 5,
    name: "Triphala Powder",
    category: "Supplements",
    price: 15.99,
    rating: 4.8,
    reviewCount: 142,
    tags: ["Digestion", "Colon Cleanse", "Traditional"],
    description: "Powerhouse of three fruits for digestive health and gentle detoxification.",
    fullDescription: "The formula consists of three fruits native to the Indian subcontinent: Amalaki, Bibhitaki, and Haritaki. It is the most popular Ayurvedic formula for digestive regularity and overall wellness.",
    image: "https://images.unsplash.com/photo-1512106374988-c95f566d39ef?auto=format&fit=crop&q=80&w=800",
    benefits: ["Improves Digestion", "Natural Laxative", "Full of Vitamin C"],
    ingredients: ["Amalaki Fruit", "Bibhitaki Fruit", "Haritaki Fruit"],
    instructions: "Take 1 tsp with warm water before bed.",
    faqs: [
      { q: "Can I take it every day?", a: "Yes, it is non-habit forming and safe for daily digestive support." }
    ],
    reviews: [
      { user: "Robert D.", rating: 5, date: "2024-03-01", text: "Essential part of my morning routine now. Great for gut health." }
    ]
  }
];

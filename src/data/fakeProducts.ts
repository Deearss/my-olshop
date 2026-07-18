export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string[];
  image: string;
}

export const fakeProducts: Product[] = [
  {
    id: 1,
    name: "Empal Jagung",
    price: 3000,
    description: "Empal jagung yang gurih dan renyah.",
    category: ["gorengan"],
    image: "https://picsum.photos/150?random=1",
  },
  {
    id: 2,
    name: "Risoles",
    price: 4000,
    description: "Risoles dengan isian sayuran dan daging.",
    category: ["gorengan"],
    image: "https://picsum.photos/150?random=2",
  },
  {
    id: 3,
    name: "Bakwan",
    price: 2000,
    description: "Bakwan sayur yang renyah dan gurih.",
    category: ["gorengan"],
    image: "https://picsum.photos/150?random=3",
  },
  {
    id: 4,
    name: "Teh Es Original",
    price: 6000,
    description: "Teh es segar dengan rasa original.",
    category: ["teh"],
    image: "https://picsum.photos/150?random=4",
  },
  {
    id: 5,
    name: "Nasi Goreng Original",
    price: 15000,
    description: "Nasi goreng dengan bumbu khas original.",
    category: ["aneka nasi"],
    image: "https://picsum.photos/150?random=5",
  },
  {
    id: 6,
    name: "Mie Yamin",
    price: 20000,
    description: "Mie yamin dengan rasa manis dan gurih.",
    category: ["mie"],
    image: "https://picsum.photos/150?random=6",
  },
  {
    id: 7,
    name: "Nasi Goreng Jumbo",
    price: 25000,
    description: "Nasi goreng porsi jumbo yang mengenyangkan.",
    category: ["nasi"],
    image: "https://picsum.photos/150?random=7",
  },
  {
    id: 9,
    name: "Jus Jeruk",
    price: 7000,
    description: "Jus jeruk segar yang kaya akan vitamin C.",
    category: ["jus"],
    image: "https://picsum.photos/150?random=8",
  },
  {
    id: 10,
    name: "Mie Ayam",
    price: 18000,
    description: "Mie ayam dengan potongan daging ayam yang lezat.",
    category: ["mie"],
    image: "https://picsum.photos/150?random=9",
  },
];

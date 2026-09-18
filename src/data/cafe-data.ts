import { CafeFacility, GalleryItem, MenuItem, OperatingSchedule } from "@/types/cafe";

export const CAFE_INFO = {
  name: "Kopi Sangkara",
  tagline: "Menyeduh Ketenangan, Merayakan Rasa",
  shortDescription:
    "Ruang santai artisanal yang memadukan kehangatan seduhan kopi nusantara dengan kenyamanan arsitektur Nordic bernuansa alami.",
  address: "Jl. Diponegoro No. 42, Temanggung, Jawa Tengah",
  mapsUrl: "https://maps.google.com/?q=Kopi+Sangkara",
  whatsappUrl: "https://wa.me/6281234567890?text=Halo%20Kopi%20Sangkara,%20saya%20ingin%20tanya%20info%20menu/reservasi",
  instagramUrl: "https://instagram.com/kopisangkara",
  posSystemUrl: "https://kopi-sangkara-pos.vercel.app",
};

export const OPERATING_HOURS: OperatingSchedule[] = [
  {
    days: "Senin – Jumat",
    hours: "08.00 – 22.00 WIB",
    note: "Pagi cerah untuk kerja fokus & laptopan",
  },
  {
    days: "Sabtu – Minggu",
    hours: "07.30 – 23.00 WIB",
    note: "Suasana santai akhir pekan & live slow brew",
  },
];

export const CAFE_FACILITIES: CafeFacility[] = [
  {
    id: "wifi",
    name: "High-Speed WiFi",
    description: "Koneksi simetris 100 Mbps, lancar untuk meeting online dan remote work.",
    iconName: "Wifi",
  },
  {
    id: "power",
    name: "Stopkontak Tiap Meja",
    description: "Tersedia stopkontak di setiap sudut meja indoor dan communal bar.",
    iconName: "Zap",
  },
  {
    id: "seats",
    name: "Ergonomic & Nordic Seating",
    description: "Kursi kayu oak bernuansa minimalis dengan busa nyaman untuk duduk lama.",
    iconName: "Armchair",
  },
  {
    id: "beans",
    name: "Single Origin Roastery",
    description: "Biji kopi pilihan dari perkebunan lokal lereng Sindoro-Sumbing diproses presisi.",
    iconName: "Coffee",
  },
  {
    id: "space",
    name: "Indoor AC & Outdoor Garden",
    description: "Pilihan ruangan ber-AC bebas asap dan area taman rindang terbuka.",
    iconName: "Sun",
  },
  {
    id: "prayer",
    name: "Mushola & Toilet Bersih",
    description: "Fasilitas ibadah lengkap dan sanitasi standar higienis tinggi.",
    iconName: "HeartHandshake",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "sangkara-palm-latte",
    name: "Sangkara Palm Latte",
    category: "signature",
    price: 24000,
    description: "Espresso house blend dipadu susu segar lembut dan gula aren organik khas Temanggung.",
    isSignature: true,
    isPopular: true,
    tags: ["Signature", "Best Seller"],
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "cloud-cinnamon-coldbrew",
    name: "Cloud Cinnamon Cold Brew",
    category: "signature",
    price: 26000,
    description: "Slow-drip cold brew 16 jam dengan sentuhan kayu manis dan sweet cold cream foam.",
    isSignature: true,
    isPopular: true,
    tags: ["Cold Brew", "Artisan"],
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "espresso-double",
    name: "Classic Double Espresso",
    category: "espresso",
    price: 18000,
    description: "Ekstraksi padat 2 shot dengan crema tebal aroma floral dan dark chocolate balance.",
    tags: ["Espresso"],
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "flat-white",
    name: "Velvet Flat White",
    category: "espresso",
    price: 24000,
    description: "Ristretto ganda dengan microfoam susu sutra menghasilkan tekstur lembut seimbang.",
    tags: ["Espresso", "Milk"],
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "v60-sindoro-natural",
    name: "V60 Sindoro Natural",
    category: "manual-brew",
    price: 25000,
    description: "Single origin Arabika Sindoro dengan profil rasa berry sweetness, plum, dan black tea.",
    isSignature: true,
    tags: ["Filter", "Single Origin"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "japanese-ice-drip",
    name: "Japanese Ice Drip",
    category: "manual-brew",
    price: 27000,
    description: "Seduhan manual di atas es kristal, menghasilkan kejelasan rasa buah yang sangat segar.",
    tags: ["Refresh", "Filter"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "artisan-matcha-latte",
    name: "Kyoto Artisan Matcha",
    category: "non-coffee",
    price: 25000,
    description: "Matcha grade seremonial Jepang murni dengan steamed fresh milk dan aroma umami seimbang.",
    isPopular: true,
    tags: ["Non-Coffee"],
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "earl-grey-lavender",
    name: "Earl Grey Lavender Tea",
    category: "non-coffee",
    price: 22000,
    description: "Seduhan daun teh hitam bergamot dengan kelopak bunga lavender yang menenangkan.",
    tags: ["Tea", "Relax"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "caramel-almond-croffle",
    name: "Salted Caramel Croffle",
    category: "food",
    price: 28000,
    description: "Croissant waffle hangat renyah disiram saus salted caramel buatan sendiri dan taburan roasted almond.",
    isSignature: true,
    isPopular: true,
    tags: ["Dessert", "Pastry"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "truffle-parmesan-fries",
    name: "Truffle Parmesan Fries",
    category: "food",
    price: 25000,
    description: "Kentang goreng renyah bumbu minyak truffle asli dan taburan keju parmesan melimpah.",
    tags: ["Snack"],
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=600&auto=format&fit=crop",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Slow Bar & Pour-Over Station",
    subtitle: "Interaksi hangat barista dan penikmat kopi",
    category: "coffee",
    imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Natural Light Reading Nook",
    subtitle: "Pencahayaan alami dari fasad kaca jendela besar",
    category: "ambience",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Outdoor Green Courtyard",
    subtitle: "Hembusan angin sejuk di bawah naungan pohon rindang",
    category: "ambience",
    imageUrl: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Freshly Roasted Local Beans",
    subtitle: "Kualitas biji pilihan petani Temanggung",
    category: "coffee",
    imageUrl: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop",
  },
];

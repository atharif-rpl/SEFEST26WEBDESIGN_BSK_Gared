export interface Deal {
    id: number;
    resto: string;
    distance: string;
    item: string;
    oldPrice: string;
    newPrice: string;
    timeLeft: string;
    bgColor: string;
    emoji: string;
    status: string;
    description: string;
    address: string;
  }
  
  export const dealsData: Deal[] = [
    {
      id: 1,
      resto: "Bakehouse Kenangan",
      distance: "0.8 km",
      item: "Assorted Pastry Box",
      oldPrice: "Rp 65.000",
      newPrice: "Rp 15.000",
      timeLeft: "01:45:20",
      bgColor: "bg-[#B3E5FC]",
      emoji: "🥐",
      status: "HOT DEAL",
      description: "Sisa 3 croissant butter, 2 pain au chocolat, dan 1 danish. Dipanggang pagi ini, masih sangat renyah dan layak konsumsi. Cocok buat sarapan besok!",
      address: "Jl. Sudirman No. 45, Jakarta (Samping Stasiun MRT)"
    },
    {
      id: 2,
      resto: "Sushi Rakyat",
      distance: "2.1 km",
      item: "End-of-day Platter",
      oldPrice: "Rp 85.000",
      newPrice: "Rp 25.000",
      timeLeft: "00:30:00",
      bgColor: "bg-[#F0C45C]",
      emoji: "🍣",
      status: "ALMOST GONE",
      description: "Platter berisi 12 potong sushi roll (Salmon Maki, Tuna Mayo, Kani Roll). Harus segera dikonsumsi malam ini juga. Disediakan dengan kecap asin dan wasabi.",
      address: "Foodcourt Mall Kota, Lantai 3"
    },
    {
      id: 3,
      resto: "Toko Roti Makmur",
      distance: "1.5 km",
      item: "Mystery Bag (3 Items)",
      oldPrice: "Rp 50.000",
      newPrice: "Rp 10.000",
      timeLeft: "02:15:10",
      bgColor: "bg-[#A7F3D0]",
      emoji: "🛍️",
      status: "SURPRISE",
      description: "Suka kejutan? Dapatkan 3 roti manis/asin acak yang tidak terjual hari ini. Nilai aslinya dijamin lebih dari Rp 50.000!",
      address: "Jl. Merdeka Raya No. 12"
    },
    {
      id: 4,
      resto: "Padang Sederhana",
      distance: "3.0 km",
      item: "Paket Nasi Rames",
      oldPrice: "Rp 40.000",
      newPrice: "Rp 12.000",
      timeLeft: "00:45:00",
      bgColor: "bg-[#FFD1DC]",
      emoji: "🍛",
      status: "HOT DEAL",
      description: "Nasi putih, sayur nangka, daun singkong, dan 1 lauk ayam (bakar/gulai tergantung ketersediaan sisa). Lauk dijamin belum tersentuh pelanggan.",
      address: "Jl. Veteran No. 8"
    },
    {
      id: 5,
      resto: "Pizzeria Lokal",
      distance: "1.2 km",
      item: "Pizza Slice Combo",
      oldPrice: "Rp 75.000",
      newPrice: "Rp 20.000",
      timeLeft: "01:10:00",
      bgColor: "bg-[#FDE68A]",
      emoji: "🍕",
      status: "SELLING FAST",
      description: "3 potong pizza ukuran besar (campur rasa: Pepperoni, Margherita, Mushroom). Cukup panaskan di microwave 1 menit dan rasanya kembali sempurna.",
      address: "Kawasan Niaga Blok C"
    },
    {
      id: 6,
      resto: "Vegan Wrap Co.",
      distance: "4.5 km",
      item: "Healthy Salad Bowl",
      oldPrice: "Rp 60.000",
      newPrice: "Rp 18.000",
      timeLeft: "02:00:00",
      bgColor: "bg-[#A7F3D0]",
      emoji: "🥗",
      status: "FRESH",
      description: "Salad quinoa dengan sayuran organik segar. Dressing dipisah. Alasan rescue: Salad sudah diracik tapi pesanan di-cancel pembeli.",
      address: "Senopati Raya"
    },
    {
      id: 7,
      resto: "Donut Bahagia",
      distance: "0.5 km",
      item: "1/2 Lusin Donut",
      oldPrice: "Rp 55.000",
      newPrice: "Rp 15.000",
      timeLeft: "03:00:00",
      bgColor: "bg-[#E9D5FF]",
      emoji: "🍩",
      status: "SWEET DEAL",
      description: "6 buah donat aneka rasa (coklat, matcha, strawberry). Tekstur masih lembut. Sangat cocok diselamatkan untuk teman ngopi malam.",
      address: "Kios Depan Stasiun"
    },
    {
      id: 8,
      resto: "Ayam Geprek Mercon",
      distance: "1.8 km",
      item: "Sisa Ayam Goreng",
      oldPrice: "Rp 35.000",
      newPrice: "Rp 10.000",
      timeLeft: "00:20:00",
      bgColor: "bg-[#FFD1DC]",
      emoji: "🍗",
      status: "URGENT",
      description: "3 potong ayam goreng crispy utuh tanpa nasi. Ayam berlebih setelah tutup warung. Sangat layak konsumsi, belum dicampur sambal.",
      address: "Jl. Mahasiswa No. 9"
    },
    {
      id: 9,
      resto: "Kopi Senja",
      distance: "0.3 km",
      item: "Sandwich & Cake",
      oldPrice: "Rp 70.000",
      newPrice: "Rp 20.000",
      timeLeft: "01:30:00",
      bgColor: "bg-[#B3E5FC]",
      emoji: "🥪",
      status: "COMBO",
      description: "1 Beef Sandwich dan 1 Slice Cheesecake. Sandwich bisa dipanaskan, cake masukkan kulkas.",
      address: "Lobby Gedung Perkantoran"
    },
    {
      id: 10,
      resto: "Martabak Bos",
      distance: "2.5 km",
      item: "Martabak Manis (Sisa Adonan)",
      oldPrice: "Rp 80.000",
      newPrice: "Rp 25.000",
      timeLeft: "01:00:00",
      bgColor: "bg-[#F0C45C]",
      emoji: "🥞",
      status: "RARE DEAL",
      description: "1 loyang martabak manis coklat kacang keju. Dibuat menjelang tutup dari sisa adonan terakhir hari ini. Porsi full!",
      address: "Jl. Food Street Utara"
    }
  ];
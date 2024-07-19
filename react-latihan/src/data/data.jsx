const stores = [
  {
    id: 1,
    imgPrdt:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98u-ln9j6qsgxjw9f6",
    jdlPrdt: "Erigo T-Shirt Marsha JKT48",
    kategori: "pakaian",
    untuk: "pria wanita",
    harga: 199000,
    link: "https://shopee.co.id/erigostore/20985424535",
  },
  {
    id: 2,
    imgPrdt:
      "https://down-aka-id.img.susercontent.com/14e8395f72d590b20eba7bb8417bf7c5.webp",
    jdlPrdt: "Jas Hujan Raincoat Anti Rembes Pria Wanita",
    kategori: "lain-lain",
    untuk: "",
    harga: 52000,
    link: "https://shope.ee/5pjhcIxuQD",
  },
  {
    id: 3,
    imgPrdt:
      "https://down-aka-id.img.susercontent.com/id-11134207-7r98u-lowh3ymbtny257.webp",
    jdlPrdt: "M10 TWS Headphone Wireless Bluetooth 5.3",
    kategori: "elektronik",
    untuk: "",
    harga: 38999,
    link: "https://shope.ee/6zvjTPquCe",
  },
  {
    id: 4,
    imgPrdt:
      "https://down-aka-id.img.susercontent.com/id-11134207-7r98w-lotktsfjyccpc1.webp",
    jdlPrdt: "HELM NJS KAIROZ HALF FACE KAIROS",
    kategori: "lain-lain",
    untuk: "",
    harga: 294900,
    link: "https://shope.ee/B5PLD3dIp",
  },
  {
    id: 5,
    imgPrdt:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/12/bbc181a9-c81c-45c3-971b-2431c5d5fa38.png",
    jdlPrdt: "Sepatu Sneakers Casual Pria Aerostreet",
    kategori: "alaskaki",
    untuk: "pria",
    harga: 174875,
    link: "https://tokopedia.link/sqNzz4xH2Gb",
  },
  {
    id: 6,
    imgPrdt:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/13/ddb3499f-45f3-484f-a2ee-3d440bb30820.jpg",
    jdlPrdt: "Aerostreet T-Shirt Golden Samurai Navy Kaos",
    kategori: "pakaian",
    untuk: "pria wanita",
    harga: 69900,
    link: "https://tokopedia.link/9yXqBgRH2Gb",
  },
  {
    id: 7,
    imgPrdt:
      "https://down-bs-id.img.susercontent.com/id-11134207-7r98u-lp09e0ocubt9aa.webp",
    jdlPrdt: "Jaket Hoodie Aerostreet Hitam Sweater",
    kategori: "pakaian",
    untuk: "pria",
    harga: 135900,
    link: "https://shope.ee/603EAW52IV",
  },
  {
    id: 8,
    imgPrdt:
      "https://down-bs-id.img.susercontent.com/id-11134207-7r98o-llknp6fpe4doe9.webp",
    jdlPrdt: "Photocard JKT48 Unofficial",
    kategori: "lain-lain",
    untuk: "",
    harga: 1752,
    link: "https://shope.ee/LOrQEsNhE",
  },
  {
    id: 9,
    imgPrdt:
      "https://down-bs-id.img.susercontent.com/ebe0c6dab920fc1d2bd329cb8e550193.webp",
    jdlPrdt: "Troveast Tas Gym Tas Travel",
    kategori: "tas aksesoris",
    untuk: "pria wanita",
    harga: 239000,
    link: "https://shope.ee/6pcQ1QhY9F",
  },
  {
    id: 10,
    imgPrdt:
      "https://down-bs-id.img.susercontent.com/id-11134207-7qul2-leznxpw4qxmma4.webp",
    jdlPrdt: "Barbee Jam Tangan Wanita Analog Barsh",
    kategori: "tas aksesoris",
    untuk: "wanita",
    harga: 69000,
    link: "https://shope.ee/4prLeBMj6S",
  },
  {
    id: 11,
    imgPrdt:
      "https://down-bs-id.img.susercontent.com/d51973af357efd7dabf17ea9694837d3.webp",
    jdlPrdt: "Jam Tangan Pria Sport Quartz Men",
    kategori: "tas aksesoris",
    untuk: "pria",
    harga: 10750,
    link: "https://shope.ee/7Us6pDVLFQ",
  },
  {
    id: 12,
    imgPrdt:
      "https://down-bs-id.img.susercontent.com/sg-11134201-7rcdq-lrerhcpo6vy093.webp",
    jdlPrdt: "Martinversa TR19 Tas Ransel Pria Backpack",
    kategori: "tas aksesoris",
    untuk: "pria",
    harga: 55680,
    link: "https://shope.ee/2fmr4Y95xE",
  },
  {
    id: 13,
    imgPrdt:
      "https://down-bs-id.img.susercontent.com/id-11134207-7r98x-lqlkihpqqt0005.webp",
    jdlPrdt: "Sandal karet wanita gesper",
    kategori: "alaskaki",
    untuk: "wanita",
    harga: 24900,
    link: "https://shope.ee/7Us6pa4esL",
  },
  {
    id: 14,
    imgPrdt:
      "https://down-ws-id.img.susercontent.com/id-11134207-7r98u-llmwwkaynub7d3.webp",
    jdlPrdt: "Make up Mean Girls Buy 3 Get 1 Free",
    kategori: "kosmetik",
    untuk: "wanita",
    harga: 89000,
    link: "https://shope.ee/3L2ZHWv8Gg",
  },
  {
    id: 15,
    imgPrdt:
      "https://down-ws-id.img.susercontent.com/id-11134201-7r98y-lrfoqtppdziq29.webp",
    jdlPrdt: "Erigo T-Shirt Zee JKT48 Black By Imelda",
    kategori: "pakaian",
    untuk: "pria wanita",
    harga: 129000,
    link: "https://shope.ee/7AFHqqiXYY",
  },
  {
    id: 16,
    imgPrdt:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/10/12/afdc5e21-2fde-4783-95cf-13f3f72ad910.png",
    jdlPrdt: "Tempat Penyimpanan Pisau",
    kategori: "lain-lain",
    untuk: "dapur",
    harga: 129000,
    link: "https://tokopedia.link/rJvFTXawcHb",
  },
  {
    id: 17,
    imgPrdt:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/8/21/4077fefa-01a0-4b0d-be3d-00a00c4dc33c.png",
    jdlPrdt: "Panci Stainless Zebra Sauce Pan 20 Cm",
    kategori: "lain-lain",
    untuk: "dapur",
    harga: 155000,
    link: "https://tokopedia.link/QX2Ci4ywcHb",
  },
  // {
  //   imgPrdt: "",
  //   jdlPrdt: "",
  //   kategori: "",
  //   untuk: "",
  //   harga: "",
  //   link: "",
  // },
];

export default stores;

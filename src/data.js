import React from "react";

const data = [
  {
    name: "Karina",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/230601_Karina_%28aespa%29.jpg",
    alt: "avatar_img",
    tel: "02-711-7111",
    email: "karina@aespa.com",
  },
  {
    name: "Giselle",
    src: "https://www.nme.com/wp-content/uploads/2023/06/giselle-aespa-governors-ball-1392x884.jpg",
    alt: "avatar_img",
    tel: "02-777-1111",
    email: "giselle@aespa.com",
  },
  {
    name: "Winter",
    src: "https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/440347933_797001692441726_2603917157357169127_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGiJHNAK1PITdmOKTnLLJVjduWYypYMFyZ25ZjKlgwXJl9h4mN0sm8nNG56rUPkvbA&_nc_ohc=G-Qtczr0aLEQ7kNvgF1cSav&_nc_ht=scontent.fbkk29-9.fna&oh=00_AYD_tlIWJ7qDNBqlNXCaFim6o8LxQsIT0tDKX3_RnV6ZlA&oe=664C6E82",
    alt: "avatar_img",
    tel: "02-111-7777",
    email: "winter@aespa.com",
  },
  {
    name: "Ningning",
    src: "https://www.nme.com/wp-content/uploads/2024/02/ningning-versace-aespa-getty.jpg",
    alt: "avatar_img",
    tel: "02-111-7777",
    email: "ningning@aespa.com",
  },
  {
    name: "Oak",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/NadechKugimiya2014.jpg/800px-NadechKugimiya2014.jpg",
    alt: "avatar_img",
    tel: "02-111-7777",
    email: "nadech@aespa.com",
  },
];

function getData() {
  return data;
}

const dataWithIds = data.map((item, index) => ({
  id: index + 1,
  ...item,
}));

console.log(dataWithIds);

export default dataWithIds;

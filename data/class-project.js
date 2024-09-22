
export function getProduct(productId){
  let matchingProduct;

    product.forEach((product)=>{
    if(product.id === productId){
      matchingProduct = product;
        }
    });
    return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails){
      this.id = productDetails.id;
      this.image = productDetails.image;
      this.name = productDetails.name;
      this.rating =productDetails.rating
      this.priceCents = productDetails.priceCents

  }
  extraInfoHTML(){
    return '';
  }
}

class Clothing extends Product{
  sizeChartLink;

  constructor(productDetails){
    super(productDetails)
    this.sizeChartLink = productDetails.sizeChartLink;
  }
  
  extraInfoHTML() {
    //if we need parent extraInfoHTML method
    //super.extraInfoHTML()
    return  `<a href = "${this.sizeChartLink}" >
    Ring size chart
    </a>`
  }
}





export const product = [
 
  // we can add new Product(   )
  {
    id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/product-items/product1.avif",
    name: "Regal Radiance Chain with Luxe Gold Plating",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 999,
   
  },{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/product-items/product2.webp",
    name: "Sterling River Chain of Endless Flowing Elegance",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 1499,
  
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/product-items/product12.avif",
    name: "Eternal Silver Ring with Sparkling Crystal Accents",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 549,
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/product-items/product18.avif",
    name: "Deadpoll and wolverine chain combo",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 799,
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/product-items/product22.avif",
    name: " Deep sea stone set of (2)",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2499,
    
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/product-items/product3.avif",
    name: "Lunar Silver Chain ",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 1349,
  
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/product-items/product7.avif",
    name: "Gilded Grace Ring, set of 3",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 739,
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/product-items/product8.avif",
    name: "Aurora Glow Chain with Antique Gold Finish",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 1399,
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/product-items/product9.webp",
    name: "Shimmering Solace Chain whith silver finish",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 999,
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/product-items/product10.avif",
    name: "Regal Glow Band with Intricate Floral Engravings, set of 3",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 399,
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/product-items/product11.avif",
    name: "Aurora Glow Chain with Antique Gold Finish",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 1899,
    
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/product-items/product36.webp  ",
    name: "Best ring you ever seen - Black",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 5999,
  
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/product-items/product13.avif",
    name: " Gold and silver finish, Sunburst Chain  ",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 1999,
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/product-items/product6.avif",
    name: "Golden heart Necklace with Embossed Geometric Design",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 1299,

  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/product-items/product15.avif",
    name: "silver heart Necklace with lean Design",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 999,
   
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/product-items/product16.avif",
    name: "Gilded Elegance Necklace, whith a litter",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 899,
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/product-items/product17.avif",
    name: "Royal Twist Ring with Braided silver Detailing",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 349,
  
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/product-items/product4.avif",
    name: "Icy Reflection Necklace",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 799,
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/product-items/product19.avif",
    name: "Silver Necklace with Frosted Pearl Drops",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,

  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/product-items/product20.avif",
    name: "Silver Vitruiam man pendant",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1199,
    
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/product-items/product21.avif",
    name: "Silver cross ring, Shining bright",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 549,
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/product-items/product5.avif",
    name: "Rudy stone ring, Maanik stone",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 649,

    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/product-items/product23.avif",
    name: "Black enamel & gold evil ring",
    rating: {
      stars: 4.5,
      count: 599
    },
    priceCents: 599,
   
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/product-items/product24.avif",
    name: "Scorpio zodiac necklace",
    rating: {
      stars: 4.5,
      count: 1299
    },
    priceCents: 830,
  
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/product-items/product25.avif",
    name: "Chisel stainless steel silver finish",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 239,
   
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/product-items/product26.avif",
    name: "Divaas Dream necklace",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1249,
  
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/product-items/product27.webp",
    name: "Sterling box chain necklace",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 899,
   
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/product-items/product28.webp",
    name: "Norrow  signet ring, set of 2",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 1599,
  
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/product-items/product29.webp",
    name: "Mistic Topaz gemstone chain",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
   
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/product-items/product30.avif",
    name: "Wolf sterling silver charms ring",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 679,
   
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/product-items/product31.avif",
    name: "Thin handmade whitye nacklace",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 790,
  
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/product-items/product32.avif",
    name: "Fresh water pearl nacklace",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 899,
 
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/product-items/product33.avif",
    name: "Air geometric pendand",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 690,
   
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/product-items/product34.avif",
    name: "Two circle necklace, Interlocking ring",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 1999,
   
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/product-items/product35.avif",
    name: "Sterling Silver necklace",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 999,

  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/product-items/product6.avif",
    name: "Rose gold saint lana nacklace",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 1199,
   
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/product-items/product37.webp",
    name: "Silver herringbone necklace",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 1790,
   
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/product-items/product38.webp",
    name: "Mens silver cross necklace",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 1900,
   
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/product-items/product39.webp",
    name: "Elegent trendy four stone pendend",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 1390,
  
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/product-items/product40.webp",
    name: "Two tone triangle nacklace",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 1940,
   
    
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/product-items/product41.avif",
    name: "Black fancy high quality ring",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 299,
   
    type: "clothing",
    sizeChartLink: "images/ring-size-chart.jpg"
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/product-items/product42.webp",
    name: "Silver plated chain for men",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
   
  }
].map((productDetails)=>{
if(productDetails.type === 'clothing'){
 return new Clothing(productDetails)
}

return  new Product(productDetails)
});

/*const dates = new Date()
console.log(dates)
console.log( dates.toLocaleTimeString())*/

//Get erroe becouse (this) only work inside method
/*const object2 = {
a:2,
b: this.a
}*/

//gets undefined because it's inside regulag function
/*function logthis(){
console.log(this);
}
logthis()*/


// by using .call, we can change this whatever we want
/*function logthis(){
console.log(this);
}
logthis()
logthis.call('Hello')


// We cannot we arrow function for (this)
this  
const object3 ={
method: ()=>{
  console.log(this);
}
};
object3.method();*/
const baseUrl = "http://ft-23-online-cms-flower-power.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    products.forEach(function (product) {
      productContainer.innerHTML += `
      <div class="product"><h2>${product.name}</h2>
      <div class="product-image" style="background-image:url('${product.images[0].src}')"></div>
      <p class="price">Price $ ${product.prices.price}<p></div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

getProducts(baseUrl);

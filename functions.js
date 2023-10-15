const baseUrl = "http://ft-23-online-cms-flower-power.local/wp-json/wc/store/products";

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.log(error);
  }
}

getProducts(baseUrl);

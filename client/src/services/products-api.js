export  async function getProducts() {
    try {
      return await fetch("http://localhost:7000/products").then((res) =>
        res.json()
      );
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  
  
  
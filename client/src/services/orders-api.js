export  async function getOrders() {
  try {
    return await fetch("http://localhost:7000/orders").then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  } finally {
  }
}



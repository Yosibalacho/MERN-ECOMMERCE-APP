export  async function getStores() {
    try {
      return await fetch("http://localhost:7000/stores").then((res) =>
        res.json()
      );
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  
  
  
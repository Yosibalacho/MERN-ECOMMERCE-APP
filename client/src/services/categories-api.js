export  async function getCategories() {
    try {
      return await fetch("http://localhost:7000/categories").then((res) =>
        res.json()
      );
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  
  
  
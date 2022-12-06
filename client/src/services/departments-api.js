export  async function getDepartments() {
    try {
      return await fetch("http://localhost:7000/departments").then((res) =>
        res.json()
      );
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  
  
  
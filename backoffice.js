const endpoint = "https://striveschool-api.herokuapp.com/api/product/"
window.onload = async () =>{
  
try{
        const response = await fetch(endpoint,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNGI5OGNlYWY0ODAwMTVjOTE4ZDciLCJpYXQiOjE2MjIwMzY2MTMsImV4cCI6MTYyMzI0NjIxM30.UTCBinfwZqSkRA2yjhaVG7VYcl5qIqBRvWnTtErbg80"
        }})
            const data = await response.json()
            return await console.log(data)
        
    }
    catch(err){
        return console.log("Houston we have problem!", err)
    }
        

}

const handleSubmit = async (e) =>{
    e.preventDefault();

      try {
          let url = document.getElementById("product-img").value 
          console.log(url)
        const newProduct = {
            name:document.getElementById("product-name").value,
            description: document.getElementById("product-description").value,
            brand: document.getElementById("product-brand").value,
            imageUrl:url,
            price: document.getElementById("product-price").value
          };

        const response = await fetch(endpoint, {
          method: "POST",
          body: JSON.stringify(newProduct),
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNGI5OGNlYWY0ODAwMTVjOTE4ZDciLCJpYXQiOjE2MjIwMzY2MTMsImV4cCI6MTYyMzI0NjIxM30.UTCBinfwZqSkRA2yjhaVG7VYcl5qIqBRvWnTtErbg80"
          },
     
        });

        console.log("RESPONSE", response);
        if (response.ok) {
          const data = await response.json();
          alert("Product created successfully with an id of " + data.id);
        } else {

          if (response.status === 400) {
            throw new Error("Bad request with status 400");
          } else if (response.status === 401) {
            throw new Error("Anauthorized with status 401");
          } else if (response.status === 404) {
            throw new Error("Not found with status 404");
          }
        }
      } catch (err) {
        alert(err.message);
      }
}








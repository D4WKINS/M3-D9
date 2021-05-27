const endpoint = "https://striveschool-api.herokuapp.com/api/product/"
const products = document.getElementById("products")

window.onload = async () =>{
    const getData = async () =>{
        try{
        const response = await fetch(endpoint,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNGI5OGNlYWY0ODAwMTVjOTE4ZDciLCJpYXQiOjE2MjIwMzY2MTMsImV4cCI6MTYyMzI0NjIxM30.UTCBinfwZqSkRA2yjhaVG7VYcl5qIqBRvWnTtErbg80"
        }})
            const data = await response.json()
            return await data
        
        }
        catch(err){
        return console.log("Houston we have problem!", err)
        }
        }
        getData().then(data => {
            data.forEach(product => {
                
                products.innerHTML +=  (`<div class="card product shadow w-100 col-12 col-md-4 col-lg-3 px-0">
                                                <img src="${product.imageUrl}" class="h-50 card-img-top" alt="...">
                                              
                                                <div class="card-body text-black-50 pb-0">
                                                    <a class="card-title product" href="details.html?id=${product._id}"><h5> ${product.name}</h5></a>
                                                    <hr>
                                                  <h4 class="lead" style="font-weight:bold">£${product.price} </h4>
                                                </div>
                                                <button class=" btn w-100 text-white p-2" style=" border-radius:0;background-color:black">Add to Cart</button>
                        
                                        </div>`
                                        )
              
                
            });
        } )
            
}



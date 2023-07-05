fetch("../data.json")
  .then(response => response.json())
  .then(json => {
    let products = document.getElementById("products").innerHTML;

    let productJson = json["products"]

    for(i=0; i<productJson.length; i++) {
      let element = productJson[i]
      document.getElementById("products").innerHTML += "<div class='product product-"+i+"' id='product-"+i+"'>"
      document.getElementById("product-"+i+"").innerHTML += "<img src='"+element["thumbnail"]+"' alt='productpic' class='preview'></img>"
      document.getElementById("product-"+i+"").innerHTML += "<h1 class='title' id='title'>"+element["title"]+"</h1>"
      document.getElementById("product-"+i+"").innerHTML += "<p class='description'>"+element["description"]+"</p>"
      document.getElementById("product-"+i+"").innerHTML += "<div class='divider2'></div>"
      document.getElementById("product-"+i+"").innerHTML += "<p class='price'>"+element["price"]+"€</p>"
      document.getElementById("products").innerHTML += "</div>"
      console.log("jeah "+element["title"])
    }
  });

// JavaScript code
function search_product() {
  let input = document.getElementById('search_input').value
  input=input.toLowerCase();
  let productList = document.getElementsByClassName('product');
    
  for (i = 0; i < productList.length; i++) { 
      if (!productList[i].innerHTML.toLowerCase().includes(input)) {
        productList[i].style.display="none";
      }
      else {
        productList[i].style.display="flex";                 
      }


  }
}
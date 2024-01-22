const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storedItems = document.getElementById("product-List");
    const product = document.querySelectorAll(".product");
    const pname = storedItems.getElementsByTagName("h1");

    for(let i= 0 ; i < pname.length ; i++){
        let match = product[i].getElementsByTagName("h1")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML;
            
            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}


// let searchBar = document.querySelector("#search-item");

// function search() {
//     let x = document.getElementById("search-item").value.toUpperCase(); 
//     const storeProduct = document.getElementById("#product-List");
//     const product = document.querySelectorAll(".product");
//     const productName = document.getElementsByTagName("h1");

//     let userPrompt = `${x}`
    
//     for(let i=0;i<product.length;i++){
//         let match = product[i].getElementsByTagName("h1")[0].lastChild.data;
//         // console.log(userPrompt);
//         // console.log(match);

//         if(match){
//             let bool = match === userPrompt ? true : false;
//             console.log(bool)
//         }

    //     }
    //     // let alreadyAssign = `${match}`
    //     // console.log(userPrompt)
    //     // console.log(alreadyAssign.indexOf(userPrompt))
    //     // console.log(match)
    //     // if(alreadyAssign.indexOf(userPrompt) >= 0){
    //     //     console.log("ohh yeh matched found" >= 0)
    //     // }
    //     // console.log(match);
    //     // console.log(userPrompt);
    // }

// let x;

// function myFunction() {
//     x = document.getElementById("search").value;
//     console.log(x)
//   }


// const searchBar = document.querySelector("#search");

// searchBar.addEventListener("keyup", (event) => {
//     if(event.key == "Enter"){
//         search();
//     }else{
        
//     }
// });
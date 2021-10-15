var product = {};
var relatedProducts = [];


function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Funcion para mostrar los productos relacionados
function showRelatedProducts(){

    let htmlContentToAppend = "";
    for(let _product of relatedProducts){
        _name = _product.name
        _currency = _product.currency
        _cost = _product.cost
        _img = _product.imgSrc
        console.log(_product)
        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + _img + `" alt="">
            <p class="d-flex w-100 justify-content-between">
            <b>` + _name  + `</b>
            <b>` + _currency + `</b>
            <b>` + _cost  + `</b>
            </p>
                </div>
        </div>
        `

        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
    }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
document.addEventListener("DOMContentLoaded", function(e){
    //document.getElementById("user").value = localStorage.getItem("usuario")

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCost = document.getElementById("productCost")
            let productSoldCountHTML = document.getElementById("productSold");
            let productCategoryHTML = document.getElementById("productCategory");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCost.innerHTML = product.cost + ' ' + product.currency;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
            
            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if (resultObj.status === "ok")
            {
                indexes = product.relatedProducts
                for (index of indexes){
                    relatedProducts.push(resultObj.data[index])
                }
                showRelatedProducts();
            };
        });
    }
            

    /* Para los comentarios */
    

    fetch("https://japdevdep.github.io/ecommerce-api/product/5678-comments.json").then(res => res.json())
    .then(jsonData => jsonData.forEach(e => {
        comentarioDisplay = `<div style="border: 1px solid;">
                                <div>Puntuación: ${e.score}</div>
                                <div>Posteado por: ${e.user} - ${e.dateTime}</div>
                                <br>
                                <div>${e.description}</div>
                            </div><br>`

        cajaComentarios = document.getElementById("cajaComentarios")
        
        cajaComentarios.innerHTML += comentarioDisplay
    }))

});


document.getElementById("submit").addEventListener("click", (e) =>{
    e.preventDefault();

    comentarioDisplay = `<div style="border: 1px solid;">
                                <div>Puntuación: ${document.getElementById("score").value}</div>
                                <div>Posteado por: ${localStorage.getItem("usuario")} - ${new Date().toISOString()}</div>
                                <br>
                                <div>${document.getElementById("descripcion").value}</div>
                            </div><br>`

        cajaComentarios = document.getElementById("cajaComentarios")
        
        cajaComentarios.innerHTML += comentarioDisplay
})})

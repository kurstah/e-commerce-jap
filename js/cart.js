let indexedCartItems;

const cambiarCantidad = (idProducto, valor) => {
    let item = indexedCartItems[idProducto];

    indexedCartItems[idProducto].count = valor;

    let subtotal = indexedCartItems[idProducto].count * item.unitCost;

    let subtotalElement = document.getElementById(idProducto);

    subtotalElement.textContent = `Subtotal: $` + item.currency + subtotal + ``;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData('https://japdevdep.github.io/ecommerce-api/cart/654.json').then(function(resultObj){
        if (resultObj.status === "ok")
        {
            let nameProdHTML = document.getElementById("container");
            indexedCartItems = resultObj.data.articles
            
            let htmlContentToAppend = ''

            const articleTemplate = (id, name, src, currency, unitCost, count, subtotalInicial) => `
            <a class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + src + `" alt="` + name + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ name + `</h4>
                            <small class="text-muted">Costo: ` + currency + ' ' + unitCost + `</small>
                            <input class="form-control" style="width:60px;" type="number" id="cambio" onchange="cambiarCantidad(` + id + `, this.value)" value=` + count + ` min="1">
                            <small class="text-muted" id=`+ id +`>Subtotal: $` + currency + subtotalInicial +`</small>
                        </div>
                    </div>
                </div>
            </a>`
        
            for (let index in indexedCartItems){
                let item = indexedCartItems[index]
                htmlContentToAppend += articleTemplate(index, item.name,
                                                       item.src, item.currency,
                                                       item.unitCost, item.count,
                                                       item.unitCost * item.count);
            }

            nameProdHTML.innerHTML = htmlContentToAppend;

        }
    });
})


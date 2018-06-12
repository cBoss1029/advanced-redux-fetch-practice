// get data

export function loadProducts(){
    return function (dispatch){
        fetch('http://localhost:4001/products')
        .then(res => {
            return res.json()
        }).then((products) => {
            dispatch(productsLoaded(products))
        })
    }
}
export function productsLoaded(products){
    return {
        type: 'PRODUCTS_LOADED',
        value: products
    }
}

//create data

export function createProduct(product) {
    return function (dispatch) {
        fetch('http://localhost:4001/products',{
            method: 'post',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(function(res){
            return res.json()
        }).then(function(p){
            dispatch(productCreated(product))
        });
    }
}
export function productCreated(product){
    return {
        type: 'PRODUCT_CREATED',
        value: product
    }
}
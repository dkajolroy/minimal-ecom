



exports.getAllProductReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCT_REQ":
            return { loading: true, products: [], error: null }
        case "GET_ALL_PRODUCT_SUC":
            return { loading: false, products: action.payload, error: null }
        case "GET_ALL_PRODUCT_FAIL":
            return { loading: false, products: [], error: action.payload }
        default: return state
    }
}


exports.viewProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case "VIEW_PRODUCT_REQ":
            return { loading: true, product: {}, error: null }
        case "VIEW_PRODUCT_SUC":
            return { loading: false, product: action.payload, error: null }
        case "VIEW_PRODUCT_FAIL":
            return { loading: false, product: {}, error: action.payload }
        default: return state
    }
}
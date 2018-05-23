export default {
    allProducts:state=>state.all,
    cartProducts:(state,getters)=>(getters.allProducts.filter(p=>p.quantity)),
    cartTotalPrice:(state,getters)=>{
        return getters.cartProducts.reduce((total,product)=>{
            return total+product.price*product.quantity
        },0)
    }
}
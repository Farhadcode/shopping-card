function getProductNumber(pdId,number, price ,isIncreasing  ) {
    const productInput = document.getElementById(pdId);
    let productNumber = productInput.value ;
    if (isIncreasing == true) {
        productNumber = parseFloat(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update total
    const perProductTotal = document.getElementById(number);
    perProductTotal.innerText = productNumber * price;

    //calculate total

    calculateTotal();
}

function productPrice(productID,price) {
    const productInput = document.getElementById(productID);
    const productNumber = parseFloat(productInput.value);
    const productTotal = productNumber * price;
    return productTotal;
}
function calculateTotal() {
    const phoneTotal = productPrice('phone-number', 1219) ;
    const caseTotal =  productPrice('case-number',59);
    const subTotal = phoneTotal + caseTotal ;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax ;

    // console.log(subTotal);

    // update sub total in webpage

    document.getElementById('sub-total').innerText = subTotal ;
    document.getElementById('tax-amonut').innerText = tax ;
    document.getElementById('total-price').innerText = totalPrice;
}


 // phone 
document.getElementById('phone-plus-btn').addEventListener('click',addProductFuntion =() =>{
  getProductNumber('phone-number','phone-price',1219, true);
  
})

document.getElementById('phone-minus-btn').addEventListener('click',minusProductFuntion = () =>{
    getProductNumber('phone-number','phone-price', 1219, false);
})


// case

document.getElementById('case-plus-btn').addEventListener('click',addProductFuntion =() =>{
    getProductNumber('case-number','case-price' , 59 ,true);
  
})

document.getElementById('case-minus-btn').addEventListener('click',minusProductFuntion = () =>{
    getProductNumber('case-number', 'case-price' , 59 , false);
})

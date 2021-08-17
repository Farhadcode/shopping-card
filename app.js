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
    const perProductTotal = document.getElementById(number);
    perProductTotal.innerText = productNumber * price;
}

document.getElementById('phone-plus-btn').addEventListener('click',addProductFuntion =() =>{
  getProductNumber('phone-number','phone',1219, true);
  
})

document.getElementById('phone-minus-btn').addEventListener('click',minusProductFuntion = () =>{
    getProductNumber('phone-number','phone', 1219, false);
})


// case

document.getElementById('case-plus-btn').addEventListener('click',addProductFuntion =() =>{
    getProductNumber('case-number','case' , 59 ,true);
  
})

document.getElementById('case-minus-btn').addEventListener('click',minusProductFuntion = () =>{
    getProductNumber('case-number', 'case' , 59 , false);
})

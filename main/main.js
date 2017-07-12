'use strict';

function printReceipt(inputs) {
  var billarray=calCount (inputs);
  calSum(billarray);
  var totalprice=calTotalPrice(billarray);
  printSheet(billarray,totalprice);

}

function calCount (barcodeArray) {
  var billArray=loadAllItems();
  var count=0;
  for(var i in billArray){
    count=0;
    for(var j in barcodeArray){
      if(barcodeArray[j]==billArray[i].barcode)
        count++;
    }
    billArray[i].count=count;
  }
  return billArray;

}
function calSum(billArray) {
  for(var i in billArray){
    billArray[i].sum=billArray[i].price*billArray[i].count;
  }
  var sumArray=billArray;
  return sumArray;

}
function calTotalPrice(sumArray) {
  var totalPrice=0;
  for(var i in sumArray){
    totalPrice+=sumArray[i].sum;
  }
  return totalPrice;
}
function printSheet(sumArray,totalPrice) {
  var str="***<没钱赚商店>收据***\n"
  for(var i in sumArray){
    if(sumArray[i].count!=0)
    str+="名称："+sumArray[i].name+"，数量："+sumArray[i].count+sumArray[i].unit+"，单价："+sumArray[i].price.toFixed(2)+"(元)"+"，小计："+sumArray[i].sum.toFixed(2)+"(元)\n";
  }
  str+="----------------------\n";
  str+="总计："+totalPrice.toFixed(2)+"(元)\n";
  str+="**********************";
  console.log(str);

}



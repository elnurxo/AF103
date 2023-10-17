function Product(name, salePrice, costPrice, stockQuantity, soldQuantity=0, isDiscounted=false, discountPercentage=0){
    if(salePrice>costPrice){
        this.name = name;
        this.salePrice = salePrice;
        this.costPrice = costPrice;
        this.stockQuantity = stockQuantity;
        this.soldQuantity = soldQuantity;
        this.isDiscounted = isDiscounted;
        this.discountPercentage = discountPercentage;
        this.findProfit = function(){
            if(!this.isDiscounted){
                return((this.salePrice - this.costPrice)*this.soldQuantity)
            }
            else{
                return((this.salePrice-(this.salePrice*this.discountPercentage/100)-this.costPrice)*this.soldQuantity)
            }
        },
        this.sell =function(sellQuantity){
            if(sellQuantity > this.stockQuantity){
                return alert(`${sellQuantity} QEDER ALA BILMESSEN \n ${this.stockQuantity} qeder alarsan`)
            }
            else{
                this.stockQuantity  -=sellQuantity
                this.soldQuantity += sellQuantity
            }
        }
    } 
    else{
        alert("sale price must be bigger")
    }
}
let product1 = new Product("legion",1000,500,100,5,true,10)
console.log(product1.findProfit())
console.log(product1)
product1.sell(150);
console.log(product1.findProfit())
console.log(product1)

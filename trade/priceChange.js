import { stockMarket } from "../data/data.js";

export function increaseSelect(stock){
    let item = stockMarket['stocks'].find((element) => element.name == stock)
    item.previousPrices.push(item.currentPrice)
    item.currentPrice = item.currentPrice*1.05
   
}

export function increaseCategory(stock, category){
    let items = stockMarket['stocks'].filter((item)=> item.category == category)
    console.log(items);
    
    items.forEach((item) => {if (item.name != stock){
        item.previousPrices.push(item.currentPrice)
        item.currentPrice = item.currentPrice * 1.01
    }})
    console.log(items);
    
}

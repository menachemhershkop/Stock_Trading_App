import { stockMarket } from "../data/data.js";

export function increaseSelect(item){
 
    item.previousPrices.push(item.currentPrice)
    item.currentPrice = item.currentPrice*1.05
 
    return item

   
}

export function increaseCategory(stock, category){
    let items = stockMarket['stocks'].filter((item)=> item.category == category)
    
    items.forEach((item) => {if (item.name != stock){
        item.previousPrices.push(item.currentPrice)
        item.currentPrice = item.currentPrice * 1.01
    }})
    return items;
    
}

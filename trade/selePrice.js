import { stockMarket } from "../data/data.js"
export function decreaseSelect(item){
    // let item = market['stocks'].find((element) => element.name == stock || element.id == stock)
    item.previousPrices.push(item.currentPrice)
    item.currentPrice = item.currentPrice*0.95
    // console.log(item);
    return item

   
}

export function decreaseCategory(stock, category){
    let items = stockMarket['stocks'].filter((item)=> item.category == category)
    console.log(items);
    
    items.forEach((item) => {if (item.name != stock){
        item.previousPrices.push(item.currentPrice)
        item.currentPrice = item.currentPrice * 0.99
    }})
    return items;
    
}
import { stockMarket } from "../data/data.js";

export default function increaseSelect(stock){
    let item = stockMarket['stocks'].find((element) => element.name == stock)
    console.log(item);
    item.previousPrices.push(item.currentPrice)
    item.currentPrice = item.currentPrice*1.05
    console.log(item);
    
    
}
increase("BrightFuture Academy")
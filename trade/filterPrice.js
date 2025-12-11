import { stockMarket } from "../data/data.js";

export default function filterStocksByPrice(givenPrice, above){
    let items = []
    if (above == true){
       items = stockMarket['stocks'].filter((item)=> item.currentPrice >= givenPrice)
    }
    else if (above == false)(
        items = stockMarket['stocks'].filter((item)=> item.currentPrice == givenPrice)
    )
    if (items.length === 0){
        console.log("Is not any match to your input. Try anouter filer");
        
    }
    return items
}
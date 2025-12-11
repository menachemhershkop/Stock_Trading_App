import { stockMarket } from "../data/data.js";

export default function searchStock(identifier){
    let items = stockMarket['stocks'].filter((item)=> item.id == identifier || item.name == identifier)
    if (items.length === 0){
        console.log("no items found. Try anouter search");
        
    }
        return items     
}

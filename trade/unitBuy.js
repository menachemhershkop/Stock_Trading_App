import { stockMarket } from "../data/data.js";

export default function unitBuy(unit, product){
    if ((product.availableStocks - unit) > 0){
        product.availableStocks -= unit
        return product
    }
    else {
        console.log("The requre units not in stock, try anouter sum");
        return false
    }
}

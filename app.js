import input from 'analiza-sync';
import { stockMarket } from './data/data.js';
import searchStock from './trade/search.js';
import { increaseCategory, increaseSelect } from './trade/priceChange.js';
import { decreaseCategory, decreaseSelect } from './trade/selePrice.js';
import filterStocksByPrice from './trade/filterPrice.js';
 

function buyOrSellSys(){
    let market = stockMarket
    while (true){
    let action = input("What are you want to do? \n for buy press 1. \n for sell press 2. \n for show all the items in stock press 3. \n for exit press 0. \n Enter your choice: ")
    if (action ==1){
        let search = input("Search product by id or name: ")
        let item = searchStock(search )
        console.log("item choice", item);
        let unit = input("Enter num of unit to buy")
        let buy = input("Are you sure? press 'yes' or 'not' ")
        if (buy == 'yes'){
            increaseSelect(item[0])
            console.log("updating item", item);
            let chingeCategory = increaseCategory(item[0].name, item[0].category, market)
            console.log("updating category", chingeCategory);
            market['lastUpdated'] = new Date(); 
        }
        else {
            console.log("select anuther option");
            
        }

    }
    if (action == 2){
        let search = input("Search product by id or name: ")
        let item = searchStock(search)
        console.log("item choice", item);
        let unit = input("Enter num of unit to buy")
        let buy = input("Are you sure? press 'yes' or 'not' ")
        if (buy == 'yes'){
            decreaseSelect(item[0], market)
            console.log("updating item", item);
            let chingeCategory = decreaseCategory(item[0].name, item[0].category, market)
            console.log("updating category", chingeCategory);
            market['lastUpdated'] = new Date(); 
        }
        else {
            console.log("select anuther option");
            
        }

    }
    if (action == 3){
        let amount = input("Enter amuont for filter")
        let only = input("Exact or approximate amount?? press 'yes'  or 'no': ")
        if (only == "yes"){
            console.log(filterStocksByPrice(amount, false));
        }
        else if (only == "no"){
            console.log(filterStocksByPrice(amount, true));
        }
        }
    if (action == 0){
        break;
    }}
        }
    
buyOrSellSys()
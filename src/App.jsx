import React, { useState } from "react";
import { Input } from "./components/input";
import { Chekbox } from "./components/chekbox";
import { ProductCategoryRow } from "./components/productCategory";
import { ProductRow } from "./components/products";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];



function App()
{
  const[showStokedOnly,setShowStokedOnly]=useState(false)
  const [search,setSearch]=useState('')
    return <div className="container my-3">
              <SearchBar 
              showStokedOnly={showStokedOnly}
               onStockedOnlyChange={setShowStokedOnly}
               search={search}
               onSearchChange={setSearch}
               ></SearchBar>
              <ProductTable products={PRODUCTS}></ProductTable>
           </div>  
}
function SearchBar(showStokedOnly,onStockedOnlyChange,search,setSearch)
{
  return <div>
           <div className="mb-3">
              <Input onchange={setSearch} value={search} placeholder='rechercher...'></Input>
              <Chekbox checked={showStokedOnly} onchange={onStockedOnlyChange} label="n'afficher que les produits en stock" id='stocked'></Chekbox>
           </div>
         </div>
}
function ProductTable({products})
{ 
  const rows=[]
  let lastCategory=null
  for(let product of products){
    if(product.category !== lastCategory){
      rows.push(<ProductCategoryRow key={product.category} name={product.category}></ProductCategoryRow>)
    }
    lastCategory=product.category
    rows.push(<ProductRow product={product} key={product.name}></ProductRow>)
  }
  return<table className="table">
          <thead>
              <tr>
                 <th>Nom</th>
                 <th>prix</th>
              </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
       </table>
}
export default App;

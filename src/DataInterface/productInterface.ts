
export default interface Product {
    id:string,
    title:string,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    thumbNail:string,
    images:string[]
}

export interface ImageT {
    url: string,
    alt: string
}


export interface ProductState {
    product:Product[],
    isLoading:boolean,
    isError :boolean,
    message:string
}

export const navLinks = [
    {linkName:"Smart Phone", link:"/smartphone"},
    {linkName:"Tablet", link:"/tablet"},
    {linkName:"Computers", link:"/computers"}
  ]
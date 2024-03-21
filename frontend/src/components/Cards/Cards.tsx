import { Pizza } from "@/types/Pizza";
import axios from "axios";

export default function Cards({id,flavor, price, quantity, pizzatype}: Pizza){

    return (
        <>
        <p>{flavor}</p>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{pizzatype}</p>
        </>
    )
}
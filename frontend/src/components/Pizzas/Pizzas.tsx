"use client"
import Image from "next/image";
import styles from './styles.module.scss'
import { useEffect, useState } from "react";
import { Pizza } from "@/types/Pizza";
import axios from "axios";
import Cards from "../Cards/Cards";

export default function Pizzas() {

  const [pizza, setPizza] = useState<Pizza[]>([])

  useEffect(()=>{
    const getPizzas = async()=>{
      await axios.get("http://localhost:3333/api/pizzas", {
        headers: {
            "Accept": "application/json",
        }
      })
      .then((response)=>{
        const data = response.data
        setPizza(data.data)
      }).catch((error)=>{
        console.log(error)
      })
    } 

    getPizzas()

  },[])



  return (
    <main className={styles.main}>
        <form action="http://localhost:3333/order" encType="application/json">
            <label htmlFor="flavor"/>
            <input type="text" value="flavor"/>
            <button>Pedir</button>
        </form>
        {pizza?.map((item)=>(
            <div key={item.id} className={styles.pizzas}>
                <Cards id={item.id} flavor={item.flavor} price={item.price} quantity={item.quantity} pizzatype={item.pizzatype}/>
            </div>
        ))}
    </main>
  );
}

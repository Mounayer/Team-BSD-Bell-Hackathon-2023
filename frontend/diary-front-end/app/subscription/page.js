'use client'
import axios from "axios"
import { useState, useEffect } from "react"
import Subcard from "@/src/components/subcard"



export default function page() {

    const [prices, setPrices] = useState([])

    useEffect(() => {
        fetchPrices()
    }, [])

    const fetchPrices = async () => {
        const {data} = await axios.get('api/getproducts')
        setPrices(data)
        console.log(data)
    }

    return (
        <section className="w-full">
              <div className="mx-auto max-w-4xl text-center mt-10 items-center">
                   <h2 className="text-3xl font-semibold leading-7 text-[#f1592a]">Subscriptions</h2>
                   <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Choose more storage for your security!</p>
                   <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">Check out all the information below</p>
                   <br/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1040px] items-center mx-auto">
                {prices && prices.map((price) => (
                 <Subcard price={price} key={price.id} />
                ))}
              </div>

              <br/><br/>
        </section>
       )
}

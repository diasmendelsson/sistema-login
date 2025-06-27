'use client'

import CountUp from "react-countup";
import { formatAmount } from "@/lib/utils";

export default function AnimatedCounter({amount}){
    return(
        <div className="w-full">
            <CountUp 
             prefix="R$"
             decimals={2}
             end={amount} 
             formattingFn={formatAmount}/>
        </div>
    )
}
import { useState } from "react";
import Calculator from "./Calculator";
import MortgageContext from "./MortgageContext";
import Result from "./Result";
import Start from "./Start";

function Container(){
    const [amount, setAmount] = useState('');
    const[term, setTerm] = useState('');
    const[rate, setRate] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [empty, setEmpty] = useState(true);
    const monthly_interest_rate = rate/(100 * 12);
    const [selected, setSelected] = useState("");
    const total_payments = term * 12;
    const totalRepayment = (Math.round( (monthlyPayment * total_payments) * 100) / 100).toLocaleString();

    const monthlyInterest =  (Math.round((amount * monthly_interest_rate) *100) /100) ;
    const totalInterest = ( monthlyInterest * term * 12).toLocaleString();    
    return(
            <MortgageContext.Provider value={{
                amount,
                setAmount,
                term,
                setTerm,
                rate,
                setRate,
                monthlyPayment,
                totalRepayment,
                setMonthlyPayment,
                monthly_interest_rate,
                total_payments,
                setEmpty,
                selected, 
                setSelected,
                monthlyInterest,
                totalInterest,
            }}>
                <div className="xl:flex h-[600px]">
                    <Calculator />
                    { empty ? <Start /> : <Result /> }
                    
                </div>
            </MortgageContext.Provider>

    )
}

export default Container;
import { useState } from "react";
import Calculator from "./Calculator";
import MortgageContext from "./MortgageContext";
import Result from "./Result";
import Start from "./Start";

function Container(){
    const [amount, setAmount] = useState('');
    const[term, setTerm] = useState('');
    const[rate, setRate] = useState('');
    const [selected, setSelected] = useState("");
    const [amountError, setAmountError] = useState(false);
    const [termError, setTermError] = useState(false);
    const [rateError, setRateError] = useState(false);
    const [selectedError, setSelectedError] = useState(false);

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [monthlyInterest, setMonthlyInterest] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalRepayment, setTotalRepayment] = useState(0);

    const [empty, setEmpty] = useState(true);

    const monthly_interest_rate = rate/(100 * 12);

    const total_payments = term * 12;

    function calculateMonthlyPayment (){

        if(!amount) {
         setAmountError(true);
        }else{setAmountError(false)}
        if(!rate) {
         setRateError(true);
        }else{setRateError(false)}
        if(!term) {
         setTermError(true);
        }else{setTermError(false)}
        if(!selected) {
         setSelectedError(true);
}else{setSelectedError(false)}
        if(!amount || !rate || !term || !selected) return ;
         
         setEmpty(false);

         setMonthlyPayment((monthlyPayment) => monthlyPayment = (amount * monthly_interest_rate * (1 + monthly_interest_rate ) ** total_payments ) / (((1 + monthly_interest_rate)** total_payments) -1 ) );
         setMonthlyInterest((x) => x =(Math.round((amount * monthly_interest_rate) *100) /100)) ;

         setTotalRepayment(x => x = (Math.round( (((amount * monthly_interest_rate * (1 + monthly_interest_rate ) ** total_payments ) / (((1 + monthly_interest_rate)** total_payments) -1 )) * total_payments) * 100) / 100).toLocaleString());
         setTotalInterest(x => x =( (Math.round((amount * monthly_interest_rate) *100) /100) * term * 12).toLocaleString()); 

         setAmountError(false);
         setRateError(false);
         setTermError(false);
         setSelectedError(false);
     }
   
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
                setTotalRepayment,
                setMonthlyPayment,
                monthly_interest_rate,
                total_payments,
                setEmpty,
                selected, 
                setSelected,
                monthlyInterest,
                totalInterest,
                setTotalInterest,
                calculateMonthlyPayment,
                amountError,
                rateError,
                termError,
                selectedError,
                setMonthlyInterest,
            }}>
                <div className="xl:flex h-[600px]">
                    <Calculator />
                    { empty ? <Start /> : <Result /> }
                    
                </div>
            </MortgageContext.Provider>

    )
}

export default Container;
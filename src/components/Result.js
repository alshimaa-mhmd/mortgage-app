import MortgageContext from "./MortgageContext";
import { useContext } from "react";
function Result(){
    const {monthlyPayment, totalRepayment, selected, monthlyInterest,
        totalInterest,} = useContext(MortgageContext);

    const roundedPayment = Math.round(monthlyPayment * 100) / 100;

    return(
    <div className="bg-[#133040] p-6 xl:p-8 xl:mx-[-32px] xl:w-[50%] xl:mt-0 xl:h-full xl:rounded-r-3xl xl:rounded-bl-[80px] xl:-ml-10" >
        <h1 className="text-slate-100 font-bold text-xl">Your results</h1>
        <br />
        <p className="leading-6 text-slate-400 font-semibold">
        Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again. 
        </p>
        <br />

        <div className="bg-[#0e2431] border-t-4 border-[#d9da31] rounded-md p-8 xl:h-[70%]">
            <h3 className="text-slate-400 font-semibold mb-8 text-[14px] sm:text-[25px]">Your monthly repayments</h3>
            <span className="text-[#d9da31] text-[30px] sm:text-6xl font-semibold leading-8">
                €{selected === "repayments" && roundedPayment}
                {selected === "interest" && monthlyInterest}
                </span>
            <hr className="border-slate-500 xl:my-8 my-6"/>
            <h3 className="text-slate-400 text-[14px] sm:text-[25px] mb-4 font-semibold">Total you'll repay over the term</h3>
            <span className="text-[25px] sm:text-4xl text-slate-100 leading-8">
                €{selected === "interest" && totalInterest}
                {selected === "repayments" && totalRepayment}
                </span>
        </div>
    </div>)
}
export default Result;

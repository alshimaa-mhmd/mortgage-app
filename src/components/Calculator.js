import '@fortawesome/fontawesome-free/css/all.min.css';
import { useContext, useState } from "react";
import MortgageContext from "./MortgageContext";

function Calculator(){
    const {amount, rate, term, setAmount, setRate, setTerm, setMonthlyPayment,monthly_interest_rate,total_payments, setEmpty, selected, setSelected} = useContext(MortgageContext);
    const [error, setError] = useState(false);
   
    
        function handleAmount(e){
            setAmount(Number(e.target.value)) 
        }
        function handleRate(e){
            setRate(Number(e.target.value))
        }
        function handleTerm(e){
            setTerm(Number(e.target.value))
        }

        function calculateMonthlyPayment (){

           if(!amount || !rate || !term || !selected) {
            setError(true);
            return;
           }
            
            setEmpty(false);
            setMonthlyPayment( (monthlyPayment) => monthlyPayment = (amount * monthly_interest_rate * (1 + monthly_interest_rate ) ** total_payments ) / (((1 + monthly_interest_rate)** total_payments) -1 ) );
            setError(false);
        }

        function clearAll(){
            setAmount('');
            setRate('');
            setTerm('');
            setMonthlyPayment(0)
        };

    return(
        <div className='xl:w-[50%] xl:h-[99%] xl:rounded-l-3xl bg-white  xl:shadow-slate-400 p-8 '>
            <header className="xl:flex items-center justify-between">
                <h1 className="text-xl text-slate-900 font-semibold mb-1">Mortgage Calculator</h1>
                <button onClick={clearAll} className="text-slate-700 underline hover:text-slate-900 hover:font-semibold mb-6 md:mb-0 xl:mr-6">Clear All</button>
            </header>
                <p className="text-slate-500 text-sm my-2 ">Mortgage Amount</p>
                <div className={`'my-4 w-[320px] xl:w-[470px] text-slate-900 border bg-white  font-semibold p-0 h-12 hover:border-slate-900 rounded-lg shadow-sm shadow-slate-300 overflow-hidden flex items-center justify-between' ${error ? 'border-[#d63429]': 'border-slate-400'}`}>
                    <i className={`fa-solid fa-euro-sign w-[10%] p-3 h-full text-[#7d94a1]  font-semibold overflow-hidden ${error ? 'bg-[#d63429] text-white' : 'bg-[#e3f4fc]'}`}></i>
                    <input name="amount" type='number' className="outline-none w-[90%] h-full px-4" value={amount} onChange={(e) => handleAmount(e)} />
                    
                </div>
                {error ? <p className='text-[#d63429] text-xs'>This field is required</p> : ""}

                <div className='xl:flex justify-normal items-center xl:my-4'>
                    <div className='xl-flex-col justify-between items-start xl:mr-6'>
                        <p className="text-slate-500 text-sm my-2 " >Mortgage Term</p>
                        <div className={`mt-4 w-[320px] xl:w-[220px] text-slate-900 border bg-white font-semibold p-0 h-12 hover:border-slate-900 rounded-lg shadow-sm shadow-slate-300 overflow-hidden flex items-center justify-between ${error ? 'border-[#d63429]': 'border-slate-400'}`}>
                        <input name="term" className={`outline-none w-[75%] h-full px-4 `} value={term} type='number' onChange={(e) => handleTerm(e)} />
                        <span className={`w-[25%] p-3 h-full text-[#7d94a1]  font-semibold ${error ? 'text-white bg-[#d63429]': 'bg-[#e3f4fc]'}`}>years</span>
                        </div>
                        {error ? <p className='text-[#d63429] text-xs'>This field is required</p> : ""}
                </div>
                <div className='xl-flex-col justify-between items-start'>
                <p className="text-slate-500 text-sm my-2">Interest Rate</p>
                <div className={`mt-4 w-[320px] xl:w-[220px] text-slate-900 border bg-white font-semibold p-0 h-12 hover:border-slate-900 rounded-lg shadow-sm shadow-slate-300 overflow-hidden flex items-center justify-between ${error ? 'border-[#d63429]': 'border-slate-400'}`}>
                <input name="rate" className={`w-[85%] outline-none h-full px-4 `} value={rate} type='number' onChange={(e) => handleRate(e)}/
                ><span className={` w-[15%] p-3 h-full text-[#7d94a1]  font-semibold ${error ? 'bg-[#d63429] text-white': 'bg-[#e3f4fc]'}`}> % </span>
                </div>
                {error ? <p className='text-[#d63429] text-xs'>This field is required</p> : ""}
                </div>
                </div>
                <p className="text-slate-500 text-sm my-2 ">Mortgage Type</p>
                <div className={`' border rounded-md p-2  py-4 w-[320px] my-4 xl:w-[470px] hover:bg-[#fafae0] hover:border-[#eff3ae]'  ${selected === 'repayments' ? 'bg-[#fafae0] border-[#eff3ae]' : 'border-salte-400'}`}>
                    <input type="radio" name="type" value="repayments" onChange={(e) => setSelected(e.target.value)} className=''/><span className='text-md text-slate-900 font-semibold mb-1 ml-1'> Repayments</span>
                </div>
                <div className={`' border rounded-md p-2 py-4 w-[320px] my-4 xl:w-[470px] hover:bg-[#fafae0] hover:border-[#eff3ae]' ${selected === 'interest' ? 'bg-[#fafae0] border-[#eff3ae]' : 'border-salte-400'}`}>
                    <input type="radio" name="type" value="interest"  onChange={(e) => setSelected(e.target.value)}/><span className='text-md text-slate-900 font-semibold mb-1 ml-1'> Interest Only</span>
                </div>
                {error ? <p className='text-[#d63429] text-xs'>This field is required</p> : ""}
                <button onClick={() => {
                    calculateMonthlyPayment();
                }}  className='text-center border w-[300px] bg-[#d9da31] p-3 rounded-full m-auto text-md text-slate-700 font-bold mt-6'>
                    <div className='flex items-center justify-center'>
                    <span className='mr-2'>
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/></svg></span>
                   <span> Calculate Repayments</span>
                   </div>
                    </button>
                
                
        </div>
    )
}

export default Calculator;

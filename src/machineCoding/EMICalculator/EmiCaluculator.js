import React, { useState } from "react";
import "./style.css";
import { tenureData } from "./utils/contant";

const EmiCaluculator = () => {
  const [cost, setCost] = useState();
  const [interestRate, setInterestRate] = useState(10);
  const [downPayment, setDownPayment] = useState();
  const [processingFee, setProcessingFee] = useState(1);
  const [loanAmount, setLoanAmount] = useState();
  const [tenure, setTenure] = useState();
  const [emi , seEmi] = useState(0)
  
  const CalculateEMI = (downpayment) => {
    if(!cost) return 

    const loanAmt = cost - downpayment;
    const rate = interestRate / 100;
    const numOfYear = tenure / 12;

    const  EMI = (loanAmt * rate * (1+rate)**numOfYear) / ((1+rate) ** numOfYear-1)

    return (EMI/12).toFixed()
  }

  const handleDownPayment = (e) => {
    if(!cost) return;

    const dp = Number(e.target.value)
    setDownPayment(dp.toFixed(0))

    const emi = CalculateEMI(dp)
    setDownPayment(emi)
  }

  const updateEMI = (e) => {
    if(!cost) return;

    const emi = Number(e.target.value)
    seEmi(emi.toFixed(0))
  }



  return (
    <div className="container">
      <h1 className="title" style={{ fontSize: "30px" }}>
        EMI Calculator
      </h1>

      <div className="input__container">
        <div className="input-group">
          <label className="input-label">Total Asset Cost</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="Total Cost of Asset"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Interest Rate</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="10"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Processing Fee</label>
          <input
            type="number"
            value={processingFee}
            onChange={(e) => setProcessingFee(e.target.value)}
            placeholder="Processing Fee"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Down Payment</label>
          <input
            type="range"
            min={0}
            max={cost}
            value={updateEMI}
            onChange={handleDownPayment}
          />
          <div className="labels">
            <label>0%</label>
            <label>{downPayment}</label>
            <label>100%</label>
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Loan Amount Per Month</label>
          <input
            type="range"
            value={loanAmount}
            onChange={updateEMI}
          />
          <div className="labels">
            <label>0%</label>
            <label>{loanAmount}</label>
            <label>100%</label>
          </div>
        </div>

        <div className="tenure__">
        <span className="tenure-title">Tenure {tenure}</span>
        </div>
        

        <div className="tenureContainer">
        
          {tenureData.map((t, i) => {
            return (
              <button
                key={i}
                className={`tenure ${tenure === t ? "tenureSelected" : ""}`}
                onClick={()=>setTenure(t)}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmiCaluculator;

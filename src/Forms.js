import React, { useState } from "react";
import { useDispatch } from "react-redux";


function Forms() {
  let dispatch = useDispatch();
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [number,setNumber] = useState('')
  return (
    <div className="container">
      <h2 className="text-primary mt-5">Forms</h2>
      <div className="row">
        <div className="col-4">
          <input
            className="form-control"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e)=>{
                let data = e.target.value
                setAmount(data)
            }}
          />
        </div>
        <button
          className="btn btn-primary col-1"
          onClick={() => {
            dispatch({ type: "deposit", payload: amount});
            setAmount('')
          }}
        >
          Deposit
        </button>
        <button
          className="btn btn-danger mx-2 col-1"
          onClick={() => {
            dispatch({ type: "withdraw", payload: amount});
            setAmount('')
          }}
        >
          Withdraw
        </button>
      </div>
      <div className="row mt-2">
        <div className="col-4">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>{
                let data = e.target.value
                setName(data)
            }}
          />
        </div>
        <button
          className="btn btn-primary col-1"
          onClick={() => {
            dispatch({ type: "nameUpdate", payload: name});
            setName('')
          }}
        >
          Update
        </button>
      </div>
      <div className="row mt-2">
        <div className="col-4">
          <input
            className="form-control"
            type="number"
            placeholder="Enter Number"
            value={number}
            onChange={(e)=>{
                let data = e.target.value
                setNumber(data)
            }}
          />
        </div>
        <button
          className="btn btn-primary col-1"
          onClick={() => {
            dispatch({ type: "numberUpdate", payload: number});
            setNumber('')
          }}
        >
          Update
        </button>
      </div>
      <button
          className="btn btn-danger mt-4 col-1"
          onClick={() => {
            dispatch({ type: "reset"});
            setNumber('')
          }}
        >
          Reset
        </button>
    </div>
  );
}

export default Forms;

import React from "react";
import { useSelector } from "react-redux";

function Account() {
  let data = useSelector((state) => {
    return state;
  });
  return (
    <div className="container">
      <h1 className="text-primary mt-5">Account Details</h1>
      <table className="table table-bordered w-50">
        <thead>
          <tr>
            <th>Balance</th>
            <th>UserName</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{data.Balance}</th>
            <th>{data.UserName}</th>
            <th>{data.Mobile}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Account;

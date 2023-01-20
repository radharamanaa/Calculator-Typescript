import React, { useEffect, useState } from "react";
import "./App.css";
import { SingleNumber } from "./molecules/SingleNumber";
import { SingleOperator } from "./molecules/SingleOperator";

function App() {
  const [expr, setExpre] = useState("");
  function updateNumber(number: number): void {
    setExpre((prev) => prev + number);
    console.log(number);
  }
  function updateOperator(operator: string): void {
    setExpre((prev) => prev + operator);
  }
  let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let operators: string[] = ["-", "+", "/", "*"];
  return (
    <div className="mt-24 p-4">
      <div className="w-full flex items-center justify-center">
        {expr && (
          <div className="text-lg bg-blue-800 text-gray-100 py-8 px-4 rounded-lg text-center my-16 mx-auto">
            {expr}
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 w-1/3 mx-auto drop-shadow-md shadow-md shadow-slate-300">
        {numbers.map((item) => (
          <div className="">
            <SingleNumber number={item} clickUpdate={updateNumber} />
          </div>
        ))}
        {operators.map((item) => (
          <div className="">
            <SingleOperator operator={item} clickUpdate={updateOperator} />
          </div>
        ))}
        <div className="grid-cols-2">
          <div
            className="bg-indigo-700 text-slate-100 m-1
         text-center "
          >
            <div
              className="text-lg text-slate-100 py-4"
              onClick={() => setExpre("")}
            >
              Clear Expression
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

interface Props {
  number: number;
  clickUpdate: Function;
}

export const SingleNumber: React.FC<Props> = ({number, clickUpdate}) => {
    
    return (
        <div onClick={() => clickUpdate(number)} className="bg-indigo-700 text-slate-100 m-1 cursor-pointer
         text-center ">
            <div className="text-lg text-slate-100 py-4">
                {number}
            </div>
        </div>
    )
};

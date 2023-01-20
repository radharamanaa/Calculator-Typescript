import React from "react";

interface Props {
  operator: string;
  clickUpdate: Function;
}

export const SingleOperator: React.FC<Props> = ({operator, clickUpdate}) => {
    
    return (
        <div onClick={() => clickUpdate(operator)} className="bg-indigo-700 text-slate-100 m-1 cursor-pointer
         text-center ">
            <div className="text-lg text-slate-100 py-4">
                {operator}
            </div>
        </div>
    )
};

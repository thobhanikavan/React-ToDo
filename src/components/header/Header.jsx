import React from "react";
import CurDate from "./CurDate"; 

const Header = () => {
    return(
      <div className="grid grid-flow-row-dense grid-cols-3 rounded-lg bg-gray-50 h-16 ...">
          <div class="col-span-2  bg-gray-50 h-16 ">
            
              <h1 className="text-2xl font-normal leading-normal mt-0 mb-2 text-stone-800">
              ToDo list </h1>
        
          </div>
  
          <div className=" bg-gray-50">
            
            <CurDate/></div>
      </div>  
    )
}
export default Header;
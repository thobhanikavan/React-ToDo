import React, { useState } from "react";
import PopupOfDelete from "../modal/PopupOfDelete.jsx";

const AddIteam = () => {
    const [inputData,setInputData] = useState('');
    const [items, setIteams] = useState([]);
    const [selectedItemIndex, setSelectedItemIndex] = useState();

    const strikeThrough = { textDecorationLine: 'line-through' };
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };

    {/*const Iteam = () =>{
        if(inputData) {
            setIteams([ inputData, ...items]);
            setInputData('');
        }
    }*/}

    const [popupOfDelete, setpopupOfDelete] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputData) {
            setIteams([ inputData, ...items]);
            setInputData('');
        }

      };

    const deleteItem = () =>{
        const updatedItems = items.filter((elem,idn) =>{
            return idn!== selectedItemIndex;

        })
        setIteams(updatedItems);
        setSelectedItemIndex('');
        setpopupOfDelete(false);

    }

    return (
    <div>
        <div className="flex mt-4">
            <form onSubmit={onSubmit} className=" flex-auto">
                <input type="text" className="shadow appearance-none border rounded flex-auto w-90 py-2 px-3 mr-4 text-grey-darker" placeholder="add items ..."
                value={inputData}
                onChange ={(e) => setInputData(e.target.value)}
                />
                <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 " type="submit" >Add</button>
            </form>
        </div>


        <div>
            {
                items.map ((elem ,ind) => {
                    return(

                        <div className="flex mb-4 items-center pt-6 ..." key={ind}>
                            <input type="checkbox" className="form-checkbox h-5 w-5 pr-6" checked={isChecked} onChange={handleOnChange}></input>
                            <span className=" w-full  text-grey-darkest pl-8" style={isChecked ? strikeThrough : null}>{elem}</span>

                            <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600 " onClick={() =>{
                                setSelectedItemIndex(ind)
                                setpopupOfDelete(true)
                            }}>delete</button>

                        </div>

                    )

                })
            }

        </div>

        {popupOfDelete && <PopupOfDelete closepopupOfDelete={setpopupOfDelete} onConfirm={deleteItem} />}

    </div>

    )
}

export default AddIteam;

<div>
<p classNameName="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Email already
  taken!</p>
</div>

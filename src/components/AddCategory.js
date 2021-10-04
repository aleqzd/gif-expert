import React, { useState } from"react";
import propTypes from 'prop-types';

 export const AddCategory = ({setCategories})=>{
    const [inputValue, setinputValue] = useState("");
     const handleInputChange=(e)=>{
        //console.log()
        setinputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue !== null && inputValue !==""){
        setCategories(categories => [inputValue, ...categories]);
        setinputValue("")
        }
    }
   
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange} 
            />
        </form>
    ) 

   
 }
 AddCategory.propTypes={
    setCategories: propTypes.func.isRequired
}
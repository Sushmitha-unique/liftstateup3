import React,{useState} from 'react'

const State = () => {
    const [select,setselect]=useState("");
    return(
        <div>
           <div className='parent'>
            <h1>Parent Component</h1>
            <div className='child1'>
                <h1>Child Component 1</h1>
                <button onClick={()=>setselect("option1")}>Option1</button>
            </div> 
            <div className='child2'>
                <h1>Child Component 2</h1>
                <button onClick ={()=>setselect("option2")} >Option2</button>
            </div>
            <p className='text'><b>Selected option : {select}</b></p> 
           </div>
        </div>
    )
}
export default State;
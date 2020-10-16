import React, {useState} from 'react'
import './TodoForm.css';



function TodoForm(props) {
    const [input,setInput] = useState([])
     const [date , setDate] = useState('')
    
    //  const handleChange=e=>{
    //     setInput(e.target.value);

    // }
    const handleSubmit=e=>{
        e.preventDefault()
        // const isValid = formValidation();
         //props.onSubmit({
          //id:Math.random()*10000),
          //text:input
         //});
//    props.addTodo(input , date)
//         setInput('');
//         setDate('');
    
    
       if (input==""){
       console.log("Enter TOdo") 
       alert("enter todo")
       e.preventDefault()}
      
       else if (date==""){
         alert("Enter date!")
         e.preventDefault()
       }
       else{
        props.addTodo(input , date)
        setInput('');
        setDate('');
       }
    }
    

    // const handleDateChange=e=>{
    //     setDate(e.target.value)
    // };
    return (
        <div className='forminput'>
            <form  onSubmit={handleSubmit}>
              
                <input
                type='text'
                placeholder='Add a todo!.....'
                value={input}
                name='text'
                className='todo-input'
                onChange={(e)=>{setInput(e.target.value)}}
                />
                <input 
                type='date'
                name='date'
                value={date}
                onChange={(e)=>{setDate(e.target.value)}}
                />
                <button type="submit" href=" " className='btn'>Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm;
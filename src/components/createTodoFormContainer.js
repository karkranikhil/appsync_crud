import React, {useState, useEffect} from 'react'
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import {createTodo} from '../graphql/mutations'
import { CreateTodoForm } from './createTodoForm';
const initialState={
  firstName:"",
  lastName:"",
  employer:"",
  age:"",
  task:"",
  status:""
  }
 const CreateTodoFormContainer=(props)=>{
   const [inputs, setInputs] = useState(initialState)
   const handleChange=(event)=>{
       setInputs({...inputs,[event.target.name]:event.target.value})
   }
   const submitHandler=(e, createTodo)=>{
       e.preventDefault()
       const {firstName, lastName, employer, age, task, status}= inputs
       createTodo({
        variables:{
            input:{
              firstName,
              lastName,
              employer,
              age,
              task,
              status
            }
        }
      }).then(res => {
        setInputs({...inputs,...initialState})
        props.history.push("/");
      });
   }
   useEffect(() => {
    console.log(props)
    if(props && props.data){
      setInputs({...inputs,...props.data})
    }
    
   },[props.data]);
    return(
        <Mutation mutation={gql(createTodo)}>
        {(createTodo, { loading, error }) => {
            if (loading) {
                return <p>Loading ...</p>;
              }
              if (error) {
                return <p>{error.message}</p>;
              }
            return (
            <CreateTodoForm 
                data={inputs} 
                handleChange={handleChange}
                handleSubmit={(event)=>submitHandler(event, createTodo)}
            />
            )
         }}
        </Mutation>
    )
}


export default CreateTodoFormContainer



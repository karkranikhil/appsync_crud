import React, {useState} from 'react'
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import {getTodo} from '../graphql/queries'
import {updateTodo} from '../graphql/mutations'
import {CreateTodoForm} from '../components/createTodoForm'
const initialState={
    firstName:"",
    lastName:"",
    employer:"",
    age:"",
    task:"",
    status:""
    }
 const UpdateTodoFormContainer=({ history, match })=>{
    const [inputs, setInputs] = useState(initialState)
    const handleChange=(event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }
    const submitHandler=(e, updateTodo)=>{
        e.preventDefault()
        const {id, firstName, lastName, employer, age, task, status}= inputs
        updateTodo({
         variables:{
             input:{
                id,
               firstName,
               lastName,
               employer,
               age,
               task,
               status
             }
         }
       }).then(res => {
         console.log(res)
         history.push('/')
       });
    }
   return (
    <Query query={gql(getTodo)} variables={{ id: match.params.id }}> 
    {({ data, loading, error }) => {
        console.log(data)
        if(data && data.getTODO &&  (data.getTODO.id !== inputs.id)){
            setInputs({...inputs, ...data.getTODO})
        }

        return(
            <Mutation mutation={gql(updateTodo)}>
                {(updateTodo, { loading, error }) => {
                    if (loading) {
                        return <p>Loading ...</p>;
                      }
                      if (error) {
                        return <p>{error.message}</p>;
                      }
                    return (
                        <>
            
                        {/* {data && data.getTODO && <CreateTodoFormContainer data ={data.getTODO}/>} */}
            
                        {data && data.getTODO && <CreateTodoForm 
                            data={inputs} 
                            handleChange={handleChange}
                            handleSubmit={(event)=>submitHandler(event, updateTodo)}
                        />}
                        </>
                     )
                }}
            </Mutation>
        )
    }}
     </Query>
 )
        

}


export default UpdateTodoFormContainer




// import React, {useState} from 'react'
// import { Query, Mutation } from "react-apollo";
// import gql from "graphql-tag";
// import {createTodo} from '../graphql/mutations'
// import {getTodo} from '../graphql/queries'

// import { CreateTodoForm } from './createTodoForm';

// const initialState={
//   firstName:"",
//   lastName:"",
//   employer:"",
//   age:"",
//   task:"",
//   status:""
//   }
//  const UpdateTodoFormContainer=({ history, match })=>{
//    const [inputs, setInputs] = useState(initialState)
//    const handleChange=(event)=>{
//        setInputs({...inputs,[event.target.name]:event.target.value})
//    }
//    const submitHandler=(e, createTodo)=>{
//        e.preventDefault()
//        const {firstName, lastName, employer, age, task, status}= inputs
//        createTodo({
//         variables:{
//             input:{
//               firstName,
//               lastName,
//               employer,
//               age,
//               task,
//               status
//             }
//         }
//       }).then(res => {
//         console.log(res)
//         setInputs({...inputs,...initialState})
//       });
//    }

//    return (
//     <Query query={gql(getTodo)} variables={{ id: match.params.id }}> 
//     {({ data, loading, error }) => {
//         console.log(data.getTODO)
       
//     return (
//     <Mutation mutation={gql(createTodo)}>
//      {(createAuction, { loading, error }) => {
//          if (loading) {
//              return <p>Loading ...</p>;
//            }
//            if (error) {
//              return <p>{error.message}</p>;
//            }
//          return (
//              <>
//          {data && data.getTODO && <CreateTodoForm 
//              data={data.getTODO} 
//              handleChange={handleChange}
//              handleSubmit={(event)=>submitHandler(event, createAuction)}
//          />}
//          </>
//          )
//       }}
//      </Mutation>)
//     }}
//      </Query>
//  )
        

// }


// export default UpdateTodoFormContainer



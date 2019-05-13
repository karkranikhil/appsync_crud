import React, {useState,useEffect} from 'react'
import { Query } from 'react-apollo';
import CustomizedTable from './table'
import {listTodOs} from '../graphql/queries'
import gql from 'graphql-tag';
import { buildSubscription } from 'aws-appsync';
import {deleteTodo} from '../graphql/mutations'
import {onDeleteTodo} from '../graphql/subscriptions'
export const OnMount=({onEffect})=>{
  useEffect(onEffect, [])
  return null
}
const Dashboard=()=>{
  const [dummy, setDummy] = useState(true); 
  const handleDelete = (e,deleteTodo, id) => {
    e.preventDefault()
    
    deleteTodo({
     variables: {
         input: {
             id: id
         }
     }
   }).then(res => {
     console.log(res)
    setDummy(!dummy)
    console.log(dummy)
  });
   
  }
    return (
        <div className="dashboard">
        <h1>Todo List</h1>
        
        <Query query={gql(listTodOs)} fetchPolicy='network-only'>  
            {({data,loading, error, subscribeToMore})=>{
                console.log(data)
                
                const result = data && data.listTODOs && data.listTODOs.items ? data.listTODOs.items:[]
                if (loading) {
                    return <p>Loading ...</p>;
                  }
                  if (error) {
                    return <p>{error.message}</p>;
                  }
                  return(
                      
                        <div>
                        <OnMount onEffect={()=>{
                            return subscribeToMore(
                                buildSubscription(gql(onDeleteTodo), gql(listTodOs))
                                )
                        }}/>
                        <CustomizedTable data={result} deleteHandler={handleDelete}/>
                        </div>
                  )
            }
            }
        </Query>
      </div>
    )
}
export default Dashboard
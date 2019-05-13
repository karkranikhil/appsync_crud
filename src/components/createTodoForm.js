import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const CreateTodoForm=(props)=>{
    console.log(props)
    const {firstName, lastName, employer, age, task, status}= props.data
    return(
            <form onSubmit={props.handleSubmit} className="width50">
                <h1>{props.data && props.data.id ?'Edit your Task':'Create your Task'}</h1>
                <TextField
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    margin="normal"
                    fullWidth
                    onChange={props.handleChange}
                />
                <br/>
                <TextField
                    name="lastName"
                    label="last Name"
                    value={lastName}
                    margin="normal"
                    fullWidth
                    onChange={props.handleChange}
                />
                <br/>
                <TextField
                    name="employer"
                    label="Employer"
                    value={employer}
                    margin="normal"
                    fullWidth
                    onChange={props.handleChange}
                />
                <br/>
                <TextField
                    name="age"
                    label="Age"
                    value={age}
                    margin="normal"
                    fullWidth
                    onChange={props.handleChange}
                />
                <br/>
                <TextField
                    name="task"
                    label="Task assigned"
                    value={task}
                    margin="normal"
                    fullWidth
                    onChange={props.handleChange}
                />
                <br/>
                <TextField
                    name="status"
                    label="Status"
                    value={status}
                    margin="normal"
                    fullWidth
                    onChange={props.handleChange}
                />
                <br/>
                <Button variant="contained" type="submit" >
        {props.data.id ? 'Update':'Submit'}
      </Button>

             </form>
    )
}



import React,{useState} from 'react'
import "./Search.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux"
import { filterEvent } from '../../redux/actions/eventActio';
function Search() {
  const dispatch=useDispatch()
  const [filter,setFilter]=useState("")
  return (
    <div className='sear'>
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Event" variant="standard" onChange={(e)=>setFilter(e.target.value)}/>
      <TextField id="standard-basic"  variant="standard" type="date"/>
      <div className='searBtn'>
      <Button variant="contained" onClick={()=>dispatch(filterEvent(filter))}>Search</Button>
      <Button variant="contained">Cancel</Button>
            </div>
    </Box>
       
    </div>
  )
}

export default Search
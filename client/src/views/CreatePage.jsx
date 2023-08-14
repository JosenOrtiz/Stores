//import { ErrorResponse } from "@remix-run/router";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const CreatePage =() => {
    const [name, setName] =useState()
    const [number, setNumber] =useState()
    const [openStatus, setOpenStatus] =useState(false)

    const [errList, setErrList] = useState([])
    
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/stores`, {name, number, openStatus})
            .then(res=>{
                console.log(res.data)
                navigate(`/`)
            })
            .catch(err=>{
                const errResponseData = err.response.data.errors
                const tempErrMsgArr = []
                for (const eachKey in errResponseData){
                    
                    tempErrMsgArr.push(errResponseData[eachKey].message)
                }
                setErrList(tempErrMsgArr)
            })
                

    }

    return(
        <div>
            <p><Link to="/">Dashboard</Link></p>
            <form onSubmit={handleSubmit}>
                <div>
                <label for="name">Store Name: </label>
                <input type="text" name="name" value={name}
                    onChange={(e) =>setName(e.target.value)} /><br></br>
                <label for="number">Store Number: </label>
                <input type="number" name="number" value={number}
                    onChange={(e) =>setNumber(e.target.value)} /><br></br>
                <label>Is it Open?:</label><br></br>
                <input className="form-check-input" type="checkbox" name="openStatus" checked={openStatus}
                    onChange={(e) =>setOpenStatus(e.target.checked)} />
                    <label className="form-check-label" for="openStatus">True</label><br></br>
                
        
            
                <button className="btn btn-success" type="submit">Submit</button>
                {
                    errList.map((eachErr, idx)=>{
                        return(
                            <p style={{color: "red"}} key={idx}> {eachErr}</p>
                        )
                    })
                }
                </div>
            </form>
            
        </div>
    )
}

export default CreatePage
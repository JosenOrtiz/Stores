import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

const EditPage = () =>{
    const {id} = useParams()

    const navigate = useNavigate()

    const [name, setName] =useState()
    const [number, setNumber] =useState()
    const [openStatus, setOpenStatus] =useState()

    const [errList, setErrList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                const oneStore = res.data
                setName(oneStore.name)
                setNumber(oneStore.number)
                setOpenStatus(oneStore.openStatus)
                
                })
            .catch(err=>console.log(err))
    }, [id])

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/stores/${id}`, {name, number, openStatus})
            .then(res=>{
                navigate('/')
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

    return (
    
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
                <input type="checkbox" id="true" name="openStatus" checked={openStatus}
                    onChange={(e) =>setOpenStatus(e.target.checked)} />
                    <label for="openStatus">True</label><br></br>
                
                <button className="btn btn-success" type="submit">Submit Changes</button>
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

export default EditPage
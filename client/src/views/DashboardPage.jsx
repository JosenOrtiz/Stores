import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link} from "react-router-dom";

const DashboardPage = () =>{
    const [storeList, setStoreList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/stores`)
            .then(res =>{
                console.log(res.data)
                setStoreList(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/stores/${deleteId}`)
        .then(res =>{
            handleFilterList(deleteId)
        })
        .catch(err=>console.log(err))
    }

    const handleFilterList = (deleteId)=>{
        const filteredList = storeList.filter((eachStore)=>deleteId !==eachStore._id)
        setStoreList(filteredList)
    }
    return (
        <div className="container">
            <p className="aligncenter"><Link className="btn btn-success" to="/stores/create"> Create</Link></p>
                <table className="center">
                    <thead>
                        <tr>
                            <th>Store Name</th>
                            <th>Store Number</th>
                            <th>Open Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storeList.map((eachStore, idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td> {eachStore.name} </td>
                                        <td> {eachStore.number} </td>
                                        <td> {eachStore.openStatus} </td>
                                        <td> 
                                            <Link className="btn btn-warning" to={`/stores/${eachStore._id}/edit`}>Edit</Link>
                                            <button className="btn btn-danger" onClick={(e)=>handleDelete(eachStore._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
    )
        
    
}

export default DashboardPage
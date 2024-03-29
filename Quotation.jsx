import React from 'react'
import Axios from 'axios'
import Button from '@mui/material/Button';
import {Delete,Edit,Add,Close} from "@mui/icons-material"
import "./quotation.css";
import { useState,useEffect } from 'react';
import Model from 'react-modal'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Quotation() {
    
    const [visible,setvisible]=useState(false)
    const [phone_admin , setphone_admin] = useState("");
    const [address_user, setaddress_user] = useState("");
    const [phone_user , setphone_user] = useState("");
    const [date_ , setdate_] = useState("");
    const [title_quotation , settitle_quotation] = useState("");
    const [no_quotation , setno_quotation] = useState(0);
    const [annotation , setannotation] = useState("");
    const [id_tax_user , setid_tax_user] = useState("");
    const [id_tax_admin , setid_tax_admin] = useState("");
    const [quotationList, setquotationList] = useState([]);
    
    const getquotation = () => {
        Axios.get('http://localhost:3001/quotation').then((response)=>
        {
            setquotationList(response.data);
        });

     }

     useEffect(() => {
        getquotation();
      }, []);

      const addQuotation = () => {
        Axios.post("http://localhost:3001/create", {
            phone_admin  : phone_admin,
            address_user : address_user,
            phone_user : phone_user,
            date_  : date_ ,
            title_quotation: title_quotation,
            annotation : annotation ,
            no_quotation : no_quotation ,
            id_tax_user : id_tax_user,
            id_tax_admin : id_tax_admin ,

        }).then(() => {
            setquotationList([
            ...quotationList,
            {
                phone_admin  : phone_admin,
                address_user : address_user,
                phone_user : phone_user,
                date_  : date_ ,
                title_quotation: title_quotation,
                annotation : annotation ,
                no_quotation : no_quotation ,
                id_tax_user : id_tax_user,
                id_tax_admin : id_tax_admin ,
            },
          ]);
        });
      };
    
      const deletequotation = (no_quotation) => 
      {
        Axios.delete(`http://localhost:3001/delete/${no_quotation}`).then((response) => {
           setquotationList(
            quotationList.filter((val) => {
                return val.no_quotation != no_quotation;
            })
           ) 
        })

      }


      const editquotation = () => {
        Axios.post("http://localhost:3001/edit", {
            phone_admin  : phone_admin,
            address_user : address_user,
            phone_user : phone_user,
            date_  : date_ ,
            title_quotation: title_quotation,
            annotation : annotation ,
            no_quotation : no_quotation ,
            id_tax_user : id_tax_user,
            id_tax_admin : id_tax_admin ,
        }).then(() => {
            setquotationList([
            ...quotationList,
            {
                phone_admin  : phone_admin,
                address_user : address_user,
                phone_user : phone_user,
                date_  : date_ ,
                title_quotation: title_quotation,
                annotation : annotation ,
                no_quotation : no_quotation ,
                id_tax_user : id_tax_user,
                id_tax_admin : id_tax_admin ,
            },
          ]);
        });
      };


   
    


  return (
    

   
   <div >    
            <h3>Quotation manage</h3>
            
            {quotationList.map((val, key) =>{

            return(
            
                <div className='table'>
                    <p> No: {val.no_quotation}</p>
                    <p> Title: {val.title_quotation}</p>
                    <p> Date: {val.date_}</p>
                    <p className='button' onClick={() => {deletequotation(val.no_quotation)}}><Delete />Delete</p>
                    <p className='button'  onClick={()=>{setvisible(true);setvisible(val.no_quotation);}} ><Edit />Edit</p>
                </div>
                
               
            )
            
        })}

        <p className='add' onClick={()=>setvisible(true)}> <Add />ADD</p>
        <Model isOpen={visible}>
            <h1>ADD </h1>
            <p className='close' onClick={()=>setvisible(false)}><Close /></p>
            <form className='form' action="">
                <div className='block1'>
                <div>
                <p>No Quotation</p>
                <TextField id="outlined-basic" label="No Quotation" variant="outlined" onChange={(event) => {setno_quotation(event.target.value)} } />
                </div>
                <div>
                <p>Title</p>
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(event) => {settitle_quotation(event.target.value)} }/>
                </div>
                <div>
                <p>Date</p>
                <TextField id="outlined-basic" label="Date" variant="outlined" onChange={(event) => {setdate_(event.target.value)} }/>
                </div>
                <div>
                <p>Address User</p>
                <TextField id="outlined-basic" label="Date" variant="outlined" onChange={(event) => {setaddress_user(event.target.value)} }/>
                </div>
                </div>
                <div className='block2'>
                
                <div>
                <p>Phone Admin</p>
                <TextField id="outlined-basic" label="Phone Admin" variant="outlined" onChange={(event) => {setphone_admin(event.target.value)} }/>
                </div>
                <div>
                <p>Phone user</p>
                <TextField id="outlined-basic" label="Phone user" variant="outlined" onChange={(event) => {setphone_user(event.target.value)} }/>
                </div>
                <div>
                <p>Id tax user</p>
                <TextField id="outlined-basic" label="Id tax user" variant="outlined" onChange={(event) => {setid_tax_user(event.target.value)} }/>
                </div>
                <div>
                <p>Id tax Admin</p>
                <TextField id="outlined-basic" label="Id tax Admin" variant="outlined" onChange={(event) => {setid_tax_admin(event.target.value)} }/>
                </div>
                <div>
                <p>Annotation</p>
                <TextField id="outlined-basic" label="Annotation" variant="outlined" onChange={(event) => {setannotation(event.target.value)} }/>
                </div>
                </div>
                
            </form>
            <button onClick={addQuotation}>add</button>
            <Link to="/Detaildown">
             <button>View</button>
            </Link>
            

        </Model>
        <Model isOpen={visible}>
            <h1>Edit Quotation</h1>
            <p className='close' onClick={()=>setvisible(false)}><Close /></p>
            <form className='form' action="">
                <div className='block1'>
                <div>
                <p>No Quotation</p>
                <TextField id="outlined-basic" label="No Quotation" variant="outlined" onChange={(event) => {setno_quotation(event.target.value)} } />
                </div>
                <div>
                <p>Title</p>
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(event) => {settitle_quotation(event.target.value)} }/>
                </div>
                <div>
                <p>Date</p>
                <TextField id="outlined-basic" label="Date" variant="outlined" onChange={(event) => {setdate_(event.target.value)} }/>
                </div>
                <div>
                <p>Address User</p>
                <TextField id="outlined-basic" label="Date" variant="outlined" onChange={(event) => {setaddress_user(event.target.value)} }/>
                </div>
                </div>
                <div className='block2'>
                
                <div>
                <p>Phone Admin</p>
                <TextField id="outlined-basic" label="Phone Admin" variant="outlined" onChange={(event) => {setphone_admin(event.target.value)} }/>
                </div>
                <div>
                <p>Phone user</p>
                <TextField id="outlined-basic" label="Phone user" variant="outlined" onChange={(event) => {setphone_user(event.target.value)} }/>
                </div>
                <div>
                <p>Id tax user</p>
                <TextField id="outlined-basic" label="Id tax user" variant="outlined" onChange={(event) => {setid_tax_user(event.target.value)} }/>
                </div>
                <div>
                <p>Id tax Admin</p>
                <TextField id="outlined-basic" label="Id tax Admin" variant="outlined" onChange={(event) => {setid_tax_admin(event.target.value)} }/>
                </div>
                         <div>
                <p>Annotation</p>
                <TextField id="outlined-basic" label="Annotation" variant="outlined" onChange={(event) => {setannotation(event.target.value)} }/>
                </div>
                </div>
                
              
            </form>
            <button onClick={addQuotation}>add</button>
            <Link to="/Detaildown">
        <button>View</button>
      </Link>

        </Model>
        
        
        

  </div>  
     
            
  )
}
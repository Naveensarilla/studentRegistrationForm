import {useReactToPrint} from 'react-to-print'

import { useEffect, useRef, useState } from 'react'

export const Pdf = () => {

    const componentPDF = useRef()

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: 'Userdata',
        onAfterPrint: () => alert('Data saved in pdf')
    })


     const [i,ind] = useState([])
    useEffect(() =>{
        fetch('http://localhost:709/').then(
            response => response.json()
        ).then(json => ind(json))
    },[])



    return (
    <div>
    <div ref={componentPDF} style={{width: '100%',display:'none'}}>

        <div className='container' style={{display:'flex',flexDirection:'column', gap:'5rem',width:"80%",margin:'0 auto'}}>
        {i.map((item,indexx,) =>{
            return(

                
                <div className='content1' style={{padding:'5rem'}} key={indexx}>
                    <h1 style={{}}>REGISTRATION DETAILS</h1>
                <div className='content2'  ref={componentPDF} style={{display: 'flex', flexDirection: 'column',gap:"1rem"}}>
                   

                   <h2 style={{margin:'0',fontSize:'16px',background:'#d6d6ff',color:'#000',padding:'10px'}}>REGISTRATION DETAILS</h2>
                    <div className='content3' style={{display:"flex", gap:'15rem'}} key={indexx}>

                        <div>
                        <div style={{display:'flex',gap:'1rem',padding:'10px'}}>
                            <p style={{margin:0,fontWeight:'600',textTransform:'uppercase'}}>CANDIDATE NAME : </p> 
                            <p style={{margin:0,}}>{item.CandidateName}</p>
                        </div>

                        <div style={{display:'flex',padding:'10px',gap:'1rem'}}>
                            <p style={{margin:0,fontWeight:'600',textTransform:'uppercase'}}>DATE OF BIRTH  : </p> 
                            <p style={{margin:0,}}>{item.DataOfBirth}</p>
                        </div>

                        <div style={{display:'flex',padding:'10px',gap:'1rem'}}>
                           <p style={{margin:0,fontWeight:'600',textTransform:'uppercase'}}>Email Id : </p> 
                           <p style={{margin:0,}}>{item.EmailId}</p>
                        </div>

                        <div style={{display:'flex',padding:'10px',gap:'1rem'}}>
                            <p style={{margin:0,fontWeight:'600',textTransform:'uppercase'}}>ConfirmEmailId  : </p> 
                            <p style={{margin:0,}}>{item.ConfirmEmailId}</p>
                        </div>

                        <div style={{display:'flex',padding:'10px',gap:'1rem'}}>
                             <p style={{margin:0,fontWeight:'600',textTransform:'uppercase'}}>Contact No : </p> 
                             <p style={{margin:0,}}>{item.ContactNo}</p>
                        </div>

                        <div style={{display:'flex',padding:'10px',gap:'1rem'}}>
                            <p style={{margin:0,fontWeight:'600',textTransform:'uppercase'}}>Gender : </p> 
                            <p style={{margin:0,}}>{item.Gender}</p>
                        </div>

                        <div style={{display:'flex',padding:'10px',gap:'1rem'}}>
                            <p style={{margin:0,fontWeight:'600',textTransform:'uppercase'}}>Category : </p> 
                            <p style={{margin:0,}}>{item.Category}</p>
                        </div>
                        </div>
                        

                        <div style={{height:'100px',width:'100px',border:'1px solid'}}><img src="" alt="image" /></div>
                    </div>



                    <h2 style={{margin:'0',fontSize:'16px',background:'#d6d6ff',color:'#000',padding:'10px'}}>FATHER'S/GUARDIAN'S DETAILS</h2>
                    <div style={{display:'flex', gap:'10rem'}}>

                        <div>
                            <div className='content3' key={indexx} style={{display:'flex'}}><p style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}} >FathersName : </p> <p style={{margin:'10px'}} >{item.FathersName}</p></div>

                            {/* <div className='content3' key={indexx} style={{display:'flex'}}><p >Occupation : </p> <p >{item.Occupation}</p></div> */}

                            <div className='content3' key={indexx} style={{display:'flex'}}><p style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}} >MobileNo : </p> <p style={{margin:'10px'}} >{item.MobileNo}</p></div>

                            {/* <div className='content3' key={indexx} style={{display:'flex'}}><p >Addres : </p> <p >{item.Addres}</p></div> */}
                        </div>


                        <div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Occupation : </p> <p  style={{margin:'10px'}}>{item.Occupation}</p></div>
                            {/* <div className='content3' key={indexx} style={{display:'flex'}}><p >CityTown : </p> <p >{item.CityTown}</p></div>

                            <div className='content3' key={indexx} style={{display:'flex'}}><p >State : </p> <p >{item.State}</p></div>

                            <div className='content3' key={indexx} style={{display:'flex'}}><p >Distric : </p> <p >{item.Distric}</p></div>

                            <div className='content3' key={indexx} style={{display:'flex'}}><p >PinCode : </p> <p >{item.PinCode}</p></div> */}
                        </div>

                    </div>


                    <h2 style={{margin:'0',fontSize:'16px',background:'#d6d6ff',color:'#000',padding:'10px'}}>COMMUNICATION ADDRESS</h2>
                    <div style={{display:'flex',gap:'5rem'}}>
                        <div >
                             <div className='content3' key={indexx} style={{display:'flex',width:'auto'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Addres : </p> <p  style={{margin:'10px'}}>{item.Addres}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>CityTown : </p> <p  style={{margin:'10px'}}>{item.CityTown}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Distric : </p> <p  style={{margin:'10px'}}>{item.Distric}</p></div>

                        </div>
                        <div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>State : </p> <p  style={{margin:'10px'}}>{item.State}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>PinCode : </p> <p  style={{margin:'10px'}}>{item.PinCode}</p></div>

                        </div>

                    </div>

                    
                    <h2 style={{margin:'0',fontSize:'16px',background:'#d6d6ff',color:'#000',padding:'10px'}}>EDUCATION DETAILS</h2>
                    <div style={{display:'flex',gap:'18rem'}}>
                        <div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Session : </p> <p  style={{margin:'10px'}}>{item.Session}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Course : </p> <p  style={{margin:'10px'}}>{item.Course}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Exam : </p> <p  style={{margin:'10px'}}>{item.Exam}</p></div>
                        </div>
                        <div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Center : </p> <p  style={{margin:'10px'}}>{item.Center}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>batchtype : </p> <p  style={{margin:'10px'}}>{item.batchtype}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Stream1 : </p> <p  style={{margin:'10px'}}>{item.Stream1}</p></div>
                        </div>
                    </div>


                    <h2 style={{margin:'0',fontSize:'16px',background:'#d6d6ff',color:'#000',padding:'10px'}}>EDUCATION DETAILS</h2>
                    <div style={{display:'flex',gap:'8rem'}}>
                        <div >
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Qualification : </p> <p  style={{margin:'10px'}}>{item.Qualification}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex',width:'auto'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Name Of collage : </p> <p  style={{margin:'10px'}}>{item.NameOfCallage}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>MarksIn : </p> <p  style={{margin:'10px'}}>{item.MarksIn}</p></div>
                        </div>
                        <div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p  style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Stream : </p> <p  style={{margin:'10px'}}>{item.Stream2}</p></div>
                             <div className='content3' key={indexx} style={{display:'flex'}}><p style={{margin:'10px',fontWeight:'600',textTransform:'uppercase'}}>Passing Year : </p> <p  style={{margin:'10px'}}>{item.Passingyear}</p></div>
                        </div>
                    </div>






                    {/* <div className='content3' style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}>
                        <p style={{margin:0,}}>DATE OF BIRTH  : </p> 
                        <p style={{margin:0,}}>{item.DataOfBirth}</p>
                    </div>

                    <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Gender : </p> <p style={{margin:0,}}>{item.Gender}</p></div> */}

                    {/* <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Category : </p> <p style={{margin:0,}}>{item.Category}</p></div> */}

                    {/* <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Email Id : </p> <p style={{margin:0,}}>{item.EmailId}</p></div> */}

                    {/* <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Email Id : </p> <p style={{margin:0,}}>{item.ConfirmEmailId}</p></div> */}

                    {/* <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Contact No : </p> <p style={{margin:0,}}>{item.ContactNo}</p></div> */}

                    {/* <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Handicapped : </p> <p style={{margin:0,}}>{item.Handicapped}</p></div> */}

                    {/* <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>FathersName : </p> <p style={{margin:0,}}>{item.FathersName}</p></div>

                    <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Occupation : </p> <p style={{margin:0,}}>{item.Occupation}</p></div>

                    <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>MobileNo : </p> <p style={{margin:0,}}>{item.MobileNo}</p></div>

                    <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Addres : </p> <p style={{margin:0,}}>{item.Addres}</p></div>

                    <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>CityTown : </p> <p style={{margin:0,}}>{item.CityTown}</p></div>

                    <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>State : </p> <p style={{margin:0,}}>{item.State}</p></div>

                    <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Distric : </p> <p style={{margin:0,}}>{item.Distric}</p></div>


                    <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>PinCode : </p> <p style={{margin:0,}}>{item.PinCode}</p></div> */}

                    {/* <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Center : </p> <p style={{margin:0,}}>{item.Center}</p></div>

                    <div className='content3'style={{display: "grid",gridTemplateColumns:'30% 40%'}} key={indexx}><p style={{margin:0,}}>Course : </p> <p style={{margin:0,}}>{item.Course}</p></div> */}
                </div>
                </div>
            )
        })}
        </div>

    </div>


<div>
     {/* {i.map((item,) =>{
            return(
                <div key={item.id}  style={{padding:'1rem',background:' rgb(146, 188, 214)',borderRadius:'10px'}}>
                    <ul >
                   
                        <li >{item.CandidateName}</li>
                        <li>{item.id}</li>
                        <li>{item.Gender}</li>
                        <li>{item.MobileNo}</li>
                        <li>{item.FathersName}</li>
                        <li>{item.EmailId}</li>
                        <li>{item.State}</li>
                        <li>{item.id}</li>
                    </ul>
                </div>
            )
        })} */}
</div>

<button onClick={generatePDF} style={{paddingLeft:'10px',paddingRight:'10px',background:'red',border:'none',color:'#fff',marginTop:'2rem',marginLeft:'90rem',marginBottom:'10rem',fontSize:'20px' }}>Download PDF</button>
    </div>      
  )
}

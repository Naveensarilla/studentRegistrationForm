import  { useEffect, useState } from 'react'
import axios from 'axios'
import './Student.css'

export const Student = () => {
    const [value, setValues] = useState({
        CandidateName: '',
        DataOfBirth: '',
        Gender: '',
        Category: '',
        EmailId: '',
        ConfirmEmailId: '',
        ContactNo: '',
        Handicapped: '',
        FathersName: '',
        Occupation: '',
        MobileNo: '',
        Addres: '',
        CityTown: '',
        State: '',
        Distric: '',
        PinCode: '',
        Session: '',
        Center: '',
        Course: '',
        batchtype: '',
        // Exam: '',
        // Stream1: '',
        // batch: '',
        Qualification: '',
        Stream2: '',
        NameOfCallage: '',
        Passingyear: '',
        MarksIn: '',
       UplodadPhto: '',
        // Signature: '',
        // Proof: '',
        // ReadTerms: ''
    })

    // const {CandidateName,DataOfBirth,Gender,Category,EmailId,ConfirmEmailId,ContactNo,Handicapped,FathersName,Occupation,MobileNo,Addres,CityTown,StateDistric,PinCode,Session,Center,Course,batchtype,Exam,Stream1,batch,Qualification,Stream2,NameOfCallage,Passingyear,MarksIn,UplodadPhto,Signature,Proof,ReadTerms} =value;

    // const changHeandler = e => {
    //     setValues({...value,[e.target.name]:e.target.value})
    // }



    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:7777/')
        .then(res =>{
            setData(res.data[0])
        })
        .catch(err => console.log(err));
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
    },[])



  
   

    const handleSubmit = e => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('value',value)
        // axios.post('http://localhost:709/list',value).then(() => alert('data submited'))
        axios.post("http://localhost:709/upload", value, formdata)
        .then(res => {
            console.log(res);
            alert('YOU ARE SUBMITED THE DATA SUCCESSFULLY successfully');
            if(res.data.Status === "Success"){
                console.log("Succeded")
            }else{
                console.log("Faild")
            }
            
        })
        .catch(err => console.log(err))
     }
  return (
    <div className='RegForm'>
        <form method='post' encType='multipart/form-data' onSubmit={handleSubmit}>

            {/* 1st input section */}
            <div className='Titelname'>
                <h4>REGISTRATION DETAILS</h4>
            </div>
            <div className='registrationDet'>
         <div className='regFlex'>
         <div className='inputContent'>
          <label htmlFor="">CANDIDATE NAME <span>*</span></label>
          <input type="text" required className='inputss' onChange={e => setValues({...value, CandidateName: e.target.value})}/>
          </div>

          <div className='inputContent'>
          <label htmlFor="">DATE OF BIRTH <span>*</span></label>
          <input type="date" required className='inputss'  onChange={e => setValues({...value, DataOfBirth: e.target.value})}/>
          </div>

          
         </div> 

         <div className='regFlex'>
            <div className='inputContent'>
            <label htmlFor="#Gender">Gender<span>*</span></label>
            <div>
                <input type="radio" value="Male"  name='s1' required onChange={e => setValues({...value, Gender: e.target.value})} /> 
                <label style={{padding:"0"}} htmlFor="Male" Gender='Male'>Male <span>*</span></label>
                <input type="radio" value='female' name='s1'  required onChange={e => setValues({...value, Gender: e.target.value})}/>             
                <label  style={{padding:"0"}} htmlFor="female" Gender='Male'>Female <span>*</span></label>     

            </div>
            

          
          </div>


          <div className='inputContent'>
            <label htmlFor="">Category</label>
            <select  className='inputss' onChange={e => setValues({...value, Category: e.target.value})}>
                <option >--Select</option>
                <option Category="Genaral">Genaral</option>
                <option Category="ST" >ST</option>
                <option Category="SC">SC</option>
                <option Category="OBC">OBC</option>
            </select>
         </div>

            </div>

            <div className='regFlex'> 
                  <div className='inputContent'>
          <label htmlFor="">Email Id <span>*</span></label>
          <input type='email' required className='inputss' onChange={e => setValues({...value, EmailId: e.target.value})}/>
          </div>

          <div className='inputContent'>
          <label htmlFor="">Confirm Email Id<span>*</span></label>
          <input type="email" required className='inputss' onChange={e => setValues({...value, ConfirmEmailId: e.target.value})}/>
          </div>
            </div>

            <div className='regFlex'>
            <div className='inputContent'>
            <label htmlFor="">Contact No<span>*</span></label>
            <input type="number" required className='inputss' onChange={e => setValues({...value, ContactNo: e.target.value})}/>
            </div>

            <div className='inputContent'>
            <label htmlFor="Handicapped">Handicapped<span>*</span></label>
            <input type="radio"  required onChange={e => setValues({...value, Handicapped: e.target.value})}/>
            </div>
                </div>
            </div>     
        

       
          
             {/* className='inputContent' */}   

            <div className='Titelname'>
                <h4>FATHER'S/GUARDIAN'S DETAILS</h4>
            </div>
            <div className='registrationDet'>
         <div className='regFlex'>
         <div className='inputContent'>
          <label htmlFor=""> FATHER'S NAME<span>*</span></label>
          <input type="text" required  className='inputss' onChange={e => setValues({...value, FathersName: e.target.value})}/>
          </div>

          <div className='inputContent'>
          <label htmlFor="">Occupation<span>*</span></label>
          <input type="text" required className='inputss' onChange={e => setValues({...value, Occupation: e.target.value})}/>
          </div>
         </div>

         <div className='regFlex'>
         <div className='inputContent'>
          <label htmlFor="">MOBILE NO.<span>*</span></label>
          <input type="number" required className='inputss' onChange={e => setValues({...value, MobileNo: e.target.value})}/>
          </div>
         </div>
          </div>



              {/*COMMUNICATION ADDRESS  */}  
            <div className='Titelname'>
                <h4>COMMUNICATION ADDRESS</h4>
            </div>
           
            <div className='registrationDet'>
            <div className='inputContent'>
                <label htmlFor="">Addres<span>*</span></label>
                <input type="text" required className='inputss' onChange={e => setValues({...value, Addres: e.target.value})}/>
            </div>

             <div className='regFlex'>
             <div className='inputContent'>
                <label htmlFor="">City/Town<span>*</span></label>
                <input type="text" required className='inputss' onChange={e => setValues({...value, CityTown: e.target.value})}/>
                </div>
               {/* 
                <div className='inputContent'>
                <label htmlFor="">State<span>*</span></label>
                <input type="text" required className='inputss' onChange={e => setValues({...value, State: e.target.value})}/>
                </div> */}
                <div className='inputContent'>
                <label htmlFor="">State<span>*</span></label>
                <select className='inputss' onChange={e => setValues({...value, State: e.target.value})}>
                    <option State="">--Select--</option>
                    <option State="">Andaman and Nicobar Islands</option>
                    <option State="">Andhra Pradesh</option>
                    <option State="">Arunachal Pradesh</option>
                    <option State="">Assam</option>
                    <option State="">Bihar</option>
                    <option State="">Chandigarh</option>
                    <option State="">Chhattisgarh</option>
                    <option State="">Dadar and Nagar Haveli</option>
                    <option State="">Daman and Diu</option>
                    <option State="">Delhi</option>
                    <option State="">Goa</option>
                    <option State="">Madhya Pradesh</option>
                    <option State="">Maharashtra</option>
                    <option State="">Manipur</option>
                    <option State="">Meghalaya</option>
                </select>
                </div>
          
             
                
             </div>
             <div className='regFlex'>
                <div className='inputContent'>
                <label htmlFor="">Distric<span>*</span></label>
                <input type="text" required  className='inputss' onChange={e => setValues({...value, Distric: e.target.value})}/>
                </div>

                <div className='inputContent'>
                <label htmlFor="">PinCode<span>*</span></label>
                <input type="text" required  className='inputss' onChange={e => setValues({...value, PinCode: e.target.value})}/>
                </div>

          </div>
            </div>


             {/* required-------------------------------------------  */}
                <div className='Titelname'>
                    <h4>COMMUNICATION ADDRESS</h4>
                </div>
            <div className='registrationDet'>
                <div className='regFlex'>
                    <div className='inputContent'>
                        <label htmlFor="">SESSION </label>
                        <select  onChange={e => setValues({...value, Session: e.target.value})}  className='inputss'>
                            <option Session="2023-2024">2023-2024</option>
                            <option Session="2022-2023">2022-2023</option>
                            <option Session="2021-2022">2021-2022</option>
                            <option Session="2020-2021">2020-2021</option>
                        </select>
                    </div>

                    <div className='inputContent'>
                        <label htmlFor="">CENTRE  </label>
                        <select name="" id="" className='inputss' onChange={e => setValues({...value, Center: e.target.value})}>
                        <option value="">--Select--</option>

                            <option Center="Delhi [DL">Delhi [DL]</option>
                            <option Center="Jaipur [JR]">Jaipur [JR]</option>
                            <option Center="Noida [ND]">Noida [ND]</option>
                            <option Center="Bhopal [BH]">Bhopal [BH]</option>
                            <option Center="Indore [IR]">Indore [IR]</option>
                            <option Center="Lucknow [LK]">Lucknow [LK]</option>
                            <option Center="Pune [PU]">Pune [PU]</option>
                            <option Center="Hyderabad [HY]">Hyderabad [HY]</option>
                            <option Center="Bhubaneswar [BB]">Bhubaneswar [BB]</option>
                            <option Center="Kolkata [KK]">Kolkata [KK]</option>
                            <option Center="Patna [PT]">Patna [PT]</option>
                            <option Center="IGNOU Road [IG]">IGNOU Road [IG]</option>
                        </select>
                    </div>
                </div>

                <div className='regFlex'>
                    <div className='inputContent'>
                        <label htmlFor="">COURSE </label>
                        <select onChange={e => setValues({...value, Course: e.target.value})} className='inputss'>
                            <option Course="--Select--">--Select--</option>
                        </select>
                    </div>
                    <div className='inputContent'>
                        <label htmlFor="">BATCH TYPE  </label>
                        <select onChange={e => setValues({...value, batchtype: e.target.value})} className='inputss'>
                            <option batchtype="--Select--">--Select--</option>
                        </select>
                    </div>

                </div>

                <div className='regFlex'>
                    <div className='inputContent'>
                        <label htmlFor="">EXAM  </label>
                        <select name="" id="" className='inputss'>
                            <option value="">--Select--</option>
                        </select>
                    </div>
                    <div className='inputContent'>
                        <label htmlFor="">STREAM * </label>
                        <select name="" id="" className='inputss'>
                            <option value="">--Select--</option>
                        </select>
                    </div>

                </div>

                <div className='regFlex'>
                    <div className='inputContent'>
                    <input type="radio" />
                    <label htmlFor="">IS OLD STUDENT</label>
                    </div>
                    
                </div>
            </div>
                

                {/* EDUCATION DETAILS---------------- */}

                <div className='Titelname'>
                    <h4>EDUCATION DETAILS</h4>
                </div>
            <div className='registrationDet'>
                <div className='regFlex'>
                    <div className='inputContent'>
                    <label htmlFor="">QUALIFICATION</label>
                    <select onChange={e => setValues({...value, Qualification: e.target.value})} className='inputss'>
                        <option Qualification="--Select--">--Select--</option>
                        <option Qualification="B.Tech">B.Tech</option>
                        <option Qualification="BE">BE</option>
                        <option Qualification="AMI">AMI</option>
                        <option Qualification="Others">Others</option> 
                    </select>
                    </div>
                    <div className='inputContent'>
                    <label htmlFor="">STREAM </label>
                    <select onChange={e => setValues({...value, Stream2: e.target.value})} className='inputss'>
                    <option value="">--Select--</option>
                        <option Stream2="Civil Engineering">Civil Engineering</option>
                        <option Stream2="Computer Science Engineering">Computer Science Engineering</option>
                        <option Stream2="Electrical Engineering">Electrical Engineering</option>
                        <option Stream2="Mechanical Engineering">Mechanical Engineering</option> 
                        <option Stream2="Other">Other</option>
                    </select>
                    </div>
                </div>
                <div className='regFlex'>
                    <div className='inputContent'>
                    <label htmlFor="">NAME OF COLLEGE (WITH CITY) *</label>
                    <input type="text" className='inputss' onChange={e => setValues({...value, NameOfCallage: e.target.value})} />
                    </div>

                    <div className='inputContent'>
                    <label htmlFor="">PASSING YEAR *</label>
                    <input type="text" className='inputss' onChange={e => setValues({...value, Passingyear: e.target.value})}/>
                    </div>
               </div>

               <div className='regFlex'>
                <div className='inputContent'>
                    <label htmlFor="">MARKS IN</label>
                    <input type="text" onChange={e => setValues({...value, MarksIn: e.target.value})} className='inputss'/>
                </div>
               </div>
            </div>
                

            {/*UPLOAD IMAGE / DOCUMENTS--------------------  */}

            <div className='Titelname'>
                    <h4>UPLOAD IMAGE / DOCUMENTS</h4>
            </div>
            <div className='Documents'>
                <div className='img-dit'>
                <div>
                    <h4>UPLOAD IMAGE</h4>
                    <div className='photosize'>
                        <h3>Photo</h3>
                       <div className='info'> 
                         <sapn>144x144</sapn>
                         <small>this photo shuld be 144x144</small></div>
                    </div>

                    <input type="file" onChange={e => setValues({...value, UplodadPhto: e.target.value})}/>
                    <span style={{fontSize:"10px"}}>SIZE: (15-200)kb</span>
                </div>

                <div>
                    <h4>UPLOAD SIGNATURE </h4>
                        <div className='photosize'>
                            <h3>Photo</h3>
                            <div className='info'>
                            <sapn>144x144</sapn>
                            <small>this photo shuld be 144x144</small>
                            </div>
                        </div>

                        <input type="file" name="" id="" />
                        <span style={{fontSize:"10px"}}>SIZE: (15-200)kb</span>
                </div>

                <div>
                    <h3> UPLOAD ID PROOF</h3>
                    <input type="file" />
                    <span style={{fontSize:"10px"}}>ALLOW ONLY PDF & IMAGES.(MAX. SIZE:150 KB)</span>
                </div>
                </div>
                <div className='doc-Dit'>
                    <div className='Titelname'>
                        <h4>UPLOAD IMAGE / DOCUMENTS</h4>
                    </div>
                  <ul>
                        <li>SELECT DELHI CENTRE TO ENROLL IN ONLINE COURSES</li>
                        <li>FOR POSTAL STUDY COURSE SELECT DELHI CENTRE.</li>
                        <li>CLASSROOM COURSE STUDENTS OF SESSION (2017-18), SELECT SESSION (2016-17) IN OLD STUDENT DETAILS FOR MAINS EXECULIVE BATCHES</li>
                        <li>CLASSROOM COURSE STUDENTS OF SESSION (2017-18), SELECT SESSION (2016-17) IN OLD STUDENT DETAILS FOR MAINS EXECULIVE BATCHES</li>
                        <li>CLASSROOM COURSE STUDENTS OF SESSION (2017-18), SELECT SESSION (2016-17) IN OLD STUDENT DETAILS FOR MAINS EXECULIVE BATCHES</li>
                        <li>FOR CLASSROOM STUDY COURSE STUDENTS: ONLINE RECEIPT, 2 COLORED PHOTOGRAPHS, ORIGINAL IDENTITY PROOF AND ONE PHOTOCOPY OF THE SAME ARE REQUIRED AT THE TIME OF ADMISSION CONFIRMATION.</li>
                    </ul>
                </div>
            </div>

           <button className='btnButton' type='submit' onClick={value}>Submit</button>
        </form>

    </div>
  )
}

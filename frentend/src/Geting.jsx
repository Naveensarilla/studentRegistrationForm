import { useEffect, useState } from 'react'
import {useReactToPrint} from 'react-to-print'

import { useRef } from 'react';
// import html2canvas from "html2canvas"
// import jsPDF from 'jspdf'




// const downloadPDF = () => {

//    const pdfRef = useRef()

//     const input = pdfRef.current;
//     html2canvas(input).then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF('p', 'mm', 'a4', true);
//         const pdfWidth = pdf.internal.pageSize.getWidth();
//         const pdfHeight = pdf.internal.pageSize.getHeight();
//         const imgWidth = canvas.width;
//         const imgHeight = canvas.height;
//         const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
//         const imgX = (pdfWidth - imgWidth * ratio) / 2;
//         const imgY = 30;

//         pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
//         pdf.save('invoice.pdf');
//     });
// };




export const  GetingApi = () => {

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
    <div  style={{display: "flex", flexWrap: 'wrap',gap:'2rem'}} > 
        {/* {i.map(item => <li key={item.id} >{item.title}</li>)} */}
<div >

        {i.map((item,) =>{
            return(
                <div key={item.id}  style={{padding:'1rem',background:' rgb(146, 188, 214)',borderRadius:'10px'}}>
                    <ul  ref={componentPDF}>
                   
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
        })}
        <button onClick={generatePDF}>Download</button>

        {/* <a href="http://localhost:5173/" download>download</a> */}
    </div>

</div>
  )
}

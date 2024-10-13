import React from 'react'
import './Otp.css'
import { useState,useRef } from 'react'
export default function Otp() {
    const [otp, setOtp] = useState(["","","","","",""])
    const inputRef = useRef([])

    const handleChange=(e,index)=>{
         const value = e.target.value

         if(value.match(/^[A-Za-z0-9]$/)){
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)
            if(index<5){
                inputRef.current[index+1].focus()
            }
         }
         

    }
    const handlekeyChange = (e,index)=>{
        if(e.key==="Backspace"){
           const newOtp = [...otp]
           newOtp[index] = ""
           setOtp(newOtp)
           if(index>0){
            inputRef.current[index-1].focus()
           }

        }
    }
    const handleSubmit = () => {
        alert(`OTP Entered: ${otp.join('')}`);
        setOtp(['','','','','',''])
        // You can handle your submission logic here
        inputRef.current[0].focus();
    };

  return (
    <>
    <div id='root'>
                <div id="headline">Enter OTP</div>
                <div>
                    {otp.map((value, index) => (
                        <input
                            key={index} // Assign a unique key
                            type="text"
                            ref={el => inputRef.current[index] = el} // Assign the ref to each input
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handlekeyChange(e, index)}
                            maxLength="1"
                            pattern="[A-Za-z0-9]"
                        />
                    ))}
                </div>
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </div>    
            </>
  )
}

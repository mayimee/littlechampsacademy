import React, { useState, useEffect } from 'react'
import EnrollmentForm from './EnrollmentForm';

const retrieveData = localStorage.getItem("littlechamp")? JSON.parse(localStorage.getItem("littlechamp")): [];

function EnrollmentFunction()
{

    const id = Date.now();

    const [studLevel, setLevel]=useState('');

    const [studName, setStudName]=useState('');
    const [studBirthday, setBirthday]=useState('');
    const [studGender, setGender]=useState('');
    const [studAddress, setAddress]=useState('');
    const [studReligion, setReligion]=useState('');

    const [fatName, setFName]=useState('');
    const [fatOccup, setFOccup]=useState('');
    const [fatNumber, setFNumber]=useState('');
    const [fatEmail, setFEmail]=useState('');

    const [motName, setMName]=useState('');
    const [motOccup, setMOccup]=useState('');
    const [motNumber, setMNumber]=useState('');
    const [motEmail, setMEmail]=useState('');

    const [studentEntry, setStudEntry]=useState(retrieveData);

    const handleLevel=(e)=>{
        setLevel(e.target.value);
    }

    const handleStudName=(e)=>{
        setStudName(e.target.value);
    }

    const handleBirthday=(e)=>{
        setBirthday(e.target.value);
    }

    const handleGender=(e)=>{
        setGender(e.target.value);
    }

    const handleAddress=(e)=>{
        setAddress(e.target.value);
    }

    const handleReligion=(e)=>{
        setReligion(e.target.value);
    }

    const handleFName=(e)=>{
        setFName(e.target.value);
    }

    const handleFOccup=(e)=>{
        setFOccup(e.target.value);
    }

    const handleFNumber=(e)=>{
        setFNumber(e.target.value);
    }

    const handleFEmail=(e)=>{
        setFEmail(e.target.value);
    }

    const handleMName=(e)=>{
        setMName(e.target.value);
    }

    const handleMOccup=(e)=>{
        setMOccup(e.target.value);
    }

    const handleMNumber=(e)=>{
        setMNumber(e.target.value);
    }

    const handleMEmail=(e)=>{
        setMEmail(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (studName !== "" && studBirthday !== "" && studGender !== "")
        {
            const studData={id, studLevel, studName, studBirthday, studGender, studAddress, studReligion, fatName, fatOccup, fatNumber, fatEmail, motName, motOccup, motNumber, motEmail};
            setStudEntry([...studentEntry, studData]);
            setLevel('');
            setStudName('');
            setBirthday('');
            setGender('');
            setAddress('');
            setReligion('');
            setFName('');
            setFOccup('');
            setFNumber('');
            setFEmail('');
            setMName('');
            setMOccup('');
            setMNumber('');
            setMEmail('');

            alert("Application Complete!")
        }
        else
        {
            alert("Please provide complete information.");
        } 
    }

   useEffect(() => {
       localStorage.setItem("littlechamp", JSON.stringify(studentEntry));}, [studentEntry])

   return(
    <>
        <EnrollmentForm 
            studLevel={studLevel}
            studName={studName}
            studBirthday={studBirthday}
            studGender={studGender}
            studAddress={studAddress}
            studReligion={studReligion}
            fatName={fatName}
            fatOccup={fatOccup}
            fatNumber={fatNumber}
            fatEmail={fatEmail}
            motName={motName}
            motOccup={motOccup}
            motNumber={motNumber}
            motEmail={motEmail}
            handleLevel={handleLevel}
            handleStudName={handleStudName}
            handleBirthday={handleBirthday}
            handleGender={handleGender}
            handleAddress={handleAddress}
            handleReligion={handleReligion}
            handleFName={handleFName}
            handleFOccup={handleFOccup}
            handleFNumber={handleFNumber}
            handleFEmail={handleFEmail}
            handleMName={handleMName}
            handleMOccup={handleMOccup}
            handleMNumber={handleMNumber}
            handleMEmail={handleMEmail}
            handleSubmit={handleSubmit}
        />
    </>
   )
}
export default EnrollmentFunction;
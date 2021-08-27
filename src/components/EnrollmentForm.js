import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'

const EnrollmentForm=({studLevel, studName, studBirthday, studGender, studAddress, studReligion, fatName, fatNumber, fatOccup, fatEmail, motName, motOccup, motNumber, motEmail, handleLevel, handleStudName, handleBirthday, handleGender, handleAddress, handleReligion, handleFName, handleFNumber, handleFOccup, handleFEmail, handleMName, handleMNumber, handleMOccup, handleMEmail, handleSubmit}) =>{

    const divStyles={
        paddingTop: "90px",
        paddingLeft: "30px",
        paddingRight: "30px"
    };

    const indStyles = {
        padding: "15px"
    };

    let history = useHistory();

    return(
        <div className="container">
            <form onSubmit={handleSubmit} style={divStyles}>
                <div className="col-md-12" style={indStyles}>
                    <h4>Student's Information</h4>
                </div>
                <div className="col-md-12" style={indStyles}>
                    <label>Applying for: &nbsp;</label>
                    <select value={studLevel} onChange={handleLevel}>
                        <option value="" disabled selected hidden>Choose level</option>
                        <option value="Nursery">Playgroup</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Kinder">Kinder 1</option>
                        <option value="Kinder">Kinder 2</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col-md-5" style={indStyles}>
                        <label>Student Full Name</label>
                        <input type="text" value={studName} onChange={handleStudName} className="txtboxWidth" placeholder="Last Name, First Name Middle Name" required />
                    </div>
                    <div className="col-md-3" style={indStyles}>
                        <label>Birthday</label>
                        <input type="date" value={studBirthday} onChange={handleBirthday} className="txtboxWidth" required/>
                    </div>
                    <div className="col-md-4" style={indStyles}>
                        <label>Gender</label>
                        <br/>
                        <select value={studGender} onChange={handleGender} className="txtboxWidth">
                            <option value="" disabled selected hidden>Choose gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </div>
                    <div className="col-md-8" style={indStyles}>
                        <label>Address</label> <br/>
                        <input type="text" onChange={handleAddress} value={studAddress} placeholder="Address" className="txtboxWidth" required />
                    </div>
                    <div  className="col-md-4" style={indStyles}>
                        <label>Religion</label> <br />
                        <input type="text" onChange={handleReligion} value={studReligion} placeholder="Religion" className="txtboxWidth" required />
                    </div>
                    <br/>
                    <br/>
                    <br/>

                    <div className="col-md-12" style={indStyles}>
                        <h4>Parent's Information</h4>
                    </div>
                    <div className="col-md-6" style={indStyles}>
                        <label>Father's Full Name</label> <br/>
                        <input type="text" onChange={handleFName} value={fatName} placeholder="Last Name, First Name Middle Name" className="txtboxWidth" required />
                    </div>
                    <div className="col-md-6" style={indStyles}>
                        <label>Occupation</label>
                        <input type="text" onChange={handleFOccup} value={fatOccup} placeholder="Occupation" className="txtboxWidth" required />
                    </div>
                    <div className="col-md-6" style={indStyles}>
                        <label>Contact Number</label> <br/>
                        <input type="number" onChange={handleFNumber} value={fatNumber} placeholder="Contact Number" className="txtboxWidth" required />
                    </div>
                    <div className="col-md-6" style={indStyles}>
                        <label>Email Address</label> <br/>
                        <input type="text" onChange={handleFEmail} value={fatEmail} placeholder="Email Address" className="txtboxWidth" required />
                    </div>
                    <div className="col-md-6" style={indStyles}>
                        <label>Mother's Full Name</label> <br/>
                        <input type="text" onChange={handleMName} value={motName} placeholder="Last Name, First Name Middle Name" className="txtboxWidth" required />
                    </div>
                    <div className="col-md-6" style={indStyles}>
                        <label>Occupation</label>
                        <input type="text" onChange={handleMOccup} value={motOccup} placeholder="Occupation" className="txtboxWidth" required />
                    </div>
                    <div className="col-md-6" style={indStyles}>
                        <label>Contact Number</label> <br/>
                        <input type="number" onChange={handleMNumber} value={motNumber} placeholder="Contact Number" className="txtboxWidth" required />
                    </div>
                    <div className="col-md-6" style={indStyles}>
                        <label>Email Address</label> <br/>
                        <input type="text" onChange={handleMEmail} value={motEmail} placeholder="Email Address" className="txtboxWidth" required />
                    </div>
                    <div className="col-md-12" style={indStyles}>
                        <input type="checkbox" required/>  This is to certify that all information provided above are true and accurate.
                    </div>

                    <div className="col-md-12 d-flex justify-content-center" style={indStyles}>
                        <button type="submit" className="btn btn-primary" onSubmit={handleSubmit} onClick={() => {history.push('/confirmation');}}>Submit Information</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default EnrollmentForm;

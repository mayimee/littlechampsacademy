import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'

function ConfirmationPage() {

    const styles = {

        paddingTop: "20vh",
        paddingBottom: "10vh"
    }

    let history = useHistory();

    return (
        <div>
            <div style={styles} className="container text-center">
                <h2 className="text-center">Application submitted</h2>
                <br/>
                <p>An email has been sent to you for your payment arrangements. Please pay the fees on or before September 5, 2021 to avoid any inconvenience.</p>
                <br/>
                <br/>
                <h4>Class information will be posted SOON!</h4>
                <br/>
                <br/>
                <br/>
                <div className="d-grid gap-2 d-md-block">
                    <button type="button" onClick={() => {history.push('/studentregistration');}} className="btn btn-info">Return to student registration</button>
                    &nbsp;
                    <button type="button" onClick={() => {history.push('/');}} className="btn btn-success">Log Out</button>
                </div>
                
            </div>
        </div>
    )
}

export default ConfirmationPage

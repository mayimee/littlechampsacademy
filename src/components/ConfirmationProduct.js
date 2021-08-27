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
                <h2 className="text-center">Transaction Complete</h2>
                <br/>
                <p>We sent an email regarding your orders in our shop. Please expect for your orders to arrive within 3-5 business days.</p>
                <br/>
                <br/>
                <h4>Thank you for your order!</h4>
                <br/>
                <br/>
                <br/>
                <button type="button" className="btn btn-success" onClick={() => {history.push('/');}}>Return to home</button>
            </div>
        </div>
    )
}

export default ConfirmationPage

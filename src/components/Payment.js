import React from 'react';
import './Payment.css';
import { useHistory } from 'react-router-dom'


const Payment = () => {
    let history = useHistory();
    return (
        <div>
            <form action="action" className="desForm">
                <h1>Checkout</h1>
                <h3>Billing address</h3>
                <div className="card-div">
                    <div className="div1">
                        <label for="name">First Name</label><br/>
                        <input className="box4" type="text" name="name" id="name" required/><br/>
                    </div>
                    <div className="div1">
                        <label for="name">Last Name</label><br/>
                        <input className="box4" type="text" name="name" id="name" required/>
                    </div>
                </div>

                <label for="email">Email</label><br/>
                <input className="box1" type="email" name="email" id="email" placeholder="Enter email"required/><br/>

                <label for="email">Address</label><br/>
                <input className="box1" type="text" name="address1" id="address1" placeholder="1234 Rizal St." required/><br/>

                <label for="email">Address 2</label><br/>
                <input className="box1" type="text" name="address2" id="address2" placeholder="Apartment or suite" required/><br/>

                <div className="card-div">  
                    <div className="div1">
                        <label for="country">Country</label><br/>
                        <select className="box3" name="province" id="province" required>
                            <option value="Choose">Choose...</option>
                            <option value="Cebu">Philippines</option>
                        </select><br/>
                    </div>
                        
                    <div className="div1">
                        <label for="PostalCode">Postal Code</label><br/>
                        <input className="box2" type="postal" name="Postal Code" id="postalCode" placeholder="Postal Code" required/>
                        <br/>
                    </div>
                </div>

                <label for="cardnum">Card Number</label><br/>
                <input className="box1" type="text" name="number" id="number" placeholder="1234 1234 1234 1234" required/><br/>
                    
                <div className="card-div">  
                    <div className="div1">
                        <label for="cardex">Card expiry (MMYY)</label><br/>
                        <input className="box2" type="year" name="month" id="month" placeholder="MM/YYYY" required/><br/>
                    </div>
                        
                    <div className="div1">
                        <label for="cardCVC">Card CVC</label><br/>
                        <input className="box2" type="cvc" name="cvc" id="cvc" placeholder="CVC" required/><br/>
                    </div>    
                </div>

                <div className="btn-pos">
                    <button className="btnPay" type="button" onClick={() => {history.push('/confirmationorder');}}>Pay Now</button><br/>
                </div>
            </form>
        </div>
    )
}

export default Payment

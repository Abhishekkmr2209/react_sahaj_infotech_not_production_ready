import React from 'react';

function OrderInfo(){

    return(
        <div className='order-info-container'>
            <h4>Order Info</h4>

            <div className='order-info-row'>
                <div className='form-group'>
                    <label htmlFor='SO_No.'>SO No.</label>
                    <input type='text' name='SO_No' id='SO_No' />
                </div>
                <div className='form-group'>
                    <label htmlFor='SO_Date'>SO Date</label>
                    <input type='text' name='SO_Date' id='SO_Date' />
                </div>
                <div className='form-group'>
                    <label htmlFor='salesman' >Salesman</label>
                    <input type='text' name='salesman' id='salesman' placeholder='Rohit Sharma'/>
                </div>
            </div>

            <div className='order-info-row'>
                <div className='form-group'>
                    <label htmlFor='shipTo'>Ship To</label>
                    <input type='text' name='shipTo' id='shipTo' />
                </div>
                <div className='form-group'>
                    <label htmlFor='paymentTerms'>Payment Terms</label>
                    <input type='text' name='paymentTerms' id='paymentTerms' />
                </div>
            </div>
            <div className='submit'>
                <button type='submit'>Submit</button>
            </div>

        </div>
    );

}

export default OrderInfo;
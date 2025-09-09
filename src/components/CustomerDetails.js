import React from 'react';


function CustomerDetails() {
  return (
    <div className="customer-details-container">
      <h4>Customer Details</h4>

      <div className="customer-details-row">
        <div className="form-group">
          <label htmlFor="customerName">Customer (type to search)</label>
          <input type="text" name="customerName" id="customerName" />
        </div>

        <div className="form-group">
          <label htmlFor="customerCode">Customer Code</label>
          <input type="text" name="customerCode" id="customerCode" />
        </div>
      </div>

      <div className="customer-details-row">
        <div className="form-group">
          <label htmlFor="billingAddress">Billing Address (prints on invoice)</label>
          <textarea
            name="billingAddress"
            id="billingAddress"
            rows="4"
            cols="30"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="gstDetails">GSTIN (prints on invoice)</label>
          <input type="text" name="gstDetails" id="gstDetails" />
          <p className="note">
            Inter-state? Use <strong>IGST</strong>; Intra-state? Use <strong>CGST+SGST</strong>.
          </p>
        </div>
      </div>

    </div>
  );
}

export default CustomerDetails;
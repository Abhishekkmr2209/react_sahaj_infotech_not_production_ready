import React, { useState } from "react";

const ItemTable = () => {
  const [items, setItems] = useState([
    { id: 1, item: "", qty: 0, rate: 0, amount: 0, discPercent: 0, discAmt: 0, taxPercent: 5, cgst: 0, sgst: 0, igst: 0, lineTotal: 0 },
    { id: 2, item: "", qty: 0, rate: 0, amount: 0, discPercent: 0, discAmt: 0, taxPercent: 5, cgst: 0, sgst: 0, igst: 0, lineTotal: 0 }
  ]);

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;

    // Auto-calculations
    const qty = parseFloat(newItems[index].qty) || 0;
    const rate = parseFloat(newItems[index].rate) || 0;
    const discPercent = parseFloat(newItems[index].discPercent) || 0;
    const taxPercent = parseFloat(newItems[index].taxPercent) || 0;

    const amount = qty * rate;
    const discAmt = (amount * discPercent) / 100;
    const taxable = amount - discAmt;

    const cgst = (taxable * (taxPercent / 2)) / 100;
    const sgst = (taxable * (taxPercent / 2)) / 100;
    const igst = (taxable * taxPercent) / 100;

    const lineTotal = taxable + cgst + sgst; // assuming IGST not applied simultaneously

    newItems[index].amount = amount.toFixed(2);
    newItems[index].discAmt = discAmt.toFixed(2);
    newItems[index].cgst = cgst.toFixed(2);
    newItems[index].sgst = sgst.toFixed(2);
    newItems[index].igst = igst.toFixed(2);
    newItems[index].lineTotal = lineTotal.toFixed(2);

    setItems(newItems);
  };

  return (
    <div className="item-table">
      <div className="table-header">
        <div>#</div>
        <div>Item (type to search)</div>
        <div>Qty</div>
        <div>Rate</div>
        <div>Amount</div>
        <div>Disc %</div>
        <div>Disc Amt</div>
        <div>Tax %</div>
        <div>CGST</div>
        <div>SGST</div>
        <div>IGST</div>
        <div>Line Total</div>
      </div>

      {items.map((row, index) => (
        <div className="table-row" key={row.id}>
          <div>{row.id}</div>
          <input
            type="text"
            value={row.item}
            onChange={(e) => handleChange(index, "item", e.target.value)}
            placeholder="Start typing item..."
          />
          <input
            type="number"
            value={row.qty}
            onChange={(e) => handleChange(index, "qty", e.target.value)}
          />
          <input
            type="number"
            value={row.rate}
            onChange={(e) => handleChange(index, "rate", e.target.value)}
          />
          <input type="text" value={row.amount} readOnly />
          <input
            type="number"
            value={row.discPercent}
            onChange={(e) => handleChange(index, "discPercent", e.target.value)}
          />
          <input type="text" value={row.discAmt} readOnly />
          <input
            type="number"
            value={row.taxPercent}
            onChange={(e) => handleChange(index, "taxPercent", e.target.value)}
          />
          <input type="text" value={row.cgst} readOnly />
          <input type="text" value={row.sgst} readOnly />
          <input type="text" value={row.igst} readOnly />
          <input type="text" value={row.lineTotal} readOnly />
        </div>
      ))}
    </div>
  );
};

export default ItemTable;

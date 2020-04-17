import React from "react";
import propTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.tableContainer}>
    <thead className={styles.thead}>
      <tr className={styles.theadTr}>
        <th className={styles.theadTh}>Type</th>
        <th className={styles.theadTh}>Amount</th>
        <th className={styles.theadTh}>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.tbody}>
      {items.map(({ id, type, amount, currency }) =>
        id && type && amount && currency ? (
          <tr key={id} className={styles.tbodyTr}>
            <td className={styles.tbodyTd}>{type}</td>
            <td className={styles.tbodyTd}>{amount}</td>
            <td className={styles.tbodyTd}>{currency}</td>
          </tr>
        ) : (
          <></>
        )
      )}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;

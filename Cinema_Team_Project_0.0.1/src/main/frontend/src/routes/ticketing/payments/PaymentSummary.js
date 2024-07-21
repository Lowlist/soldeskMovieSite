import React from 'react';
import styles from './style/PaymentSummary.module.css';

const PaymentSummary = ({ totalAmount }) => {
    return (
        <div className={styles.summaryContainer}>
            <div className={styles.summaryRow}>
                <div>결제하실 금액</div>
                <div>{totalAmount.toLocaleString()}원</div>
            </div>
            <div className={styles.summaryRow}>
                <div>할인내역</div>
                <div>총 할인 금액 0원</div>
            </div>
            <div className={styles.summaryRow}>
                <div>결제내역</div>
                <div>신용카드 0원</div>
            </div>
            <div className={styles.summaryRow}>
                <div>남은 결제금액</div>
                <div>{totalAmount.toLocaleString()}원</div>
            </div>
        </div>
    );
};

export default PaymentSummary;

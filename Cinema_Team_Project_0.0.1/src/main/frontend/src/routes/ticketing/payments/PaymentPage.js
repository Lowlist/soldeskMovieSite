import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentSteps from './PaymentSteps';
import PaymentSummary from './PaymentSummary';
import PaymentFooter from './PaymentFooter';
import styles from './style/PaymentPage.module.css';

const PaymentPage = () => {
    const location = useLocation();
    const { selectedMovie, selectedTheater, selectedDateString, selectedTime, selectedHall, selectedSeats, totalAmount } = location.state || {};
    const numTickets = selectedSeats.length;

    const [finalTotalAmount, setFinalTotalAmount] = useState(totalAmount);

    return (
        <div className={styles.container}>
            <div className={styles.paymentSteps}>
                <PaymentSteps totalAmount={finalTotalAmount} setTotalAmount={setFinalTotalAmount} numTickets={numTickets} />
            </div>
            <div className={styles.paymentSummary}>
                <PaymentSummary totalAmount={finalTotalAmount} />
            </div>
            <div className={styles.paymentFooter}>
                <PaymentFooter
                    selectedMovie={selectedMovie}
                    selectedTheater={selectedTheater}
                    selectedDateString={selectedDateString}
                    selectedTime={selectedTime}
                    selectedHall={selectedHall}
                    selectedSeats={selectedSeats}
                    totalAmount={finalTotalAmount}
                />
            </div>
        </div>
    );
};

export default PaymentPage;

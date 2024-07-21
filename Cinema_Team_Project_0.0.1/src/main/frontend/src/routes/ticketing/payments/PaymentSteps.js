import React, { useState } from 'react';
import styles from './style/PaymentSteps.module.css';

const PaymentSteps = () => {
    const [activeStep, setActiveStep] = useState(null);

    const toggleStep = (step) => {
        setActiveStep(activeStep === step ? null : step);
    };

    return (
        <div className={styles.stepsContainer}>
            {['할인쿠폰', '관람권/기프트콘', '포인트 및 기타결제 수단', '최종결제 수단'].map((step, index) => (
                <div key={index} className={styles.step}>
                    <div className={styles.stepHeader} onClick={() => toggleStep(index + 1)}>
                        STEP {index + 1}. {step} {activeStep === index + 1 ? '▲' : '▼'}
                    </div>
                    {activeStep === index + 1 && (
                        <div className={styles.stepContent}>
                            {/* 여기에 각 스텝의 내용을 추가하세요 */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PaymentSteps;

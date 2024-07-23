import React, { useState } from 'react';
import styles from './style/PaymentSteps.module.css';

const PaymentSteps = ({ totalAmount, setTotalAmount, numTickets }) => {
    const [discountCode, setDiscountCode] = useState('');
    const [discountSuccess, setDiscountSuccess] = useState(false);

    const [giftTicketCode, setGiftTicketCode] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [selectedEasyPayMethod, setSelectedEasyPayMethod] = useState('');

    const handleDiscountCodeChange = (e) => {
        setDiscountCode(e.target.value);
    };

    const discountApplied = () => {
        if (discountCode === 'DreamTicketOffice' && !discountSuccess) {
            const discountAmount = 1000 * numTickets;
            setTotalAmount(totalAmount - discountAmount);
            setDiscountSuccess(true);
            alert(`할인코드가 적용되었습니다. 총 할인 금액: ${discountAmount}원`);
        } else if (discountSuccess) {
            alert('할인코드가 이미 적용되었습니다.');
        } else {
            alert('유효하지 않은 할인코드입니다.');
        }
    };

    const handleRegisterGiftTicket = () => {
        // 관람권 등록
    };

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
        setSelectedEasyPayMethod('');
    };

    const handleEasyPayMethodChange = (event) => {
        setSelectedEasyPayMethod(event.target.value);
    };

    return (
        <div className={styles.stepsContainer}>
            <div className={styles.step}>
                <div className={styles.stepHeader}>
                    STEP 1. 할인쿠폰
                </div>
                <div className={styles.stepContent}>
                    <div className={styles.discountSection}>
                        <input
                            type="text"
                            value={discountCode}
                            onChange={handleDiscountCodeChange}
                            placeholder="할인코드 입력"
                            className={styles.discountInput}
                        />
                        <button onClick={discountApplied} className={styles.applyButton}>적용</button>
                    </div>
                </div>
            </div>
            <div className={styles.step}>
                <div className={styles.stepHeader}>STEP 2. 관람권/기프트콘</div>
                <div className={styles.stepContent}>
                    <div className={styles.giftTicketSection}>
                        <div className={styles.giftTicketHeader}>
                            <input
                                type="text"
                                className={styles.giftTicketInput}
                                value={giftTicketCode}
                                onChange={(e) => setGiftTicketCode(e.target.value)}
                                placeholder="관람권 번호 입력"
                            />
                            <button className={styles.registerButton} onClick={handleRegisterGiftTicket}>등록하기</button>
                        </div>
                        <table className={styles.giftTicketTable}>
                            <thead>
                                <tr>
                                    <th>사용가능 관람권</th>
                                    <th>관람권 번호</th>
                                    <th>유효기간</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="3">사용 가능한 관람권이 없습니다.</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.discountAmount}>할인금액: 0원</div>
                    </div>
                </div>
            </div>
            <div className={styles.step}>
                <div className={styles.stepHeader}>STEP 3. 최종결제 수단</div>
                <div className={styles.stepContent}>
                    <div className={styles.paymentMethods}>
                        <div className={styles.paymentMethodsDiv}>
                            <div>
                                <button
                                    type="radio"
                                    id="creditCard"
                                    name="paymentMethod"
                                    value="신용카드"
                                    checked={selectedPaymentMethod === '신용카드'}
                                    onClick={handlePaymentMethodChange}
                                    className={styles.paymentSelectionButton}
                                >신용카드</button>
                            </div>
                            <div>
                                <button
                                    type="radio"
                                    id="mobilePayment"
                                    name="paymentMethod"
                                    value="휴대폰 결제"
                                    checked={selectedPaymentMethod === '휴대폰 결제'}
                                    onClick={handlePaymentMethodChange}
                                    className={styles.paymentSelectionButton}
                                >휴대폰 결제</button>
                            </div>
                            <div>
                                <button
                                    type="radio"
                                    id="easyPayment"
                                    name="paymentMethod"
                                    value="간편결제"
                                    checked={selectedPaymentMethod === '간편결제'}
                                    onClick={handlePaymentMethodChange}
                                    className={styles.paymentSelectionButton}
                                >간편결제</button>
                            </div>
                            <div>
                                <button
                                    type="radio"
                                    id="bankTransfer"
                                    name="paymentMethod"
                                    value="내통장결제"
                                    checked={selectedPaymentMethod === '내통장결제'}
                                    onClick={handlePaymentMethodChange}
                                    className={styles.paymentSelectionButton}
                                >내통장결제</button>
                            </div>
                            <div>
                                <button
                                    type="radio"
                                    id="tos"
                                    name="paymentMethod"
                                    value="토스"
                                    checked={selectedPaymentMethod === '토스'}
                                    onClick={handlePaymentMethodChange}
                                    className={styles.paymentSelectionButton}
                                >토스</button>
                            </div>
                        </div>
                    </div>
                    {selectedPaymentMethod === '간편결제' && (
                        <div className={styles.easyPayMethods}>
                            <div>
                                <input
                                    type="radio"
                                    id="naverPay"
                                    name="easyPayMethod"
                                    value="네이버페이"
                                    checked={selectedEasyPayMethod === '네이버페이'}
                                    onChange={handleEasyPayMethodChange}
                                />
                                <label htmlFor="naverPay">네이버페이</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="kakaoPay"
                                    name="easyPayMethod"
                                    value="카카오페이"
                                    checked={selectedEasyPayMethod === '카카오페이'}
                                    onChange={handleEasyPayMethodChange}
                                />
                                <label htmlFor="kakaoPay">카카오페이</label>
                            </div>
                        </div>
                    )}
                    {selectedPaymentMethod && (
                        <div className={styles.paymentMethodDetails}>
                            {selectedPaymentMethod === '신용카드' && (
                                <div>
                                    <label htmlFor="cardType">카드종류: </label>
                                    <select id="cardType">
                                        <option value="">카드를 선택하세요</option>
                                        <option value="현대카드">현대카드</option>
                                        <option value="삼성카드">삼성카드</option>
                                        <option value="국민카드">국민카드</option>
                                    </select>
                                </div>
                            )}
                            {selectedPaymentMethod === '휴대폰 결제' && (
                                <div className={styles.mainNotice}>
                                    <p>결제금액 {totalAmount}원</p>
                                    <p>상품명 영화티켓예매</p>
                                    <p>휴대폰 결제 순서</p>
                                    <ol>
                                        <li>우측 하단에 있는 "결제하기" 버튼을 클릭해 주세요.</li>
                                        <li>예매 내역 확인 후 결제하기 버튼 클릭 시, 결제 팝업창이 뜹니다.</li>
                                        <li>해당 팝업창에서 통신사 선택 후 정보를 입력해 주세요.</li>
                                    </ol>
                                    <p className={styles.notice}>
                                        ※ 휴대폰 결제 진행시 원활한 사용을 위하여 다음 사항을 꼭 확인하세요.<br />
                                        팝업 차단 설정을 꼭 해제하셔야 합니다. (도구 → 팝업 차단 끄기)<br />
                                        팝업 차단 해제 시, 웹 브라우저의 새로고침으로 인하여 최대 10분 동안 동일 좌석 선택이 제한 될 수 있습니다.
                                    </p>
                                </div>
                            )}
                            {selectedPaymentMethod === '내통장결제' && (
                                <div className={styles.mainNotice}>
                                    <p>내통장결제 결제 순서</p>
                                    <ol>
                                        <li>아래 결제하기 버튼 클릭 후 다음 단계로 이동</li>
                                        <li>결제내역 확인 후 결제하기 버튼 클릭 시, 팝업창 노출</li>
                                        <li>해당 팝업창을 통해 본인명의의 계좌 1회 등록</li>
                                        <li>계좌 등록 시, 비밀번호만으로 현금 간편결제 서비스 이용</li>
                                    </ol>
                                    <p className={styles.notice}>
                                        '내통장결제'는 CGV 내 본인명의 계좌 등록 후 비밀번호만으로 결제할 수 있는 간편 결제 서비스입니다.<br />
                                        은행 점검시간인 경우 내통장결제 서비스 이용이 불가합니다.
                                    </p>
                                </div>
                            )}
                            {selectedPaymentMethod === '토스' && (
                                <div className={styles.mainNotice}>
                                    <p>토스 결제 순서</p>
                                    <ol>
                                        <li>우측 하단에 있는 "결제하기" 버튼을 클릭해 주세요.</li>
                                        <li>예매 내역 확인 후 결제하기 버튼 클릭 시 '토스' 결제 인증창이 뜹니다.</li>
                                        <li>'토스결제' 인증창에서 정보를 입력하신 후 결제해 주세요.</li>
                                    </ol>
                                    <p className={styles.notice}>
                                        '토스'는 신용카드 선할인과 카드사 포인트는 이용이 불가능하며, 신용카드별 청구할인은 이용이 가능합니다.
                                    </p>
                                </div>
                            )}
                            {selectedPaymentMethod === '간편결제' && selectedEasyPayMethod === '네이버페이' && (
                                <div className={styles.mainNotice}>
                                    <p>네이버페이 결제 순서</p>
                                    <ol>
                                        <li>우측 하단에 있는 "결제하기" 버튼을 클릭해 주세요.</li>
                                        <li>예매 내역 확인 후 결제하기 버튼 클릭 시 '네이버페이' 결제 인증창이 뜹니다.</li>
                                        <li>'네이버페이' 결제 인증창에서 정보를 입력하신 후 결제해 주세요.</li>
                                    </ol>
                                    <p className={styles.notice}>
                                        네이버페이 결제 시 결제 금액의 최대 2%가 적립됩니다.<br />
                                        (네이버페이 기본 적립 0.1% 최대 1% + 네이버페이 머니 충전 결제 적립 최대 1%)<br />
                                        네이버페이 기본 적립은 네이버 결제 시 1%, 기타 결제 시 0.1%가 적립되며, 적립 관련 문의 사항은 네이버 고객센터로 문의 부탁드립니다.<br />
                                        네이버페이는 즉시 할인 신용카드 및 카드사 포인트 사용이 불가하며 신용카드 청구할인은 이용 가능합니다.<br />
                                        네이버페이는 네이버 ID로 신용카드 또는 계좌 정보를 등록하여 결제할 수 있는 간편결제 서비스입니다.<br />
                                        주문 변경 시 기존 혜택 및 할인이 취소되고 새로운 혜택과 카드사 정책에 따라 변경될 수 있습니다.<br />
                                        지원 가능한 결제 수단은 결제 시점 내 노출되는 모든 카드/계좌<br />
                                        네이버페이 문화누리카드는 [문화누리카드 할인] 적용 건에 한하여 결제 가능합니다.
                                    </p>
                                </div>
                            )}
                            {selectedPaymentMethod === '간편결제' && selectedEasyPayMethod === '카카오페이' && (
                                <div className={styles.mainNotice}>
                                    <p>카카오페이 결제 순서</p>
                                    <ol>
                                        <li>우측 하단에 있는 "결제하기" 버튼을 클릭해 주세요.</li>
                                        <li>예매 내역 확인 후 결제하기 버튼 클릭 시 '카카오페이' 결제 인증창이 뜹니다.</li>
                                        <li>'카카오페이' 결제 인증창에서 정보를 입력하신 후 결제해 주세요.</li>
                                    </ol>
                                    <p className={styles.notice}>
                                        * '카카오페이'는 신용카드 선할인과 카드사 포인트는 이용이 불가능하며, 신용카드별 청구할인은 이용 가능합니다.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentSteps;

import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";
import { useSelector } from "react-redux";


const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const cart = useSelector((state) => state.cart);


  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>배달 후 ${cart.total}를 지불합니다</h1>
        <div className={styles.item}>
          <label className={styles.label}>이름</label>
          <input
            placeholder="이승민"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>핸드폰 번호</label>
          <input
            type="text"
            placeholder="010-1234-5678"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>주소</label>
          <textarea
            rows={5}
            placeholder="경기도 의왕시 성고개로"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
        주문하기
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;

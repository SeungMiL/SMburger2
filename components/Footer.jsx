import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          해외를 제패하고 돌아온 SM버거! 햄버거계의 이단아가 상륙했다!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>SM버거 지점안내</h1>
          <p className={styles.text}>
          서초구 매헌로 24#304.
            <br /> 서울, 06771
            <br /> (02) 2059-3191
          </p>
          <p className={styles.text}>
          의왕시 성고개로 59 #235.
            <br /> 경기도, 16006
            <br /> (031) 426-8468
          </p>
          <p className={styles.text}>
          부산진구 서면로68번길 3 #104.
            <br /> 부산, 47286
            <br /> (051) 867-1012
          </p>
          <p className={styles.text}>
          중구 달구벌대로 2090 #125.
            <br />  대구, 41967
            <br /> (053) 256-2516
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>영업시간</h1>
          <p className={styles.text}>
          월요일 ~ 금요일
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
          토요일 ~ 일요일
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>세계 최고의 햄버거</h1>
      <p className={styles.desc}>
      세계 최고 햄버거 타이틀을 갖고 있는 SM버거! 고객님의 입과 마음을 사로잡을 SM버거
        트렌디하고 혁신적인 메뉴 개발로 업계를 선도하는 SM버거만의 맛의 즐거움을 선사합니다. 
        SM버거 신선 물류 시스템을 통해 신선하고 차별화된 원료육을 제공하고 SM버거 특제 소스를 개발하여 높은 퀄리티의 제품을 제공합니다.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;

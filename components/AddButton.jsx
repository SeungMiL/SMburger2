import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      새 메뉴 추가하기
    </div>
  );
};

export default AddButton;

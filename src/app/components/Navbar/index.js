import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.menu_item}>Homepage</div>
      <div className={styles.menu_item}>Cryptoconverter</div>
    </div>
  );
};

export default Navbar;

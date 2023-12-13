import Image from "next/image";
import styles from "./styles.module.css";

const LandingContent = () => {
  return (
    <div className={styles.landing_container}>
      <div className={styles.description}>
        <span className={styles.heading}>Cryptocurrency App</span>
        <div className={styles.placeholder_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </div>
      </div>

      <div>
        <Image
        className={styles.custom_image}
          src="/1985.jpg"
          width={600}
          height={500}
          alt="Picture of CryptoExchange"
        />
      </div>
    </div>
  );
};

export default LandingContent;

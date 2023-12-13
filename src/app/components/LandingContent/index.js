import Image from "next/image";
import styles from "./styles.module.css";

const LandingContent = () => {
  return (
    <div className={styles.landing_container}>
      <div className={styles.description}>
        <span className={styles.heading}>Real-Time Market Updates</span>
        <div className={styles.placeholder_text}>
        Navigate the complexities of the crypto market with confidence. 
        Our cutting-edge analytics tools aggregate data from various sources to 
        present you with a clear and concise overview of the 
        latest market trends, price movements, and trading volumes. 
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

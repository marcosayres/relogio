import { useEffect, useState } from "react";
import styles from "../styles/components/clock.module.css";
import Image from "next/image";

const Clock = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    // Verifica se estamos no ambiente do cliente antes de executar o código
    if (typeof window !== "undefined") {
      updateTime();
      const interval = setInterval(updateTime, 1000);
      // Limpa o intervalo quando o componente for desmontado
      return () => clearInterval(interval);
    }
  }, []);

  if (!time) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.clockContainer}>
      <div className={styles.clock}>
        <Image
          src="/images/escritha.png"
          alt="Escritha Logo"
          width={400}
          height={110}
        />
        <p>{time.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default Clock;

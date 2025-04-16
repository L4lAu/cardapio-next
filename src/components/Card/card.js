import styles from './card.module.css';

const Card = ({ imagem, titulo, ingrediente, preco }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImagem} src={imagem} alt={titulo} />
      <div className={styles.cardContent}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.ingrediente}>{ingrediente}</p>
        <p className={styles.preco}>{preco}</p>
      </div>
    </div>
    
  );
};

export default Card;

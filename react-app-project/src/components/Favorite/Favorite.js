import styles from './Favorite.module.scss'

const Favorite = () => {
  return(
    <div className={styles.favorite}>
      <h1 className={styles.favorite_title}>FAVORITE</h1>
      <p className={styles.favorite_subtitle}>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
};

export default Favorite;
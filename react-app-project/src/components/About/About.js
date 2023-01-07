import styles from './About.module.scss'

const About = () => {
  return(
    <div className={styles.about}>
      <h1 className={styles.about_title}>ABOUT</h1>
      <p className={styles.about_subtitle}>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
};

export default About;
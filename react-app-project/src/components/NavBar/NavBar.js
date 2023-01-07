import styles from './NavBar.module.scss'
import Container from '../Container/Container'

const NavBar = () =>{
    return(
        <nav className={styles.navbar}>
          <Container>
          <div className={styles.nav_container}>
                <a className={styles.nav_icon} href='/'>
                  <i className='fa fa-tasks'></i>
                </a>
                <ul className={styles.nav_links}>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/'>Favorite</a></li>
                  <li><a href='/'>About</a></li>
                </ul>
            </div>
          </Container>

        </nav>

    )
}

export default NavBar;
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg'
import { useContext } from 'react';
import { UserContext } from '../UserContext';


const Header = () => {

    const {data} = useContext(UserContext);
    


    return(
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/">
                    <Dogs />
                </Link>
                
                {data ? <Link to="/conta" >{data.nome}</Link> : <Link className={styles.login} to="/login"> Login/Criar</Link>}
                
            </nav>
        </header>
    )
}    


export default Header;
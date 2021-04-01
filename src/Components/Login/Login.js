import { Routes, Route, Navigate } from "react-router";
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { useContext } from "react";
import { UserContext } from "../../UserContext";

import styles from './Login.module.css';
import NotFound from "../NotFound";


const Login = () => {

    const {login} = useContext(UserContext);

    if(login) return <Navigate to="/conta"/>

    return(
        <section className={styles.login}>
            <div className={styles.forms}>

                <Routes>
                    <Route path="/" element={<LoginForm/>} />
                    <Route path="criar" element={<LoginCreate/>} />
                    <Route path="perdeu" element={<LoginPasswordLost/>} />
                    <Route path="resetar" element={<LoginPasswordReset/>} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </section>
    )
}

export default Login;
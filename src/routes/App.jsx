import React from'react'
import { BrowserRouter, Routes, Route, Navigate} from"react-router-dom";
import NotFound from'../pages/NotFound';
import Layout from'../containers/Layout';
import Login from'../pages/Login';
import Home from'../pages/Home';
import'@styles/global.css';
import RecoveryPassword from '../pages/RecoveryPassword';
import Orders from '../pages/Orders';
import SendEmail from '../pages/SendEmail';
import CreateNewPassword from '../pages/CreateNewPassword';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState} >
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/recovery-password" element={<RecoveryPassword />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/signup" element={<CreateAccount />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/send-email" element={<SendEmail />} />
                        <Route path="/new-password" element={<CreateNewPassword />} />
                        <Route path="/account" element={<MyAccount />} />
                        <Route path="*"element={<NotFound />}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
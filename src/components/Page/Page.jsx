import React from 'react';
import s from './Page.module.scss';
import Header from '../Header/Header';
import Loader from './../../Loader/Loader';
import Form from '../Form/Form';


function Page() {
    return (
        <>
            <Header />
            <div className={s.mainBox}>
                <Loader />
                <Form />
            </div>
        </>
    )
}

export default Page;
 
import React, { useState, useEffect } from 'react';
import styles from './style/SignUp.module.css';

function SignUp() {
    let [form] = useState(
        [{
            htmlFor: "id",
            id: "id",
            name: "id",
        },

        {
            htmlFor: "password",
            id: "password",
            name: "password",
        },

        {
            htmlFor: "checkpassword",
            id: "checkpassword",
            name: "checkpassword",
        },
        {
            htmlFor: "Name",
            id: "Name",
            name: "Name",
        },
        {
            htmlFor: "nickName",
            id: "nickName",
            name: "nickName",
        },
        {
            htmlFor: "email",
            id: "email",
            name: "email",
        },
        {
            htmlFor: "addr",
            id: "addr",
            name: "addr",
        }
    ]); 

    return (
        <>
        <h3>회원가입</h3>
            <div className={styles.signupContainer}>
                {
                    form.map(function (a, i) {

                        return (
                            <Form key={i} i={i} form={a}/>
                        )
                    })
                }
                <button className={styles.signupButton} onClick={()=>{

                }}>회원가입</button>
            </div>
        </>
    )
}

export default SignUp;

function Form (props){
    return (
        <div className={styles.formEl}>
            <label htmlFor={props.form.htmlFor}>{props.form.htmlFor}</label> <br/>
            <input id={props.form.id} name={props.form.name}/>
        </div>
    )
}
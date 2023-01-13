import heroMobile from './assets/hero-mobile.jpg'
import heroDesktop from './assets/hero-desktop.jpg'
import logoSvg from './assets/logo.svg'
import iconArrowSvg from './assets/icon-arrow.svg'
import iconErrorSvg from './assets/icon-error.svg'
import './App.scss'
import React, {useState} from "react";

function App() {

    const [errorMsg, setErrorMsg] = useState<string>('');
    const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const emailInputValue = formData.get('email');

        if (!emailInputValue) {
            setErrorMsg('Email field is empty');
            return;
        }

        // @ts-ignore
        if (!emailInputValue.match(mailformat)) {
            setErrorMsg('Please provide a valid email');
            return;
        }

        setErrorMsg('');
        return;
    }

    return (
        <main className="App">

            <header>
                <img src={logoSvg} alt="shop logo"/>
            </header>

            <picture>
                <source srcSet={heroDesktop} media="(min-width: 600px)"/>
                <img src={heroMobile} alt=""/>
            </picture>

            <div className={'info'}>

                <h1>
                    <span className={'highlight'}>WE'RE</span> coming soon
                </h1>

                <p>
                    Hello fellow shoppers! We're currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements an our launch deals.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className={'input-wrapper'}>
                        <input type="text" name={'email'} placeholder={'Email Address'}/>
                        <button type='submit' aria-label={'submit form'}><img src={iconArrowSvg} alt=""/></button>
                        {errorMsg.length ? <img className={'error-icon'} src={iconErrorSvg} alt=""/> : null}
                        {errorMsg.length ? <span className={'error-msg'}>{errorMsg}</span> : null}
                    </div>

                </form>
            </div>

        </main>
    )
}

export default App

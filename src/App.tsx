import heroMobile from './assets/hero-mobile.jpg'
import heroDesktop from './assets/hero-desktop.jpg'
import logoSvg from './assets/logo.svg'
import iconArrowSvg from './assets/icon-arrow.svg'
import './App.scss'

function App() {

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

                <form>
                    <div className={'input-wrapper'}>
                        <input type="text" placeholder={'Email Address'}/>
                        <button type='submit'><img src={iconArrowSvg} alt=""/></button>
                    </div>

                </form>
            </div>

        </main>
    )
}

export default App

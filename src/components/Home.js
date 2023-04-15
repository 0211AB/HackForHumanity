import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import CTA from './CTA'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <article>
                    <Hero />
                    <About />
                    <Services/>
                    <CTA/>
                    <Blog/>
                    <Contact/>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default Home
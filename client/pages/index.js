import Layout from '../components/layouts/seo'
import Hero from '../components/section/hero'
import Features from '../components/section/feature'
import HowItWorks from '../components/section/howItWorks'

const WebPage = () => {
    return (
        <Layout>
            <Hero/>
            <Features/>
            <HowItWorks/>
        </Layout>
    )
}

export default WebPage
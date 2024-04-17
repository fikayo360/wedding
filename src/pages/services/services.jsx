import './services.css'

const Services = () => {
    return (<section id='services'>
        <h1 id='sH'> My services </h1>
        <div id='aServices'>
            <div className='service' style={{ backgroundImage: `url(https://capturedbymarcela.com/wp-content/uploads/2021/05/elopement-dress-guide-1-scaled-jpg.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}><h1>Elopements</h1></div>
            <div className='service' style={{ backgroundImage: `url(https://chantaldavidson.com/wp-content/uploads/2020/05/Maggie-and-Alex-19-scaled.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}><h1>Weddings</h1></div>
            <div className='service' style={{ backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5bab088b65019fe4d5c9c73b/1693094880426-KK1K2PX5KO1SL1KPTFBF/Melbourne+celebrant+for+registry+office+wedding.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}><h1>couples</h1></div>
        </div>
    </section>)
}

export default Services
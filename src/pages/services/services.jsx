import './services.css'

const Services = () => {
    return (<section id='services'>
        <h1 id='sH'> My services </h1>
        <div id='aServices'>
            <div className='service' style={{ backgroundImage: `url(https://epiclovephotography.com/wp-content/uploads/2020/04/how-to-have-an-amazing-elopement-ceremony-northern-ireland-elopements_0002.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}><h1>Elopements</h1></div>
            <div className='service' style={{ backgroundImage: `url(https://chantaldavidson.com/wp-content/uploads/2020/05/Maggie-and-Alex-19-scaled.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}><h1>Weddings</h1></div>
            <div className='service' style={{ backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5bab088b65019fe4d5c9c73b/1693094880426-KK1K2PX5KO1SL1KPTFBF/Melbourne+celebrant+for+registry+office+wedding.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}><h1>couples</h1></div>
            <div className='service' style={{ backgroundImage: `url(https://kristinbrockmanphotography.com/wp-content/uploads/2023/09/13-2513-post/KBP_9584-2.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}><h1>maternity</h1></div>
            <div className='service' style={{ backgroundImage: `url(https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/indonesia/bali/como-shambhala-bali-villa2.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}><h1>honeymoons</h1></div>
        </div>

    </section>)
}

export default Services
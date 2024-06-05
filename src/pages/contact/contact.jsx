import './contact.css'

const Contact = () => {
    return (<section id='contact'>
        <div class="custom-shape-divider-top-1713155344">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
            </svg>
        </div>
        <h1>Got an event coming up ?</h1>
        <form>
            <input type='text' placeholder='name' />
            <textarea placeholder='message' />
            <button>submit</button>
        </form>
    </section>)
}

export default Contact
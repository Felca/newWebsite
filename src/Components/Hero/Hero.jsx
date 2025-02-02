import styles from './Hero.module.css'

function Hero() {
    
    return(
        <>
        <div className={styles.heroContainer}>
            <div className={styles.borderBottom}></div>
            
            <div className={styles.banner}>
                <div>Lorem logo</div>
                <h1>Lorem ipsum odor amet, consectetuer adipiscing elit.</h1>
                <a>Lorem call to action link</a>
            </div>

            <div className={styles.borderTop}></div>


            <div className={styles.heroPhotos}>
                <img src='https://placehold.co/300x400'></img>
                <img src='https://placehold.co/300x400'></img>
                <img src='https://placehold.co/300x400'></img>
            </div>
        </div>
        </>
    );
}

export default Hero
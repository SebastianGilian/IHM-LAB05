const feather = require('feather-icons');
import Carousel from 'react-bootstrap/Carousel';

feather.replace();
setTimeout(() => {
    feather.replace();
}, 100);
const Main = () => {
    return <main>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img src="img1.jpg"></img>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src="img2.jpg"></img>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img3.jpg"></img>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br></br><br></br><br></br>
    </main>;
}

export default Main;
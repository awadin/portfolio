import './index.scss';
import Timeline from '../Timeline/Timeline';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';
import image7 from '../../assets/7.png';
import image8 from '../../assets/8.png';

const About = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8
    ];

    return (
        <div className='container'>
            <div className='header grid gap-4 grid-cols-1 lg:grid-cols-2'>
                <div className='header-text'>
                    <h1 className='mb-4'>About Me</h1>
                    <div className='h-2/3 flex flex-col justify-between'>
                        <p className='mb-4'>I am a McGill University graduate currently working at Netsfere. I work as a software engineer to architect and develop
                            solutions for a web‑based enterprise management system used by large international telecommunications companies. My experience within
                            both academic and work environments has honed my abilities to pick up new concepts quickly, enhanced my attention to detail, and elevated
                            my leadership skills.
                        </p>
                        <p>
                            In the slideshow is one example of my recent work. I created a import wizard that guided users through the process of uploading, formatting, and adding contacts to their portal. I was in charge of designing the overall layout and flow, coding the panels - both front end visuals and back end validation. I worked headed a team of about 4 developers to work in coordination to complete the full process using Agile methodologies.
                        </p>
                    </div>
                </div>
                <div className='header-slideshow'>
                    <Slide autoplay={true} indicators={index => <div className="indicator">{index + 1}</div>}>
                        {images.map(i => (
                            <div key={i} className="each-slide-effect">
                                <img className='rounded-3xl' src={i} />
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>
            <Timeline />
        </div>
    )
}

export default About;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import AnimatedLetters from "../AnimatedLetters";
import { skills } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import professional from '../../assets/professional.png';
import './index.scss';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Divider, IconButton } from "@material-ui/core";
import reactImage from '../../assets/e.png';
import schoolLogo from '../../assets/mcgill.png';
import netsfereLogo from '../../assets/netsfere.png';
import campaignImage from '../../assets/a.png';
import imageImage from '../../assets/RANSAC1.png';
import marketImage from '../../assets/marketplace.png';
import aiImage from '../../assets/web2.png';
import gameImage from '../../assets/game.png';
import safeImage from '../../assets/safe.png';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = 'AIDAN WADIN'.split('');
    const subTitleArray = 'Software Developer - Cognitive Scientist'.split('');

    const titleArray = 'Software engineer,'.split('');
    const title2Array = 'Web developer,'.split('');
    const title3Array = 'Cognitive scientist,'.split('');
    const tagLineArray = 'And your future colleague!'.split('');

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, []);

    const [dialogState, setOpen] = useState({ opened: false, title: '', image: 'react', icon: '', text: '' });

    let dialogData = {};

    const handleClickOpen = (dialogType) => {
        switch (dialogType) {
            case 'Angular + React':
                setOpen({
                    opened: true,
                    title: dialogType,
                    image: reactImage,
                    icon: 'faReact',
                    text: <>
                        <p>I have spent the last 3 years working in Angular. I've used related technolgies like rxjs, Angular Material, and more to create stunning, optimized pages. I've also led semniars with my colleages to share tips and tricks I've learned over time.</p>
                        <p>I pride myself on writing the cleanest code possible not only as a good practice for myself, but to encourage others to look at my code and more easily get up to speed on what I'm doing and offer suggestions and critiques to improve.</p>
                        <p>The image is a screenshot of a search dialog box. Each line is a dynamic data field, where each avialbale input field option depends on what is previously selected.</p>
                    </>
                });
                break;
            case 'Typescript + Javascript':
                setOpen({
                    opened: true,
                    title: dialogType,
                    image: campaignImage,
                    icon: 'faReact',
                    text: <><p>Mainly, I've worked with Typescript on the FE and Node.js on the BE. I've learned just how powerful each language is and am confident in my abilies to tackle even the most complex issues.</p></>
                });
                break;
            case 'Python':
                setOpen({
                    opened: true,
                    title: dialogType,
                    image: marketImage,
                    icon: 'faStore',
                    text: <><p class="mb-8">During my final semseter at McGill, I took a web development course. The last month of the course was a collaborative project consisting of up to 3 people per group. The task was to design a website of our choice from the ground up. We chose to do an online marketplace. </p><p class="mb-4">Using a combination of Django, Python, Redis, Websocket, HTML/CSS, Bootstrap, and Javascript, we built a working online marketplace complete with the ability to create new accounts, login/logout, post/edit/delete items for sale, as well a fully functioning checkout pipeline complete with Stripe integration.</p></>
                });
                break;
            case 'Computer Vision':
                setOpen({
                    opened: true,
                    title: dialogType,
                    image: imageImage,
                    icon: 'faEye',
                    text: <><p class="mb-5">Computer vision is an emerging and exciting development rising along with general AI. I had the privilege of taking a class taught by <a href="http://www.cim.mcgill.ca/~siddiqi/">Kaleem Siddiqi</a>.</p>
                        <p class="mb-5">In our class we utilized MATLAB's extensive computer vision toolbox to work on things such as finding SIFT keypoints, and, in turn, coding our own panoramic stitching algorithms. Below are some of the results from my panoramic stiching algorithm. It involved finding shared SIFT points between 2 images, then matching those SIFT points together into a new, joined image.</p></>
                });
                break;
            case 'Machine Learning':
                setOpen({
                    opened: true,
                    title: dialogType,
                    image: aiImage,
                    icon: 'faBookJournalWhills',
                    text: <><p class="mb-5">I have extensive experience with machine learning models and technologies after taking a graduate level course at McGill. We learned the theory underlying a wide array of models, how to build them from scratch, as well as how to use popular libraries to implement our algorithms. </p>
                        <p class="mb-5">Some of the models I am familiar with include: Logistic Regression, Random Forests, Naive Bayes, SVM, Decision Trees, MLPs, CNNs, as well as other ensemble methods. I have also been exposed to techniques such as Gradient Descent, Gridsearch, Bagging, Bootstrapping, Adaboosting, and more.</p></>
                });
                break;
            case 'Game Development':
                setOpen({
                    opened: true,
                    title: dialogType,
                    image: gameImage,
                    icon: 'faPlay',
                    text: <><p class="mb-5">I took a game design course at McGill purley out of curiosity, and learned a great deal from it. One project in particular was escpecially interesting. We had to create our own "cannon" game, with custom physics from scratch. The game involved hitting "ghosts" with cannonballs as they tried to reach the right side of the screen.  </p>
                        <p class="mb-5">I created my game with HTML/CSS/Javascript. This created a browser friendly game. I used Verlet integration to generate realisitic collisions, gravity, and wind for my game. Please click the link below for the github file as well as a more in depth readme!</p>
                        <a class="mb-5" href="https://github.com/awadin/GameDesign/tree/master"><strong>Click here to view the GitHub repo</strong></a></>
                });
                break;
            case 'Protean':
                setOpen({
                    opened: true,
                    title: dialogType,
                    image: safeImage,
                    icon: 'faHandshake',
                    text: <>
                        <p>Being a good software developer is only half the job, I've learned. People skills and the ability to lead as much as follow are indespesinble assets. Communication, and an effiecent information-sharing-system are also incredibly important and bedrock to a successful development project.</p>
                    </>
                });
                break;
            default:
                setOpen({
                    opened: true,
                    title: 'Oops!',
                    image: 'Image missing...',
                    icon: 'faTriangleExclamation',
                    text: 'Looks like an error occured!'
                });
                return;
        }
    };

    const handleClose = () => {
        setOpen({ opened: false, title: '' });
    };


    return (
        <>
            <header class="mr-4 text-center">
                <div class="grid grid-cols-1 md:grid-cols-3 sm:gap-4 mb-8">
                    <div className="flex justify-center">
                        <img class="img-rounded banner-img self-center" src={schoolLogo} alt="" />
                    </div>
                    <div className="flex justify-center">
                        <img class="img-rounded banner-img self-center" src={professional} alt="" />
                    </div>
                    <div className="flex justify-center xs:mt-16 xs:mb-16 md:mt-0 md:mb-0">
                        <img class="img-rounded banner-img self-center" src={netsfereLogo} alt="" />
                    </div>
                </div>
                <div class="container d-flex align-items-center flex-column">
                    <div className="title-text self-center text-center">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={nameArray}
                                idx={1}
                            />
                        </h1>
                        <h4>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={subTitleArray}
                                idx={11}
                            />
                        </h4>
                    </div>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-user"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                </div>
            </header>

            <div className="container flex flex-row">
                <div className="main-content">
                    <div className="skills">
                        <div className="container mx-auto">
                            <div className="text-center mb-10 mt-10">
                                <h4 className="font-medium title-font">
                                    Portfolio and Skillset:
                                </h4>
                            </div>
                            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:pb-8 -mx-2">
                                {skills.map((skill) => (
                                    <div key={skill.title} className="p-2 sm:w-1/2 w-full">
                                        <div onClick={() => handleClickOpen(skill.title)} className="bg-gray-800 rounded flex p-4 h-full justify-between skills-buttons">
                                            <span className="title-font font-medium text-white self-center">
                                                {skill.title}
                                            </span>
                                            <span className="title-font font-medium text-white">
                                                <FontAwesomeIcon icon={fab[skill.icon] ?? fas[skill.icon]} size="2x" />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Dialog open={dialogState.opened} onClose={handleClose} fullWidth={true} maxWidth='md'>
                                <DialogTitle>
                                    <IconButton onClick={handleClose} className="close-dialog-button">
                                        <FontAwesomeIcon icon={faX} size="xs" />
                                    </IconButton>
                                </DialogTitle>
                                <DialogContent>
                                    <div className="flex justify-center mb-4">
                                        <h1>
                                            {dialogState.title}
                                        </h1>
                                    </div>
                                    <span className="flex flex-row place-content-center items-center mb-4">
                                        <div className="divider-line ml-8"></div>
                                        <FontAwesomeIcon className="divider-icon pr-4 pl-4" icon={fab[dialogState.icon] ?? fas[dialogState.icon]} size="2x" />
                                        <div className="divider-line mr-8"></div>
                                    </span>
                                    <div className="flex flex-col gap-8">
                                        <img className="flex w-3/4 self-center rounded-3xl" src={dialogState.image} alt="Dialog Image" />
                                        <DialogContentText className="text-center dialog-text">
                                            {dialogState.text}
                                        </DialogContentText>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <Link to="/contact">You Found Me!</Link>
                </div>
            </div>
        </>
    );
}

export default Home;

// text: ' During my final semseter at McGill, I took a web development course. The last month of the course was a collaborative project consisting of up to 3 people per group. The task was to design a website of our choice from the ground up. We chose to do an online marketplace. Using a combination of Django, Python, Redis, Websocket, HTML/CSS, Bootstrap, and Javascript, we built a working online marketplace complete with the ability to create new accounts, login/logout, post/edit/delete items for sale, as well a fully functioning checkout pipeline complete with Stripe integration.'


{/* <div className="container flex flex-row">
            <div className="main-content">
                <div className="title-container grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <div className="title-text self-center xs:text-center sm:text-center lg:text-left">
                        <TypeAnimation
                            className="code-type"
                            sequence={[
                                '<h1>',
                                100,
                            ]}
                            wrapper="h6"
                            cursor="false"
                        />
                        <h1>
                            <span className={`${letterClass} _5`}>H</span>
                            <span className={`${letterClass} _6`}>i!</span>
                            <br />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={nameArray}
                                idx={8}
                            />
                            <br />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={titleArray}
                                idx={25}
                            />
                            <br />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={title2Array}
                                idx={45}
                            />
                            <br />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={title3Array}
                                idx={60}
                            />
                            <br />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={tagLineArray}
                                idx={80}
                            />
                        </h1>
                        <TypeAnimation
                            className="code-type"
                            sequence={[
                                '</h1>',
                                100,
                            ]}
                            wrapper="h6"
                            cursor="false"
                        />
                    </div>
                    <div className="grid place-items-center title-image">
                        <img src={professional} alt="myself" className="rounded-3xl main-image" />
                    </div>
                </div>
                <div className="skills">
                    <div className="container mx-auto">
                        <div className="text-center mb-10 mt-10">
                            <h4 className="font-medium title-font">
                                My Technical Skillset Includes (but most certianly not limted to):
                            </h4>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:pb-8 -mx-2">
                            {skills.map((skill) => (
                                <div key={skill.title} className="p-2 sm:w-1/2 w-full">
                                    <div onClick={() => handleClickOpen(skill.title)} className="bg-gray-800 rounded flex p-4 h-full justify-between skills-buttons">
                                        <span className="title-font font-medium text-white self-center">
                                            {skill.title}
                                        </span>
                                        <span className="title-font font-medium text-white">
                                            <FontAwesomeIcon icon={fab[skill.icon]} size="2x" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Dialog open={dialogState.opened} onClose={handleClose} fullWidth={true} maxWidth='sm'>
                            <DialogTitle className="flex flex-row space-between">
                                {dialogState.title}
                                <IconButton onClick={handleClose} className="close-dialog-button">
                                    <FontAwesomeIcon icon={faX} size="xs" />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent>
                                <img src={dialogState.image} alt="Dialog Image" />
                                <DialogContentText>
                                    {dialogState.text}
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <Link to="/contact">You Found Me!</Link>
            </div>
        </div> */}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import { IconButton } from "@material-ui/core";
import schoolLogo from '../../assets/mcgill.png';
import netsfereLogo from '../../assets/netsfere.png';
import { closeDialogTask, openDialogTask } from './redux';
import { frontEnd, tsjs, python, computerVision, ml, gd, protean, error } from "./dialogObjects";
import { FRONT_END, JSTS, PYTHON, CV, ML, GD, PROTEAN } from './redux';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = 'AIDAN WADIN'.split('');
    const subTitleArray = 'Software Developer - Cognitive Scientist'.split('');

    const dialogData = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3500)

        return () => {
            clearTimeout(timeoutId)
        }
    }, []);


    const handleClickOpen = (dialogType) => {
        switch (dialogType) {
            case FRONT_END:
                dispatch(openDialogTask(frontEnd))
                break;
            case JSTS:
                dispatch(openDialogTask(tsjs));
                break;
            case PYTHON:
                dispatch(openDialogTask(python));
                break;
            case CV:
                dispatch(openDialogTask(computerVision));
                break;
            case ML:
                dispatch(openDialogTask(ml));
                break;
            case GD:
                dispatch(openDialogTask(gd));
                break;
            case PROTEAN:
                dispatch(openDialogTask(protean));
                break;
            default:
                dispatch(openDialogTask(error));
                return;
        }
    };

    const handleClose = () => {
        dispatch(closeDialogTask());
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
                            <Dialog open={dialogData.opened} onClose={handleClose} fullWidth={true} maxWidth='md'>
                                <DialogTitle>
                                    <IconButton onClick={handleClose} className="close-dialog-button">
                                        <FontAwesomeIcon icon={faX} size="xs" />
                                    </IconButton>
                                </DialogTitle>
                                <DialogContent>
                                    <div className="flex justify-center mb-4">
                                        <h1>
                                            {dialogData.title}
                                        </h1>
                                    </div>
                                    <span className="flex flex-row place-content-center items-center mb-4">
                                        <div className="divider-line ml-8"></div>
                                        <FontAwesomeIcon className="divider-icon pr-4 pl-4" icon={fab[dialogData.icon] ?? fas[dialogData.icon]} size="2x" />
                                        <div className="divider-line mr-8"></div>
                                    </span>
                                    <div className="flex flex-col gap-8">
                                        <img className="flex w-3/4 self-center rounded-3xl" src={dialogData.image} alt="Intentional Error" />
                                        <DialogContentText className="text-center dialog-text">
                                            {dialogData.text}
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
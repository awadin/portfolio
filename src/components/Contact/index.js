import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const contactMeArray = 'Contact me'.split('');

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, []);

    const form = useRef();

    const [open, setOpen] = React.useState(false);

    const openSnackBar = () => {
        setOpen(true);
    }

    const closeSnackbar = () => {
        setOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mjs73n3', 'template_vtand4v', form.current, 'FBC1Ecz_zlWx4PaA5')
            .then((result) => {
                openSnackBar();
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <>
            <div className='container contact-page'>
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                    open={open}
                    onClose={closeSnackbar}
                    autoHideDuration={3000}
                    message="Message Successfully Sent!"
                />
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={contactMeArray}
                            letterClass={letterClass}
                            idx={15}
                        />
                    </h1>
                    <div class="block p-6 rounded-lg shadow-lg bg-white mt-32">
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="form-group mb-6">
                                    <input type="text" class="form-control
                                                                block
                                                                w-full
                                                                px-3
                                                                py-1.5
                                                                text-base
                                                                font-normal
                                                                text-gray-700
                                                                bg-white bg-clip-padding
                                                                border border-solid border-gray-300
                                                                rounded
                                                                transition
                                                                ease-in-out
                                                                m-0
                                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        aria-describedby="emailHelp123" placeholder="Name" name="name" />
                                </div>
                                <div class="form-group mb-6">
                                    <input type="email" class="form-control
                                                                block
                                                                w-full
                                                                px-3
                                                                py-1.5
                                                                text-base
                                                                font-normal
                                                                text-gray-700
                                                                bg-white bg-clip-padding
                                                                border border-solid border-gray-300
                                                                rounded
                                                                transition
                                                                ease-in-out
                                                                m-0
                                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        aria-describedby="emailHelp124" placeholder="Email" name="email" />
                                </div>
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block
                                                                w-full
                                                                px-3
                                                                py-1.5
                                                                text-base
                                                                font-normal
                                                                text-gray-700
                                                                bg-white bg-clip-padding
                                                                border border-solid border-gray-300
                                                                rounded
                                                                transition
                                                                ease-in-out
                                                                m-0
                                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Subject" name="subject" />
                            </div>
                            <div class="form-group mb-6">
                                <textarea type="text" class="form-control block
                                                                w-full
                                                                px-3
                                                                py-1.5
                                                                text-base
                                                                font-normal
                                                                text-gray-700
                                                                bg-white bg-clip-padding
                                                                border border-solid border-gray-300
                                                                rounded
                                                                transition
                                                                ease-in-out
                                                                m-0
                                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Message" name="message"></textarea>
                            </div>
                            <button type="submit" class="
                                                        w-full
                                                        px-6
                                                        py-2.5
                                                        bg-blue-600
                                                        text-white
                                                        font-medium
                                                        text-xs
                                                        leading-tight
                                                        uppercase
                                                        rounded
                                                        shadow-md
                                                        hover:bg-blue-700 hover:shadow-lg
                                                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                        active:bg-blue-800 active:shadow-lg
                                                        transition
                                                        duration-150
                                                        ease-in-out"
                                value="Send"
                            >Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <span className="absolute bottom-2 flex flex-row gap-4">
                <FontAwesomeIcon icon={faArrowLeftLong} className="mt-1" />
                <p>
                    Or connect with me!
                </p>
            </span>
        </>
    )
}

export default Contact;
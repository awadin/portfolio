import reactImage from '../../assets/e.png';
import campaignImage from '../../assets/a.png';
import imageImage from '../../assets/RANSAC1.png';
import marketImage from '../../assets/marketplace.png';
import aiImage from '../../assets/web2.png';
import gameImage from '../../assets/game.png';
import safeImage from '../../assets/safe.png';
import { FRONT_END, JSTS, PYTHON, CV, ML, GD, PROTEAN } from './redux';

export const frontEnd = {
    opened: true,
    title: FRONT_END,
    image: reactImage,
    icon: 'faReact',
    text: <>
        <p>I have spent the last 3 years working in Angular. I've used related technologies like rxjs, Angular Material, and more to create stunning, optimized pages. I've also led seminars with my colleagues to share tips and tricks I've learned over time.</p>
        <p>I pride myself on writing the cleanest code possible not only as a good practice for myself, but to encourage others to look at my code and more easily get up to speed on what I'm doing and offer suggestions and critiques to improve.</p>
        <p>The image is a screenshot of a search dialog box. Each line is a dynamic data field, where each available input field option depends on what is previously selected.</p>
    </>
};

export const tsjs = {
    opened: true,
    title: JSTS,
    image: campaignImage,
    icon: 'faReact',
    text: <><p>Mainly, I've worked with Typescript on the FE and Node.js on the BE. I've learned just how powerful each language is and am confident in my abilities to tackle even the most complex issues.</p></>
};

export const python = {
    opened: true,
    title: PYTHON,
    image: marketImage,
    icon: 'faStore',
    text: <><p class="mb-8">During my final semester at McGill, I took a web development course. The last month of the course was a collaborative project consisting of up to 3 people per group. The task was to design a website of our choice from the ground up. We chose to do an online marketplace. </p><p class="mb-4">Using a combination of Django, Python, Redis, Websocket, HTML/CSS, Bootstrap, and Javascript, we built a working online marketplace complete with the ability to create new accounts, login/logout, post/edit/delete items for sale, as well a fully functioning checkout pipeline complete with Stripe integration.</p></>
};

export const computerVision = {
    opened: true,
    title: CV,
    image: imageImage,
    icon: 'faEye',
    text: <><p class="mb-5">Computer vision is an emerging and exciting development rising along with general AI. I had the privilege of taking a class taught by <a href="http://www.cim.mcgill.ca/~siddiqi/">Kaleem Siddiqi</a>.</p>
        <p class="mb-5">In our class we utilized MATLAB's extensive computer vision toolbox to work on things such as finding SIFT key points, and, in turn, coding our own panoramic stitching algorithms. Below are some of the results from my panoramic stitching algorithm. It involved finding shared SIFT points between 2 images, then matching those SIFT points together into a new, joined image.</p></>
};

export const ml = {
    opened: true,
    title: ML,
    image: aiImage,
    icon: 'faBookJournalWhills',
    text: <><p class="mb-5">I have extensive experience with machine learning models and technologies after taking a graduate level course at McGill. We learned the theory underlying a wide array of models, how to build them from scratch, as well as how to use popular libraries to implement our algorithms. </p>
        <p class="mb-5">Some of the models I am familiar with include: Logistic Regression, Random Forests, Naive Bayes, SVM, Decision Trees, MLPs, CNNs, as well as other ensemble methods. I have also been exposed to techniques such as Gradient Descent, Gridsearch, Bagging, Bootstrapping, Adaboosting, and more.</p></>
};

export const gd = {
    opened: true,
    title: GD,
    image: gameImage,
    icon: 'faPlay',
    text: <><p class="mb-5">I took a game design course at McGill purely out of curiosity, and learned a great deal from it. One project in particular was especially interesting. We had to create our own "cannon" game, with custom physics from scratch. The game involved hitting "ghosts" with cannonballs as they tried to reach the right side of the screen.  </p>
        <p class="mb-5">I created my game with HTML/CSS/Javascript. This created a browser friendly game. I used Verlet integration to generate realistic collisions, gravity, and wind for my game. Please click the link below for the github file as well as a more in depth readme!</p>
        <a class="mb-5" href="https://github.com/awadin/GameDesign/tree/master"><strong>Click here to view the GitHub repo</strong></a></>
};

export const protean = {
    opened: true,
    title: PROTEAN,
    image: safeImage,
    icon: 'faHandshake',
    text: <>
        <p>Being a good software developer is only half the job, I've learned. People skills and the ability to lead as much as follow are indispensible assets. Communication, and an efficient information-sharing-system are also incredibly important and bedrock to a successful development project.</p>
    </>
};

export const error = {
    opened: true,
    title: 'Oops!',
    image: 'Image missing...',
    icon: 'faTriangleExclamation',
    text: 'Looks like an error occurred!'
};


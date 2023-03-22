import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faMartiniGlass } from '@fortawesome/free-solid-svg-icons';
import './Timeline.scss';

function Timeline() {
    return (
        <VerticalTimeline lineColor='black' className='main-timeline'>
            <VerticalTimelineElement
                contentStyle={{ background: 'rgb(52 115 208)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(52 115 208)' }}
                date="Aug. 2020 - Present"
                iconStyle={{ background: 'rgb(52 115 208)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCode} />}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Netsfere - Chicago, IL</h4>
                <p>
                    Angular | PHP | Bash | Angular Material | Java | C++
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: 'rgb(52 115 208)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(52 115 208)' }}
                date="April 2019 - Aug. 2019"
                iconStyle={{ background: 'rgb(52 115 208)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faMartiniGlass} />}
            >
                <h3 className="vertical-timeline-element-title">Maitre D’</h3>
                <h4 className="vertical-timeline-element-subtitle">The Everest - Chicago, IL</h4>
                <p>
                    Michelin  star restaurant (No coding but incredible experience).
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: 'rgb(192 81 81)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(192 81 81)' }}
                date="Jan. 2018 - April 2018"
                iconStyle={{ background: 'rgb(192 81 81)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
                <h3 className="vertical-timeline-element-title">Research Project Volunteer</h3>
                <h4 className="vertical-timeline-element-subtitle">McGill University - Montreal, QC, CA</h4>
                <p>
                    Java | AI | Computer Vision
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: 'rgb(192 81 81)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(192 81 81)' }}
                date="Jan. 2018 - April 2018"
                iconStyle={{ background: 'rgb(192 81 81)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
                <h3 className="vertical-timeline-element-title">McGill University</h3>
                <h4 className="vertical-timeline-element-subtitle">B.A. in Computer Science with a minor in Cognitive Science</h4>
                <p>
                    Algorithm Design | Software Systems | Human Cognition | Computational Linguistics | Probability
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default Timeline;
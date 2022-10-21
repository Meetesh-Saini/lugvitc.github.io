import { useState } from 'react';
import TerminalWindow from '../../components/terminal/terminalWindow';
import RecruitmentStepOne from './recruitmentStep1';
import RecruitmentStepTwo from './recruitmentStep2';
import Confirm from './recruitment_confirm';
import Success from './recruitment_success';

function RecruitmentStep() {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        name: '',
        regno: '',
        email: '',
        contact: '',
        whatLinux: '',
        whyLinux: '',
        expLinux: '',
        prefDept: ' ',
	prefDept2: ' ',
        flagCommand: '',
	tech1: 'E.g. Cybersecurity, Web Development, App Development, AI etc.',
	tech2: 'E.g. Metasploit, Kali Linux, ReactJS, NodeJS, Flask, Django, Flutter etc.',
	tech3: 'E.g. https://github.com/user',
	mang1: 'E.g. yes, I have marketed so and so event under this club',
	mang2: '',
	ops1: 'E.G. yes, I have approached so and so sponsor for this event',
	ops2: '',
	media1: 'E.g, yes, I have experience with canva/figma. Designed a poster for so and so event',
	media2: 'E.g. canva design links, figma design links, gdrive links for photography',
	content1: 'E.g. yes, I have covered captions/email body for so and so event under this club',
	content2: 'E.g. A text content with proper combination of simple words and complex phrases attracts the eyes'
    });

    //proceed to next step of form
    const nextStep = () => {
        setStep(step + 1);
    };

    //Go back to previous step of form
    const previousStep = () => {
        setStep(step - 1);
    };

    //Handle Fields Change
    const handleChange = input => e => {
        setFormValues({ ...formValues, [input]: e.target.value });
    };
    switch (step) {
        case 1:
            return (
                <RecruitmentStepOne
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formValues}
                />
            );
        case 2:
            return (
                <RecruitmentStepTwo
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formValues}
                    previousStep={previousStep}
                />
            );
	case 3:
            return (
                <Confirm
                    nextStep={nextStep}
                    values={formValues}
                    previousStep={previousStep}
                />
            );
        case 4:
            return <Success />;
        default:
            return 'try again :(';
    }
}

export default function UserForm() {
    return (
        <>
            <TerminalWindow
                title='Recruitment 2022'
                prompts={[
                    { path: '~', command: 'cd recruitment' },
                    {
                        path: '~/recruitment',
                        command: './recruitment.exe -v 2022'
                    }
                ]}
            >
                Hey there! The Linux Club Recruitments are here! Are you crazy
                about Linux? Do you get excited by the command line? Are you a
                beginner looking for exploring Linux? Open Source?
                Cybersecurity? We have it all! Join the coolest club out of the
                herd to discuss, share and lead all our ideas to Success!
	    <br /><br />
	    Departments:
	    <br />1. Technical - Here you work upon developing realtime open source projects of interest as well as making all technical platform for our club events.
	    <br />2. Management - Here you manage the flow of the club. It covers marketing for events, managing on the day of event etc.
	    <br />3. Operations - Here you expand the network of the club among real world firms and reach out to sponsors for club events etc.
	    <br />4. Media - Here you manage the social media handles of the club along with designing posters and reels for events and information. This also covers photography department.
	    <br />5. Content - Here you draft the content for all important communications. This includes drafting content for sponsorship, or captions for posts or event report.
            </TerminalWindow>
            <RecruitmentStep />
        </>
    );
}

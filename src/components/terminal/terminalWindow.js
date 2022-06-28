// import { useCallback, useRef } from 'react';
// import { useLocation } from 'react-router-dom';

import TerminalPrompt from './terminalPrompt.js';
import ShowAfterTypewriter from '../showAfterTypewriter/showAfterTypwriter.js';

import './terminal.css';
import './terminalText.css';
import TerminalDots from './terminalDots.js';

export default function TerminalWindow({
    prompts,
    children,
    onClickRed,
    onClickYellow,
    onClickGreen
}) {
    // const location = useLocation();

    // const ref = useCallback(node => {
    //     if (node) {
    //         // console.log(location.pathname);
    //         window.localStorage.setItem(
    //             location.pathname,
    //             new Date().toISOString()
    //         );
    //     }
    // }, []);

    return (
        <div className='terminal'>
            <TerminalDots
                onClickRed={onClickRed}
                onClickYellow={onClickYellow}
                onClickGreen={onClickGreen}
            />
            <div className='terminal-contents terminal-text'>
                {prompts ? (
                    prompts.reduceRight(
                        (acc, curr) => (
                            <ShowAfterTypewriter
                                textContainer={text => (
                                    <TerminalPrompt path={curr.path}>
                                        {text}
                                    </TerminalPrompt>
                                )}
                                text={curr.contents}
                            >
                                {acc}
                            </ShowAfterTypewriter>
                        ),
                        <div /* ref={ref} */>{children}</div>
                    )
                ) : (
                    <div /* ref={ref} */>{children}</div>
                )}
            </div>
        </div>
    );
}


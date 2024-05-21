import { useState, useEffect } from 'react'
import '../phraseStyles.css'

export function Phrase({ setNextKeyToType, phrases }) {
    const [index, setIndex] = useState(0);
    const [phraseCntr, setPhraseCntr] = useState(0);
    const [phrase, setPhrase] = useState(phrases[phraseCntr]);

    useEffect(() => {
        const keydownHandler = (e) => {
            if (e.repeat) return; // keydown event trigger rapidly if you hold the key, we only want to detect keydown once.
            if (e.key === phrase.charAt(index)) {
                setNextKeyToType(phrase.charAt(index + 1));
                setIndex(prevIndex => prevIndex + 1);
                if (index === phrase.length - 1) { //if the phrase has been typed
                    setIndex(0);
                    setPhraseCntr(prevPhraseCntr => prevPhraseCntr + 1);
                    setPhrase(phrases[phraseCntr + 1]);
                    setNextKeyToType(phrases[phraseCntr + 1].charAt(0));
                }
            }
        };

        window.addEventListener("keydown", keydownHandler);

        return () => { //cleanup
            window.removeEventListener("keydown", keydownHandler);
        };
    }, [index, phrase, phraseCntr]);

    return (
        <>
            <div class='phrase'>
                <span class='typed-phrase'>{phrase.substring(0, index)}</span>
                <span class='pointer'>{phrase.substring(index, index + 1)}</span>
                {phrase.substring(index + 1)}
            </div>
        </>
    )
}

export default 10;

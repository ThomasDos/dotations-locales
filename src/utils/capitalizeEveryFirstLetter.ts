import capitalizeFirstLetter from "./capitalizeFirstLetter";
import capitalizeSentenceWithDash from "./capitalizeSentenceWithDash";
import capitalizeSentenceWithSpace from "./capitalizeSentenceWithSpace";

function capitalizeEveryFirstLetter(sentence: string): string {
    let sentenceFormatted = sentence;

    sentenceFormatted = capitalizeFirstLetter(sentenceFormatted);

    if (sentence.includes("-")) {
        sentenceFormatted = capitalizeSentenceWithDash(sentenceFormatted);
    }

    if (sentence.includes(" ")) {
        sentenceFormatted = capitalizeSentenceWithSpace(sentenceFormatted);
    }

    return sentenceFormatted;
}

export default capitalizeEveryFirstLetter;

/*
  this is the main entry point of the WordInput part of the project, it declares all the required useState variables for
  the word, it's character count and word count, then the loading, error and wordDetails which is fetched from the API.
  Then all of these are passed as props to the required components. 
*/

import { useState } from "react";
import { SearchBar } from "./SearchBar"
import { WordStats } from "./WordStats"
import WordDetails from "./WordDetails";

interface WordDetails {
    definition: string | null;
    partOfSpeech: string | null;
    synonyms: string[] | null;
    antonyms: string[] | null;
    examples: string[] | null;
}

export const WordInput = () => {
    const [characterCount, setCharacterCount] = useState<number>(0);
    const [wordCount, setWordCount] = useState<number>(0);
    const [word, setWord] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [wordDetails, setWordDetails] = useState<WordDetails | null>(null);

  return (
    <div className = "mt-[2rem]">
        <SearchBar word = {word} setWord = {setWord} setCharacterCount = {setCharacterCount} setWordCount = {setWordCount} setLoading={setLoading} setError={setError} setWordDetails={setWordDetails}/>
        <WordStats characterCount = {characterCount} wordCount = {wordCount}/>
        <WordDetails loading = {loading} error = {error} wordDetails={wordDetails}/>
    </div>
  )
}

/*
  This component is for the search bar on which you input the word and then the character and word count gets dynamically 
  updated which is set using useEffect hook. Then, it also has the "Process Word" button, which upon being clicked, the 
  loading, error and wordDetails state variables are set with the help of API.
*/
import { useEffect } from "react";

interface WordStatsInterface {
    setCharacterCount: React.Dispatch<React.SetStateAction<number>>;
    setWordCount: React.Dispatch<React.SetStateAction<number>>;
}

interface Word {
    word: string;
    setWord: React.Dispatch<React.SetStateAction<string>>;
}

interface WordDetails {
    definition: string | null;
    partOfSpeech: string | null;
    synonyms: string[] | null;
    antonyms: string[] | null;
    examples: string[] | null;
}

interface ApiResponse {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    setWordDetails: React.Dispatch<React.SetStateAction<WordDetails | null>>;
}

interface Result {
    definition?: string;
    partOfSpeech?: string;
    synonyms?: string[];
    antonyms?: string[];
    examples?: string[];
}

interface WordApiResponse {
    word: string;
    results: Result[];
}

export const SearchBar: React.FC<Word & WordStatsInterface & ApiResponse> = ({
    setCharacterCount,
    setWordCount,
    word,
    setWord,
    setLoading,
    setError,
    setWordDetails,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    }

    useEffect(() => {
        setCharacterCount(word.length);

        const words = word.trim().split(/\s+/);
        setWordCount(word.trim() === "" ? 0 : words.length);
    }, [word])

    

    const handleClick = async () => {
        setWordDetails(null);
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
                headers: {
                    "X-Mashape-Key": import.meta.env.VITE_API_KEY
                }
            });

            const data: WordApiResponse = await response.json();
            const firstResult = data.results[0] || {}; // Get the first result or an empty object

            const details: WordDetails = {
                definition: firstResult.definition || null,
                partOfSpeech: firstResult.partOfSpeech || null,
                synonyms: firstResult.synonyms || null,
                antonyms: firstResult.antonyms || null,
                examples: firstResult.examples || null,
            };

            setWordDetails(details);
        } catch (error: any) {
            setError(error.message || 'An error occurred while fetching word details.');
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className="w-[100%] flex flex-row flex-wrap justify-center gap-y-6">
        <input 
            className="w-[100%] md:w-[76%] lg:w-[85%] h-[2.5rem] md:h-[3rem] rounded-lg border-2 border-[#D2D6DB] p-2 md:p-4 text-[0.8rem] md:text-[1rem]"
            value = { word }
            onChange = { handleChange }
            />
        <button className="p-[0.7rem] w-[50%] md:w-[20%] lg:w-[12%] rounded-lg bg-[#731EE2] text-white text-[0.8rem] md:text-[0.9rem] md:ml-6" 
            onClick = {handleClick}>
            Process Word
        </button>
    </div>
  )
}

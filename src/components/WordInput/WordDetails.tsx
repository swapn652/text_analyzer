/*
  this is the component that displays the word details like the definition, partsOfSpeech, synonyms, antonyms and examples
*/

interface WordDetails {
    definition: string | null;
    partOfSpeech: string | null;
    synonyms: string[] | null;
    antonyms: string[] | null;
    examples: string[] | null;
}

interface WordDetailsInterface {
    loading: boolean;
    error: string | null;
    wordDetails: WordDetails | null;
}


const wordDetails: React.FC<WordDetailsInterface> = ({
    loading,
    error,
    wordDetails
}) => {

    // Render your component with the wordDetails data
    return (
        <div className="border-2 border-[#D2D6DB] rounded-xl p-4 md:p-6 lg:p-8 mt-[3rem] text-[0.8rem] md:text-[1.1rem] lg:text-[1.3rem] min-h-[15rem]" style={{ fontFamily: "DM Sans" }}>
            {loading &&
                <div className="flex flex-col items-center justify-center h-[10rem]">
                    <img src="./loader.svg" alt="loader_gif" className="w-[4rem]" />
                </div>
            }

            {error &&
                <div className="flex flex-col items-center justify-center h-[10rem]">
                    {error}
                </div>
            }

            {!wordDetails && !loading &&
                <div className="flex flex-col items-center justify-center h-[12rem] md:h-[10rem]">
                    <h1 className="">No word input. First enter a word.</h1>
                </div>
            }

            {wordDetails && <table className="w-[100%]">
                <tr className="text-left h-[2.5rem]">
                    <th className="  text-[#475467] w-[50%] lg:w-[16%]">Definition:</th>
                    <td className=" ">{wordDetails?.definition}</td>
                </tr>
                <tr className="text-left h-[2.5rem]">
                    <th className="  text-[#475467]">Parts of Speech:</th>
                    <td className=" ">{wordDetails?.partOfSpeech}</td>
                </tr>

                <tr className="text-left h-[2.5rem]">
                    <th className="  text-[#475467]">Synonyms:</th>
                    <td className=" ">
                        {wordDetails?.synonyms ? (
                            wordDetails?.synonyms?.map((synonym, index) => (
                                <span key={index}>
                                    {synonym}
                                    {index !== (wordDetails?.synonyms?.length || 0) - 1 && ", "}
                                </span>
                            ))
                        ) : (
                            <span className="text-red-500">Not Found</span>
                        )}
                    </td>
                </tr>

                <tr className="text-left h-[2.5rem]">
                    <th className="  text-[#475467]">Antonyms:</th>
                    <td className=" ">
                        {wordDetails?.antonyms ? (
                            wordDetails?.antonyms?.map((antonym, index) => (
                                <span key={index}>
                                    {antonym}
                                    {index !== (wordDetails?.antonyms?.length || 0) - 1 && ", "}
                                </span>
                            ))
                        ) : (
                            <span className="text-red-500">Not Found</span>
                        )}
                    </td>
                </tr>

                <tr className="text-left h-[2.5rem]">
                    <th className="  text-[#475467]">Examples:</th>
                    <td className=" ">
                        {wordDetails?.examples ? (
                            wordDetails?.examples?.map((example, index) => (
                                <span key={index}>
                                    {example}
                                    {index !== (wordDetails?.examples?.length || 0) - 1 && ", "}
                                </span>
                            ))
                        ) : (
                            <span className="text-red-500">Not Found</span>
                        )}
                    </td>
                </tr>
            </table>
            }
        </div>
    );
};

export default wordDetails;

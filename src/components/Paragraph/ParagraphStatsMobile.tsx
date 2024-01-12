/*
  This is the mobile screen version of ParagraphStats.tsx
*/

interface ParaStats {
    characterCount: number;
    wordCount: number;
    sentenceCount: number;
    paragraphCount: number;
    spaceCount: number;
    punctuationCount: number;
}

export const ParagraphStatsMobile: React.FC<ParaStats> = ({ 
        characterCount, 
        wordCount, 
        sentenceCount, 
        paragraphCount, 
        spaceCount, 
        punctuationCount 
    }) => {
  return (
    <div className = "mt-[3rem]" style={{fontFamily: 'Inter'}}>
        <table className="border-2 border-[#EAECF0] w-[100%]">
            <tr className="text-left h-[2.5rem]">
              <th className=" pl-[1rem] border-2 border-[#EAECF0] bg-white w-[70%] text-[#475467]">Characters</th>
              <td className=" pl-[1rem] border-2 border-[#EAECF0] bg-[#F9FAFB]">{ characterCount }</td>
            </tr>
            <tr className="text-left h-[2.5rem]">
                <th className=" pl-[1rem] border-2 border-[#EAECF0] bg-white text-[#475467]">Words</th>
                <td className=" pl-[1rem] border-2 border-[#EAECF0] bg-[#F9FAFB]">{ wordCount }</td>
            </tr>

            <tr className="text-left h-[2.5rem]">
                <th className=" pl-[1rem] border-2 border-[#EAECF0] bg-white text-[#475467]">Sentences</th>
                <td className=" pl-[1rem] border-2 border-[#EAECF0] bg-[#F9FAFB]">{ sentenceCount }</td>
            </tr>

            <tr className="text-left h-[2.5rem]">
                <th className=" pl-[1rem] border-2 border-[#EAECF0] bg-white text-[#475467]">Paragraphs</th>
                <td className=" pl-[1rem] border-2 border-[#EAECF0] bg-[#F9FAFB]">{ paragraphCount }</td>
            </tr>

            <tr className="text-left h-[2.5rem]">
                <th className=" pl-[1rem] border-2 border-[#EAECF0] bg-white text-[#475467]">Spaces</th>
                <td className=" pl-[1rem] border-2 border-[#EAECF0] bg-[#F9FAFB]">{ spaceCount }</td>
            </tr>
            <tr className="text-left h-[2.5rem]">
              <th className=" pl-[1rem] border-2 border-[#EAECF0] bg-white text-[#475467]">Punctuations</th>
              <td className=" pl-[1rem] border-2 border-[#EAECF0] bg-[#F9FAFB]">{ punctuationCount }</td>
            </tr>
        </table>
      </div>
  )
}

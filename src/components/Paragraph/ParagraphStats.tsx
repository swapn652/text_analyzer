/*
  this is the component that receives the required info as props from the Paragraph.tsx component and then displays them
  in the form of table
*/

interface ParagraphStatsInterface {
    characterCount: number;
    wordCount: number;
    sentenceCount: number;
    paragraphCount: number;
    spaceCount: number;
    punctuationCount: number;
}

export const ParagraphStats: React.FC<ParagraphStatsInterface> = ({ 
        characterCount, 
        wordCount, 
        sentenceCount, 
        paragraphCount, 
        spaceCount, 
        punctuationCount 
    }) => {
    return (
      <div className = "mt-[3rem] md:text-[1rem] lg:text-[1.2rem]" style={{ fontFamily: 'Inter' }}>
        <table className="border-2 border-[#EAECF0] w-[100%]">
          <thead className="">
            <tr className="text-left h-[2.5rem] lg:h-[3.5rem] bg-white">
              <th className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0] text-[#475467]">Characters</th>
              <th className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0] text-[#475467]">Words</th>
              <th className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0] text-[#475467]">Sentences</th>
              <th className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0] text-[#475467]">Paragraphs</th>
              <th className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0] text-[#475467]">Spaces</th>
              <th className="pl-[1rem] lg:pl-[2rem]  border-2 border-[#EAECF0] text-[#475467]">Punctuations</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[3rem] lg:h-[4rem] bg-[#F9FAFB]">
              <td className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0]">{ characterCount }</td>
              <td className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0]">{ wordCount }</td>
              <td className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0]">{ sentenceCount }</td>
              <td className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0]">{ paragraphCount }</td>
              <td className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0]">{ spaceCount }</td>
              <td className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0]">{ punctuationCount }</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
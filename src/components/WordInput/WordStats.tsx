/*
  this is the component that displays the character and word count of the word dynamically
*/

interface WordStatsInterface {
    characterCount: number;
    wordCount: number;
}

export const WordStats: React.FC<WordStatsInterface> = ({
    characterCount,
    wordCount
}) => {
  return (
    <div className = "mt-[3rem] text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]" style={{ fontFamily: 'Inter' }}>
        <table className="border-2 border-[#EAECF0] w-[100%] lg:w-[50%]">
          <thead className="">
            <tr className="text-left h-[2.5rem] lg:h-[3.5rem] bg-white">
              <th className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0] text-[#475467]">Characters</th>
              <th className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0] text-[#475467]">Words</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[3rem] lg:h-[4rem] bg-[#F9FAFB]">
              <td className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0]">{ characterCount }</td>
              <td className="pl-[1rem] lg:pl-[2rem] border-2 border-[#EAECF0]">{ wordCount }</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

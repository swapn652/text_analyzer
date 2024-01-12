/*
  SwitchMenu is the Menu that is used to Switch between 2 sections of the project, WordInput and Paragraph
*/

// this is the interface for option which is used to switch between the 2 sections of the project
interface Option {
    option: number;
    setOption: React.Dispatch<React.SetStateAction<number>>;
}

export const SwitchMenu: React.FC<Option> = ({ option, setOption }) => {
    const handleButtonClick = (selectedOption: number) => {
        setOption(selectedOption);
    };

    return (
        <div className="
                h-[2.2rem] 
                md:h-[3rem] 
                lg:h-[3.5rem] 
                lg:w-[50%] 
                bg-[#F9FAFB] 
                mt-[2rem]
                md:mt-[3rem]
                rounded-lg 
                border-2 
                border-[#EAECF0] 
                flex 
                flex-row 
                font-bold 
                text-[0.8rem] 
                md:text-[1rem] 
                lg:text-[1.2rem] 
                items-center 
                justify-center"
            style={{ fontFamily: 'Inter' }}>
                {/* change the value of option and hence the design based on the button that is clicked */}
                <button 
                    className={`w-1/2 ${option === 1 ? 'text-[#344054] h-[90%] bg-white rounded-lg' : 'text-[#667085]'} `}
                    style={option === 1 ? { boxShadow: "0px 1px 3px 0px #1018281A" } : {}}
                    onClick={() => handleButtonClick(1)}>
                    Word Input
                </button>
                <button 
                    className={`w-[49%] ${option === 2 ? 'text-[#344054] h-[90%] bg-white rounded-lg' : 'text-[#667085]'} `} 
                    style={option === 2 ? { boxShadow: "0px 1px 3px 0px #1018281A" } : {}}
                    onClick={() => handleButtonClick(2)}>
                    Paragraph
                </button>
        </div>
    )
}

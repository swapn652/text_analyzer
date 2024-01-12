/*
  this is the main entry point of the Paragraph part of the project, that contains a text area on which you enter your 
  content, and then the required details are set and then transferred to the ParagraphStats component as props
*/
import React, { useState, useEffect } from "react";
import { ParagraphStats } from "./ParagraphStats";
import { ParagraphStatsMobile } from "./ParagraphStatsMobile";

export const Paragraph = () => {
  const [text, setText] = useState<string>("");
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(0);
  const [sentenceCount, setSentenceCount] = useState<number>(0);
  const [paragraphCount, setParagraphCount] = useState<number>(0);
  const [spaceCount, setSpaceCount] = useState<number>(0);
  const [punctuationCount, setPunctuationCount] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }

  useEffect(() => {
    setCharacterCount(text.length);

    const words = text.trim().split(/\s+/);
    setWordCount(text.trim() === "" ? 0 : words.length);

    const sentences = text.split(/[.!?]+/);
    setSentenceCount(sentences.length - 1);

    const paragraphs = text.split(/\n\s*/);
    setParagraphCount(text.trim() === "" ? 0 : paragraphs.length);

    setSpaceCount(text.split(" ").length - 1);

    const punctuationMatches = text.match(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g);
    setPunctuationCount(punctuationMatches ? punctuationMatches.length : 0);
  }, [text]);

  return (
    <div className="mt-[2rem]">
      <textarea
        className="border-2 border-[#DADADA] w-[100%] h-[17rem] md:h-[20rem] rounded-lg p-4"
        placeholder="Type, or copy/paste your content here."
        value = { text }
        onChange = { handleChange }
      />

      <div className="hidden md:block">
        <ParagraphStats 
          characterCount = { characterCount } 
          wordCount = { wordCount } 
          sentenceCount = { sentenceCount } 
          paragraphCount = { paragraphCount }
          spaceCount = { spaceCount }
          punctuationCount = { punctuationCount }
          />
      </div>

      <div className="block md:hidden">
        <ParagraphStatsMobile 
          characterCount = { characterCount } 
          wordCount = { wordCount } 
          sentenceCount = { sentenceCount } 
          paragraphCount = { paragraphCount }
          spaceCount = { spaceCount }
          punctuationCount = { punctuationCount }
        />
      </div>
    </div>
  );
};
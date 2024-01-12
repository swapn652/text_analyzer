// this is the title and introduction of the project
import Typography from '@mui/material/Typography';

export const Intro = () => {
  return (
    <div>
      <Typography 
        variant="h2" 
        component="h2" 
        sx = {{ 
                fontFamily: 'Inter', 
                color: '#344054', 
                fontSize: { xs: '1.5rem', sm: '2.5rem', md: '4rem' } 
            }}>
        Text Analyzer
      </Typography>

      <Typography 
        variant="body1" 
        component="p" 
        sx = {{ 
            fontSize: { xs: '1rem', sm: '1.5rem', md: '2.2rem' }, 
            fontFamily: 'DM Sans', 
            color: '#475467', 
            textAlign: 'justify' 
            }}>
        Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most 
        frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and 
        speak time of your content.
      </Typography>
    </div>
  );
};

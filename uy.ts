type Resume = {
    name: string;
    aboutMe: string;
    contact: {
      phone: string;
      email: string;
      location: string;
    };
    skills: { name: string }[];
    languages: { name: string }[];
    education: { degree: string; institution: string }[];
    experience: { years: number };
    hobbies: { description: string }[];
  };
  
  const resume: Resume = {
    name: "Rimsha Ahmed",
    aboutMe: "I will be the best choice to grow your business...",
    contact: {
      phone: "03062293029",
      email: "ahmedrimsha222@gmail.com",
      location: "Karachi, Sindh",
    },
    skills: [
      { name: "Food products design" },
      { name: "Good communication" },
      { name: "Branding Poster design" },
      { name: "Graphic Design" },
      { name: "Adoub illustrator" },
      { name: "Mockup design for brand" },
    ],
    languages: [
      { name: "English" },
      { name: "Urdu" },
    ],
    education: [
      { degree: "Martic", institution: "Comprehensive School" },
      { degree: "Inter", institution: "Govt. College of Girls Block 'K'" },
    ],
    experience: { years: 1 },
    hobbies: [
      { description: "I give revision time until they are satisfied with my work" },
      { description: "I always try to learn something new" },
      { description: "I complete my work on time" },
    ],
  };
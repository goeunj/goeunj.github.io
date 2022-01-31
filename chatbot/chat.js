var chatWindow = new Bubbles(
    document.getElementById("chat"),
    "chatWindow"
 )
 
chatWindow.talk(
    {
      ice: {
        says: ["Hey!", "I am commander Goeun.", "What would you like to know?"],
        reply: [
          {
            question: "Who are you?",
            answer: "me"
          },
          {
            question: "How do you pronounce your name commander?",
            answer: "name"
          },
          {
            question: "What does ISFJ-A stand for?", 
            answer: "mbti" 
          }
        ]
      },

      me: {
        says:["I am commander Goeun Jang. I was born in Korea, moved to Canada at the age of seven and now the owner of spaceship ISFJ-A. Fortunately, I am fluent in both English and Korean.", "Nice to meet you!"],
        reply:[
          {
              question: "How do you pronounce your name commander?",
              answer: "name"
            },
            {
              question: "What does ISFJ-A stand for?", 
              answer: "mbti" 
            },
            {
              question: "Great, thank you commander Goeun!",
              answer:"greetings"
            }
        ]
      },

      name: {
        says: ["My name!", "Go-eun, where 'eun' sounds similar to the 'en' in seven.", "In Korean it means lovely."],
        reply: [
          {
            question: "Who are you?",
            answer: "me"
          },
          {
            question: "What does ISFJ-A stand for?", 
            answer: "mbti"
          },
          {
            question: "Great, thank you commander Goeun!",
            answer:"greetings"
          }
        ]
      },
      
      mbti: {
        says:["I: introversion", "S: sensing", "F: feeling", "J: judgment", "A: assertive", "Mainly known for being kind, reliable, hard-working, dependable and trustworthy."],
        reply:[
          {
            question: "Who are you?",
            answer: "me"
          },
          {
            question: "How do you pronounce your name commander?",
            answer: "name"
          },
          {
            question: "Great, thank you commander Goeun!",
            answer:"greetings"
          }
        ]
      },
    
      greetings: {
        says:["Anytime! Have a safe flight."]
      }// end conversation object
    }
)
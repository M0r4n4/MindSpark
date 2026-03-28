const suggestions = {
    bored: {
        do: [
            "Take a 10-minute walk without your phone.",
            "Reorganize one small drawer or shelf.",
            "Do 15 jumping jacks right now.",
            "Draw a map of your childhood neighborhood from memory.",
            "Try to fold an origami crane.",
            "Stretch your body for 5 straight minutes.",
            "Make a cup of tea or water and drink it mindfully.",
            "Find a new recipe and make a grocery list for it.",
            "Build a small tower out of whatever objects are on your desk.",
            "Write a completely fictional review for a product you don't own."
        ],
        learn: [
            "Watch a short video about a deep-sea creature.",
            "Read the Wikipedia page of a random country.",
            "Learn how to say 'hello' in 5 new languages.",
            "Watch a video about how black holes work.",
            "Look up how your favorite food is industrially manufactured.",
            "Learn one new keyboard shortcut for your computer.",
            "Read about a historical figure you know nothing about.",
            "Watch a 5-minute tutorial on a magic trick.",
            "Learn the phonetic alphabet (Alfa, Bravo, Charlie...).",
            "Read about the origins of words (etymology)."
        ],
        think: [
            "What would your ideal day look like if nothing stopped you?",
            "If you could teleport right now, where would you go?",
            "What is a highly underrated skill you think everyone should have?",
            "If you had to teach a class on one thing, what would it be?",
            "What’s the most interesting coincidence you’ve experienced?",
            "How would the world change if humans didn't need to sleep?",
            "What advice would you give your 10-year-old self?",
            "If animals could talk, which one would be the rudest?",
            "What would you do if money wasn't an issue?",
            "What small moment from this week are you grateful for?"
        ]
    },
    curious: {
        do: [
            "Open Google Earth and drop the peg anywhere in the world.",
            "Try mixing two completely different music genres together.",
            "Take apart a broken pen or gadget to see how it works.",
            "Download an app you've never used and explore its UI.",
            "Try writing your name with your non-dominant hand.",
            "Go outside and identify three different types of plants/trees.",
            "Look up the highest-rated documentary on a streaming service and start it.",
            "Find a complicated word and successfully use it in a sentence.",
            "Take a close-up macro photo of something mundane.",
            "Look for a hidden feature on your phone you didn't know existed."
        ],
        learn: [
            "Read up on the concept of the 'Overview Effect'.",
            "Learn how exactly the internet travels across oceans.",
            "Discover the bizarre mating rituals of the Anglerfish.",
            "Find out how an internal combustion engine works.",
            "Read about the most convincing conspiracy discoveries.",
            "Learn how optical illusions trick your brain.",
            "Watch a video on how everyday items are recycled.",
            "Learn how a specific magic trick is done.",
            "Understand the basic principles of quantum computing (in simplest terms!).",
            "Read about the history of the specific city you are currently in."
        ],
        think: [
            "Why do humans experience nostalgia?",
            "What technology will seem ancient in 50 years?",
            "Are mathematics discovered or invented?",
            "If the universe is expanding, what is it expanding into?",
            "Why do we dream, and what do yours mean?",
            "Is there a color that we haven't discovered yet?",
            "How does language shape the way we think?",
            "What would a society without lying look like?",
            "If you could ask the universe one question and get a definitive answer, what would it be?",
            "How does consciousness actually arise from biological matter?"
        ]
    },
    creative: {
        do: [
            "Write a 4-line poem about the closest object to your right.",
            "Sketch a monster out of random blobs on a page.",
            "Write a short, alternative ending to a movie you watched recently.",
            "Take 3 random items and arrange them into an aesthetic flatlay.",
            "Come up with 5 terrible app ideas.",
            "Hum a melody and try to record it on your phone.",
            "Cut a piece of paper into the most intricate snowflake you can.",
            "Design a logo for a fake company in your head or on paper.",
            "Rearrange the layout of the apps on your phone's home screen.",
            "Write a character description of a stranger you saw today."
        ],
        learn: [
            "Learn the basics of color theory.",
            "Watch a video on the golden ratio in art and design.",
            "Look up how your favorite artist creates their work.",
            "Read about the history of a specific art movement (like Cubism or Surrealism).",
            "Learn 3 basic principles of typography.",
            "Watch a short documentary on architecture.",
            "Learn how a synthesizer creates sound.",
            "Read about the creative routines of famous writers.",
            "Learn the difference between serif and sans-serif fonts.",
            "Watch a tutorial on basic perspective drawing."
        ],
        think: [
            "What makes a piece of art 'good' or 'bad'?",
            "If you had to invent a new color, what would you name it and what would it look like?",
            "How much of creativity is original thought vs. remixing existing ideas?",
            "What's a story you've always wanted to tell but haven't?",
            "How does the environment you're in affect your creative output?",
            "If you were a medium of art (paint, clay, digital), which one would be?",
            "What happens to creative ideas when they aren't written down?",
            "Could AI ever produce 'true' art? Why or why not?",
            "What is your earliest memory of creating something?",
            "How would you redesign the human hand if you could?"
        ]
    },
    tired: {
        do: [
            "Close your eyes and focus on your breathing for 2 minutes.",
            "Listen to a lo-fi or ambient music track with your eyes closed.",
            "Lie on the floor and put your legs up against a wall.",
            "Gently massage your temples and jaw.",
            "Drink a glass of water slowly.",
            "Change into your most comfortable clothes.",
            "Turn down the brightness on all your screens.",
            "Make a warm, caffeine-free beverage.",
            "Do a slow, lazy cat-cow stretch.",
            "Just stare out the window for 5 minutes without trying to 'do' anything."
        ],
        learn: [
            "Read about the different stages of sleep.",
            "Learn about the concept of 'hygge'.",
            "Listen to a podcast about history (the slow, calming kind).",
            "Read about why human bodies need rest to function.",
            "Learn a new, gentle stretching technique.",
            "Read a very short, comforting poem.",
            "Watch a slow-motion video of nature.",
            "Learn about the benefits of a 'power nap'.",
            "Listen to an audiobook chapter.",
            "Read about animals that sleep for most of the day."
        ],
        think: [
            "What is the most comforting place you've ever been?",
            "If peace had a physical shape, what would it look like?",
            "What soft sounds bring you the most comfort?",
            "Reflect on a time you felt completely rested.",
            "What does your mind feel like when you just let it drift?",
            "What is the coziest memory you have from childhood?",
            "Why do we fight sleep when our bodies clearly need it?",
            "If you could bottle a 'restful feeling', what ingredients would go into it?",
            "What would a perfect 'do nothing' day entail?",
            "How can you be kinder to your body today?"
        ]
    },
    stressed: {
        do: [
            "Do the 4-7-8 breathing exercise (inhale 4s, hold 7s, exhale 8s).",
            "Write down the top 3 things stressing you out and physically cross them off.",
            "Run your hands under cool water for 30 seconds.",
            "Step outside and take 5 deep breaths of fresh air.",
            "Tense every muscle in your body for 5 seconds, then release.",
            "Listen to a song you loved as a teenager.",
            "Organize just one small area (like your desk or a table).",
            "Write a brain dump: put all your thoughts onto paper without filtering.",
            "Pet an animal or hug a soft pillow.",
            "Do a quick 5-minute guided meditation."
        ],
        learn: [
            "Learn what the 'amygdala hijack' is and how it affects stress.",
            "Read about the psychological benefits of nature.",
            "Learn how cortisol affects the human body.",
            "Watch a video on Stoicism and how it handles anxiety.",
            "Learn about 'box breathing' used by Navy SEALs.",
            "Read about the vagus nerve and how to stimulate it for calm.",
            "Learn a quick grounding technique (like the 5-4-3-2-1 method).",
            "Watch a video on the science of why crying helps relieve stress.",
            "Read about the power of cognitive reframing.",
            "Learn the origins of mindfulness meditation."
        ],
        think: [
            "Will this matter to you in 5 years? Or even 5 weeks?",
            "What is one thing in your control right now?",
            "How have you successfully handled a similarly stressful situation before?",
            "What is the worst-case scenario, and how would you actually survive it?",
            "What is the best-case scenario?",
            "If a friend were in your shoes, what advice would you give them?",
            "What are you placing too much importance on?",
            "Can you accept the feeling of being stressed without fighting it?",
            "What is a small step you can take right now to lower the pressure?",
            "What does your body need at this exact moment?"
        ]
    },
    unmotivated: {
        do: [
            "Make your bed. Just that.",
            "Drink a full glass of water.",
            "Set a timer for 5 minutes and do a task—stop when it rings.",
            "Put on your 'outside shoes' to trick your brain into action mode.",
            "Write a list of 3 minuscule, extremely easy tasks.",
            "Listen to a high-energy soundtrack or upbeat song.",
            "Throw away 3 pieces of trash in your room.",
            "Wash a single dish.",
            "Do exactly 10 squats.",
            "Text a friend something encouraging."
        ],
        learn: [
            "Learn about the '2-minute rule' for productivity.",
            "Read about dopamine and how tasks are rewarded in the brain.",
            "Watch a video on the concept of 'Activation Energy'.",
            "Learn how momentum plays a bigger role than motivation.",
            "Read about 'habit stacking'.",
            "Learn the difference between intrinsic and extrinsic motivation.",
            "Watch a short video on the Pomodoro technique.",
            "Read about why perfectionism causes procrastination.",
            "Learn a surprising fact about procrastination.",
            "Read a short biography of someone who overcame a massive slump."
        ],
        think: [
            "What is the absolute smallest step you could take right now to move forward?",
            "Why are you expecting yourself to feel motivated before starting?",
            "What would happen if you just did it poorly, instead of not doing it at all?",
            "Are you actually unmotivated, or are you just tired?",
            "How will you feel tonight if you get just a tiny piece of this done?",
            "Who are you doing this for, ultimately?",
            "What is the root fear causing the resistance?",
            "If past you could see you now, what would they think?",
            "What is the 'why' behind the thing you are avoiding?",
            "Can you forgive yourself for feeling unmotivated and try again anyway?"
        ]
    },
    overthinking: {
        do: [
            "Write down the thought on a piece of paper, then rip it up.",
            "Count backward from 100 by 7s (100, 93, 86...).",
            "Find 5 things in the room you can see, 4 you can touch, 3 hear.",
            "Do a physical task that requires focus (like balancing on one foot).",
            "Doodle mindless patterns on a piece of paper.",
            "Wash your face with cold water.",
            "Listen to a podcast about a highly technical or niche topic.",
            "Do a sudoku or a crossword puzzle.",
            "Organize alphabetical lists in your head (like animals starting with A, B, C...).",
            "Trace the outline of your hand on paper."
        ],
        learn: [
            "Learn about the psychological concept of 'rumination'.",
            "Read about the 'spotlight effect'.",
            "Watch a video on the difference between overthinking and problem-solving.",
            "Learn about 'analysis paralysis'.",
            "Read how optical illusions prove our brains constantly misinterpret things.",
            "Learn a grounding technique from CBT.",
            "Read about the philosophy of 'wu wei' (non-doing or effortless action).",
            "Watch a video on how memories are altered every time we recall them.",
            "Learn about cognitive distortions.",
            "Read about the Dunning-Kruger effect."
        ],
        think: [
            "Is this thought a fact, or is it an assumption?",
            "If you knew everything would turn out okay, what would you do right now?",
            "Are you confusing a feeling with a reality?",
            "What evidence do you actually have that supports this negative thought?",
            "Is thinking more about this actually producing a solution, or just looping?",
            "How much of this situation can you completely control?",
            "What is the simplest explanation?",
            "Are you mind-reading what others are thinking?",
            "If the worst happened, could you handle it? (You probably could).",
            "Can you give yourself permission to drop the problem for the next hour?"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const moodSelectionDiv = document.getElementById('mood-selection');
    const resultsDiv = document.getElementById('results');
    const moodBtns = document.querySelectorAll('.mood-btn');
    
    const doText = document.getElementById('do-text');
    const learnText = document.getElementById('learn-text');
    const thinkText = document.getElementById('think-text');
    
    const generateAgainBtn = document.getElementById('generate-again-btn');
    const backBtn = document.getElementById('back-btn');

    let currentMood = '';

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function generateSuggestions(mood) {
        if (!suggestions[mood]) return;
        

        resultsDiv.classList.remove('active');
        
        setTimeout(() => {
            doText.textContent = getRandomItem(suggestions[mood].do);
            learnText.textContent = getRandomItem(suggestions[mood].learn);
            thinkText.textContent = getRandomItem(suggestions[mood].think);
            

            resultsDiv.classList.add('active');
        }, 50);
    }

    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentMood = btn.getAttribute('data-mood');
            

            moodSelectionDiv.classList.remove('active');
            moodSelectionDiv.classList.add('hidden');
            

            generateSuggestions(currentMood);
            

            resultsDiv.classList.remove('hidden');
        });
    });

    generateAgainBtn.addEventListener('click', () => {
        generateSuggestions(currentMood);
    });

    backBtn.addEventListener('click', () => {

        resultsDiv.classList.remove('active');
        resultsDiv.classList.add('hidden');
        
        
        moodSelectionDiv.classList.remove('hidden');
        moodSelectionDiv.classList.add('active');
        currentMood = '';
    });
});

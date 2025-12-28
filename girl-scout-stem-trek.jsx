import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Trophy, Lock, Unlock, ChevronRight, ChevronLeft, User, LogOut, Settings, Play, Award, Target, Zap, Clock, BookOpen, CheckCircle, XCircle, Lightbulb, RefreshCw, Users, Plus, Eye, EyeOff, Sparkles, Flame, MapPin, Crown, Gem, Rocket, Code, Cpu, Gamepad2, Smartphone, Bot, Wrench, Presentation } from 'lucide-react';

// Challenge data covering Coding for Good and Robotics badges
const generateChallenges = () => {
  const challenges = [];
  
  // CODING FOR GOOD CHALLENGES
  // Badge 1: Coding Basics
  const codingBasics = [
    { q: "What is an algorithm?", a: "step-by-step instructions", hint: "Think of it like a recipe", teaching: "An algorithm is a step-by-step list of instructions for a computer. Just like following a recipe to bake cookies, algorithms tell computers exactly what to do in order.", topic: "Coding Basics", visualization: "algorithm" },
    { q: "What does a function do in programming?", a: "performs an action", hint: "It's like a verb - it DOES something", teaching: "A function is like a verb in coding - it performs an action. For example, read() tells the computer to read something.", topic: "Coding Basics", visualization: "function" },
    { q: "What is an argument in coding?", a: "makes function specific", hint: "It adds details to what a function does", teaching: "An argument makes a function more specific. Like readTextbook('math') tells exactly WHICH textbook to read.", topic: "Coding Basics", visualization: "argument" },
    { q: "What is pseudocode?", a: "human language planning", hint: "It's not real code, but helps plan it", teaching: "Pseudocode is writing out a program in everyday language. It helps programmers plan before writing real code.", topic: "Coding Basics", visualization: "pseudocode" },
    { q: "What is syntax in programming?", a: "grammar rules for code", hint: "Like punctuation rules in English", teaching: "Syntax is like grammar rules for programming. Just as sentences need proper punctuation, code needs correct syntax.", topic: "Coding Basics", visualization: "syntax" },
    { q: "What is a meme used for in digital communication?", a: "spreading messages", hint: "Images with text that go viral", teaching: "Memes combine images and text to spread ideas quickly. They can be funny or raise awareness about important causes.", topic: "Coding Basics", visualization: "meme" },
    { q: "What does 'going viral' mean?", a: "spreading rapidly online", hint: "Like how a cold spreads from person to person", teaching: "When something goes viral, it spreads quickly through social media, like a virus passing from person to person.", topic: "Coding Basics", visualization: "viral" },
    { q: "What are X-Y coordinates used for?", a: "positioning on a grid", hint: "Finding locations on a screen", teaching: "X-Y coordinates help place images on screens. X is horizontal position, Y is vertical. (0,0) is the top left corner.", topic: "Coding Basics", visualization: "coordinates" },
  ];

  // Badge 2: Digital Game Design
  const gameDesign = [
    { q: "What is an avatar in gaming?", a: "digital character", hint: "It represents the player", teaching: "An avatar is a digital image that represents you in a game. You can customize it to show your personality!", topic: "Digital Game Design", visualization: "avatar" },
    { q: "What is an array in programming?", a: "ordered list of data", hint: "Like a numbered shopping list", teaching: "An array is a list where each item has a specific position. Arrays help store images as lists of pixel colors.", topic: "Digital Game Design", visualization: "array" },
    { q: "What is a pixel?", a: "smallest image element", hint: "Tiny squares that make up pictures", teaching: "Pixels are the smallest elements of digital images. 'Pixel' comes from 'picture element'. Screens are grids of pixels.", topic: "Digital Game Design", visualization: "pixel" },
    { q: "What is binary in computing?", a: "ones and zeros system", hint: "On/off, like a light switch", teaching: "Binary uses only two symbols: 0 and 1. Computers use binary because switches are either ON (1) or OFF (0).", topic: "Digital Game Design", visualization: "binary" },
    { q: "What is an icon in game design?", a: "small symbol image", hint: "Like the trash can on your desktop", teaching: "Icons are small images that represent things in games - like hearts for health, coins for money, or swords for attack.", topic: "Digital Game Design", visualization: "icon" },
    { q: "What is a game scenario?", a: "setting and events", hint: "The story setup of the game", teaching: "A scenario includes the game's setting and sequence of events. It tells what happens and what players need to do.", topic: "Digital Game Design", visualization: "scenario" },
    { q: "What are game mechanics?", a: "rules for playing", hint: "How the game actually works", teaching: "Game mechanics are the rules that control how a game is played - how characters move, how to score points, how to win.", topic: "Digital Game Design", visualization: "mechanics" },
    { q: "What do animators do in game design?", a: "create visual movement", hint: "They bring characters to life", teaching: "Animators and artists create the look of video games. They design characters, backgrounds, and make everything move.", topic: "Digital Game Design", visualization: "animator" },
  ];

  // Badge 3: App Development
  const appDev = [
    { q: "What does 'app' stand for?", a: "application", hint: "Software on your phone", teaching: "App is short for application - self-contained software you interact with on devices. Apps can organize info, provide services, or entertain.", topic: "App Development", visualization: "app" },
    { q: "What is data visualization?", a: "showing data visually", hint: "Charts and graphs", teaching: "Data visualization makes information easy to understand using charts, diagrams, and infographics. It turns numbers into pictures.", topic: "App Development", visualization: "dataviz" },
    { q: "What is a bar chart used for?", a: "comparing amounts", hint: "Bars of different heights", teaching: "Bar charts display data using bars of different heights. Taller bars show larger amounts. They're great for comparisons.", topic: "App Development", visualization: "barchart" },
    { q: "What is correlation in data?", a: "relationship between data", hint: "When two things change together", teaching: "Correlation means two sets of data change together. Like if you track mood and weather - they might be related!", topic: "App Development", visualization: "correlation" },
    { q: "What is a prototype?", a: "first test version", hint: "A rough draft to test ideas", teaching: "A prototype is a first version of a product built to test if it works. Changes are made before the final product.", topic: "App Development", visualization: "prototype" },
    { q: "What is a scatter plot?", a: "dots showing relationships", hint: "Points on a graph showing two variables", teaching: "A scatter plot shows how two things relate. Each dot represents one piece of data with two measurements.", topic: "App Development", visualization: "scatter" },
    { q: "What is a user interface (UI)?", a: "what users see and interact with", hint: "Buttons, screens, menus", teaching: "The user interface is what you see and touch in an app - buttons, screens, menus. Good UI is easy to use.", topic: "App Development", visualization: "ui" },
    { q: "Why is privacy important with apps?", a: "protects personal data", hint: "Keep your information safe", teaching: "Apps collect data about you. Privacy settings control what information is shared. Always review app permissions!", topic: "App Development", visualization: "privacy" },
  ];

  // ROBOTICS CHALLENGES
  // Badge 1: Programming Robots
  const programmingRobots = [
    { q: "What three things do robots do? (Sense-Think-Act)", a: "sense think act", hint: "They detect, decide, and do", teaching: "Robots Sense their environment, Think about what to do, and Act on the world. This is what makes them different from ordinary machines.", topic: "Programming Robots", visualization: "robot" },
    { q: "What do sensors do on a robot?", a: "gather information", hint: "Like eyes and ears for robots", teaching: "Sensors send information about the environment to the robot - like cameras, microphones, and temperature sensors.", topic: "Programming Robots", visualization: "sensor" },
    { q: "What do controllers do in a robot?", a: "process and decide", hint: "The robot's brain", teaching: "Controllers like computers process information from sensors and decide how the robot should react.", topic: "Programming Robots", visualization: "controller" },
    { q: "What are effectors on a robot?", a: "moving parts", hint: "Arms, legs, wheels", teaching: "Effectors are the parts that can move - robot arms, grippers, legs, wheels, propellers. They let robots affect the world.", topic: "Programming Robots", visualization: "effector" },
    { q: "What is a circuit?", a: "path for electricity", hint: "Electricity flows in a loop", teaching: "A circuit is a path for electricity to flow. It must be a complete loop connected to both ends of a battery to work.", topic: "Programming Robots", visualization: "circuit" },
    { q: "What is a loop in programming?", a: "repeating commands", hint: "Doing the same thing over and over", teaching: "A loop tells the computer to repeat commands. Instead of writing the same code 100 times, you use a loop!", topic: "Programming Robots", visualization: "loop" },
    { q: "What is a conditional statement?", a: "if-then-else choice", hint: "IF this happens, THEN do that", teaching: "Conditional statements let computers make choices: IF a condition is true, THEN do one thing, ELSE do another.", topic: "Programming Robots", visualization: "conditional" },
    { q: "What does autonomous mean for robots?", a: "works without human control", hint: "Self-driving, self-operating", teaching: "Autonomous robots can work and make decisions on their own without a human telling them what to do every moment.", topic: "Programming Robots", visualization: "autonomous" },
  ];

  // Badge 2: Designing Robots
  const designingRobots = [
    { q: "What is documentation in design?", a: "keeping records", hint: "Notes, drawings, photos of your work", teaching: "Documentation means keeping a record of your design process - notes, drawings, photos. It helps you learn from mistakes and share ideas.", topic: "Designing Robots", visualization: "documentation" },
    { q: "What is the Design Thinking Process?", a: "steps to solve problems", hint: "Define, research, brainstorm, build, test", teaching: "Design Thinking has steps: pick a challenge, research, brainstorm solutions, build a prototype, test it, improve, and share.", topic: "Designing Robots", visualization: "designthinking" },
    { q: "What is biomimicry in robotics?", a: "copying nature's designs", hint: "Robot designs inspired by animals", teaching: "Biomimicry means borrowing designs from nature. Robot dogs copy how real dogs move. Drones copy bird flight.", topic: "Designing Robots", visualization: "biomimicry" },
    { q: "What is the uncanny valley?", a: "creepy almost-real robots", hint: "Too human-like feels wrong", teaching: "The uncanny valley is when robots look almost human but not quite - people find them creepy instead of friendly.", topic: "Designing Robots", visualization: "uncanny" },
    { q: "What is an exoskeleton robot?", a: "wearable robot suit", hint: "Like Iron Man's suit", teaching: "Exoskeletons are robotic suits people wear. They can help people with weak muscles walk or give workers extra strength.", topic: "Designing Robots", visualization: "exoskeleton" },
    { q: "What are actuators on a robot?", a: "power systems for movement", hint: "Motors and pumps", teaching: "Actuators are power systems that make robots move - electric motors, hydraulic pumps. They're like robot muscles.", topic: "Designing Robots", visualization: "actuator" },
    { q: "What is housing on a robot?", a: "the robot's body", hint: "The outer shell or frame", teaching: "Housing is the robot's body or frame. It can be made of metal, plastic, or other materials. It protects the inside parts.", topic: "Designing Robots", visualization: "housing" },
    { q: "What is iteration in design?", a: "improving through versions", hint: "Making it better each time", teaching: "Iteration means going through multiple versions, improving each time. Most robots go through many prototypes!", topic: "Designing Robots", visualization: "iteration" },
  ];

  // Badge 3: Showcasing Robots
  const showcasingRobots = [
    { q: "What is a robotics competition?", a: "teams compete with robots", hint: "Like FIRST or VEX", teaching: "In robotics competitions, teams build robots to complete tasks while competing against other teams. It's exciting!", topic: "Showcasing Robots", visualization: "competition" },
    { q: "What is a Maker Faire?", a: "event to show inventions", hint: "People display creative projects", teaching: "Maker Faires are events where inventors and creators show off their projects. They often have robotics areas.", topic: "Showcasing Robots", visualization: "makerfaire" },
    { q: "What should a robot presentation include?", a: "name purpose and how it works", hint: "Explain what makes it special", teaching: "Good presentations tell the robot's name, what it does, how it senses/thinks/acts, and what makes it special.", topic: "Showcasing Robots", visualization: "presentation" },
    { q: "What is feedback in design?", a: "suggestions for improvement", hint: "Others help you make it better", teaching: "Feedback is getting suggestions from others. Ask what they like and how to improve. It makes your design better!", topic: "Showcasing Robots", visualization: "feedback" },
    { q: "What do surgical robots do?", a: "help doctors operate", hint: "More precise surgery", teaching: "Surgical robots help doctors perform delicate operations more precisely. The DaVinci system helps with tiny, accurate movements.", topic: "Showcasing Robots", visualization: "surgical" },
    { q: "What is AI in robotics?", a: "artificial intelligence thinking", hint: "Computers that act smart", teaching: "Artificial Intelligence (AI) lets robots act as if they can think. AI programs can answer questions and have conversations.", topic: "Showcasing Robots", visualization: "ai" },
    { q: "Where might you see robots at work?", a: "hospitals factories farms", hint: "Many places use robots now", teaching: "Robots work in hospitals, factories, farms, warehouses, and more. They do dangerous, boring, or precise tasks.", topic: "Showcasing Robots", visualization: "workplace" },
    { q: "What backgrounds help with robotics careers?", a: "engineering programming arts", hint: "Many different skills are useful", teaching: "Robotics uses skills from engineering, programming, digital arts, psychology, and more. Many paths lead to robotics!", topic: "Showcasing Robots", visualization: "careers" },
  ];

  // Additional challenges to reach 100
  const additionalCoding = [
    { q: "What is JavaScript?", a: "programming language", hint: "A language computers understand", teaching: "JavaScript is a popular programming language used to make websites interactive and create apps.", topic: "Coding Basics", visualization: "javascript" },
    { q: "What is debugging?", a: "fixing code errors", hint: "Finding and removing bugs", teaching: "Debugging means finding and fixing problems (bugs) in code. It's like detective work for programmers!", topic: "Coding Basics", visualization: "debug" },
    { q: "What is a variable in code?", a: "storage container for data", hint: "Like a labeled box", teaching: "A variable stores information that can change. Think of it as a labeled box that holds different values.", topic: "Digital Game Design", visualization: "variable" },
    { q: "What is the element in an array?", a: "one item in the list", hint: "Each separate piece of data", teaching: "An element is one item in an array. The array ['red','blue','green'] has three elements.", topic: "Digital Game Design", visualization: "element" },
    { q: "What is a baseline in data tracking?", a: "starting point measurement", hint: "Where you begin", teaching: "A baseline is your starting measurement before making changes. It shows where you began so you can track progress.", topic: "App Development", visualization: "baseline" },
    { q: "Who was Katherine Johnson?", a: "NASA mathematician", hint: "Calculated rocket trajectories", teaching: "Katherine Johnson was a mathematician at NASA. She calculated the math for safe space flights, including the first moon landing!", topic: "Coding Basics", visualization: "katherine" },
    { q: "Who was Grace Hopper?", a: "computer pioneer", hint: "Created early programming", teaching: "Grace Hopper was a computer scientist who helped create early programming languages. She made coding easier for everyone!", topic: "Coding Basics", visualization: "hopper" },
    { q: "What is propaganda?", a: "messages to influence opinions", hint: "Trying to change what you think", teaching: "Propaganda is messaging designed to influence your opinions or beliefs. Be critical of online content!", topic: "Coding Basics", visualization: "propaganda" },
  ];

  const additionalRobotics = [
    { q: "What is conductive material?", a: "carries electricity easily", hint: "Like metal wires", teaching: "Conductive materials carry electricity easily. Metal is conductive. Wires are made of conductive material.", topic: "Programming Robots", visualization: "conductive" },
    { q: "What is insulating material?", a: "blocks electricity", hint: "Like rubber or plastic coating", teaching: "Insulating materials don't carry electricity. Rubber coating on wires keeps electricity safely inside.", topic: "Programming Robots", visualization: "insulating" },
    { q: "What is an LED?", a: "light that uses little power", hint: "Small efficient light", teaching: "LED stands for Light Emitting Diode. LEDs are small, efficient lights used in circuits and displays.", topic: "Programming Robots", visualization: "led" },
    { q: "What does binary 1 mean?", a: "on or true", hint: "The switch is ON", teaching: "In binary, 1 means 'on' or 'true'. It represents electricity flowing or a switch being turned on.", topic: "Programming Robots", visualization: "binaryone" },
    { q: "What are telepresence robots?", a: "remote presence devices", hint: "Be somewhere without being there", teaching: "Telepresence robots let you be 'present' somewhere remotely - like attending class from home through a robot.", topic: "Designing Robots", visualization: "telepresence" },
    { q: "What is a robotic limb?", a: "artificial arm or leg", hint: "Prosthetic with technology", teaching: "Robotic limbs are prosthetic arms or legs with motors and sensors. They help people who are missing limbs.", topic: "Designing Robots", visualization: "limb" },
    { q: "What is remote control for robots?", a: "human operates from distance", hint: "Using a controller", teaching: "Remote control means a human operates the robot from a distance, sending commands wirelessly.", topic: "Showcasing Robots", visualization: "remote" },
    { q: "What is a programmable body?", a: "design controls movement", hint: "Physical shape affects how it moves", teaching: "A programmable body means the robot's physical design itself controls how it moves, not just software.", topic: "Designing Robots", visualization: "progbody" },
  ];

  const moreChallenges = [
    { q: "What is a command in programming?", a: "single instruction step", hint: "One order for the computer", teaching: "A command is one step in a program, one instruction telling the computer what to do.", topic: "Programming Robots", visualization: "command" },
    { q: "What is a pressure sensor?", a: "detects touch or force", hint: "Knows when something presses on it", teaching: "Pressure sensors detect when something touches or pushes on them. Robots use them to know when they bump things.", topic: "Programming Robots", visualization: "pressure" },
    { q: "What is a light sensor?", a: "detects brightness", hint: "Knows if it's light or dark", teaching: "Light sensors measure how bright or dark the environment is. Robots can use them to find sunny spots or dark corners.", topic: "Programming Robots", visualization: "lightsensor" },
    { q: "What is a robovac?", a: "robot vacuum cleaner", hint: "Cleans floors automatically", teaching: "A robovac is a robotic vacuum that cleans floors on its own. It uses sensors to avoid obstacles and cover the whole room.", topic: "Designing Robots", visualization: "robovac" },
    { q: "What is the FIRST robotics program?", a: "student competition", hint: "Teams build competing robots", teaching: "FIRST is a famous robotics competition where student teams design and build robots to complete challenges.", topic: "Showcasing Robots", visualization: "first" },
    { q: "What makes good constructive feedback?", a: "helpful specific suggestions", hint: "Point out good things AND how to improve", teaching: "Good feedback is specific and helpful. Point out what works well AND give clear suggestions for improvement.", topic: "Showcasing Robots", visualization: "constructive" },
    { q: "What is crowd-funding for robots?", a: "public investment for projects", hint: "Many people contribute money", teaching: "Crowd-funding lets inventors raise money by getting small contributions from many people online.", topic: "Showcasing Robots", visualization: "crowdfund" },
    { q: "What is a search and rescue robot?", a: "finds disaster survivors", hint: "Goes where humans can't safely go", teaching: "Search and rescue robots go into dangerous disaster areas to find survivors. They're shockproof and can navigate rubble.", topic: "Designing Robots", visualization: "rescue" },
    { q: "What is a milking robot?", a: "automates cow milking", hint: "Farm automation", teaching: "Dairy farm robots can milk cows automatically all day long, letting farmers focus on other important tasks.", topic: "Designing Robots", visualization: "milking" },
    { q: "What is a hydroponic farm robot?", a: "automated indoor growing", hint: "Plants grown in water with robot help", teaching: "Hydroponic robots control light, temperature, and nutrients for plants grown in water instead of soil.", topic: "Designing Robots", visualization: "hydroponic" },
    { q: "What are smart wearables?", a: "sensors you wear", hint: "Fitness trackers, smart watches", teaching: "Smart wearables like fitness bracelets use sensors to track steps, heart rate, and more - just like robots do!", topic: "Programming Robots", visualization: "wearable" },
    { q: "What is a companion robot?", a: "provides company", hint: "Helps lonely or elderly people", teaching: "Companion robots keep people company and can monitor health. They're helpful for elderly people living alone.", topic: "Designing Robots", visualization: "companion" },
  ];

  // Combine all topics
  const allTopics = [
    ...codingBasics, ...gameDesign, ...appDev,
    ...programmingRobots, ...designingRobots, ...showcasingRobots,
    ...additionalCoding, ...additionalRobotics, ...moreChallenges
  ];

  // Distribute across difficulty levels
  const levels = ['Introduction', 'Informed', 'Initiated', 'Intermediate'];
  
  allTopics.forEach((item, index) => {
    const levelIndex = Math.floor(index / 25) % 4;
    challenges.push({
      id: index + 1,
      question: item.q,
      answer: item.a.toLowerCase(),
      hint: item.hint,
      teaching: item.teaching,
      topic: item.topic,
      visualization: item.visualization,
      level: levels[levelIndex],
      examples: [
        `Example 1: ${item.teaching.split('.')[0]}.`,
        `Example 2: This concept helps Girl Scouts understand ${item.topic.toLowerCase()}.`
      ]
    });
  });

  return challenges.slice(0, 100);
};

// Badge definitions
const BADGES = [
  { id: 'first_star', name: 'First Star', emoji: '⭐', description: 'Earned your first star', condition: (stats) => stats.totalStars >= 1 },
  { id: 'rising_star', name: 'Rising Star', emoji: '🌟', description: 'Earned 10 stars', condition: (stats) => stats.totalStars >= 10 },
  { id: 'perfect_streak', name: 'Perfect Streak', emoji: '🔥', description: 'Got 5 perfect scores in a row', condition: (stats) => stats.perfectStreak >= 5 },
  { id: 'speed_demon', name: 'Speed Demon', emoji: '⚡', description: 'Completed a challenge in under 30 seconds', condition: (stats) => stats.fastestTime && stats.fastestTime < 30 },
  { id: 'getting_started', name: 'Getting Started', emoji: '🎯', description: 'Completed 10 challenges', condition: (stats) => stats.completed >= 10 },
  { id: 'quarter_master', name: 'Quarter Master', emoji: '🏆', description: 'Completed 25 challenges', condition: (stats) => stats.completed >= 25 },
  { id: 'halfway_hero', name: 'Half Way Hero', emoji: '🎖️', description: 'Completed 50 challenges', condition: (stats) => stats.completed >= 50 },
  { id: 'topic_explorer', name: 'Topic Explorer', emoji: '🗺️', description: 'Tried all challenge topics', condition: (stats) => stats.topicsAttempted >= 6 },
  { id: 'stem_master', name: 'STEM Master', emoji: '👑', description: 'Completed all 100 challenges', condition: (stats) => stats.completed >= 100 },
  { id: 'perfectionist', name: 'Perfectionist', emoji: '💎', description: 'Got 3 stars on 20 challenges', condition: (stats) => stats.threeStarCount >= 20 }
];

const TOPICS = [
  'Coding Basics',
  'Digital Game Design', 
  'App Development',
  'Programming Robots',
  'Designing Robots',
  'Showcasing Robots'
];

const LEVELS = ['Introduction', 'Informed', 'Initiated', 'Intermediate'];

// CSS Animations
const styleSheet = `
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap');
  
  @keyframes confetti {
    0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  
  @keyframes pop-in {
    0% { transform: scale(0); opacity: 0; }
    70% { transform: scale(1.2); }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 5px currentColor; }
    50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes wiggle {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }
  
  @keyframes slideIn {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes robot-walk {
    0%, 100% { transform: translateX(0) rotate(-5deg); }
    25% { transform: translateX(5px) rotate(5deg); }
    50% { transform: translateX(10px) rotate(-5deg); }
    75% { transform: translateX(5px) rotate(5deg); }
  }
  
  @keyframes code-type {
    0% { width: 0; }
    100% { width: 100%; }
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  * { box-sizing: border-box; }
  
  body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .fredoka {
    font-family: 'Fredoka One', cursive;
  }
  
  .animate-bounce { animation: bounce 1s ease-in-out infinite; }
  .animate-pulse { animation: pulse-slow 2s ease-in-out infinite; }
  .animate-pop { animation: pop-in 0.5s ease-out forwards; }
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-glow { animation: glow 2s ease-in-out infinite; }
  .animate-spin-slow { animation: spin-slow 8s linear infinite; }
  .animate-wiggle { animation: wiggle 0.5s ease-in-out infinite; }
  .animate-slideIn { animation: slideIn 0.5s ease-out forwards; }
  .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
  .animate-robot { animation: robot-walk 2s ease-in-out infinite; }
`;

// Visualization Component
const ChallengeVisualization = ({ type, isPlaying }) => {
  const getVisualization = () => {
    const baseStyle = "w-full h-48 rounded-2xl flex items-center justify-center overflow-hidden relative";
    
    const visualizations = {
      algorithm: (
        <div className={`${baseStyle} bg-gradient-to-br from-amber-100 to-orange-100`}>
          <div className="flex flex-col items-center gap-2">
            {['Step 1: Start', 'Step 2: Process', 'Step 3: End'].map((step, i) => (
              <div key={i} 
                className="bg-white px-4 py-2 rounded-lg shadow-md border-2 border-amber-400"
                style={{ 
                  animation: isPlaying ? `fadeIn 0.5s ease-out ${i * 0.3}s forwards` : 'none',
                  opacity: isPlaying ? 0 : 1
                }}>
                <span className="text-amber-700 font-bold">{step}</span>
              </div>
            ))}
            {[0, 1].map(i => (
              <div key={`arrow-${i}`} className="text-amber-500 text-2xl" style={{
                animation: isPlaying ? `fadeIn 0.5s ease-out ${i * 0.3 + 0.15}s forwards` : 'none',
                opacity: isPlaying ? 0 : 1
              }}>↓</div>
            ))}
          </div>
        </div>
      ),
      robot: (
        <div className={`${baseStyle} bg-gradient-to-br from-red-100 to-orange-100`}>
          <div className="text-8xl" style={{ animation: isPlaying ? 'robot-walk 2s ease-in-out infinite' : 'none' }}>🤖</div>
          <div className="absolute bottom-4 flex gap-4">
            {['👁️ Sense', '🧠 Think', '🦾 Act'].map((item, i) => (
              <div key={i} className="bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-red-600"
                style={{ animation: isPlaying ? `pop-in 0.5s ease-out ${i * 0.2}s forwards` : 'none' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
      sensor: (
        <div className={`${baseStyle} bg-gradient-to-br from-blue-100 to-cyan-100`}>
          <div className="relative">
            <div className="text-6xl">📡</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"
              style={{ animation: isPlaying ? 'pulse-slow 1s ease-in-out infinite' : 'none' }} />
          </div>
          <div className="ml-4 flex flex-col gap-2">
            {['Light ☀️', 'Sound 🔊', 'Touch 👆'].map((s, i) => (
              <div key={i} className="bg-white/80 px-3 py-1 rounded-lg text-blue-600 font-semibold"
                style={{ animation: isPlaying ? `slideIn 0.5s ease-out ${i * 0.2}s forwards` : 'none' }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      ),
      circuit: (
        <div className={`${baseStyle} bg-gradient-to-br from-yellow-100 to-amber-100`}>
          <svg viewBox="0 0 200 100" className="w-64 h-32">
            <path d="M20,50 L60,50 L60,20 L140,20 L140,50 L180,50 L180,80 L100,80 L100,50 L20,50" 
              fill="none" stroke="#f59e0b" strokeWidth="4"
              style={{ strokeDasharray: 300, strokeDashoffset: isPlaying ? 0 : 300, transition: 'stroke-dashoffset 2s ease-in-out' }} />
            <circle cx="100" cy="20" r="8" fill="#ef4444" style={{ animation: isPlaying ? 'pulse-slow 1s infinite' : 'none' }} />
            <rect x="15" y="42" width="15" height="16" fill="#3b82f6" />
            <text x="22" y="54" fontSize="8" fill="white" textAnchor="middle">+</text>
          </svg>
          <div className="absolute bottom-2 text-amber-700 font-bold">⚡ Circuit Flow</div>
        </div>
      ),
      array: (
        <div className={`${baseStyle} bg-gradient-to-br from-green-100 to-emerald-100`}>
          <div className="flex gap-1">
            {['🍎', '🍊', '🍋', '🍇', '🍓'].map((item, i) => (
              <div key={i} className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-2xl border-2 border-green-300"
                style={{ animation: isPlaying ? `pop-in 0.3s ease-out ${i * 0.1}s forwards` : 'none' }}>
                {item}
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 flex gap-1">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="w-12 text-center text-green-600 font-bold text-sm">[{i}]</div>
            ))}
          </div>
        </div>
      ),
      pixel: (
        <div className={`${baseStyle} bg-gradient-to-br from-purple-100 to-pink-100`}>
          <div className="grid grid-cols-8 gap-0.5">
            {Array(64).fill(0).map((_, i) => (
              <div key={i} 
                className={`w-4 h-4 ${[10, 11, 12, 13, 18, 21, 26, 29, 34, 35, 36, 37, 42, 45, 50, 51, 52, 53].includes(i) ? 'bg-purple-500' : 'bg-white'}`}
                style={{ animation: isPlaying ? `fadeIn 0.1s ease-out ${i * 0.02}s forwards` : 'none' }} />
            ))}
          </div>
        </div>
      ),
      binary: (
        <div className={`${baseStyle} bg-gradient-to-br from-gray-800 to-gray-900`}>
          <div className="font-mono text-green-400 text-2xl flex flex-wrap justify-center gap-2 p-4">
            {['01001000', '01100101', '01101100', '01101100', '01101111'].map((byte, i) => (
              <span key={i} style={{ animation: isPlaying ? `fadeIn 0.3s ease-out ${i * 0.2}s forwards` : 'none' }}>{byte}</span>
            ))}
          </div>
          <div className="absolute bottom-2 text-green-300 text-sm font-mono">= "Hello"</div>
        </div>
      ),
      default: (
        <div className={`${baseStyle} bg-gradient-to-br from-teal-100 to-cyan-100`}>
          <div className="text-6xl" style={{ animation: isPlaying ? 'bounce 1s ease-in-out infinite' : 'none' }}>
            {type === 'function' ? '⚙️' : 
             type === 'code' || type === 'javascript' ? '💻' :
             type === 'app' ? '📱' :
             type === 'avatar' ? '👤' :
             type === 'icon' ? '🎯' :
             type === 'controller' ? '🎮' :
             type === 'effector' ? '🦾' :
             type === 'loop' ? '🔄' :
             type === 'conditional' ? '❓' :
             type === 'autonomous' ? '🚗' :
             type === 'documentation' ? '📝' :
             type === 'prototype' ? '🔧' :
             type === 'competition' ? '🏆' :
             type === 'ai' ? '🧠' :
             type === 'exoskeleton' ? '🦿' :
             type === 'dataviz' ? '📊' :
             type === 'meme' ? '😂' :
             type === 'privacy' ? '🔒' : '✨'}
          </div>
        </div>
      )
    };
    
    return visualizations[type] || visualizations.default;
  };

  return (
    <div className="mb-4">
      {getVisualization()}
    </div>
  );
};

// Confetti Component
const Confetti = ({ show }) => {
  if (!show) return null;
  
  const emojis = ['🎉', '⭐', '🎊', '✨', '🌟', '💫', '🏆', '💚'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array(50).fill(0).map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-50px',
            animation: `confetti ${2 + Math.random() * 2}s ease-out forwards`,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </div>
      ))}
    </div>
  );
};

// Main App Component
export default function GirlScoutSTEMTrek() {
  const [screen, setScreen] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [challenges] = useState(generateChallenges());
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showTeaching, setShowTeaching] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [newBadge, setNewBadge] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('Introduction');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const inputRef = useRef(null);

  // Student data management
  const [students, setStudents] = useState([]);
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  // Load data from storage
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await window.storage.get('stem-trek-students');
        if (result && result.value) {
          setStudents(JSON.parse(result.value));
        }
      } catch (e) {
        console.log('No stored data found');
      }
    };
    loadData();
  }, []);

  // Save data to storage
  const saveData = async (data) => {
    try {
      await window.storage.set('stem-trek-students', JSON.stringify(data));
    } catch (e) {
      console.log('Error saving data');
    }
  };

  // Handle login
  const handleLogin = () => {
    let student = students.find(s => s.name.toLowerCase() === loginName.toLowerCase());
    
    if (!student) {
      // Create new student
      student = {
        id: Date.now(),
        name: loginName,
        password: loginPassword,
        active: true,
        progress: {},
        stats: {
          completed: 0,
          totalStars: 0,
          totalPoints: 0,
          level: 1,
          perfectStreak: 0,
          currentStreak: 0,
          fastestTime: null,
          topicsAttempted: 0,
          threeStarCount: 0
        },
        badges: [],
        topicsVisited: new Set()
      };
      const newStudents = [...students, student];
      setStudents(newStudents);
      saveData(newStudents);
    } else if (student.password !== loginPassword) {
      setFeedback({ type: 'error', message: 'Incorrect password!' });
      return;
    }
    
    setCurrentUser(student);
    setScreen('dashboard');
    setLoginName('');
    setLoginPassword('');
    setFeedback(null);
  };

  // Handle admin login
  const handleAdminLogin = () => {
    if (adminPassword === '5270') {
      setIsAdmin(true);
      setScreen('admin');
      setAdminPassword('');
    } else {
      setFeedback({ type: 'error', message: 'Incorrect admin password!' });
    }
  };

  // Update user stats
  const updateUserStats = (challengeId, stars, time) => {
    const updatedUser = { ...currentUser };
    const previousStars = updatedUser.progress[challengeId]?.stars || 0;
    
    // Only update if better score
    if (stars > previousStars) {
      updatedUser.progress[challengeId] = { stars, time, completed: true };
      
      // Update stats
      if (previousStars === 0) {
        updatedUser.stats.completed++;
        updatedUser.stats.totalPoints += stars * 100;
      } else {
        updatedUser.stats.totalPoints += (stars - previousStars) * 100;
      }
      
      updatedUser.stats.totalStars = Object.values(updatedUser.progress)
        .reduce((sum, p) => sum + (p.stars || 0), 0);
      
      updatedUser.stats.threeStarCount = Object.values(updatedUser.progress)
        .filter(p => p.stars === 3).length;
      
      updatedUser.stats.level = Math.floor(updatedUser.stats.completed / 10) + 1;
      
      if (stars === 3) {
        updatedUser.stats.currentStreak++;
        updatedUser.stats.perfectStreak = Math.max(
          updatedUser.stats.perfectStreak,
          updatedUser.stats.currentStreak
        );
      } else {
        updatedUser.stats.currentStreak = 0;
      }
      
      if (!updatedUser.stats.fastestTime || time < updatedUser.stats.fastestTime) {
        updatedUser.stats.fastestTime = time;
      }
      
      // Track topics
      const challenge = challenges.find(c => c.id === challengeId);
      if (challenge) {
        if (!updatedUser.topicsVisited) updatedUser.topicsVisited = new Set();
        if (typeof updatedUser.topicsVisited === 'object' && !Array.isArray(updatedUser.topicsVisited)) {
          updatedUser.topicsVisited = new Set(Object.keys(updatedUser.topicsVisited));
        }
        const topicsSet = new Set(Array.isArray(updatedUser.topicsVisited) ? updatedUser.topicsVisited : []);
        topicsSet.add(challenge.topic);
        updatedUser.topicsVisited = Array.from(topicsSet);
        updatedUser.stats.topicsAttempted = topicsSet.size;
      }
      
      // Check for new badges
      BADGES.forEach(badge => {
        if (!updatedUser.badges.includes(badge.id) && badge.condition(updatedUser.stats)) {
          updatedUser.badges.push(badge.id);
          setNewBadge(badge);
          setTimeout(() => setNewBadge(null), 3000);
        }
      });
      
      setCurrentUser(updatedUser);
      
      // Update in students array and save
      const updatedStudents = students.map(s => 
        s.id === updatedUser.id ? updatedUser : s
      );
      setStudents(updatedStudents);
      saveData(updatedStudents);
    }
  };

  // Check answer
  const checkAnswer = () => {
    if (!currentChallenge || !answer.trim()) return;
    
    const timeTaken = (Date.now() - startTime) / 1000;
    const isCorrect = answer.toLowerCase().trim().includes(currentChallenge.answer.toLowerCase());
    
    if (isCorrect) {
      let stars = 1;
      if (timeTaken < 60) stars = 3;
      else if (timeTaken < 120) stars = 2;
      
      setFeedback({ type: 'success', message: `🎉 Correct! You earned ${stars} star${stars > 1 ? 's' : ''}!` });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
      
      updateUserStats(currentChallenge.id, stars, timeTaken);
    } else {
      setFeedback({ type: 'error', message: "Not quite right, but keep trying! Check the hint below." });
    }
  };

  // Start challenge
  const startChallenge = (challenge) => {
    setCurrentChallenge(challenge);
    setAnswer('');
    setFeedback(null);
    setShowTeaching(true);
    setStartTime(Date.now());
    setIsPlaying(true);
    setScreen('challenge');
  };

  // Check if challenge is unlocked
  const isUnlocked = (challenge) => {
    if (isAdmin) return true;
    if (challenge.id === 1) return true;
    
    // Find challenges in same level
    const levelChallenges = challenges.filter(c => c.level === challenge.level);
    const challengeIndex = levelChallenges.findIndex(c => c.id === challenge.id);
    
    if (challengeIndex === 0) return true;
    
    const prevChallenge = levelChallenges[challengeIndex - 1];
    return currentUser?.progress[prevChallenge?.id]?.completed;
  };

  // Get topic progress
  const getTopicProgress = (topic) => {
    const topicChallenges = challenges.filter(c => c.topic === topic);
    const completed = topicChallenges.filter(c => currentUser?.progress[c.id]?.completed).length;
    return { completed, total: topicChallenges.length, percentage: (completed / topicChallenges.length) * 100 };
  };

  // Render Login Screen
  const renderLogin = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        {['🌸', '🦋', '⭐', '🌺', '🍀'].map((emoji, i) => (
          <div key={i} className="absolute text-4xl opacity-20"
            style={{ 
              left: `${10 + i * 20}%`, 
              top: `${20 + (i % 3) * 30}%`,
              animation: `float ${3 + i}s ease-in-out infinite`
            }}>
            {emoji}
          </div>
        ))}
      </div>
      
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full opacity-50" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-50" />
        
        <div className="relative">
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">🏕️</div>
            <h1 className="fredoka text-3xl text-green-700 mb-1">Girl Scout</h1>
            <h2 className="fredoka text-2xl text-emerald-600">STEM Badge Trek</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="w-full px-4 py-3 rounded-xl border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg pr-12"
                  placeholder="Enter password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            {feedback && (
              <div className={`p-3 rounded-xl ${feedback.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {feedback.message}
              </div>
            )}
            
            <button
              onClick={handleLogin}
              disabled={!loginName || !loginPassword}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Your Trek! 🚀
            </button>
            
            <div className="flex justify-center">
              <button
                onClick={() => setScreen('adminLogin')}
                className="text-sm text-gray-500 hover:text-green-600 flex items-center gap-1"
              >
                <Settings size={16} /> Admin Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render Admin Login
  const renderAdminLogin = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <Settings size={48} className="mx-auto text-gray-600 mb-2" />
          <h1 className="fredoka text-2xl text-gray-700">Admin Access</h1>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Admin Password</label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-500 outline-none"
              placeholder="Enter admin password"
            />
          </div>
          
          {feedback && (
            <div className="p-3 rounded-xl bg-red-100 text-red-700">{feedback.message}</div>
          )}
          
          <button
            onClick={handleAdminLogin}
            className="w-full py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-800 transition-all"
          >
            Enter Admin Mode
          </button>
          
          <button
            onClick={() => { setScreen('login'); setFeedback(null); setAdminPassword(''); }}
            className="w-full py-3 text-gray-600 hover:text-gray-800"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );

  // Render Admin Panel
  const renderAdmin = () => (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-6 mb-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="fredoka text-2xl">Admin Panel</h1>
              <p className="text-gray-300">Manage students and view progress</p>
            </div>
            <button
              onClick={() => { setIsAdmin(false); setScreen('login'); }}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <LogOut size={18} /> Exit Admin
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl text-gray-700">All Students ({students.length})</h2>
          </div>
          
          {students.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No students yet. They'll appear here after logging in.</p>
          ) : (
            <div className="space-y-3">
              {students.map(student => (
                <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      {student.name[0].toUpperCase()}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{student.name}</div>
                      <div className="text-sm text-gray-500">Level {student.stats?.level || 1} • {student.stats?.completed || 0} completed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Stars: {student.stats?.totalStars || 0}</div>
                      <div className="text-sm text-gray-500">Badges: {student.badges?.length || 0}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm ${student.active ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                      {student.active ? 'Active' : 'Inactive'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <button
            onClick={() => {
              setCurrentUser({ 
                name: 'Admin', 
                stats: { completed: 100, totalStars: 300, totalPoints: 30000, level: 10, perfectStreak: 100, fastestTime: 10, topicsAttempted: 6, threeStarCount: 100 },
                progress: {},
                badges: BADGES.map(b => b.id)
              });
              setScreen('dashboard');
            }}
            className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all"
          >
            Test Dashboard as Admin
          </button>
        </div>
      </div>
    </div>
  );

  // Render Dashboard
  const renderDashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="fredoka text-3xl">Welcome, {currentUser?.name}! 👋</h1>
              <p className="text-green-100">Level {currentUser?.stats?.level || 1} Explorer • {currentUser?.stats?.totalPoints || 0} points</p>
            </div>
            <button
              onClick={() => { setCurrentUser(null); setScreen('login'); }}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: <CheckCircle className="text-green-500" />, label: 'Completed', value: currentUser?.stats?.completed || 0, bg: 'from-green-400 to-emerald-500' },
            { icon: <Star className="text-yellow-500" />, label: 'Stars', value: currentUser?.stats?.totalStars || 0, bg: 'from-yellow-400 to-orange-500' },
            { icon: <Flame className="text-orange-500" />, label: 'Best Streak', value: currentUser?.stats?.perfectStreak || 0, bg: 'from-orange-400 to-red-500' },
            { icon: <Clock className="text-blue-500" />, label: 'Fastest', value: currentUser?.stats?.fastestTime ? `${Math.round(currentUser.stats.fastestTime)}s` : '--', bg: 'from-blue-400 to-cyan-500' }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4 transform hover:scale-105 transition-all">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.bg} rounded-xl flex items-center justify-center text-white mb-2`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Badges Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="fredoka text-xl text-gray-700 mb-4 flex items-center gap-2">
            <Trophy className="text-yellow-500" /> Your Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            {BADGES.map(badge => {
              const earned = currentUser?.badges?.includes(badge.id);
              return (
                <div
                  key={badge.id}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
                    earned 
                      ? 'bg-gradient-to-r from-yellow-100 to-amber-100 border-2 border-yellow-300' 
                      : 'bg-gray-100 opacity-50'
                  }`}
                  title={badge.description}
                >
                  <span className="text-2xl">{badge.emoji}</span>
                  <span className={`font-semibold ${earned ? 'text-yellow-700' : 'text-gray-500'}`}>
                    {badge.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Level Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="fredoka text-xl text-gray-700 mb-4">Select Difficulty Level</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {LEVELS.map((level, i) => {
              const levelChallenges = challenges.filter(c => c.level === level);
              const completed = levelChallenges.filter(c => currentUser?.progress[c.id]?.completed).length;
              const colors = ['from-green-400 to-green-600', 'from-blue-400 to-blue-600', 'from-purple-400 to-purple-600', 'from-orange-400 to-orange-600'];
              
              return (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`p-4 rounded-xl transition-all ${
                    selectedLevel === level 
                      ? `bg-gradient-to-br ${colors[i]} text-white shadow-lg scale-105` 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-bold">{level}</div>
                  <div className="text-sm opacity-80">{completed}/{levelChallenges.length} done</div>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Topic Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="fredoka text-xl text-gray-700 mb-4">STEM Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOPICS.map(topic => {
              const progress = getTopicProgress(topic);
              const icons = {
                'Coding Basics': <Code className="text-amber-500" />,
                'Digital Game Design': <Gamepad2 className="text-green-500" />,
                'App Development': <Smartphone className="text-blue-500" />,
                'Programming Robots': <Bot className="text-red-500" />,
                'Designing Robots': <Wrench className="text-purple-500" />,
                'Showcasing Robots': <Presentation className="text-cyan-500" />
              };
              
              return (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                  className={`p-4 rounded-xl text-left transition-all ${
                    selectedTopic === topic 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedTopic === topic ? 'bg-white/20' : 'bg-white'}`}>
                      {icons[topic]}
                    </div>
                    <div className="font-bold">{topic}</div>
                  </div>
                  <div className="w-full bg-black/10 rounded-full h-2 mb-1">
                    <div 
                      className={`h-full rounded-full transition-all ${selectedTopic === topic ? 'bg-white' : 'bg-green-500'}`}
                      style={{ width: `${progress.percentage}%` }}
                    />
                  </div>
                  <div className="text-sm opacity-80">{progress.completed}/{progress.total} completed</div>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Challenges Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="fredoka text-xl text-gray-700 mb-4">
            {selectedTopic ? `${selectedTopic} Challenges` : `${selectedLevel} Challenges`}
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2">
            {challenges
              .filter(c => selectedTopic ? c.topic === selectedTopic : c.level === selectedLevel)
              .map(challenge => {
                const unlocked = isUnlocked(challenge);
                const completed = currentUser?.progress[challenge.id]?.completed;
                const stars = currentUser?.progress[challenge.id]?.stars || 0;
                
                return (
                  <button
                    key={challenge.id}
                    onClick={() => unlocked && startChallenge(challenge)}
                    disabled={!unlocked}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all relative ${
                      !unlocked 
                        ? 'bg-gray-200 cursor-not-allowed' 
                        : completed 
                          ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-md hover:shadow-lg hover:scale-105' 
                          : 'bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {!unlocked ? (
                      <Lock size={20} className="text-gray-400" />
                    ) : (
                      <>
                        <span className="font-bold text-lg">{challenge.id}</span>
                        {completed && (
                          <div className="flex gap-0.5 mt-1">
                            {[1, 2, 3].map(s => (
                              <Star key={s} size={10} fill={s <= stars ? 'currentColor' : 'none'} />
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );

  // Render Challenge Screen
  const renderChallenge = () => {
    const isCompleted = currentUser?.progress[currentChallenge?.id]?.completed;
    const currentStars = currentUser?.progress[currentChallenge?.id]?.stars || 0;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setScreen('dashboard')}
              className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
            >
              <ChevronLeft /> Back to Dashboard
            </button>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map(s => (
                <Star key={s} size={24} className={s <= currentStars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
              ))}
            </div>
          </div>
          
          {/* Challenge Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Topic Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{currentChallenge?.topic}</span>
                  <span className="ml-2 px-3 py-1 bg-white/20 rounded-full text-sm">{currentChallenge?.level}</span>
                </div>
                <span className="text-lg font-bold">Challenge #{currentChallenge?.id}</span>
              </div>
            </div>
            
            {/* Visualization */}
            <div className="p-4">
              <ChallengeVisualization type={currentChallenge?.visualization} isPlaying={isPlaying} />
              <button
                onClick={() => setIsPlaying(true)}
                className="w-full py-2 text-green-600 hover:text-green-700 font-semibold flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} /> Play Animation Again
              </button>
            </div>
            
            {/* Teaching Section */}
            {showTeaching && (
              <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-t-2 border-amber-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-white">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800">Let's Learn!</h3>
                    <p className="text-amber-700">{currentChallenge?.teaching}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {currentChallenge?.examples?.map((ex, i) => (
                    <div key={i} className="p-3 bg-white/80 rounded-xl text-amber-800 text-sm">
                      {ex}
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => setShowTeaching(false)}
                  className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                >
                  Got it! Let's try! 🚀
                </button>
              </div>
            )}
            
            {/* Question Section */}
            {!showTeaching && (
              <div className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentChallenge?.question}</h2>
                </div>
                
                <div className="space-y-4">
                  <input
                    ref={inputRef}
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                    className="w-full px-6 py-4 text-xl text-center rounded-xl border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                    placeholder="Type your answer..."
                    autoFocus
                  />
                  
                  <button
                    onClick={checkAnswer}
                    disabled={!answer.trim()}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    Check Answer ✓
                  </button>
                  
                  {feedback && (
                    <div className={`p-4 rounded-xl ${
                      feedback.type === 'success' 
                        ? 'bg-green-100 text-green-800 border-2 border-green-300' 
                        : 'bg-red-100 text-red-800 border-2 border-red-300'
                    }`}>
                      <div className="font-bold text-lg mb-1">{feedback.message}</div>
                      {feedback.type === 'error' && (
                        <div className="text-sm opacity-80">💡 Hint: {currentChallenge?.hint}</div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowTeaching(true)}
                      className="flex-1 py-3 bg-amber-100 text-amber-700 font-semibold rounded-xl hover:bg-amber-200 transition-all flex items-center justify-center gap-2"
                    >
                      <Lightbulb size={18} /> Show me how
                    </button>
                    
                    {isCompleted && (
                      <button
                        onClick={() => {
                          const nextChallenge = challenges.find(c => c.id === currentChallenge.id + 1);
                          if (nextChallenge) startChallenge(nextChallenge);
                          else setScreen('dashboard');
                        }}
                        className="flex-1 py-3 bg-green-100 text-green-700 font-semibold rounded-xl hover:bg-green-200 transition-all flex items-center justify-center gap-2"
                      >
                        Next Challenge <ChevronRight size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* New Badge Popup */}
        {newBadge && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 text-center shadow-2xl animate-pop max-w-sm mx-4">
              <div className="text-6xl mb-4 animate-bounce">{newBadge.emoji}</div>
              <h2 className="fredoka text-2xl text-green-700 mb-2">New Badge Earned!</h2>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{newBadge.name}</h3>
              <p className="text-gray-600">{newBadge.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style>{styleSheet}</style>
      <Confetti show={showConfetti} />
      
      {screen === 'login' && renderLogin()}
      {screen === 'adminLogin' && renderAdminLogin()}
      {screen === 'admin' && renderAdmin()}
      {screen === 'dashboard' && renderDashboard()}
      {screen === 'challenge' && renderChallenge()}
    </>
  );
}

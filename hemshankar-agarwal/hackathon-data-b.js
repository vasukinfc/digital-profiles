const STAGE_LABELS=['CHOOSE PACING','TEAM FORMATION','CHOOSE TRACK','SOLUTION FORMAT','TECH STACK','UNIQUE ADVANTAGE','FEATURE PRIORITIZATION','PITCH STORYBOARD','MENTOR REVIEW','BUSINESS MODEL','PITCH SCRIPT','JURY DRAW','PITCH STAGE','FINAL RESULTS'];
const TEAM=[
{id:'builder',emoji:'👨‍💻',name:'The Builder',role:'Backend / AI',desc:'Technical feasibility, architecture and shipping discipline.'},
{id:'designer',emoji:'🎨',name:'The Designer',role:'UI / UX',desc:'User flow, accessibility and visual polish.'},
{id:'dreamer',emoji:'✨',name:'The Dreamer',role:'Innovation',desc:'Bold ideas, emerging tech and differentiated product thinking.'},
{id:'founder',emoji:'🚀',name:'The Founder',role:'Strategy / Business',desc:'Market fit, business model and pitch clarity.'}
];
const DIRECTIONS=[
{id:'web-app',name:'Web Application',desc:'Build responsive web apps. High marks for design and feasibility.',score:[5,10,15,5]},
{id:'mobile-app',name:'Mobile Application',desc:'Create native mobile apps. Emphasizes design and device execution.',score:[5,15,10,5]},
{id:'ai-solution',name:'AI Solution',desc:'Assemble smart cognitive pipelines. Exceptional innovation and pitch potential.',score:[25,5,5,20]},
{id:'iot-product',name:'IoT Hardware Product',desc:'Program micro-controllers & sensors. Extreme innovation, harder to execute.',score:[20,8,5,12]},
{id:'platform',name:'Service Platform',desc:'Design shared microservice layers. High scores for execution and architecture.',score:[12,18,5,5]},
{id:'marketplace',name:'Trading Marketplace',desc:'Build automated peer exchanges. Outstanding pitch potential and feasibility.',score:[5,10,5,20]}
];
const USPS=[
{id:'Most Scalable',name:'Most Scalable',desc:'Architecture-first advantage designed to survive rapid growth.',boost:[8,12,2,8]},
{id:'AI-powered',name:'AI-Powered',desc:'Automation and intelligence are central to the user value.',boost:[20,3,2,13]},
{id:'Privacy First',name:'Privacy First',desc:'Data minimization, encryption and user trust lead the product.',boost:[7,12,7,7]},
{id:'Cheapest',name:'Cheapest',desc:'Win through dramatically lower operating and customer cost.',boost:[4,12,2,9]},
{id:'Sustainable',name:'Sustainable',desc:'Lower environmental impact becomes a measurable product advantage.',boost:[12,6,4,9]},
{id:'Offline-first',name:'Offline-First',desc:'Critical workflows remain usable even with weak or absent connectivity.',boost:[9,14,6,7]}
];
const SLIDES=[['title','Title / Hook','opening'],['problem','Problem','problem'],['user','User Journey','problem'],['solution','Solution','solution'],['demo','Live Demo','solution'],['architecture','Tech Architecture','tech'],['security','Security','tech'],['traction','Validation / Traction','proof'],['market','Market Size','business'],['model','Business Model','business'],['competition','Competitive Edge','business'],['roadmap','Roadmap','proof'],['impact','Impact Metrics','proof'],['closing','Closing / Ask','closing']];
const BIZ=[
{id:'Freemium',name:'Freemium',risk:'Low',desc:'Free core product with paid premium features.',strength:'Fast adoption',weak:'Conversion pressure',boost:[2,10,4,9]},
{id:'B2B SaaS',name:'B2B SaaS',risk:'Medium',desc:'Businesses pay recurring subscription fees per seat or account.',strength:'Predictable revenue',weak:'Longer sales cycles',boost:[4,8,2,15]},
{id:'Commission',name:'Commission',risk:'Medium',desc:'Take a percentage of each successful transaction.',strength:'Revenue grows with usage',weak:'Needs transaction volume',boost:[5,7,1,12]},
{id:'Government Partnership',name:'Government Partnership',risk:'High',desc:'Deploy through institutions or public-sector contracts.',strength:'Large impact',weak:'Procurement complexity',boost:[8,2,2,17]},
{id:'Open Source + Services',name:'Open Source + Services',risk:'Medium',desc:'Open core product with paid setup, support and enterprise services.',strength:'Trust and community',weak:'Services scaling',boost:[9,8,4,9]},
{id:'Enterprise License',name:'Enterprise License',risk:'High',desc:'High-value annual licenses for large organizations.',strength:'High contract value',weak:'Difficult early sales',boost:[4,5,2,18]}
];
const CHAOS=[
{title:'API Rate Limit',desc:'Your primary API begins rejecting requests minutes before demo time.',choices:[['Add caching + fallback',{execution:10,innovation:4,time:10}],['Switch provider',{innovation:8,execution:-4,time:-20}]]},
{title:'Database Migration Failure',desc:'A last-minute schema change breaks your current seed data.',choices:[['Rollback safely',{execution:12,time:-10}],['Patch live',{innovation:4,execution:-8,time:15}]]},
{title:'Teammate Merge Conflict',desc:'Two branches collide right before the next round.',choices:[['Pair-program the fix',{execution:8,design:4,time:-15}],['Drop risky changes',{execution:12,innovation:-4,time:10}]]},
{title:'Mentor Unavailable',desc:'The advisor you expected is locked in another judging room.',choices:[['Proceed blindly',{execution:5,innovation:5}],['Wait for feedback',{pitch:12,time:-25}]]},
{title:'Sponsor API Unlocked',desc:'A sponsor releases an optimized sandbox API for teams.',choices:[['Adopt sponsor API',{innovation:18,execution:5}],['Stay lean',{execution:10,time:15}]]},
{title:'Surprise Coffee Delivery',desc:'Fresh coffee lands at your desk during crunch time.',choices:[['Drink up',{execution:10,time:20}],['Share with teams',{pitch:10,design:4}]]},
{title:'1-Minute Pitch Limit',desc:'The jury suddenly caps the final pitch at sixty seconds.',choices:[['Condense storyboard',{pitch:15,innovation:-5}],['Demo first',{execution:10,pitch:8,time:-15}]]}
];

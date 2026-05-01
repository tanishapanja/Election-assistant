// Assistant Toggle Logic
function toggleAssistant() {
    const widget = document.getElementById('assistant-widget');
    widget.classList.toggle('assistant-hidden');
}

// FAQ Data for India Election Process
const FAQ_DATA = [
    {
        keywords: ["categories", "electors", "india", "types"],
        answer: "There are 3 categories of electors in India: (i) General electors, (ii) Overseas (NRI) electors, and (iii) Service Electors."
    },
    {
        keywords: ["18", "age", "date", "registered", "birthday"],
        answer: "The qualifying date for determining 18 years of age is the 1st of January of the year in which the electoral roll is published. For example, if you turn 18 by 1st Jan 2024, you are eligible for the 2024 rolls."
    },
    {
        keywords: ["non-citizen", "citizen", "foreigner", "eligibility"],
        answer: "No. Only Indian citizens are eligible to be registered as voters. Those who have acquired citizenship of another country are not eligible."
    },
    {
        keywords: ["nri", "overseas", "foreign land", "settled"],
        answer: "Yes, an NRI who is a citizen of India and has not acquired any other citizenship is eligible to be registered in the constituency of their Indian residence as per their passport."
    },
    {
        keywords: ["student", "hostel", "mess", "native", "present address"],
        answer: "Students staying in hostels/mess have the option to register at their native place or their place of study, provided the course is at least 1 year long. A bonafide certificate from the institution is required for hostel registration."
    },
    {
        keywords: ["list", "claims", "objections", "seen"],
        answer: "The list can be seen on the website of the Chief Electoral Officer (CEO) of your State or on the notice board of the Electoral Registration Officer (ERO)."
    },
    {
        keywords: ["inclusion", "how", "know", "name", "roll"],
        answer: "The ERO will communicate the decision by post and SMS (if provided in Form 6). You can also check the integrated electoral roll on the CEO's website."
    },
    {
        keywords: ["correction", "mistake", "error", "entry", "form 8"],
        answer: "For corrections in the electoral roll, submit Form 8 to the Electoral Registration Officer concerned."
    },
    {
        keywords: ["shifted", "residence", "new place", "moved", "form 6", "form 8a"],
        answer: "If you move within the same constituency, fill Form 8. If you move to a different constituency, fill Form 6."
    },
    {
        keywords: ["epic", "card", "new address", "old address"],
        answer: "It's not mandatory to change the address on your EPIC, but if you wish to, you can apply with a fee of Rs. 25. The EPIC number will remain the same."
    },
    {
        keywords: ["lost", "epic", "replacement", "fir"],
        answer: "A replacement EPIC can be issued upon submitting Form 8 along with a copy of a FIR/Police Report for the lost card."
    },
    {
        keywords: ["object", "deletion", "inclusion", "neighbor", "form 7"],
        answer: "Any registered voter can object to a name using Form 7. This also applies to deleting names of shifted, dead, or duplicate electors."
    },
    {
        keywords: ["when", "registered", "revision", "september", "october"],
        answer: "Revision usually happens in Sept-Oct, but continuous updation allows you to register anytime during the year by filing Form 6."
    },
    {
        keywords: ["more than one", "simultaneously", "two places"],
        answer: "No, a person cannot be enrolled in more than one place. Doing so knowingly is a punishable offense under the Representation of People Act."
    },
    {
        keywords: ["complaint", "appeal", "ero", "order"],
        answer: "Appeals against ERO orders can be filed with the District Election Officer (DEO) or District Magistrate, and further to the Chief Electoral Officer."
    },
    {
        keywords: ["condition", "registering", "requirement"],
        answer: "Requirements: 1. Indian citizen, 2. 18+ years old on qualifying date, 3. Ordinary resident of the area."
    },
    {
        keywords: ["aadhaar", "mandatory", "voluntary"],
        answer: "Providing Aadhaar details is purely voluntary. Non-submission is not a ground for rejecting your application."
    },
    {
        keywords: ["homeless", "no proof", "verification"],
        answer: "For homeless persons, the Booth Level Officer (BLO) verifies the residence by visiting the place where they sleep for more than one night."
    },
    {
        keywords: ["tenant", "landlord", "statutory right"],
        answer: "Getting enrolled is your statutory right. Landlords cannot stop you. Submit Form 6 to your ERO if your name is missing."
    },
    {
        keywords: ["online", "physical copy", "signed"],
        answer: "If you apply online, a BLO will visit your residence for verification. You don't necessarily need to send physical copies unless requested."
    },
    {
        keywords: ["overseas", "nri", "epc", "franchise"],
        answer: "Overseas electors vote in person at the polling station using their original passport. They are not issued an EPIC."
    },
    {
        keywords: ["service voter", "armed forces", "proxy", "csv"],
        answer: "Service voters (Armed Forces, etc.) can vote via postal ballot or through a proxy. A service voter opting for a proxy is a Classified Service Voter (CSV)."
    },
    {
        keywords: ["graduates", "teachers", "constituencies", "legislative council"],
        answer: "Specific constituencies exist for Graduates and Teachers in the Legislative Council. They require Form 18 (Graduates) or Form 19 (Teachers) and proof of qualification/service."
    },
    {
        keywords: ["who", "conducts", "election", "commission", "eci"],
        answer: "Elections in India are conducted by the Election Commission of India (ECI)."
    },
    {
        keywords: ["system", "democratic", "follow"],
        answer: "India follows a democratic system where citizens elect their representatives."
    },
    {
        keywords: ["minimum", "voting", "age", "18"],
        answer: "The minimum voting age in India is 18 years."
    },
    {
        keywords: ["bodies", "lok sabha", "state assemblies", "local"],
        answer: "Elections are held for the Lok Sabha (Lower House of Parliament), State Legislative Assemblies, and local bodies like Panchayats and Municipalities."
    },
    {
        keywords: ["how often", "years", "lok sabha"],
        answer: "Lok Sabha elections are usually held every 5 years."
    },
    {
        keywords: ["first-past-the-post", "system", "fptp"],
        answer: "India uses the First-Past-The-Post (FPTP) electoral system for Lok Sabha and Assembly elections."
    },
    {
        keywords: ["evm", "electronic", "voting machine"],
        answer: "Voting is done using Electronic Voting Machines (EVMs), often accompanied by VVPAT (Voter Verifiable Paper Audit Trail)."
    },
    {
        keywords: ["largest", "electorate", "world"],
        answer: "India has one of the largest electorates in the world, with nearly a billion registered voters."
    },
    {
        keywords: ["political", "parties", "role"],
        answer: "Political parties play a major role in Indian elections, mobilizing voters and nominating candidates."
    },
    {
        keywords: ["free", "fair", "constitution"],
        answer: "Free and fair elections are ensured by the Constitution of India and the oversight of the independent Election Commission."
    }
];

// Simple Chat Logic
function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    input.value = '';

    // Simulated Bot Response
    setTimeout(() => {
        const response = getAssistantResponse(text);
        addMessage(response, 'bot');
    }, 600);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function addMessage(text, sender) {
    const chatContainer = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.innerText = text;
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getAssistantResponse(query) {
    const q = query.toLowerCase();
    
    // Check for positive/closing response
    if (q === 'ok' || q.includes('thank you') || q.includes('see you') || q.includes('grateful')) {
        return "I am glad to help you, have a nice day.";
    }

    // Check for Greetings
    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
        return "Hello! I'm Vota, your Indian Election Assistant. I can help with registration, NRI voting, service voters, and more. What would you like to know?";
    }

    // Search FAQ Data
    let bestMatch = null;
    let maxMatches = 0;

    for (const item of FAQ_DATA) {
        let matches = 0;
        for (const keyword of item.keywords) {
            if (q.includes(keyword)) {
                matches++;
            }
        }
        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = item.answer;
        }
    }

    if (bestMatch && maxMatches > 0) {
        return bestMatch;
    }

    // Default Fallback
    return "That's a specific question! I recommend visiting the official Election Commission of India website at voters.eci.gov.in for the most detailed and up-to-date information.";
}

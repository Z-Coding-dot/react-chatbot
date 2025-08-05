
export const getRandomResponse = () =>{
    const botResponse = [
        "I understand your question. Let me think about that...",
        "That's an interesting point! Here's what I know...",
        "Based on my knowledge, I can tell you that...",
        "I'm not sure about that. Can you provide more information?...",
        "Great question! The answer depend on several factors...",
    ];
    return botResponse[Math.floor(Math.random() * botResponse.length)];
};

export const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
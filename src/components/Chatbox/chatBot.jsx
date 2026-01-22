import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthProvider'; // Adjust path as needed

const ChatBot = () => {
    const authData = useContext(AuthContext);

    const userData = [...authData.userData];
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hello Admin! Ask me about employee performance, task summaries, or specific status reports." }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom of chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);





    // THE "BRAIN" OF THE BOT 
    const processMessage = (query) => {
        const lowerQuery = query.toLowerCase();
        
        
        const employees = Array.isArray(userData) ? userData : [];

        
        if (employees.length === 0) {
             return "I don't have access to any employee data right now.";
        }

        // 1. Check for Specific Employee Name
        const foundEmployee = employees.find(e => lowerQuery.includes(e.name.toLowerCase()));
        
        if (foundEmployee) {
            const { taskCount } = foundEmployee;
            return `Report for **${foundEmployee.name}**:
            \n- Active Tasks: ${taskCount.active}
            \n- Completed: ${taskCount.completed}
            \n- Failed: ${taskCount.failed}
            \n- New Tasks: ${taskCount.newTask}
            \n\nPerformance Score: ${taskCount.completed > taskCount.failed ? 'Good ✅' : 'Needs Improvement ⚠️'}`;
        }

        // 2. Global "Summary" or "Total"
        if (lowerQuery.includes('summary') || lowerQuery.includes('total')) {
            const totalTasks = employees.reduce((acc, emp) => acc + emp.tasks.length, 0);
            const totalFailed = employees.reduce((acc, emp) => acc + emp.taskCount.failed, 0);
            return `Total Employees: ${employees.length}. \nTotal Tasks Assigned: ${totalTasks}. \nCritical Issue: There are ${totalFailed} failed tasks across the team.`;
        }

        // 3. "Best" Employee
        if (lowerQuery.includes('best') || lowerQuery.includes('top')) {
            const best = employees.reduce((prev, current) => 
                (prev.taskCount.completed > current.taskCount.completed) ? prev : current
            );
            return `The top performer is **${best.name}** with ${best.taskCount.completed} completed tasks.`;
        }

        // 4. "Worst" or "Failed" Focus
        if (lowerQuery.includes('worst') || lowerQuery.includes('fail')) {
            const worst = employees.reduce((prev, current) => 
                (prev.taskCount.failed > current.taskCount.failed) ? prev : current
            );
            return `Attention Needed: **${worst.name}** has the most failed tasks (${worst.taskCount.failed}).`;
        }

        // Default Fallback
        return "I can answer questions like: 'Summary', 'Who is the best?', 'Who has failed tasks?', or 'Tell me about <<employee>>'.";
    };

    const handleSend = () => {
        if (!input.trim()) 
          return;

        // 1. Add User Message
        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');

        // 2. Simulate "Thinking" Delay
        setTimeout(() => {
            const responseText = processMessage(input);
            setMessages(prev => [...prev, { sender: 'bot', text: responseText }]);
        }, 600);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Toggle Button */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-xl transition-all flex items-center justify-center h-14 w-14"
                >
                    💬
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-[#1B211A] border border-emerald-800 w-80 md:w-96 h-96 rounded-lg shadow-2xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="bg-emerald-700 p-3 flex justify-between items-center text-white">
                        <h3 className="font-semibold text-sm">Task AI Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="text-xl font-bold">&times;</button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#111]">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-2 rounded-lg text-sm whitespace-pre-line ${
                                    msg.sender === 'user' 
                                        ? 'bg-emerald-600 text-white rounded-br-none' 
                                        : 'bg-gray-700 text-gray-200 rounded-bl-none'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-2 bg-[#1B211A] border-t border-emerald-800 flex gap-2">
                        <input 
                            className="flex-1 bg-gray-800 text-white text-sm rounded px-3 py-2 outline-none focus:ring-1 focus:ring-emerald-500"
                            placeholder="Ask about tasks..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button 
                            onClick={handleSend}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded text-sm font-medium"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
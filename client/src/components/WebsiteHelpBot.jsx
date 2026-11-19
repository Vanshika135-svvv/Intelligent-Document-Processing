import React, { useState } from 'react';

export default function WebsiteHelpBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am your IDP Assistant. How can I help you navigate the platform today?' }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    "How do I upload a document?",
    "Where are my extraction results?",
    "How does the RAG chat work?",
    "What are the model metrics?"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: query }];
    setMessages(newMsgs);
    setInput('');

    setTimeout(() => {
      let reply = "You can explore our features using the navigation bar or launch the workspace to process documents.";
      const q = query.toLowerCase();

      if (q.includes('upload')) {
        reply = "Go to the Workspace page, then drag and drop your PDF or receipt image into the upload box.";
      } else if (q.includes('extraction') || q.includes('result')) {
        reply = "Extracted key-values, itemized tables, and raw JSON payloads appear instantly in the right-side panel of the Workspace.";
      } else if (q.includes('rag') || q.includes('chat')) {
        reply = "The Document RAG Assistant at the bottom-right of the workspace uses MongoDB Atlas vector search to answer specific questions about your uploaded file.";
      } else if (q.includes('metric') || q.includes('f1')) {
        reply = "Our LayoutLMv3 model achieves a Macro F1-score of 0.970 and an ANLS transcription fidelity of 0.952 across 8,000 test documents.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition hover:scale-105"
        >
          💬
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-700 w-80 h-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider">Platform Help Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-slate-200 font-bold text-sm">✕</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-slate-950 text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2.5 rounded-xl max-w-[85%] ${m.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-800 border border-slate-700 text-slate-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 bg-slate-900 border-t border-slate-800 flex flex-wrap gap-1">
            {quickPrompts.map((prompt, i) => (
              <button 
                key={i} 
                onClick={() => handleSend(prompt)}
                className="text-[10px] bg-slate-800 hover:bg-slate-700 text-indigo-300 px-2 py-1 rounded-md transition"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="p-2.5 bg-slate-900 border-t border-slate-800 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
            />
            <button onClick={() => handleSend()} className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-xl text-xs font-semibold">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
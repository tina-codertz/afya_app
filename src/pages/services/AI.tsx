import React, { useEffect, useState } from "react";

export default function AfyaChat(userId: string) {
  type Message = { role: string; text: string };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [convId, setConvId] = useState(null);
  const [loading, setLoading] = useState(false);
  const boxRef = React.useRef<HTMLDivElement>(null);


  useEffect(()=>{
    if (boxRef.current) boxRef.current.scrollTop =boxRef.current.scrollHeight 

  }, [messages])



  async function sendMessage(){
    const msg = input.trim();
    setMessages(prev => [...prev, { role: "User", text: msg }]);
    setLoading(true);
   


    try{
      const res = await fetch("api/afya/chat",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({conversationId:convId, userId,message:msg})
      });

      const data = await res.json();
      if (data.conversationId) setConvId(data.conversationId);
      setMessages(prev => [...prev, { role: "AI", text: data.reply}]);
      
    }catch(err){
      console.error("Error sending message:", err);
      setMessages(prev => [...prev, { role: "AI", text: "Sorry, there was an error. Please try again."}]);
    }finally{
      setInput("");
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <div ref={boxRef} className="px-4 py-6 border border-gray-300 rounded-lg h-[60vh] overflow-y-auto" style={{ background: "#fff" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left", margin: "8px 0" }}>
            <div style={{ display: "inline-block", padding: "8px 12px", borderRadius: 8, background: m.role === "user" ? "#D6F0FF" : "#F3F4F6" }}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div>Afya is typing…</div>}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Ask Afya about symptoms, appointments, or health tips..."
          className="px-4 py-2 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={sendMessage} disabled={loading} style={{ padding: "10px 16px" }} className="cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Send
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Disclaimer: Afya Connect provides general information and is not a replacement for professional medical advice.
      </p>
    </div>
  );
}
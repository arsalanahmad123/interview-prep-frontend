"use client"
import { useState, useEffect } from "react"
import ChatHeader from "@/components/ChatHeader"
import ChatMessage from "@/components/ChatMessage"
import ChatInput from "@/components/ChatInput"
import ChatCompleted from "@/components/ChatCompleted"
import Questions from "./contants"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

export default function ChatInterface() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [chatHistory, setChatHistory] = useState([])
  const [currentResponse, setCurrentResponse] = useState("")
  const [chatCompleted, setChatCompleted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [typing,setTyping] = useState(false)



  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setQuestions(Questions);

      if (Questions.length > 0) {
        setTyping(true)
        setTimeout(() => {
            setChatHistory([{ type: 'question', text: Questions[0]?.question }]);
        },1500)
        setTyping(false)
      }

      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []); 


  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentResponse.trim()) {
        setTimeout(() => {
      setTyping(true)
      const updatedHistory = [...chatHistory, { type: 'user', text: currentResponse }]
      setChatHistory(updatedHistory)
      setCurrentResponse("")
      
      if (currentQuestionIndex < questions.length - 1) {
        const nextQuestionIndex = currentQuestionIndex + 1
        const nextQuestion = questions[nextQuestionIndex]?.question
        setChatHistory(prevHistory => [
          ...prevHistory,
          { type: 'question', text: nextQuestion }
        ])
        setCurrentQuestionIndex(nextQuestionIndex)
      } else {
        setChatCompleted(true)
      }
      setTyping(false)
      },3000)
    }
    
  }

  return (
    <TooltipProvider>
      <div className="grid h-screen w-full mt-20">
        <div className="flex flex-col">
          <ChatHeader />
          <main className="grid flex-1 gap-4 overflow-auto p-4">
            <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
              <Badge variant="outline" className="absolute right-3 top-3">
                Output
              </Badge>
              <div className="flex-1">
                <ul className="mt-16 space-y-5">
                  {loading ? (
                    <li>Fetching resources...</li>
                  ) : (
                    chatHistory.map((entry, index) => (
                      <li key={index} className="space-y-5">
                        <ChatMessage type={entry.type} text={entry.text} typing={typing} />
                      </li>
                    ))
                  )}
                </ul>
              </div>
              {!chatCompleted && questions.length > 0 && (
                <ChatInput
                  value={currentResponse}
                  onChange={(e) => setCurrentResponse(e.target.value)}
                  onSubmit={handleSubmit}
                  disabled={loading}
                />
              )}
              {chatCompleted && <ChatCompleted />}
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  )
}

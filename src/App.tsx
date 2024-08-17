
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ChatUser1 from './pages/ChatUser1'
import ChatUser2 from './pages/ChatUser2'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatUser1/>}/>
        <Route path="/user2" element={<ChatUser2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

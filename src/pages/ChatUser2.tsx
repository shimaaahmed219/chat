import React, { useState, useEffect } from 'react';
import { ref, onValue, push, update,DatabaseReference } from 'firebase/database';
import { database } from '../firebase';
import Header from '../components/Header';
import Status from '../components/Status';
import Saidbar from '../components/Saidbar';
interface Message {
  key: string;
  text: string;
  timestamp: number;
  senderId: string;
  receiverId: string;
}

const currentUserId = 'user2';
const otherUserId = 'user1';

const ChatUser2: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [editingMessageKey, setEditingMessageKey] = useState<string | null>(null);

  useEffect(() => {
    const messagesRef: DatabaseReference = ref(database, '/chat/messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const firebaseMessages: Message[] = Object.keys(data).map(key => ({
          key, // تخزين مفتاح الرسالة
          ...data[key],
        }));

        const filteredMessages = firebaseMessages.filter(
          message =>
            (message.senderId === currentUserId && message.receiverId === otherUserId) ||
            (message.senderId === otherUserId && message.receiverId === currentUserId)
        );
        setMessages(filteredMessages);
      }
    });
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const message: Message = {
      key: '', // سيتم تعيين المفتاح بواسطة Firebase
      text: newMessage,
      timestamp: Date.now(),
      senderId: currentUserId,
      receiverId: otherUserId,
    };

    const messagesRef: DatabaseReference = ref(database, '/chat/messages');
    if (editingMessageKey) {
      // تعديل الرسالة
      const messageToUpdateRef = ref(database, `/chat/messages/${editingMessageKey}`);
      update(messageToUpdateRef, { text: newMessage });
      setEditingMessageKey(null); // إلغاء وضع التعديل
    } else {
      push(messagesRef, message);
    }

    setNewMessage("");
  };

  // const startEditing = (key: string, text: string) => {
  //   setNewMessage(text);
  //   setEditingMessageKey(key);
  // };

  // const deleteMessage = (key: string) => {
  //   const messageToDeleteRef = ref(database, `/chat/messages/${key}`);
  //   remove(messageToDeleteRef);
  // };

  return (
    <div className='bg-main px-5 py-3'>
    <Header/>
    <Status/>
    <div className="flex">
      <Saidbar/>
  <div className="flex w-[80%] mx-5  bg-secanod my-5 flex-col h-[450px] justify-between p-4 ">
  
    <div className="overflow-y-auto mb-4 flex-1">
      {messages.map((message) => (
        <div
          key={message.key}
          className={`flex ${message.senderId === currentUserId ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs p-2 m-2 rounded-lg ${
              message.senderId === currentUserId
                ? 'bg-user text-white self-end flex justify-center items-center'
                : 'bg-main text-white self-start flex justify-center items-center'
            }`}
          >
            {message.text}
            {message.senderId === currentUserId && (
              <div className="flex justify-end space-x-2 mt-2">
                {/* <button
                  onClick={() => startEditing(message.key, message.text)}
                  className="text-sm text-yellow-500"
                >
                  تعديل
                </button>
                <button
                  onClick={() => deleteMessage(message.key)}
                  className="text-sm text-red-500"
                >
                  حذف
                </button> */}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center">
      <input
        type="text"
        className="flex-grow focus:outline-none p-2 border border-gray-300 rounded-lg"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="send message..."
      />
      <button
        onClick={sendMessage}
        className="ml-2 p-2 bg-blue-400 text-white rounded-lg"
      >
        {editingMessageKey ? "update" : "send"}
      </button>
    </div>
  </div>
  </div>
  </div>
  );
};

export default ChatUser2;

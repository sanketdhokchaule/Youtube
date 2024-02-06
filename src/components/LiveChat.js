/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Best thing about him is, he never give up",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-200  overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((cm, index) => (
          <ChatMessage key={index} name={cm.name} message={cm.message} />
        ))}
      </div>
      <form className="border border-black w-full ml-2 p-2 items-center" onSubmit={(e)=>{
        e.preventDefault();
        //console.log(liveMessage);
        if(liveMessage !== ""){
          dispatch(addMessage({
            name: "Sanket Dhokchaule",
            message: liveMessage,
          }))
          setLiveMessage("");
        }
      }}>
        <input
          className="w-80 p-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-3">⫸</button>
      </form>
    </>
  );
};

export default LiveChat;

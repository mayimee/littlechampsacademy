import React from 'react';
import "./Chat.css";


const Chat = () => {
  const [show, toggleShow] = React.useState(true);

  return (
    <div className="chatContainer">
      <button className="openButton"
        onClick={() => toggleShow(!show)}>
          <span className="openButtonLabel1">Little Champs Academy | </span>
          <span className="openButtonLabel2">Live Chat</span> {show ? '' : ''}
      </button>    
      {show && 
        <div>
          <div class="chatPopup" id="myForm">
            <form action="/action_page.php" class="formContainer">
              <div class="chatLabel"><label for="msg">Hi, thank you for contacting us. How can we assist you today?</label></div>
              <textarea placeholder="Type message here.." name="msg" required></textarea>
              <div className="submitCloseButtonContainer">
                <button type="submit" className="sendChatButton"><b>Send</b></button>
                <button type="submit" className="closeChatButton" onClick={() => toggleShow(!show)}><b>x</b></button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default Chat
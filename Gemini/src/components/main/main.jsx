import React, { useContext } from 'react'
import "./main.css"
import {assets} from "../../assets/assets"
import { Context } from '../../context/context'

const main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  


  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon}/>
      </div>
      <div className="main-container">
        {!showResult
          ?<>
            <div className="greet">
              <p><span>Hello Dev.</span></p>
              <p>How Can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Compass</p>
                <img src={assets.compass_icon}/>
              </div>
              <div className="card">
                <p>bulb</p>
                <img src={assets.bulb_icon}/>
              </div>
              <div className="card">
                <p>Message</p>
                <img src={assets.message_icon}/>
              </div>
              <div className="card">
                <p>code</p>
                <img src={assets.code_icon}/>
              </div>
            </div>
          </>
          :<div className='result'>
            <div className="result-title">
              <img src={assets.user_icon}/>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className='loader'>
                <hr />
                <hr />
                <hr />
              
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              
              }
            </div>
              
          </div>
        }
        
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
            <div>
                <img src={assets.gallery_icon} alt=''/>
                <img src={assets.mic_icon} alt=''/>
                <img onClick={()=>onSent()}src={assets.send_icon} alt=''/>
            </div>
          </div>
          <p className="bottom-info">
            gemini is very good

          </p>
        </div>
      </div>
    </div>
  )
}

export default main

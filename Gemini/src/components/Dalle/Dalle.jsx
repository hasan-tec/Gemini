import React from 'react';
import "./Dalle.css";
import { assets } from "../../assets/assets";
import { Context } from '../../context/context';
import default_image from "../../assets/default_image.svg";
import { useState, useContext } from 'react';
import  Configuration  from "openai";
import OpenAIApi from "openai";





const Dalle = () => {
  
  

    return (
        <div className='w-full'>
            <div className="top-image">
                <div className='nav-image'>   
                    <p>Gemini</p>
                    <img src={assets.user_icon}/>
                </div>
                <div className="main-container-image">
                    <div className="greet-image">
                    <p><span>Image Generator.</span></p>
                    <p>What are we imaginning today?</p>
                    </div>
                    <div className="loading-image">
                    {imageUrl ? (
                        <img src={imageUrl} alt="Generated Image" />
                        ) : (
                        <div className="image">
                            <img src={default_image} alt="Loading" />
                        </div>
                        )}
                    </div>
                
                </div>
            </div>
            
            <div className="bottom-image">
                <div className="search-box-image">
                    <input type="text" placeholder='Enter a prompt here'></input>
                    <div>
                        <img onClick={()=>onSent()}src={assets.send_icon} alt=''/>
                    </div>
                </div>
            <p className="bottom-info-image">
                Write good propmts, to save cost, also it uses Dall-e 3 to generate images
            </p>
            </div>
        </div>
    )
    }

    export default Dalle    
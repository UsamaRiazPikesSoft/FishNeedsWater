import React from 'react'
import './centercontent.css'
import { Icon } from 'antd';

export default function index() {
    return (
            <div>
                   <div id="center_main_container">
                    <h3 style={{marginBottom:"20px"}}>Lead Info Messaging  <Icon type="user-add" /></h3>
                    </div>
                    {[1,2,3,4].map(element => 
                    <div className="eventdiv">
                    <div style={{padding:"10px"}}>
                    <h5 id="event_heading">Event Opening </h5>
                    <Icon type="close" style={{fontSize:"20px",float:"right"}} />
                    <Icon type="edit" style={{fontSize:"20px",float:"right",marginRight:"4px"}} />
                    </div>
                    <div className="paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                </div>
                )}       
            </div>
    )}

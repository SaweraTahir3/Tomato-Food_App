import React from "react";
import "./appDownload.css"
import { assets } from "../../Food Del Frontend Assets/assets/assets"
const AppDownload = () => {
    return(
        <div className="app-download" id="app-download">
            <p>For Better Experience Download <br/>Tomato App <br/></p>
            
<div className="app-download-platform">
<img src={assets.play_store}alt=""/>
<img src={assets.app_store}alt=""/>


       </div>
        </div>
    )
}
export default AppDownload
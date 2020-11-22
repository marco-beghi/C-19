import React, {useState} from "react";

function SplashScreen() {

  const [splashScreenBool, setBool] = useState(true);

  function dismiss(){
    setBool(false);
  }

    if(splashScreenBool===true){
      return(<div className="splashScreen">
        <h1>Welcome!</h1>
        <h2>About</h2>
        <p>Insert about text.</p>
        <h2>Technologies</h2>
        <p>Explain What Technologies have been used.</p>
        <h2>Still to do.</h2>
        <ul>
        <li>Create Splashscreen, with 'about', 'technologies' and 'to do' sections.</li>
        <li>Tweak the look to a more dark asthetic</li>
        <li>Give the user the ability to edit the C-19 graphs</li>
        <li>Make the dashboard persistant for the user</li>
        <li>Add more countires</li>
        </ul>
        <button className="note"
          onClick={dismiss}>
          -
        </button>
      </div>)
    }else{
      return(null);
    }
}

export default SplashScreen;

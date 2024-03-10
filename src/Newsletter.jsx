import logoMobile from './assets/illustration-sign-up-mobile.svg';
import './Newsletter.scss'
import { useEffect, useState } from 'react'
function Newsletter(){
  let userEmail;
  const [email, setEmail] = useState(userEmail);
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [isFirstVisible, setIsFirstVisible] = useState(true);

  function processEmail(){
    const checkEmail = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
    if(checkEmail.test(email)){
      console.log('it works')
      setIsLabelVisible(false);
      setIsFirstVisible(false);
    }else{
      setIsLabelVisible(true);
    }
    }

    function handleEmailAdress(event){
      userEmail = event.target.value;
      setEmail(userEmail);
    }

    function resetPage(){
      window.location.reload();
    }


  return(

    <div>
      <div className='news-container' style={{display: isFirstVisible ? 'flex' : 'none'}}>
        <div className='left-container'>
          <div className='text-container'>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <h5>email adress</h5>
            <label style={{display: isLabelVisible ? 'block' : 'none'}}>Please enter correct email!</label>
            <input type='text' placeholder='example@company.com' id='userEmail' onChange={(e) => handleEmailAdress(e)}></input>
            <button onClick={() => processEmail()}>Sucscribe to monthly news letter</button>
          </div>
        </div>
        <div className='right-container'>
          <img src='https://newsletter-signup-five-pied.vercel.app/_next/image?url=%2Fillustration-sign-up-desktop.png&w=640&q=75'></img>
        </div>
      </div>

      <div className='thanks-container' style={{display: isFirstVisible ? 'none' : 'flex'}}>
            <div className='thanks-content'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/512px-Eo_circle_green_checkmark.svg.png?20200417132424' style={{width: 150}}></img>
              <p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription</p>
              <button onClick={() => resetPage()}>Dismiss message</button>
            </div>
        </div>
    </div>
  )
}

export { Newsletter }

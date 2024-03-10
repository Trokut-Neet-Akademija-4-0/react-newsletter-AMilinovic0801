import React, { useState } from 'react'; 
import './Day3ComponentS.scss'

function Day3Main (props){
    console.log('MainPROPS ====>', props);//laksi pregled svih propsova koje imam, lakse mi je odredit 'path' do svakog objekta i key value paira
    const [articleHeader, setArticleHeader] = useState (props.content.header_left);
    const [articleBodyTop, setArticleBodyTop] = useState (props.content.text_right[0]);
    const [articleBodyBottom, setArticleBodyBottom] = useState (props.content.text_right[1]);
    const [articleImg, setArticleImg] = useState ();
    const [count, setCount] = useState (-1);
    const [imgDesc, setImgDesc] = useState();
    console.log(props.articleContent[0].name);
    console.log('number of', props.articleContent.length);
    const arrayMenu = props.articleContent.map(item => item.name); //spremam imena od svih clanaka u array

    function resetArticleData(){
        setArticleBodyTop();
        setArticleBodyBottom();
        setArticleImg();
        setImgDesc();
    }


    

    function nextArticle(){
        if(count <= 10){
            setCount(prevCount => prevCount + 1)
            const articleIndexF = props.articleContent[count + 1];  //spremam sve u varijable kako bi izgledalo cisce i usput prvojerio dali se sve dohvaca kako treba
            if(articleIndexF !== undefined){
                const { name, artist, description, url, alt } = articleIndexF; //vraca mi articleIndexF.name itd
                setArticleHeader(name);
                setArticleBodyTop(artist);
                setArticleBodyBottom(description);
                setArticleImg(url);
                setImgDesc(alt);
            }else{
                setArticleHeader('Error in fetching data!');
                
            }
        }else{                                              //vraca sve na default page ako smo dosli do kraja clanaka
            setArticleHeader('No more Articles!');
            resetArticleData();
        }
    }

    function previousArticle(){
        if(count > 0){
            setCount(prevCount => prevCount - 1)
            const articleIndexB = props.articleContent[count - 1];
            if(articleIndexB !== undefined){
                const { name, artist, description, url, alt } = articleIndexB; //vraca mi articleIndexB.name itd
                setArticleHeader(name);
                setArticleBodyTop(artist);
                setArticleBodyBottom(description);
                setArticleImg(url);
                setImgDesc(alt);
            }else{
                setArticleHeader('Error in fetching data!');
                resetArticleData();
            }
        }else{                                              //vraca sve na default page ako smo dosli do kraja clanaka
            setArticleHeader(props.content.header_left);
            setArticleBodyTop(props.content.text_right[0]);
            setArticleBodyBottom(props.content.text_right[1]);
            setArticleImg();
            setImgDesc();
            setCount(-1); //vraca coun na inicijalno stanje kako se nebi prvi clanak preskaka
        }

    }

    function chooseArticle(i){ //index iz mape se prosljeđuje u funkciju gdje po indexu biram kliknuti article
        const chooseArticle = props.articleContent[i];
        const { name, artist, description, url, alt } = chooseArticle;
        setArticleHeader(name);
        setArticleBodyTop(artist);
        setArticleBodyBottom(description);
        setArticleImg(url);
        setImgDesc(alt);
        setCount(i); //update count-a kako bi user nastavio od odabranog artikla, inace uvik krec od prvoga

    }

    return(

        <div className='main-blog'>
        <div className='left-container'>
            <h3>{props.content.header_left}</h3>
            <ul>
            {arrayMenu.map((item, index) => ( //ispisujem imena clanaka u ul kako bi imali pregled svih dostupnih clanaka, index mi daje na click index od kliknutog clanka
                        <li onClick={() => chooseArticle(index)}>{item}</li>
                ))}
            </ul>
        </div>
        <div className='right-container'>
            <h3>{articleHeader}</h3>
            <div className="buttonContainer">

                <button onClick={() => previousArticle()}>Previous Article</button>

                {
                    count < props.articleContent.length - 1 &&
                    <button onClick={() => nextArticle()}>Next Article</button>
                    
                    }
            </div>
            <p>{articleBodyTop}</p>
            <p>{articleBodyBottom}</p>
            <div className='picture_container'>
                <img src={articleImg} className='img_Style'></img>
                <figcaption className='img_Description'>{imgDesc}</figcaption>
            </div>  

        </div>
    </div>
    )
}

export default Day3Main;
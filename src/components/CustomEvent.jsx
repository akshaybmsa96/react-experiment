import React,{useEffect} from 'react'

function CustEventComp(props){

    let myDiv;

    useEffect(()=>{
         myDiv = document.getElementById("myDiv");
         myDiv.addEventListener('myCustomEvent',function(e){
            console.log('in listner',e)
            myDiv.innerHTML = e.detail;
        })
    },[])

    function buttonClickHandle(){

        console.log('code here')
        const myEvent = new CustomEvent('myCustomEvent',{
            detail  : "Data Changed"
        });
        myDiv.dispatchEvent(myEvent);

    }

    return (<div >
        <div id="myDiv">Hello</div>
            <button onClick={buttonClickHandle}>Change Text</button>
        </div>)

}

export default CustEventComp;
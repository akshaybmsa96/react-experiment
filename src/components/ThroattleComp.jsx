import React ,{Component} from 'react'

export default class ThroattleComp extends Component{
    state = {
        val : 0
    }
    last = 0;

    throattleValue = ()=>{

        let context = this;

        return function(){
            const now = new Date().getTime();

            if(now-context.last < 2000){
                return;
            }
            
            context.last = now;
            context.setState({val : context.state.val+1})
        }

    }

    render(){
        return (
            <div>
                Throattle value : {this.state.val}
                <br/>
                <button onClick = {this.throattleValue()}>Throattle value</button>
            </div>
        )
    }
}
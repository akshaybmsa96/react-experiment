import React,{PureComponent, Component} from 'react';

class PureComp extends PureComponent{

    constructor(props){
        super(props);
        this.state = {}
        this.rerendered = false;
    }

    changeState=()=>{
        this.rerendered = false;
    }

    componentWillMount(){
        this.setState({value : "hello state"})
        console.log('will mount')
    }

    componentDidUpdate(){
        console.log('did update')
    }

    render(){

        console.log('this.state',this.state)
        if(!this.rerendered){
            console.log('rerendered');
            this.rerendered = true
        } 

        return (
            <div>
                <div>
                    {this.state.value}
                    <button onClick={this.changeState}>Change state</button>
                </div>
                <div>
                    {this.props.value}
                </div>
            </div>
        )
    }

}

export default PureComp;
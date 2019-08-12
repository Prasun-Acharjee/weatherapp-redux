import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CountryList} from '../container/CountryList.js';
import { bindActionCreators } from 'redux';
import {onclick} from '../actions/action.js';
import {Country} from '../container/Country.js';

const mapStateToProps=(store)=>{
    return{
        weathers:store.weather,
        check:store.check
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        onclick
    },dispatch);
}
class Weather extends Component{
    constructor(props){
        super(props);
        this.state={item:""};
    }
    handlechange=(event)=>
    {
        this.setState({item:event.target.value});
    }
    render(){
        return(
            <div>
                <CountryList onclick={this.props.onclick} change={this.handlechange} value={this.state.item}/>
                <Country weather={this.props.weathers} check={this.props.check}/>
                
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Weather);
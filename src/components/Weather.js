import React,{Component} from 'react';
import {connect} from 'react-redux'
import {CountryList} from '../container/CountryList.js';
import { bindActionCreators } from 'redux';
import {onclick} from '../actions/action.js';
import {Country} from '../container/Country.js';
const mapStateToProps=(store)=>{
    return{
        weather:store.weather
    };
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        onclick
    },dispatch);
}
class Weather extends Component{
    render(){
        return(
            <div>
                <CountryList onclick={this.props.onclick}/>
                <Country weather={this.props.weather}/>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Weather);
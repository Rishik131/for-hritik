import React,{Component} from 'react';
import axios from 'react-axios'

class Hospital extends Component{
    state = {
        dataS:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
        .then(res =>{
            this.setState({
                dataS:res.Hospital
            })
            console.log(res.Hospital)
        })
    }
}
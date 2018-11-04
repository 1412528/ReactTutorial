import React, {Component} from 'react';
import './public/Dashboard.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Accounts from '../../containers/dashboard/Accounts';
import ChatRoom from './ChatRoom';

class Dashboard extends Component {    
    render(){
        //console.log(this.props.authError);
        
        const { auth } = this.props;
        if(!auth.uid)
            return <Redirect to="/signin"/>
        return(
            <div className="container clearfix">
                <div className="row">
                    <Accounts />
                    <ChatRoom />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

export default connect(mapStateToProps)(Dashboard);
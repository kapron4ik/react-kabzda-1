import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {getStatus, getUserProfile, updateStatus} from "../../redux/Profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 10850;
        }
        this.props.getUserProfile (userId);
        this.props.getStatus (userId);
    }

    render() {
            return (
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            )
        }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
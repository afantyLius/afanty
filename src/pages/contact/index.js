import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css'

export default class Contact extends React.Component {

    render() {
        return (
            <div className="contact-view">
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                >
                    <div className="contact-comment">
                        <p>地址：杭州市余杭区梦想小镇</p>
                        <p>网站：www.afanty.online.com</p>
                        <p>追梦，我们一直在路上</p>
                    </div>
                </CSSTransitionGroup>
            </div>)
    }
}
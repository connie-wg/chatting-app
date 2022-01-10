// chat box display
import React from 'react';
import './App.css';


class MessageBox extends React.Component {

    render() {
        return(
            <div style={styles.messageBox}>
                <p style={styles.messageBoxText}>
                    Hi
                </p>
            </div>
        );
    }

}

class HeaderBar extends React.Component {

    render() {
        return(
            <div style={styles.topBar}>
                <h3 style={styles.topBarText}> Josephine Larose</h3>
            </div>
        )
    }
}

class TextInputBar extends React.Component {

    render() {
        return(
            <div className="textInputBar">
                Write a message...
            </div>
        );
    }
}

export {MessageBox, HeaderBar, TextInputBar};

const screenWidth = window.screen.availWidth;
const screenHeight = window.screen.availHeight;

const styles = {
    messageBox: {
        backgroundColor: '#BFD0FF',
        display: 'flex',
        flexDirection: 'column',
        flex: 2,

    },

    messageBoxText: {
        fontSize: 30,
        color: 'black'
    },

    topBar: {
        backgroundColor: '#4C5C8A',
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    topBarText: {
        color: 'white',
    },

}
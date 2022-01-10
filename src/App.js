import { findByLabelText } from '@testing-library/react';
import './App.css';
import {MessageBox, HeaderBar, TextInputBar} from './components';

function App() {
  return (
    <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
      <div style={styles.sidebar}>
        <h3 style={{color: 'white'}}>Friends</h3>
      </div>

      <div style={styles.chatBackground}>
        <HeaderBar></HeaderBar>
        <div style={styles.chatContainer}>
          <div style={{display: 'flex', flex: 1, alignSelf: 'flex-start', flexDirection: 'column-reverse'}}>
            {/* received messages */}
            <MessageBox>received messages</MessageBox>
            <MessageBox/>
          </div>

          <div style={{display: 'flex', flex: 1, alignSelf: 'flex-end', flexDirection: 'column-reverse', padding: 30,}}>
            <MessageBox>sent messages</MessageBox>
            <MessageBox/>
            <MessageBox/>
          </div>
        </div>

        <TextInputBar/>
      </div>
    </div>
  );
}


let screenWidth = window.screen.availWidth;
let screenHeight = window.innerHeight;

const styles = {
  sidebar: {
    backgroundColor: '#4C5C8A',
    display: 'flex',
    flex: 1,
    height: screenHeight,
    justifyContent: 'center',
    },
  
  chatBackground: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 5,
    height: screenHeight,
    flexDirection: 'column',
  },

  chatContainer: {
    display: 'flex', 
    flex: 20,
    height: screenHeight, 
    flexDirection: 'row',
    justifyContent: 'center',
  }

  
}

/*const styles = {
  background: {
    backgroundColor: 'white',
    width: screenWidth,
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sidebar: {
    backgroundColor: '#4C5C8A',
    width: 0.2 * screenWidth,
    height: screenHeight,
  },
  
  chatBackground: {
    backgroundColor: 'white',
    width: 0.8* screenWidth,
    height: 0.95 * screenHeight,
  },

}


function App() {
  return (
    <div style={{display: 'flex'}}>
      <h1 className></h1>
      <table className ='table'>
        <tr>
          <td>
          <div style={styles.sidebar}></div>
          </td>
          <td>

            <table>
              <tr>
                <HeaderBar/>
              </tr>
              <tr>
                <div style={styles.chatBackground}>
                  <td>
                  <MessageBox/>
                  <MessageBox/>

                  </td>
                  <td>
                    <MessageBox/>
                    <MessageBox/>
                  </td>
                  
                </div>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}
*/

export default App;
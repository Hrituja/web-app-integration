import React from 'react'

class SawoLogin extends React.Component {
    componentDidMount() {
      /*global Sawo*/
        console.log('Script loaded!');
        const config = {
            containerID: 'sawo-container',
            identifierType: 'email',
            apiKey: '092f09fb-1c84-4368-a975-60a0850bd4ef',
          }
          const sawo = new Sawo(config)
          sawo.showForm()
      }
    render() {
        return <div id="sawo-container"></div>
    }
}

export default SawoLogin

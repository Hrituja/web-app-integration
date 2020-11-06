import React from 'react'

class SawoLogin extends React.Component {
    componentDidMount() {
      /*global Sawo*/
        console.log('Script loaded!');
        const config = {
            containerID: 'sawo-container',
            identifierType: 'email',
            apiKey: 'ec8039fa-51d6-40c2-8bb0-c7e0e52bd4d7',
          }
          const sawo = new Sawo(config)
          sawo.showForm()
      }
    render() {
        return <div id="sawo-container"></div>
    }
}

export default SawoLogin

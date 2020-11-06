import React from 'react'

class SawoLogin extends React.Component {
    componentDidMount() {
      /*global Sawo*/
        console.log('Script loaded!');
        const config = {
            containerID: 'sawo-container',
            identifierType: 'email',
            apiKey: '92cac627-d146-4cff-a161-454133893df7',
          }
          const sawo = new Sawo(config)
          sawo.showForm()
      }
    render() {
        return <div id="sawo-container"></div>
    }
}

export default SawoLogin

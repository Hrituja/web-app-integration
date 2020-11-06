import React from 'react'

class SawoLogin extends React.Component {
    componentDidMount() {
      /*global Sawo*/
        console.log('Script loaded!');
        const config = {
            containerID: 'sawo-container',
            identifierType: 'email',
            apiKey: '3f1c4b86-29b6-4170-b91f-9729d17d4abe',
          }
          const sawo = new Sawo(config)
          sawo.showForm()
      }
    render() {
        return <div id="sawo-container"></div>
    }
}

export default SawoLogin

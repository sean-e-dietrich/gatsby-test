import React from "react"
import Template from '../components/layouts/index'

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Template>
        <div>
          <p>Hello!!!</p>
        </div>
      </Template>
    )
  }
}

export default Index
import React from 'react'

import Header from '../header'
import Footer from '../footer'

class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        <div id="wrapper">
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Template
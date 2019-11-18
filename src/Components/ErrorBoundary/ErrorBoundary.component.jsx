import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor () {
    super()
    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError () {
    // process the ERROR
    return { hasErrored: true }
  }

  componentDidCatch (error, info) {
    console.log(error)
  }

  render () {
    if (this.state.hasErrored) {
      return <div> Something Went Wrong </div>
    }

    return this.props.children
  }
}

export default ErrorBoundary

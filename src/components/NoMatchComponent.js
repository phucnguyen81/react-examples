import React from 'react'

// Fallback component to show the paths that have no mappings
const NoMatch = (props) => {
  return (
    <h1>No location found for {props.location.pathname}</h1>
  )
}

export { NoMatch }

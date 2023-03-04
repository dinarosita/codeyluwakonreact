import React from 'react'
import Article from '../../components/wrappers/Article'

export default function ContextFunctionComponent() {
  return (
    <Article title="Context Function Component">
         <div>
        <h3>Context Wrapper: Provider component</h3>
        <p>
          Furthermore, an intermediary provider component can be created.
          Especially handy when the system involves multiple (nesting) contexts. The children component will not need other setup, the function component name (element tag) alone will be enough. Very handy use.
        </p>
      </div>
    </Article>
  )
}

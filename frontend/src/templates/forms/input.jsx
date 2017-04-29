import React from 'react'

export default props => (
  <div className={props.cols}>
      <div className="form-group">
          <input
            {...props.input}
            className="form-control"
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            type={props.type} />
      </div>
  </div>
)

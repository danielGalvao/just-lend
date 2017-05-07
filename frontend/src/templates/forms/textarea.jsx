import React from 'react'

export default props => (
  <div className={props.cols}>
      <div className="form-group">
          <textarea
            {...props.input}
            className="form-control"
            placeholder={props.placeholder}
            readOnly={props.readOnly}></textarea>
      </div>
  </div>
)

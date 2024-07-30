import React, { useState } from 'react'

const FunFactEditForm = ({ funFactId, initialText, onSave, onCancel }) => {
  const [text, setText] = useState(initialText)

  const handleSave = () => {
    onSave(funFactId, text)
  }

  return (
    <div className="fun-fact-edit-form">
      <textarea
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleSave}>Save</button>
      <button className="btn btn-secondary mt-2" onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default FunFactEditForm

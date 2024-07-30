import { useState } from "react"
import axios from "axios"
import { Form, Button } from "react-bootstrap"
import './PlayerDetail.css'

export default function FunFactForm({ playerId, onFunFactSubmit }) {
  const [formData, setFormData] = useState({
    entity_type: "Player",
    entity_id: playerId,
    text: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:8000/funfacts/", formData)
      onFunFactSubmit(response.data)
      setFormData({ entity_type: "Player", entity_id: playerId, text: "" })
    } catch (error) {
      console.error("Error submitting fun fact:", error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formText">
      <Form.Label className="bold-label">Fun Facts</Form.Label>
        <Form.Control
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="custom-button">
        Submit Fun Fact
      </Button>
    </Form>
  )
}

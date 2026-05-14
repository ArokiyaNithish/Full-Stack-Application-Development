import { useEffect, useState } from 'react'
import './App.css'

const API_URL = 'http://localhost:8080/api/courses'

const initialForm = {
  title: '',
  instructor: '',
  durationHours: '',
}

function App() {
  const [courses, setCourses] = useState([])
  const [form, setForm] = useState(initialForm)
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')

  const loadCourses = async () => {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Unable to load courses')
    const data = await response.json()
    setCourses(data)
  }

  useEffect(() => {
    loadCourses().catch((err) => setError(err.message))
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setForm(initialForm)
    setEditingId(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const payload = {
      title: form.title.trim(),
      instructor: form.instructor.trim(),
      durationHours: Number(form.durationHours),
    }

    const isEdit = Boolean(editingId)
    const url = isEdit ? `${API_URL}/${editingId}` : API_URL
    const method = isEdit ? 'PUT' : 'POST'

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}))
      throw new Error(errBody.message || 'Failed to save course')
    }

    await loadCourses()
    resetForm()
  }

  const startEdit = (course) => {
    setEditingId(course.id)
    setForm({
      title: course.title,
      instructor: course.instructor,
      durationHours: String(course.durationHours),
    })
  }

  const handleDelete = async (id) => {
    setError('')
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}))
      throw new Error(errBody.message || 'Failed to delete course')
    }

    if (editingId === id) resetForm()
    await loadCourses()
  }

  return (
    <main className="app">
      <h1>Course Management (React + Spring Boot + SSMS)</h1>

      {error && <p className="error">{error}</p>}

      <form
        className="course-form"
        onSubmit={(event) => {
          handleSubmit(event).catch((err) => setError(err.message))
        }}
      >
        <input
          name="title"
          placeholder="Course Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="instructor"
          placeholder="Instructor"
          value={form.instructor}
          onChange={handleChange}
          required
        />
        <input
          name="durationHours"
          type="number"
          min="1"
          placeholder="Duration (hours)"
          value={form.durationHours}
          onChange={handleChange}
          required
        />

        <div className="actions">
          <button type="submit">{editingId ? 'Update Course' : 'Add Course'}</button>
          {editingId && (
            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Instructor</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.instructor}</td>
              <td>{course.durationHours}h</td>
              <td className="actions">
                <button type="button" onClick={() => startEdit(course)}>
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(course.id).catch((err) => setError(err.message))
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default App

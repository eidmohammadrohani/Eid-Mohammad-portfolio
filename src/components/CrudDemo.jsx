import { useState } from 'react'
import { Plus, Pencil, Trash2, Check } from 'lucide-react'

// A tiny practice list that shows Create, Read, Update and Delete.
// The data only lives in this page's memory. A real database keeps it permanently.
export default function CrudDemo() {
  const [items, setItems] = useState([
    { id: 1, text: 'Revise HTML forms' },
    { id: 2, text: 'Practise React state' },
  ])
  const [draft, setDraft] = useState('')
  const [editingId, setEditingId] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return

    if (editingId === null) {
      // CREATE
      setItems((current) => [...current, { id: Date.now(), text }])
    } else {
      // UPDATE
      setItems((current) => current.map((item) => (item.id === editingId ? { ...item, text } : item)))
      setEditingId(null)
    }
    setDraft('')
  }

  function startEdit(item) {
    setEditingId(item.id)
    setDraft(item.text)
  }

  function remove(id) {
    // DELETE
    setItems((current) => current.filter((item) => item.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setDraft('')
    }
  }

  return (
    <div className="crud">
      <h3>Practice notes</h3>
      <form onSubmit={handleSubmit} className="crud-form">
        <label className="visually-hidden" htmlFor="crud-input">
          {editingId === null ? 'New note' : 'Edit note'}
        </label>
        <input
          id="crud-input"
          type="text"
          value={draft}
          maxLength={80}
          placeholder="Write a short note"
          onChange={(event) => setDraft(event.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-sm">
          {editingId === null ? (
            <>
              <Plus size={16} aria-hidden="true" /> Add
            </>
          ) : (
            <>
              <Check size={16} aria-hidden="true" /> Save
            </>
          )}
        </button>
      </form>

      {/* READ */}
      {items.length === 0 ? (
        <p className="muted crud-empty">No notes yet. Add one above.</p>
      ) : (
        <ul className="crud-list">
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.text}</span>
              <span className="crud-actions">
                <button
                  type="button"
                  className="icon-btn icon-btn-sm"
                  onClick={() => startEdit(item)}
                  aria-label={`Edit note: ${item.text}`}
                >
                  <Pencil size={15} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="icon-btn icon-btn-sm"
                  onClick={() => remove(item.id)}
                  aria-label={`Delete note: ${item.text}`}
                >
                  <Trash2 size={15} aria-hidden="true" />
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      <p className="muted small">
        Refresh the page and these notes reset. A database would keep them saved.
      </p>
    </div>
  )
}

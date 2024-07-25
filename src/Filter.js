import React from 'react'

export const Filter = ({filter,setFilter}) => {
  return (
      <div className="filter">
          <span><label>My Todos</label></span>
          <span>
          <label>Status Filter : </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
              </select>
        </span>
    </div>
  )
}

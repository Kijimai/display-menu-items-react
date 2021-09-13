import React from "react"

const Categories = ({ filterItems, items }) => {
  return (
    <div className="btn-container">
      {items.map((item) => {
        return (
          <button className="filter-btn" key={item.id} onClick={() => filterItems(item.category)}>
            {item.category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories

import React, { useEffect, useState } from "react"
import Img from "gatsby-image"

import Title from "../Globals/Title"

const getCategories = items => {
  return ["all", ...Array.from(new Set(items.map(item => item.node.category)))]
}

const Menu = ({ items }) => {
  const [allItems, setAllItems] = useState(null)
  const [coffeeItems, setCoffeeItems] = useState(null)
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    setAllItems(items.edges)
    setCoffeeItems(items.edges)
    setCategories(getCategories(items.edges))
  }, [items.edges])

  console.log("categories:", categories)

  const handleItems = category => {
    let tempItems = [...allItems]

    if (category === "all") {
      setCoffeeItems(tempItems)
    } else {
      const items = tempItems.filter(({ node }) => node.category === category)
      setCoffeeItems(items)
    }
  }

  return (
    <>
      {allItems && allItems.length > 0 ? (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />

            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleItems(category)}
                    type="button"
                    className="btn btn-yellow text-capitalize m-3"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="row">
              {coffeeItems.map(({ node }) => (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>

                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>${node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small className="text-capitalize">
                        {node.description.description}
                      </small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />

            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Menu

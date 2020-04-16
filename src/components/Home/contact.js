import React from "react"

import Title from "../Globals/Title"

const Contact = () => (
  <section className="contact py-5">
    <div className="container">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/xrgadroo" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="6"
                placeholder="your description"
              />
            </div>

            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default Contact

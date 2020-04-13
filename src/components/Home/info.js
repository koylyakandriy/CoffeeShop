import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              inventore nostrum voluptatum! Est illo ipsa perspiciatis placeat?
              A alias, animi consectetur corporis cumque dicta, earum error et
              eum expedita id iure iusto laborum maiores mollitia nihil
              obcaecati officiis omnis perferendis porro quaerat quos recusandae
              reprehenderit repudiandae velit! Consectetur, molestias rem!
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info

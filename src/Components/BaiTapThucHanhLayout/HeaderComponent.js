import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
          <header className="bg-dark container">
          <nav className="navbar navbar-expand-lg bg-dark">
            <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon text-white" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        )
    }
}

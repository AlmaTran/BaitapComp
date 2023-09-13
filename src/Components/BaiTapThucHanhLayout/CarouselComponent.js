import React, { Component } from 'react'

export default class CarouselComponent extends Component {
    render() {
        return (
            <div className="body d-flex justify-content-center align-items-center">
            <div className="carousel container">
                <div className="p-l-0 p-lg-4 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold fs-1">A warm welcome!</h1>
                        <p className="fs-4 mb-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a className="btn btn-primary btn-lg" href="#">Call to action</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

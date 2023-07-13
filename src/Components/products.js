import React, { Component } from 'react'
import './products.css'

export default class products extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='sectionHeading'>
        <h1>Latest From Us</h1>
        </div>
      <div className='cardContainer'>
        <div className="image">
          <a href='/categories'>
		      <img className="image__img" src="../images/colors.png" alt="Bricks"/>
		        <div className="image__overlay image__overlay--primary">
			        <div className="image__title">Shellac</div>
			          <p className="image__description">
				          Lorem Ipsum vatte cos ande ricas
			          </p>
		          </div>
              </a>
	          </div>
            <div className="image">
            <a href='/categories'>
		      <img className="image__img" src="../images/handandbody.png" alt="Bricks"/>
		        <div className="image__overlay image__overlay--primary">
			        <div className="image__title">Hand&Body</div>
			          <p className="image__description">
				          Lorem Ipsum vatte cos ande ricas
			          </p>
		          </div>
              </a>
	          </div>
      </div>
      <div className='cardContainer'>
      <div className="image">
      <a href='/categories'>
        <img className="image__img" src="../images/enhancements.png" alt="Bricks"/>
          <div className="image__overlay image__overlay--primary">
            <div className="image__title">Enhancements</div>
              <p className="image__description">
                Lorem Ipsum vatte cos ande ricas
              </p>
            </div>
            </a>
          </div>
          <div className="image">
          <a href='/categories'>
        <img className="image__img" src="../images/gel.png" alt="Bricks"/>
          <div className="image__overlay image__overlay--primary">
            <div className="image__title">Brisa Gel</div>
              <p className="image__description">
                Lorem Ipsum vatte cos ande ricas
              </p>
            </div>
            </a>
          </div>
    </div>
    </React.Fragment>
    )
  }
}

import './Final.css'
import React from "react";
import image from '../../src/logo.jpg';
function Final() {
    return (
        <div className="footer">
            <div className="container">

                <ul className="listo" >
                    <li className='li1'> CHARACTERS:826</li>

                    <li className='li2'>location:161</li>
                    <li className='li3' >EPISPDE:768</li>
                </ul>



            </div>  <div className='fine'>
                SERVER STAEUS
                <span className='span2'></span>



            </div>
            <img className='imge' src={image} />
            <div className='end'> &copy;<span className='span'> Axel Fuhrmann</span> 2022</div>
            <hr></hr>
        </div>

    )
} 
export default Final;

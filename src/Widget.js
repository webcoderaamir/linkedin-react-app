import React from 'react'
import './css/widget.css';
import InfoIcon from '@mui/icons-material/Info';

function Widget() {
  return (
    <div className='widget'>

        <div className='widget_top'>
            <div className='widget_header'>
                <h4>Linkedin News</h4>
                <InfoIcon />
            </div>
            
            <div className='widget_body'>
                <ul className='widget_options'>
                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                    </li>

                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                    </li>

                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                    </li>

                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                    </li>

                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                    </li>
                </ul>
            </div>
        </div>

        <div className='widget_bottom'>

            <div className='widget_header'>
                <h4>Today's top courses</h4>
                <InfoIcon />
            </div>

            <div className='widget_body'>
                <ul className='widget_options'>
                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>Kay Coly</p>
                    </li>

                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>Kay Coly</p>
                    </li>

                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>Kay Coly</p>
                    </li>

                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>Kay Coly</p>
                    </li>

                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>Kay Coly</p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Widget
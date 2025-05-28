import React from 'react'

const RightSide = ({ treatment }) => {
    return (
        <div className='right-side'>
            <div>
                <div className='profile-icon1'>
                    <img className='profile-image' src='src\assets\icons\user.png' alt='profile'></img>
                </div>
                <div className='profile-icon2'>
                    <img className='profile-image' src='src\assets\icons\user.png' alt='profile'></img>
                </div>
            </div>
            <div className='calender_details'>
                <div className='calender_icon'>
                    <span>October 2021</span>
                    <img className='arrow_icon' src='src\assets\icons\icons_arrow.png'></img>
                </div>
            </div>
            <div class="calendar-grid">
                <table className='calendar-table'>
                    <tr>
                        <td className='day'>Mon</td>
                        <td className='day'>Tue</td>
                        <td className='day'>Wed</td>
                        <td className='day'>Thu</td>
                        <td className='day'>Fri</td>
                        <td className='day'>Sat</td>
                        <td className='day'>Sun</td>
                    </tr>
                    <tr>
                        <td className='date1'>25</td>
                        <td className='date1'>26</td>
                        <td className='date1'>27</td>
                        <td className='date1'>28</td>
                        <td className='date1'>29</td>
                        <td className='date1'>30</td>
                        <td className='date1'>31</td>
                    </tr>
                    <tr>
                        <td className='timing'>10:00</td>
                        <td className='timing'>08:00</td>
                        <td className='timing'>12:00</td>
                        <td className='timing'>10:00</td>
                        <td className='timing'>---</td>
                        <td className='timing'>12:00</td>
                        <td className='timing'>09:00</td>
                    </tr>
                    <tr>
                        <td className='timing'>11:00</td>
                        <td className='timing'>09:00</td>
                        <td className='timing'>---</td>
                        <td className='timing'>11:00</td>
                        <td className='timing'>14:00</td>
                        <td className='timing'>14:00</td>
                        <td className='timing'>10:00</td>
                    </tr>
                    <tr>
                        <td className='timing'>12:00</td>
                        <td className='timing'>10:00</td>
                        <td className='timing'>13:00</td>
                        <td className='timing'>---</td>
                        <td className='timing'>16:00</td>
                        <td className='timing'>15:00</td>
                        <td className='timing'>11:00</td>
                    </tr>
                </table>
            </div>
            <div className='new_status'>
                <div className='status1'>
                    {
                        treatment?.slice(0, 1).map((item, index) => {
                            return (
                                <div className='card_item1'>
                                    <h3 key={index}>{item}</h3>
                                </div>
                            )
                        })
                    }{
                        treatment?.slice(1, 2).map((item, index) => {
                            return (
                                <div className='card_item2'>
                                    <h3 key={index}>{item}</h3>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='status2'>
                    <h3 className='heading1'>The Upcoming Schedule</h3>
                    <h4 className='heading2'>On Thursday</h4>
                    <div className='status3'>
                        {
                            treatment?.slice(2, 3).map((item, index) => {
                                return <div className='card_item3'>
                                    <h3 key={index}>{item}</h3>
                                </div>

                            })
                        }
                        {
                            treatment?.slice(3, 4).map((item, index) => {
                                return <div className='card_item4'>
                                    <h3 key={index}>{item}</h3>
                                </div>

                            })
                        }
                    </div>
                </div>
                <div className='status4'>
                    <h4>On Saturday</h4>
                    <div className="status5">
                        {
                            treatment?.slice(4, 5).map((item, index) => {
                                return <div className='card_item5'>
                                    <h3 key={index}>{item}</h3>
                                </div>
                            })
                        }
                        {
                            treatment?.slice(5, 6).map((item, index) => {
                                return <div className='card_item6'>
                                    <h3 key={index}>{item}</h3>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide

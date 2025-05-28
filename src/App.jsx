import './App.css'
import RightSide from './components/rightside_details'
function App() {

  const treatment=['Dentist','Physiotherapy Appointment','Heath checkup complete','Ophthalmologist','Cardiologist','Neurologist'];

  return (
    <>
      <div class="app">
        <div className="main-container">
          <div className="sidebar">
            <div className="sidebar-header"><span className='header'>Health<span className='header1'>care.</span></span></div>
            <div className='sidebar-content'>
              <div className='nav'>
                <div className="general">
                  <label>General</label>
                  <span className="nav-icon active">
                    <img className="icon active-icon" src="/srcassets/icons/dashboards.png" alt="icon" />
                    Dashboard
                  </span>

                  <span className="nav-icon">
                    <img className="icon" src="/src/assets/icons/history.png" alt="icon" />
                    History
                  </span>

                  <span className="nav-icon">
                    <img className="icon" src="/src/assets/icons/calendar.png" alt="icon" />
                    Calendar
                  </span>

                  <span className="nav-icon">
                    <img className="icon" src="/src/assets/icons/appointment.png" alt="icon" />
                    Appointment
                  </span>

                  <span className="nav-icon">
                    <img className="icon" src="/src/assets/icons/statistics.png" alt="icon" />
                    Statistics
                  </span>
                </div>

                <div className="tools">
                  <label>Tools</label>
                  <span className="nav-icon">
                    <img className="icon" src="/src/assets/icons/chat-bubble.png" alt="icon" />
                    Chat
                  </span>

                  <span className="nav-icon">
                    <img className="icon" src="/src/assets/icons/phone-call.png" alt="icon" />
                    Support
                  </span>
                </div>
              </div>
              <span className="nav-icon setting">
                <img className="icon" src="/src/assets/icons/setting.png" alt="icon" />
                Setting
              </span>
            </div>
          </div>
          <div className="dashboard">
            <div className='dashboard-heading'>
              <div className='search'>
                <div className='search-content'>
                  <img className='search-icon' src='src\assets\icons\search.png'></img>
                  <span className='search-tag'>Search</span>
                </div>
                <img className='alarm-icon' src='src\assets\icons\alarm.png' alt='alarm'></img>
              </div>
            </div>
            <div className='dashboard-tagging'>
              <span className='dashboard-tag'>Dashboard</span>
              <span className='dashboard-icon'>This Week <img className='required-image' src='src\assets\icons\arrow-down-3101.png' alt='arrow'></img></span>
            </div>
            <div className='dashboard-content'>
              <div className='image-card'>
                <img className='health-image' src='src\assets\icons\human_body.jpg' alt='health'></img>
              </div>
              <div className='health-card'>
                <div className='card'>
                  <span className='tagging'><img className='image-icon' src='src\assets\icons\lungs.png' alt='lungs'></img>Lungs</span>
                  <span className='date'>Date:26/Oct/2021</span>
                  <span className='strip1'><span className='rest-strip1'></span></span>
                </div>
                <div className='card'>
                  <span className='tagging'><img className='image-icon' src='src\assets\icons\tooth.png' alt='teeth'></img>Teeth</span>
                  <span className='date'>Date:26/Oct/2021</span>
                  <span className='strip2'><span className='rest-strip2'></span></span>
                </div>
                <div className='card'>
                  <span className='tagging'><img className='image-icon' src='src\assets\icons\bone.png' alt='bone'></img>Bone</span>
                  <span className='date'>Date:26/Oct/2021</span>
                  <span className='strip3'><span className='rest-strip3'></span></span>
                </div>
              </div>
            </div>
            <span className='details'>Details<img className='arrow-icon' src='src\assets\icons\right-arrow.png'></img></span>
            <div className='activity'>
              <div className='activity-tagging'>
                <span className='activity-tag'>Activity</span>
                <span className='activity-status'>3 appointment on this week</span>
              </div>
              <div className='strip-list'>
                <span className='strip-list1'></span>
                <span className='strip-list2'></span>
                <span className='strip-list3'></span>
                <span className='strip-list4'></span>
                <span className='strip-list5'></span>
                <span className='strip-list6'></span>
                <span className='strip-list7'></span>
                <span className='strip-list8'></span>
                <span className='strip-list9'></span>

                <span className='strip-list1'></span>
                <span className='strip-list2'></span>
                <span className='strip-list3'></span>
                <span className='strip-list4'></span>
                <span className='strip-list5'></span>
                <span className='strip-list6'></span>
                <span className='strip-list7'></span>
                <span className='strip-list8'></span>
                <span className='strip-list9'></span>

                <span className='strip-list1'></span>
                <span className='strip-list2'></span>
                <span className='strip-list3'></span>
                <span className='strip-list4'></span>
                <span className='strip-list5'></span>
                <span className='strip-list6'></span>
                <span className='strip-list7'></span>
                <span className='strip-list8'></span>
                <span className='strip-list9'></span>

                <span className='strip-list1'></span>
                <span className='strip-list2'></span>
                <span className='strip-list3'></span>
                <span className='strip-list4'></span>
                <span className='strip-list5'></span>
                <span className='strip-list6'></span>
                <span className='strip-list7'></span>
                <span className='strip-list8'></span>
                <span className='strip-list9'></span>
              </div>
              <div className='day-date'>
                <span>Mon</span>
                <span>Tues</span>
                <span>Wed</span>
                <span>Thus</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
          <div className='rightbar'>
           <RightSide treatment={treatment}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

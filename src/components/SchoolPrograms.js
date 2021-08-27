import React from 'react';
import './SchoolPrograms.css'

function SchoolPrograms() {
    return (
      <div className="schoolProgramsContainer">
            <div className="programsTagline">
                Exceptional care and education in a safe and nurturing environment for children
            </div>
            <div className="programContainer">
                <div className="iconLabelContainer">
                    <img className="programIcon" src="/images/Icon_PlayGroup.png" alt=""/>
                    <span className="iconTitle">Playgroup</span>
                    <span className="iconAge">1.8 - 3 years old</span>
                </div>
                <div className="iconLabelContainer">
                    <img className="programIcon" src="/images/Icon_Nursery.png" alt=""/>
                    <span className="iconTitle">Nursery</span>
                    <span className="iconAge">2.5 - 4 years old</span>
                </div>
                <div className="iconLabelContainer">
                    <img className="programIcon" src="/images/Icon_Junior.png" alt=""/>
                    <span className="iconTitle">Kinder 1</span>
                    <span className="iconAge">3.5 - 5 years old</span>
                </div>
                <div className="iconLabelContainer">
                    <img className="programIcon" src="/images/Icon_Senior.png" alt=""/>
                    <span className="iconTitle">Kinder 2</span>
                    <span className="iconAge">4.5 - 6 years old</span>
                </div>
            </div>
      </div>
    )
  }
  
  export default SchoolPrograms
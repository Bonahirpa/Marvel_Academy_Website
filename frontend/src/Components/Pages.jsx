import React from 'react'
import about from "../assets/images/about.jpg"
import sport from "../assets/images/sport-photo-3 (2).jpg"
import culture from "../assets/images/culture-raya.jpg"
import photo_2024 from "../assets/images/photo_2024-09-02_07-40-02 (2).jpg"
import g1 from "../assets/images/g-1.jpg"
import g2 from "../assets/images/g-2.jpg"
import g3 from "../assets/images/g-3.jpg"
import g4 from "../assets/images/g-4.jpg"
import g5 from "../assets/images/g-5.jpg"


function Pages() {
  return (
    <>
<section id="about" className="about">
    <h2>About Us</h2>
    <div className="about-container">
        <div className="about-box">
            <h3>Our Mission</h3>
            <p>To provide quality education that nurtures creativity, critical thinking, and lifelong learning.</p>
        </div>
        <div className="about-box">
            <h3>Our Vision</h3>
            <p>To be a leading institution that shapes future leaders through excellence in education.</p>
        </div>
        <div className="about-box">
            <h3>Our Values</h3>
            <p>Integrity, innovation, inclusivity, and commitment to student success.</p>
        </div>
    </div>

    <div className="about-image">
        <img src={about} alt="Marvels Academy Campus" />
    </div>
</section>

<section id="academic" className="academics">
    <h2>Academics</h2>
    <div className="curriculum">
        <h3>Curriculum Overview</h3>
        <p>We offer a well-structured curriculum for students from Grade 1 to 12, ensuring academic excellence and holistic development.</p>
        <ul>
            <li><strong>Grade 1-5:</strong> Foundational learning with a focus on literacy, numeracy, and creativity.</li>
            <li><strong>Grade 6-8:</strong> Introduction to advanced subjects, critical thinking, and exploratory learning.</li>
            <li><strong>Grade 9-12:</strong> Specialized courses, career guidance, and university preparation.</li>
        </ul>
    </div>

    <div className="special-programs">
        <h3>Special Programs</h3>
        <div className="programs-container">
            <div className="program-box">
                <h4>STEM</h4>
                <p>Empowering students with Science, Technology, Engineering, and Mathematics.</p>
            </div>
            <div className="program-box">
                <h4>Arts</h4>
                <p>Encouraging creativity through music, painting, drama, and literature.</p>
            </div>
            <div className="program-box">
                <h4>Sports</h4>
                <p>Building teamwork, discipline, and leadership through various athletic activities.</p>
            </div>
        </div>
    </div>
    <div className="calculator-section">
        <a href="./CalculatorApp/App_Index.html" className="btn-calculator">Try Our Calculator</a>
    </div>
</section>
<section className="admission">
    <h2>Admission & Enrollment</h2>
    <div className="admission-process">
        <h3>How to Apply</h3>
        <ol>
            <li>Fill out the online application form.</li>
            <li>Submit required.</li>
            <li>Attend an interview or entrance test (if applicable).</li>
            <li>Receive admission confirmation via email.</li>
            <li>Complete fee payment and finalize enrollment.</li>
        </ol>
        <div className="register-now">
            <a href="./registration/reg_index.html" className="btn-register">Register Now</a>
        </div>
    </div>

    <div className="snake-game-section">
        <p>Play a fun game while your registration is being processed!</p>
        <a href="./Game_App/game_index.html" className="btn-snake">Marvel's Puzzle Game </a>
    </div>
</section>


<section className="event-section">
    <h2>Upcoming School Events</h2>
    <div className="event-container">
        <div className="event-card active">
            <img src={sport} alt="Event 1" />
            <div className="event-info">
                <h3>Sports Day</h3>
                <p>Join us for an exciting day of sports and fun activities!</p>
            </div>
        </div>
        <div className="event-card">
            <img src={culture} alt="Event 2" />
            <div className="event-info">
                <h3>Art & Culture Exhibition</h3>
                <p>Explore the creative talents of our students in this year's art exhibition.</p>
                

            </div>
        </div>
        <div className="event-card">
            <img src={photo_2024} alt="Event 3" />
            <div className="event-info">
                <h3>Annual Day</h3>
                <p>Celebrate our school’s achievements with performances and awards.</p>
            </div>
        </div>
    </div>
<br />
<br />
    <section className="announcements">
        <h2>Announcements & News Updates</h2>
        <div className="announcement-item">
            <table>
                <thead>
                    <tr>
                        <th>Exam</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Results Announcement</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td><div className="announcement-item">Midterm Exam</div></td>
                        <td><div className="announcement-item">Feb 15-19, 2025</div></td>
                        <td><div className="announcement-item">9:00 AM - 12:00 PM</div></td>
                        <td><div className="announcement-item">Class</div></td>
                        <td><div className="announcement-item">Feb 25, 2025</div></td>
                    </tr>
                    <tr>
                        <td><div className="announcement-item">Final Exam</div></td>
                        <td><div className="announcement-item">Apr 22-27, 2025</div></td>
                        <td><div className="announcement-item">10:00 AM - 1:00 PM</div></td>
                        <td><div className="announcement-item">Class</div></td>
                        <td><div className="announcement-item">May 2, 2025</div></td>
                    </tr>
                    <tr>
                        <td><div className="announcement-item">Show Results</div></td>
                        <td><div className="announcement-item">May 29, 2025</div></td>
                        <td><div className="announcement-item">2:00 PM - 5:00 PM</div></td>
                        <td><div className="announcement-item">School Conference Room</div></td>
                        <td><div className="announcement-item">In-Person</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="announcement-item">
          <h3>Holiday Break Notice</h3>
          <p>The school will be closed from [22/07/201] to [26/07/2017] for the annual break.</p>
        </div>
      </section>
</section>

 <section id="gallery" className="gallery">
  <h2>School Activities Gallery</h2>
  <div className="gallery-grid">
    <div className="gallery-item single-image">
      <img src={g1} alt="Activity 1" />

    </div>

    <div className="gallery-item multi-image">
      <div className="image-group">
        <img src={g2} alt="Activity 2" />
        <img src={g3} alt="Activity 3" />
      </div>
    </div>
    <div className="gallery-item masonry">
      <img src={g4} alt="Activity 4" />
    </div>
    <div className="gallery-item masonry">
      <img src={g5} alt="Activity 5" />
    </div>
  </div>
</section>
<section id="contact" className="contact-us">
    <h2>Contact Us</h2>
    <div className="contact-info">
      <div className="info-item">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          <h3>Address</h3>
          <p>123 School Avenue, City, Country</p>
        </div>
      </div>
      <div className="info-item">
        <i className="fas fa-phone-alt"></i>
        <div>
          <h3>Phone</h3>
          <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>
      </div>
      <div className="info-item">
        <i className="fas fa-envelope"></i>
        <div>
          <h3>Email</h3>
          <p><a href="mailto:contact@school.com">contact@school.com</a></p>
        </div>
      </div>
    </div>
</section>
    </>
  )
}

export default Pages

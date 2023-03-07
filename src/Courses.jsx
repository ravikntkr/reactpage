import React from "react";
import Card from "./Card";
import "./App.css";
import c1 from "./Cthumb/c1.png";
import c2 from "./Cthumb/c2.png";
import c3 from "./Cthumb/c3.png";
import c4 from "./Cthumb/c4.png";
import c5 from "./Cthumb/c5.png";
import c6 from "./Cthumb/c6.png";
import c7 from "./Cthumb/c7.png";
import c8 from "./Cthumb/c8.png";

let Courses = () => (
  <main className="CourseSection">
    <h1 className="courseTitle">Our Courses</h1>
    <div className="courseMain">
      {/* C1 */}
      <div className="courses">
        <Card
          Cimg={c1}
          Ctitle="Complete iOS 16 developer with swift and 8 apps"
          Cbio="101 Lessons • 3 Trials"
          Cprice="₹499"
          Oprice="₹999"
        />
      </div>
      {/* C2 */}
      <div className="courses">
        <Card
          Cimg={c2}
          Ctitle="Prisma I backend
          development with mongo"
          Cbio="3 Lessons"
          Cprice="FREE"
          Oprice=""
        />
      </div>
      {/* C3 */}
      <div className="courses">
        <Card
          Cimg={c3}
          Ctitle="NextJS Full stack crash
          course"
          Cbio="15 Lessons"
          Cprice="FREE"
          Oprice=""
        />
      </div>
      {/* C4 */}
      <div className="courses">
        <Card
          Cimg={c4}
          Ctitle="Pro Backend Developer
          course"
          Cbio="15 Lessons"
          Cprice="₹399"
          Oprice="₹2,999"
        />
      </div>
      {/* C5 */}
      <div className="courses">
        <Card
          Cimg={c5}
          Ctitle="Go with Golang"
          Cbio="58 Lessons"
          Cprice="FREE"
          Oprice=""
        />
      </div>
      {/* C6 */}
      <div className="courses">
        <Card
          Cimg={c6}
          Ctitle="AWS Architect for real world"
          Cbio="171 Lessons • 3 Trials"
          Cprice="₹299"
          Oprice="₹1299"
        />
      </div>
      {/* C7 */}
      <div className="courses">
        <Card
          Cimg={c7}
          Ctitle="Socket io Crash course"
          Cbio="3 Lessons"
          Cprice="FREE"
          Oprice=""
        />
      </div>
      {/* C8 */}
      <div className="courses">
        <Card
          Cimg={c8}
          Ctitle="HTML and CSS for modern
          web development"
          Cbio="60 Lessons"
          Cprice="₹299"
          Oprice="₹799"
        />
      </div>
    </div>
  </main>
  //
);

export default Courses;

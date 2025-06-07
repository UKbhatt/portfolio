import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ThoughtFlow from "../../Assets/ProjectLogos/image.png";
import TaskTracker from "../../Assets/ProjectLogos/TaskTracker.png";
import NewsNow from "../../Assets/ProjectLogos/News.png";
import Readu from "../../Assets/ProjectLogos/Reading.png"
import ExApp from "../../Assets/ProjectLogos/ExApp.png";
import Student from "../../Assets/ProjectLogos/Student.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsNow}
              isBlog={false}
              title="News Now"
              description="Application that provides the latest news articles Stay updated with News Now is a beautifully designed mobile application built using Flutter , offering seamless access to real-time news from across the world, powered by Supabase for authentication. With integration to the powerful News API , this app delivers curated news articles from various categories such as technology, sports, business, and more."
              ghLink="https://github.com/UKbhatt/NewsNow"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Readu}
              isBlog={false}
              title="ReadingVerse"
              description="ReadingVerse is a cross-platform reading application built with Flutter, designed for immersive reading experiences across diverse formats including manga, manhwa, books and many more. The app provides a clean, distraction-free interface with smooth navigation, making it easy for users to enjoy their favorite content."
              ghLink="https://github.com/UKbhatt/Readu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ThoughtFlow}
              isBlog={false}
              title="ThoughFlow"
              description="ThoughFlow is a modern blogging platform built with Flutter for the frontend, Node.js and Express.js for the backend, and Supabase for authentication and database management."
              ghLink="https://github.com/UKbhatt/ThoughtFlow"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskTracker}
              isBlog={false}
              title="Task Tracker"
              description="A sleek and simple Task Tracker app built with Flutter and Supabase — track, manage, and organize your tasks with ease. Features task creation with due dates, completion toggles, and a stylish glassmorphic interface."
              ghLink="https://github.com/UKbhatt/Task-Tracker"
                         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExApp}
              isBlog={false}
              title="Text Extractor Application"
              description="A sleek and simple Task Tracker app built with Flutter and Supabase — track, manage, and organize your tasks with ease. Features task creation with due dates, completion toggles, and a stylish glassmorphic interface."
              ghLink="https://github.com/UKbhatt/Text_Extractor_Application"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Student}
              isBlog={false}
              title="Student Management System"
              description="The College Management System (CMS) is a comprehensive solution designed to enhance the management of educational institutions. It streamlines various operations, including the management of departments, instructors, courses, students, and enrollments. By employing role-based access, the system ensures secure and organized operations for administrators, instructors, and students alike. Built using PHP and MySQL, the CMS offers robust server-side logic and efficient data storage capabilities"
              ghLink="https://github.com/UKbhatt/CollegeManagementSystem"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

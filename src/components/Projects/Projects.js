import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/logo/image.png";
import editor from "../../Assets/Projects/logo/TaskTracker.png";
import chatify from "../../Assets/Projects/logo/News.jpg";
import suicide from "../../Assets/Projects/logo/ExApp.png";
import bitsOfCode from "../../Assets/Projects/logo/Student.png";

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
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="News Now"
              description="Application that provides the latest news articles Stay updated with News Now is a beautifully designed mobile application built using Flutter , offering seamless access to real-time news from across the world, powered by Supabase for authentication. With integration to the powerful News API , this app delivers curated news articles from various categories such as technology, sports, business, and more."
              ghLink="https://github.com/UKbhatt/NewsNow"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ThoughFlow"
              description="ThoughFlow is a modern blogging platform built with Flutter for the frontend, Node.js and Express.js for the backend, and Supabase for authentication and database management."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Task Tracker"
              description="A sleek and simple Task Tracker app built with Flutter and Supabase — track, manage, and organize your tasks with ease. Features task creation with due dates, completion toggles, and a stylish glassmorphic interface."
              ghLink="https://github.com/soumyajit4419/Editor.io"
                         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Text Extractor Application"
              description="A sleek and simple Task Tracker app built with Flutter and Supabase — track, manage, and organize your tasks with ease. Features task creation with due dates, completion toggles, and a stylish glassmorphic interface."
              ghLink="https://github.com/UKbhatt/Text_Extractor_Application"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Student Management System"
              description="The College Management System (CMS) is a comprehensive solution designed to enhance the management of educational institutions. It streamlines various operations, including the management of departments, instructors, courses, students, and enrollments. By employing role-based access, the system ensures secure and organized operations for administrators, instructors, and students alike. Built using PHP and MySQL, the CMS offers robust server-side logic and efficient data storage capabilities"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const skills = [
  { name: 'Strategic Financial Planning', value: 90 },
  { name: 'Budgeting & Forecasting', value: 82 },
  { name: 'Financial Reporting', value: 85 },
  { name: 'Risk Management', value: 95 },
  { name: 'Investment Analysis', value: 80 },
];

const experiences = [
  'Leading a team of finance professionals and working closely with other departments to ensure the company’s financial health and growth.',
  'Managed the finance department, provided strategic financial direction, and supported major corporate decisions.',
  'Led financial operations, including accounting, audits, and compliance. Collaborated with senior management to align financial strategies.',
];

const TeamSkills = () => {
  return (
    <section className="team-skills py-4">
      <Container>
        <Row>
          <Col md={6}>
            <div className="team-skills-info w-100">
              <h3>Skills</h3>
              {skills.map((skill, index) => (
                <div className="team-progress mb-3" key={index}>
                  <div className="d-flex justify-content-between">
                    <h6>{skill.name}</h6>
                    <p>{skill.value}%</p>
                  </div>
                  <ProgressBar now={skill.value} label={`${skill.value}%`} />
                </div>
              ))}
            </div>
          </Col>

          <Col md={6}>
            <div className="team-skills-info w-100">
              <h3>Experience</h3>
              <ul>
                {experiences.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                Throughout his career, Bryant has demonstrated a consistent track record of financial leadership and innovation.
                His experience spans a diverse range of industries, equipping him with a broad perspective on financial management and strategy.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamSkills;

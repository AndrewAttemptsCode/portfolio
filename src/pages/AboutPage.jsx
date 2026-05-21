import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";

const AboutStyle = styled.section`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ResponsiveContainer = styled.div`
  width: min(90%, 1280px);
  margin: 0 auto;

  p {
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`

const AboutPage = () => {
  return (
    <>
      <HeroBanner title="About Me" subtitle="Looking ahead..." />
      <AboutStyle>
        <ResponsiveContainer>
          <p>
            Hello, I'm Andrew — a QA Automation Engineer focused on Playwright testing, with a strong background in React frontend development.
          </p>

          <p>
            I previously worked in online safety as an Investigations Specialist, where I developed strong analytical thinking, attention to detail, and a structured approach to problem solving. These skills now translate directly into how I design test strategies and validate application behaviour.
          </p>

          <p>
            I work primarily with Playwright, JavaScript, and TypeScript to build end-to-end test automation for modern web applications. I enjoy testing real user flows, identifying edge cases, and ensuring applications behave consistently across different scenarios.
          </p>

          <p>
            Alongside QA automation, I also have a strong understanding of frontend development with React, which helps me test applications more effectively from a user and developer perspective.
          </p>

          <p>
            My focus is on QA and test automation roles where I can improve product quality, reduce regressions, and help teams ship with confidence.
          </p>
        </ResponsiveContainer>
      </AboutStyle>
    </>
  );
};

export default AboutPage;
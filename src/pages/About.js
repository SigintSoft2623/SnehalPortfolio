import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/Img3.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Snehal Ambre</span>
            </p>
            <h2 className="about__heading">
              A freelance Artist & validation expert ensuring beauty and
              compliance.
            </h2>
            <div className="about__info">
              <PText>
                Precision. Innovation. Creativity. These three pillars define my
                dual career as a Validation Program Manager in the automotive
                industry and an Acrylic Paint Artist.
                <br /> <br />
                In my engineering role, I ensure that automotive systems meet
                the highest safety, performance, and compliance
                standards—managing end-to-end validation, coordinating
                cross-functional teams, and driving quality at every stage.
                <br /> <br />
                As an artist, I channel creativity into custom acrylic
                paintings, blending technique with emotion to bring landscapes
                and pet portraits to life.
                <br /> <br />
                Both disciplines demand precision, problem-solving, and
                passion—whether refining complex systems or capturing a moment
                on canvas. This portfolio is a reflection of my dedication to
                both worlds, where technical expertise meets artistic
                expression.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>

            <AboutInfoItem
              title="Bachelor"
              items={[
                'B.E in Electronics & Tele-communication Engineering, Bharati Vidyapeeth, INDIA',
              ]}
            />
            <AboutInfoItem
              title="PgDip."
              items={[
                'PgDip. in Engineering Management, Arden University, Berlin, GERMANY',
              ]}
            />
            {/* <AboutInfoItem
              title="Varsity"
              items={['University Of Chittagong']}
            /> */}
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'Express', 'PHP']} />
            <AboutInfoItem
              title="Design"
              items={['Photoshop', 'After Effects', 'Figma']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>

            <AboutInfoItem
              title="2013-2016"
              items={['Sr. Process Manufacture Engineer']}
            />
            <AboutInfoItem
              title="2016-2017"
              items={['Sr. Process Engineer, Sales Executive ']}
            />
            <AboutInfoItem
              title="2017-2019"
              items={['Supplier Performance Manager ']}
            />
            <AboutInfoItem
              title="2022-Present"
              items={['New Product Introduction Engineer']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

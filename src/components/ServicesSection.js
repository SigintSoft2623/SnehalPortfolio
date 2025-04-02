import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Validation & Compliance Management "
            desc=" Develop validation plans, execute protocols (IQ, OQ, PQ), ensure FDA/GMP/ISO compliance, and prepare for audits."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Project Oversight & Risk Mitigation "
            desc="Manage validation projects, oversee changecontrol, coordinate vendors and implement CAPA for risk mgmt."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Software & Process Validation"
            desc=" Validate computerized systems, automation, and data integrity to meet 21 CFR Part 11 and GxP standards. "
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Custom Landscape & Pet Portraits"
            desc="Personalized acrylic paintings of landscapes or pets, capturing their beauty and essence. "
          />

          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Private Art Consultations and Art Prints "
            desc="Personalized sessions to bring artistic visions to life,High-quality prints of landscapes "
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Commissioned Artwork"
            desc=" Bespoke paintings tailored to clients’ themes, colors, and sizes and Unique nature-inspired landscapes and pet portraits, from realistic to abstract. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

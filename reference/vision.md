# Vision for CramSesh: AEM Business Practitioner Professional Study Guide

## Project Overview
CramSesh is an Astro-based web application designed to be the most comprehensive, accurate, and user-friendly study guide for the Adobe Experience Manager (AEM) Business Practitioner Professional (AD0-E126) certification. The app will help users efficiently prepare for the exam by providing curated resources, concise summaries, key concepts, diagrams, and practice tests tailored to the exam objectives.

## Goals
- **Maximize Exam Success:** Prioritize the best links and resources for each content section, with clear summaries and actionable study points.
- **Practice Test Generation:** Provide both the official practice test and generate additional practice questions based on AEM content and user-provided samples.
- **Visual Learning:** Include diagrams and images (from Adobe Experience League or custom-made) to clarify architectural and conceptual topics.
- **Easy Content Expansion:** Allow users to add new sample questions (including images) for future question generation.

## Technical Approach
- **Framework:** Astro 5+ (using components and islands for performance and maintainability)
- **Styling:** Tailwind CSS, with a modern Apple Liquid Glass (iOS 16+) aesthetic
- **Content Management:** Modular structure for easy updates and expansion
- **Image Handling:** Instructions and UI for uploading sample test questions as images, which can be analyzed and referenced for new question creation
- **Best Practices:** Accessibility, SEO, and responsive design

## Content Strategy
- **Primary Source:** Adobe Experience League (official documentation)
- **Coverage:**
  - All exam objectives, including both on-prem and Cloud Service (excluding EDS content, unless confirmed relevant)
  - Key definitions, main ideas, and procedural concepts
  - Visuals: Diagrams and images to illustrate architecture and workflows
- **Summaries:** Concise, exam-focused explanations for each topic
- **Practice Tests:**
  - Official practice test (if available)
  - AI-generated practice test based on provided and referenced material

## Exam Objective Mapping
- **Section 1: Education (22%)**
  - Identify and describe AEM features and capabilities
  - Map features to business needs
  - Summarize training concepts for content editors
- **Section 2: Architecture (22%)**
  - Information architecture for on-prem and Cloud
  - Third-party integrations
  - Roles, permissions, and caching strategies
- **Section 3: Business Analysis (43%)**
  - Standard AEM modules for business problems
  - Content management concepts
  - Stakeholder roles and collaboration
  - Budget/scope alignment and business/development team connection
- **Section 4: Setup and Implementation (13%)**
  - Best practices for content components
  - Implementation scenarios

## User Instructions for Adding Sample Questions
- Users can upload images of sample test questions via a dedicated UI component.
- Uploaded images will be stored and referenced for AI-based question generation.
- Guidelines will be provided to ensure images are clear and legible.

## Helpful Links
- [Adobe Certification Course](https://certification.adobe.com/courses/playScorm/1030/1172)
- [AEM Cloud Service Documentation](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service)
- [AEM Previous Versions](https://experienceleague.adobe.com/en/docs/experience-manager-release-information/aem-release-updates/previous-updates/aem-previous-versions)

## Next Steps
- Review and approve this vision.
- Use this document as a prompt for an LLM to scaffold the Astro project, generate content, and implement features as described above.

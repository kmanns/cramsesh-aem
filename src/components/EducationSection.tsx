import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle } from 'lucide-react';

const EducationSection = () => {
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const educationTopics = [
    {
      id: "aem-capabilities",
      title: "AEM Features and Capabilities",
      content: [
        {
          subtitle: "Core AEM Products",
          points: [
            "AEM Sites: Web content management for creating and managing websites and mobile apps",
            "AEM Assets: Digital asset management (DAM) for organizing and distributing media",
            "AEM Forms: Creating and managing digital forms and documents",
            "AEM Screens: Digital signage solution for public displays"
          ]
        },
        {
          subtitle: "Key Capabilities",
          points: [
            "Multi-site management for global brands with multiple locales",
            "Omnichannel content delivery (web, mobile, IoT, in-store)",
            "Headless CMS capabilities via Content Fragments and GraphQL",
            "Built-in workflow and collaboration tools",
            "Integration with Adobe Experience Cloud (Analytics, Target, Campaign)"
          ]
        }
      ]
    },
    {
      id: "business-needs",
      title: "Mapping Features to Business Needs",
      content: [
        {
          subtitle: "Common Business Scenarios",
          points: [
            "Global Content Management: Use Multi-Site Manager (MSM) with Live Copies",
            "Brand Consistency: Leverage editable templates and component policies",
            "Content Reuse: Implement Content Fragments and Experience Fragments",
            "Personalization: Integrate Adobe Target for targeted experiences",
            "Asset Organization: Use Assets with metadata schemas and smart tags"
          ]
        }
      ]
    },
    {
      id: "aem-as-a-cloud-service",
      title: "AEM as a Cloud Service",
      content: [
        {
          subtitle: "Key Features",
          points: [
            "Always on, always current, always available",
            "Native access to the Adobe Edge Network for content delivery",
            "Automated updates and scaling",
            "Integrated CI/CD pipeline with Cloud Manager",
            "Separation of author and publish tiers"
          ]
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {educationTopics.map(topic => (
        <div key={topic.id} className="border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => toggleTopic(topic.id)}
            className="w-full bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 flex items-center justify-between hover:from-slate-100 hover:to-slate-200 transition-all"
          >
            <h3 className="text-lg font-semibold text-slate-900">{topic.title}</h3>
            {expandedTopics[topic.id] ? (
              <ChevronDown className="w-5 h-5 text-slate-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-600" />
            )}
          </button>
          
          {expandedTopics[topic.id] && (
            <div className="p-6 space-y-6 bg-white">
              {topic.content.map((section, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-slate-900 mb-3">{section.subtitle}</h4>
                  <ul className="space-y-2">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationSection;

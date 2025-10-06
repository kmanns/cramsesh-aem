import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle } from 'lucide-react';

const ImplementationSection = () => {
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const implementationTopics = [
    {
      id: "component-best-practices",
      title: "Best Practices for Content Components",
      content: [
        {
          subtitle: "Component Design Principles",
          points: [
            "Keep components single-purpose and reusable",
            "Provide clear authoring dialogs with helpful descriptions",
            "Follow AEM Core Components as a reference model",
            "Ensure components are responsive and accessible (WCAG 2.1)"
          ]
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {implementationTopics.map(topic => (
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

export default ImplementationSection;

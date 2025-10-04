import React, { useState } from 'react';
import { BookOpen, Brain, CheckCircle, FileText, ChevronDown, ChevronRight, Award, Target, Layout, Users, Settings } from 'lucide-react';

interface ExpandedTopics {
  [key: string]: boolean;
}

interface SelectedAnswers {
  [key: number]: number;
}

const StudyGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedTopics, setExpandedTopics] = useState<ExpandedTopics>({});
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [showResults, setShowResults] = useState(false);

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const sections = [
    { id: 'overview', name: 'Exam Overview', icon: Target },
    { id: 'education', name: 'Section 1: Education (22%)', icon: BookOpen },
    { id: 'architecture', name: 'Section 2: Architecture (22%)', icon: Layout },
    { id: 'business', name: 'Section 3: Business Analysis (43%)', icon: Users },
    { id: 'implementation', name: 'Section 4: Setup & Implementation (13%)', icon: Settings },
    { id: 'practice', name: 'Practice Test', icon: Brain },
    { id: 'resources', name: 'Resources', icon: FileText }
  ];

  const examOverview = {
    title: "Adobe Experience Manager Business Practitioner Professional (AD0-E126)",
    duration: "100 minutes",
    questions: "50 questions",
    passingScore: "31/50 (62%)",
    cost: "$125 USD",
    format: "Multiple choice, multiple select",
    delivery: "Online proctored or test center",
    coverage: [
      "AEM 6.5 (on-premise and AMS)",
      "AEM as a Cloud Service",
      "Core concepts and business practitioner workflows"
    ]
  };

  const keyDefinitions = [
    {
      term: "AEM Sites",
      definition: "A content management system for creating, managing, and delivering digital experiences across web and mobile channels.",
      category: "Core Product"
    },
    {
      term: "AEM Assets",
      definition: "Digital Asset Management (DAM) system for storing, organizing, and distributing digital assets like images, videos, and documents.",
      category: "Core Product"
    },
    {
      term: "Component",
      definition: "Reusable, modular building blocks that authors use to construct pages. Components can be dragged and dropped onto pages.",
      category: "Content Management"
    },
    {
      term: "Template",
      definition: "A blueprint that defines the structure and initial content of pages. Templates determine which components can be used.",
      category: "Content Management"
    },
    {
      term: "Content Fragment",
      definition: "Structured, channel-agnostic content that can be reused across multiple pages and channels. Ideal for headless content delivery.",
      category: "Content Management"
    },
    {
      term: "Experience Fragment",
      definition: "A group of components forming an experience that can be referenced across pages and reused in different channels.",
      category: "Content Management"
    },
    {
      term: "Workflow",
      definition: "Automated processes for content review, approval, and publishing. Can include multiple steps and participants.",
      category: "Process"
    },
    {
      term: "Launch",
      definition: "A feature for creating future-dated content changes. Allows teams to prepare content for specific dates without affecting live content.",
      category: "Content Management"
    },
    {
      term: "Live Copy",
      definition: "A copy of source content that maintains a live relationship. Used for multi-site management and localization.",
      category: "Multi-Site Management"
    },
    {
      term: "Blueprint",
      definition: "The source site in a multi-site management setup from which Live Copies are created.",
      category: "Multi-Site Management"
    },
    {
      term: "Dispatcher",
      definition: "AEM's caching and load balancing tool that improves performance and security by caching content at the web server layer.",
      category: "Architecture"
    },
    {
      term: "Cloud Manager",
      definition: "CI/CD tool for AEM as a Cloud Service that manages deployments, testing, and scaling.",
      category: "Cloud Service"
    }
  ];

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
    }
  ];

  const architectureTopics = [
    {
      id: "architecture-overview",
      title: "AEM Architecture Overview",
      content: [
        {
          subtitle: "On-Premise & AMS Architecture",
          points: [
            "Author Environment: Where content is created and edited (port 4502)",
            "Publish Environment: Production environment serving content to users (port 4503)",
            "Dispatcher: Caching and load balancing layer in front of Publish instances",
            "Replication Agents: Transfer content from Author to Publish"
          ]
        },
        {
          subtitle: "AEM as a Cloud Service Architecture",
          points: [
            "Author Tier: Managed authoring environment with auto-scaling",
            "Publish Tier: Auto-scaled publish instances behind a CDN",
            "Built-in CDN: Adobe-managed content delivery network",
            "Cloud Manager: CI/CD pipeline for deployments and updates"
          ]
        }
      ]
    }
  ];

  const businessTopics = [
    {
      id: "standard-modules",
      title: "Standard AEM Modules for Business Problems",
      content: [
        {
          subtitle: "When to Use Each Module",
          points: [
            "AEM Sites: Website content management, landing pages",
            "AEM Assets: Brand asset management, product imagery",
            "AEM Forms: Customer onboarding, applications, surveys",
            "Content Fragments: API-driven content, headless apps",
            "Experience Fragments: Header/footer management, promotional content"
          ]
        }
      ]
    }
  ];

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

  const practiceQuestions = [
    {
      id: 1,
      question: "A business practitioner needs to allow content authors to create pages for a multi-language website. Which AEM feature should be used?",
      options: [
        "Launch",
        "Live Copy and Multi-Site Manager",
        "Workflows",
        "Experience Fragments"
      ],
      correct: 1,
      explanation: "Multi-Site Manager (MSM) with Live Copy is specifically designed for managing multi-language and multi-site content."
    },
    {
      id: 2,
      question: "What is the primary purpose of AEM Dispatcher?",
      options: [
        "To create and edit content",
        "To cache content and improve performance",
        "To manage user permissions",
        "To integrate with Adobe Analytics"
      ],
      correct: 1,
      explanation: "Dispatcher is AEM's caching and load balancing tool that improves performance."
    },
    {
      id: 3,
      question: "Which AEM component type should be used for channel-agnostic, structured content that can be delivered via API?",
      options: [
        "Experience Fragment",
        "Page Component",
        "Content Fragment",
        "Template"
      ],
      correct: 2,
      explanation: "Content Fragments are structured, channel-agnostic content ideal for headless delivery."
    },
    {
      id: 4,
      question: "In AEM as a Cloud Service, which tool manages CI/CD pipelines?",
      options: [
        "Dispatcher",
        "Cloud Manager",
        "Package Manager",
        "Workflow Console"
      ],
      correct: 1,
      explanation: "Cloud Manager is the CI/CD tool for AEM as a Cloud Service."
    },
    {
      id: 5,
      question: "What is the difference between AEM Author and Publish instances?",
      options: [
        "Author is for content creation; Publish serves content to end users",
        "Author is faster than Publish",
        "Publish allows editing; Author is read-only",
        "There is no difference"
      ],
      correct: 0,
      explanation: "Author instances are for content creation; Publish instances serve content to end users."
    }
  ];

  const resources = [
    {
      category: "Official Adobe Resources",
      links: [
        { name: "Adobe Certification Course (AD0-E126)", url: "https://certification.adobe.com/courses/playScorm/1030/1172" },
        { name: "AEM as a Cloud Service Documentation", url: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service" },
        { name: "AEM 6.5 Documentation", url: "https://experienceleague.adobe.com/en/docs/experience-manager-65" }
      ]
    }
  ];

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    practiceQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        correct++;
      }
    });
    return correct;
  };

  const submitTest = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetTest = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      

          <main className="lg:col-span-3">
            <div id="overview" className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 p-8">
              
              {activeSection === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{examOverview.title}</h2>
                    <p className="text-slate-600">Complete study guide for the AEM Business Practitioner certification</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <div className="text-sm font-medium text-blue-600 mb-1">Duration</div>
                      <div className="text-2xl font-bold text-slate-900">{examOverview.duration}</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <div className="text-sm font-medium text-green-600 mb-1">Questions</div>
                      <div className="text-2xl font-bold text-slate-900">{examOverview.questions}</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                      <div className="text-sm font-medium text-purple-600 mb-1">Passing Score</div>
                      <div className="text-2xl font-bold text-slate-900">{examOverview.passingScore}</div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                      <div className="text-sm font-medium text-amber-600 mb-1">Cost</div>
                      <div className="text-2xl font-bold text-slate-900">{examOverview.cost}</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Exam Coverage</h3>
                    <ul className="space-y-2">
                      {examOverview.coverage.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div id="education" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Section 1: Education (22%)</h2>
                    <p className="text-slate-600">Identify AEM features and map them to business needs</p>
                  </div>

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
              )}

              <div id="architecture" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Section 2: Architecture (22%)</h2>
                    <p className="text-slate-600">Understand AEM architecture and integrations</p>
                  </div>

                  {architectureTopics.map(topic => (
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
              )}

              <div id="business" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Section 3: Business Analysis (43%)</h2>
                    <p className="text-slate-600">The largest section covering AEM modules and concepts</p>
                  </div>

                  {businessTopics.map(topic => (
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
              )}

              <div id="implementation" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Section 4: Setup & Implementation (13%)</h2>
                    <p className="text-slate-600">Best practices for components and implementation</p>
                  </div>

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
              )}

              <div id="practice" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Practice Test</h2>
                    <p className="text-slate-600">Test your knowledge with these practice questions</p>
                  </div>

                  {showResults && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            Your Score: {calculateScore()} / {practiceQuestions.length}
                          </h3>
                          <p className="text-slate-600">
                            {((calculateScore() / practiceQuestions.length) * 100).toFixed(0)}% 
                            {calculateScore() >= practiceQuestions.length * 0.62 ? ' - You passed! 🎉' : ' - Keep studying!'}
                          </p>
                        </div>
                        <button
                          onClick={resetTest}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Retry Test
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {practiceQuestions.map((q, idx) => (
                      <div key={q.id} className="border border-slate-200 rounded-xl p-6 bg-white">
                        <div className="flex items-start space-x-3 mb-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                            {idx + 1}
                          </span>
                          <p className="text-slate-900 font-medium">{q.question}</p>
                        </div>

                        <div className="space-y-2 ml-11">
                          {q.options.map((option, optIdx) => {
                            const isSelected = selectedAnswers[q.id] === optIdx;
                            const isCorrect = q.correct === optIdx;
                            const showAnswer = showResults;

                            return (
                              <button
                                key={optIdx}
                                onClick={() => !showResults && handleAnswerSelect(q.id, optIdx)}
                                disabled={showResults}
                                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                                  showAnswer && isCorrect
                                    ? 'border-green-500 bg-green-50'
                                    : showAnswer && isSelected && !isCorrect
                                    ? 'border-red-500 bg-red-50'
                                    : isSelected
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                              >
                                <span className="text-slate-700">{option}</span>
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className="mt-4 ml-11 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-sm text-slate-700">
                              <span className="font-semibold">Explanation:</span> {q.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {!showResults && (
                    <div className="flex justify-center pt-4">
                      <button
                        onClick={submitTest}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
                      >
                        Submit Test
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div id="resources" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Study Resources</h2>
                    <p className="text-slate-600">Official documentation and helpful materials</p>
                  </div>

                  {resources.map((resourceGroup, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-white">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">{resourceGroup.category}</h3>
                      <ul className="space-y-3">
                        {resourceGroup.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              <FileText className="w-5 h-5 flex-shrink-0" />
                              <span>{link.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">📚 Key Definitions</h3>
                    <p className="text-slate-600 mb-4">Master these essential AEM terms</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {keyDefinitions.map((def, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-slate-900">{def.term}</h4>
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                              {def.category}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{def.definition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudyGuide;
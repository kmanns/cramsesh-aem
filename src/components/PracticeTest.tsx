import React, { useState } from 'react';
import { Brain, CheckCircle } from 'lucide-react';

const PracticeTest = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

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
    },
    {
        "id": 6,
        "question": "A business wants to reuse a header and footer across multiple pages. Which AEM feature is best suited for this?",
        "options": [
            "Content Fragments",
            "Experience Fragments",
            "Editable Templates",
            "Core Components"
        ],
        "correct": 1,
        "explanation": "Experience Fragments are designed for creating reusable content that can be placed on multiple pages, making them ideal for headers and footers."
    },
    {
        "id": 7,
        "question": "A content author needs to request a review and approval for a new page before it goes live. What AEM feature should be used?",
        "options": [
            "Projects",
            "Workflows",
            "Launches",
            "Permissions"
        ],
        "correct": 1,
        "explanation": "AEM Workflows are used to automate processes, including content review and approval cycles."
    },
    {
        "id": 8,
        "question": "What is the main benefit of using Editable Templates over Static Templates?",
        "options": [
            "They are faster to create.",
            "They allow content authors to modify the structure of a page.",
            "They can only be used with Content Fragments.",
            "They are required for AEM as a Cloud Service."
        ],
        "correct": 1,
        "explanation": "Editable Templates provide more flexibility by allowing content authors to change the structure, layout, and allowed components of a page."
    },
    {
        "id": 9,
        "question": "A company wants to deliver personalized content to users based on their location. Which Adobe solution integrates with AEM for this purpose?",
        "options": [
            "Adobe Analytics",
            "Adobe Target",
            "Adobe Campaign",
            "Adobe Audience Manager"
        ],
        "correct": 1,
        "explanation": "Adobe Target is the Adobe Experience Cloud solution for personalization and A/B testing, which integrates with AEM to deliver targeted experiences."
    },
    {
        "id": 10,
        "question": "Which of the following is a key feature of AEM Assets?",
        "options": [
            "CI/CD pipelines",
            "Smart Tags and automatic metadata extraction",
            "User and group management",
            "Content caching"
        ],
        "correct": 1,
        "explanation": "AEM Assets includes powerful features like Smart Tags, which automatically adds metadata to images using Adobe Sensei AI."
    },
    {
        "id": 11,
        "question": "What is the purpose of a Launch in AEM?",
        "options": [
            "To create a new website from a blueprint.",
            "To manage a collection of related project tasks.",
            "To create a future version of a website for review and approval before publishing.",
            "To roll back a website to a previous version."
        ],
        "correct": 2,
        "explanation": "Launches allow you to create a future version of your web pages to make changes that will be published later."
    },
    {
        "id": 12,
        "question": "A business practitioner needs to define the basic structure and available components for a new set of pages. What should they create?",
        "options": [
            "A Page",
            "A Component",
            "A Template",
            "A Workflow"
        ],
        "correct": 2,
        "explanation": "Templates define the structure and allowed components for a set of pages, ensuring consistency across the site."
    },
    {
        "id": 13,
        "question": "How can a content author easily find all images that are missing alt text?",
        "options": [
            "By using the search functionality with a specific filter.",
            "By manually checking each page.",
            "By running a workflow.",
            "This is not possible in AEM."
        ],
        "correct": 0,
        "explanation": "AEM's advanced search capabilities allow authors to find assets based on metadata, including missing alt text."
    },
    {
        "id": 14,
        "question": "What is the role of the AEM Author service in a production environment?",
        "options": [
            "To deliver content to end-users.",
            "To provide an environment for content creation, editing, and management.",
            "To cache the website content.",
            "To manage the CI/CD pipeline."
        ],
        "correct": 1,
        "explanation": "The Author service is where content authors and other stakeholders create and manage the website's content."
    },
    {
        "id": 15,
        "question": "Which of the following is NOT a standard AEM Core Component?",
        "options": [
            "Text",
            "Image",
            "Carousel",
            "Custom Login Form"
        ],
        "correct": 3,
        "explanation": "While Text, Image, and Carousel are standard Core Components, a Custom Login Form would need to be developed."
    },
    {
        "id": 16,
        "question": "A business wants to ensure that all new blog posts have a consistent layout and branding. What is the best way to achieve this in AEM?",
        "options": [
            "Create a unique component for each blog post.",
            "Use a single, long page for all blog posts.",
            "Define an Editable Template for blog posts.",
            "Manually copy and paste the structure for each new post."
        ],
        "correct": 2,
        "explanation": "An Editable Template ensures that all pages created from it share the same base structure, styling, and branding."
    },
    {
        "id": 17,
        "question": "What is the purpose of the Multi-Site Manager (MSM) in AEM?",
        "options": [
            "To manage multiple AEM instances from a single location.",
            "To automate the translation of website content.",
            "To enforce a consistent brand identity and content across multiple websites.",
            "To provide a staging environment for testing."
        ],
        "correct": 2,
        "explanation": "MSM allows you to create a 'live copy' of a site, which inherits content from a 'blueprint', ensuring consistency across regional or translated sites."
    },
    {
        "id": 18,
        "question": "A content author wants to reuse a block of content containing text and an image on several pages. If the content is updated in one place, it should update everywhere. What should they use?",
        "options": [
            "A Content Fragment",
            "An Experience Fragment",
            "A Core Component",
            "A custom component"
        ],
        "correct": 1,
        "explanation": "Experience Fragments are designed for this exact purpose, allowing reusable content to be centrally managed and updated."
    },
    {
        "id": 19,
        "question": "In AEM, what is the relationship between a Component and a Page?",
        "options": [
            "A Page is a type of Component.",
            "A Component is a type of Page.",
            "Pages are built by adding and configuring Components.",
            "They are unrelated."
        ],
        "correct": 2,
        "explanation": "Pages provide the canvas, and Components are the building blocks that are added to the page to create the content and structure."
    },
    {
        "id": 20,
        "question": "What is the primary function of the AEM Publish service?",
        "options": [
            "To allow authors to edit content.",
            "To serve the live, public-facing website to visitors.",
            "To store and manage digital assets.",
            "To run and monitor workflows."
        ],
        "correct": 1,
        "explanation": "The Publish service is the public-facing environment that serves content to your website's visitors."
    },
    {
        "id": 21,
        "question": "A business needs to create a set of pages that will be updated for a seasonal campaign and then removed. What AEM feature would be most appropriate for managing this temporary content?",
        "options": [
            "Projects",
            "Launches",
            "Workflows",
            "Content Fragments"
        ],
        "correct": 1,
        "explanation": "Launches are ideal for managing time-based content changes, allowing you to prepare content for a future release and then either promote it or delete it."
    },
    {
        "id": 22,
        "question": "Which of the following best describes the purpose of AEM's Digital Asset Management (DAM)?",
        "options": [
            "To manage the website's code and deployments.",
            "To store, organize, and deliver digital assets like images, videos, and documents.",
            "To create and manage user accounts and permissions.",
            "To build and maintain the website's information architecture."
        ],
        "correct": 1,
        "explanation": "AEM's DAM is a centralized repository for managing all of an organization's digital assets."
    },
    {
        "id": 23,
        "question": "What is a key benefit of using AEM as a Cloud Service compared to the on-premise version?",
        "options": [
            "It allows for more customization of the underlying infrastructure.",
            "It is always up-to-date with the latest features and security updates.",
            "It does not require a Dispatcher.",
            "It is not integrated with the Adobe Experience Cloud."
        ],
        "correct": 1,
        "explanation": "AEM as a Cloud Service is continuously updated by Adobe, ensuring you always have the latest version without manual upgrades."
    },
    {
        "id": 24,
        "question": "A content author needs to crop an image and apply a filter before adding it to a page. Where can this be done in AEM?",
        "options": [
            "Directly within the page editor using the Image component's inline editor.",
            "Only in Adobe Photoshop.",
            "In the AEM Assets console.",
            "This is not possible in AEM."
        ],
        "correct": 0,
        "explanation": "AEM provides basic image editing capabilities directly within the page editor, as well as more advanced features in the Assets console."
    },
    {
        "id": 25,
        "question": "What is the purpose of a workflow model in AEM?",
        "options": [
            "To define the visual design of a website.",
            "To define the steps and actions of a repeatable business process.",
            "To define the structure of a Content Fragment.",
            "To define the permissions for a user group."
        ],
        "correct": 1,
        "explanation": "A workflow model is a blueprint for a business process, such as a content approval or translation workflow."
    }
  ];

  const handleAnswerSelect = (questionId, answerIndex) => {
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
    <div className="space-y-6">
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
  );
};

export default PracticeTest;
# CramSesh: AEM Business Practitioner Professional Study Guide

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.20.8-brightgreen.svg)
![Astro](https://img.shields.io/badge/astro-4.x-orange.svg)

A comprehensive, interactive study guide designed to help you pass the **Adobe Experience Manager (AEM) Business Practitioner Professional certification exam (AD0-E126)**. Built with Astro, React, and Tailwind CSS for a modern, performant learning experience.

---

## 🎯 Project Goal

CramSesh aims to be your one-stop resource for AEM certification success by providing:

- **Comprehensive Coverage**: All four exam sections with proper weighting
- **Interactive Learning**: Collapsible topics, practice tests with instant feedback
- **Key Definitions**: Essential AEM terminology and concepts
- **Exam-Focused Content**: Prioritized information based on actual exam objectives
- **Modern UX**: Clean, responsive design with smooth interactions

The app consolidates scattered AEM documentation into a structured, easy-to-navigate study path optimized for the AD0-E126 exam.

---

## 📚 Areas Covered

The study guide is organized according to the official exam blueprint:

### **Section 1: Education (22%)**
- AEM features and capabilities (Sites, Assets, Forms, Screens)
- Mapping features to business needs
- Training concepts for content editors
- Best practices for content authors

### **Section 2: Architecture (22%)**
- AEM architecture (on-premise, AMS, and Cloud Service)
- Third-party integrations (Adobe Experience Cloud, CRM, translation services)
- User roles, permissions, and security
- Caching strategies (Dispatcher, CDN, browser caching)

### **Section 3: Business Analysis (43%)**
*The largest and most critical section*
- Standard AEM modules for solving business problems
- Content management concepts and workflows
- Stakeholder roles and collaboration
- Project planning, budget, and scope alignment
- Bridging business and development teams

### **Section 4: Setup & Implementation (13%)**
- Best practices for content components
- Component design principles
- Implementation scenarios
- Environment setup and deployment

### **Practice Test**
- Interactive quiz with 5 sample questions
- Instant feedback and explanations
- Score tracking (62% passing threshold)
- Retry functionality

### **Resources**
- Official Adobe documentation links
- Key definitions reference
- Study tips and exam strategies

---

## 📁 Project Structure

```
cramsesh-aem/
├── src/
│   ├── components/
│   │   └── StudyGuide.tsx          # Main React component with all content
│   ├── layouts/
│   │   └── Layout.astro            # Base HTML layout
│   ├── pages/
│   │   └── index.astro             # Entry point
│   └── styles/
│       └── global.css              # Global styles (optional)
├── public/                         # Static assets (images, etc.)
├── astro.config.mjs                # Astro configuration
├── tailwind.config.mjs             # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

### **Key Files Explained**

- **`StudyGuide.tsx`**: The heart of the application. Contains all study content organized into data structures (topics, questions, definitions) and renders the UI.
- **`index.astro`**: Renders the StudyGuide component with the `client:load` directive for interactivity.
- **`Layout.astro`**: Provides the HTML document structure, meta tags, and base styling.

---

## 🚀 Installation

### **Prerequisites**

- **Node.js** ≥ 18.20.8 ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)

Check your Node version:
```bash
node --version
```

If you need to upgrade Node.js:
```bash
# Option 1: Using Homebrew (macOS)
brew install node

# Option 2: Download from nodejs.org
# Visit https://nodejs.org/ and download the LTS version

# Option 3: Using n (Node version manager)
sudo npm install -g n
sudo n lts
```

### **Setup Steps**

1. **Clone or create the project directory:**
   ```bash
   mkdir cramsesh-aem
   cd cramsesh-aem
   ```

2. **Initialize the Astro project:**
   ```bash
   npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict
   ```

3. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   *Note: The `--legacy-peer-deps` flag resolves version conflicts with lucide-react.*

4. **Add Astro integrations:**
   ```bash
   npx astro add react
   npx astro add tailwind
   ```

5. **Create the necessary files:**
   - Copy `src/components/StudyGuide.tsx` from the artifact
   - Copy `src/pages/index.astro` from the setup guide
   - Copy `src/layouts/Layout.astro` from the setup guide

6. **Start the development server:**
   ```bash
   npm run dev
   ```

7. **Open in browser:**
   ```
   http://localhost:4321
   ```

---

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server (port 4321)
npm run build     # Build for production
npm run preview   # Preview production build locally
```

---

## 📦 Adding New Content Modules

CramSesh is designed to be easily extensible. Here's how to add new study sections or expand existing ones:

### **Adding a New Study Section**

1. **Update the sections array** in `StudyGuide.tsx`:
   ```typescript
   const sections = [
     // ... existing sections
     { id: 'new-section', name: 'Section 5: New Topic', icon: Lightbulb }
   ];
   ```

2. **Create content data structure**:
   ```typescript
   const newSectionTopics = [
     {
       id: "topic-1",
       title: "Topic Title",
       content: [
         {
           subtitle: "Subtopic",
           points: [
             "Key point 1",
             "Key point 2",
             "Key point 3"
           ]
         }
       ]
     }
   ];
   ```

3. **Add rendering logic** in the main return statement:
   ```typescript
   {activeSection === 'new-section' && (
     <div className="space-y-6">
       <div>
         <h2 className="text-3xl font-bold text-slate-900 mb-2">Section 5: New Topic</h2>
         <p className="text-slate-600">Description of the new section</p>
       </div>

       {newSectionTopics.map(topic => (
         // ... same structure as other sections
       ))}
     </div>
   )}
   ```

### **Adding Practice Questions**

Add new questions to the `practiceQuestions` array:
```typescript
{
  id: 6,
  question: "Your question here?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  correct: 2, // Index of correct answer (0-based)
  explanation: "Explanation of why this is correct."
}
```

### **Adding Key Definitions**

Add to the `keyDefinitions` array:
```typescript
{
  term: "New Term",
  definition: "Clear, concise definition of the term.",
  category: "Category Name"
}
```

### **Best Practices for Content Expansion**

- **Keep it modular**: Each topic should be self-contained
- **Use consistent formatting**: Follow the existing structure for uniformity
- **Add sources**: Comment with links to Adobe documentation for reference
- **Test collapsibility**: Ensure new sections expand/collapse properly
- **Mobile-first**: Test on small screens to ensure readability

---

## 🎨 Customization

### **Styling**

The project uses Tailwind CSS utility classes. To customize colors or styling:

1. **Modify `tailwind.config.mjs`** to add custom colors:
   ```javascript
   theme: {
     extend: {
       colors: {
         'brand-blue': '#0066CC',
         'brand-orange': '#FF6B35'
       }
     }
   }
   ```

2. **Update component classes** in `StudyGuide.tsx`

### **Icons**

The project uses `lucide-react`. To add new icons:
```typescript
import { NewIcon } from 'lucide-react';
```

Browse available icons: https://lucide.dev/icons

---

## 🧪 Testing Your Knowledge

### **How to Use the Practice Test**

1. Navigate to the "Practice Test" section
2. Read each question carefully
3. Select your answer for each question
4. Click "Submit Test" to see your results
5. Review explanations for incorrect answers
6. Click "Retry Test" to try again

**Passing Score**: 62% (same as the actual exam)

---

## 📖 Study Tips

1. **Follow the weighted sections**: Focus extra time on Section 3 (43%)
2. **Understand, don't memorize**: Focus on concepts and use cases
3. **Use the definitions**: Master the terminology in the Resources section
4. **Practice regularly**: Revisit the practice test multiple times
5. **Check official docs**: Use the provided Adobe links for deep dives
6. **Hands-on experience**: If possible, get access to an AEM instance to practice

---

## 🤝 Contributing

Want to improve CramSesh? Here's how:

1. **Add more practice questions** based on your exam experience
2. **Expand content sections** with additional details
3. **Add diagrams** for architectural concepts
4. **Improve explanations** for clarity
5. **Fix typos or errors** in the content

To contribute content updates:
1. Edit `src/components/StudyGuide.tsx`
2. Test locally with `npm run dev`
3. Build to verify: `npm run build`

---

## 📋 Exam Information

- **Exam Code**: AD0-E126
- **Duration**: 100 minutes
- **Questions**: 50 (multiple choice/multiple select)
- **Passing Score**: 31/50 (62%)
- **Cost**: $125 USD
- **Delivery**: Online proctored or test center
- **Certification Link**: [Adobe Certification](https://certification.adobe.com/)

---

## 🔗 Useful Links

- [Official Adobe Certification Course](https://certification.adobe.com/courses/playScorm/1030/1172)
- [AEM as a Cloud Service Documentation](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service)
- [AEM 6.5 Documentation](https://experienceleague.adobe.com/en/docs/experience-manager-65)
- [Adobe Experience League Tutorials](https://experienceleague.adobe.com/en/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/overview)

---

## 🐛 Troubleshooting

### **Node.js version error**
```
Node.js v18.19.1 is not supported by Astro!
```
**Solution**: Upgrade to Node.js ≥ 18.20.8

### **Dependency conflict errors**
```
npm error ERESOLVE could not resolve
```
**Solution**: Use `npm install --legacy-peer-deps`

### **TypeScript errors in VSCode**
```
Could not find a declaration file for module 'react'
```
**Solution**: Run `npm install --save-dev @types/react @types/react-dom`

### **Port already in use**
```
Port 4321 is already in use
```
**Solution**: Kill the process or use a different port: `npm run dev -- --port 3000`

---

## 📄 License

MIT License - Feel free to use this for your exam prep!

---

## 🎓 Good Luck!

Remember: Consistent study and understanding concepts (not just memorization) is key to passing the AEM Business Practitioner Professional exam. Use this guide as your companion, supplement with hands-on practice, and you'll be certified in no time!

**Questions or issues?** Open an issue in the repository or refer to the troubleshooting section above.

---

*Built with ❤️ for aspiring AEM Business Practitioners*
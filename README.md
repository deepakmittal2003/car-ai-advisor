### 1. What did you build and why? What did you deliberately cut?
+ I built CarMatch AI, an AI-powered car recommendation platform that helps users find suitable cars based on budget, fuel type, transmission, and usage.
+ I deliberately cut features like authentication, car comparison, favorites, dealer integrations, and advanced filters to focus on delivering a complete recommendation flow within the time limit.

### 2. What's your tech stack and why did you pick it?
+ **Next.js** – Full-stack development in a single codebase.
+ **Prisma** – Easy and type-safe database access.
+ **SQLite** – Quick setup for rapid prototyping.
+ **Gemini API** – Generates personalized recommendation explanations.
+ **Tailwind CSS** – Fast and responsive UI development.
+ **Vercel** – Simple deployment for Next.js applications.

### 3. What did you delegate to AI tools vs. do manually? Where did the tools help most? Where did they get in the way? Where did the tools get in the way?
**AI Tools**
+ Boilerplate code generation
+ API scaffolding
+ UI component generation
+ Gemini integration assistance
+ Debugging suggestions
**Manual Work**
+ Product scoping
+ Recommendation scoring logic
+ Architecture decisions
+ Deployment troubleshooting
+ Final code review and fixes

AI helped most in speeding up development and reducing repetitive coding work.

Sometimes AI-generated code assumed incorrect configurations and suggested solutions that worked locally but not in production.
The SQLite deployment issue on Vercel required manual debugging and decision-making.

### 4. If you had another 4 hours, what would you add?
+ Car comparison feature
+ User shortlists/favorites
+ Better recommendation explanations
+ Conversational AI assistant
+ PostgreSQL database instead of SQLite
+ Search history and analytics
+ Unit and integration tests

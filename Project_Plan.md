# Project Planning

## 1. Define the Project Scope and Objectives

### What are the main goals of the application?
Main goal of the application is to:
- Display different Models used for stock prediction
- Display accuracy and MSE for each
- Have an overview page comparing each
- Creating the best predictor possible

### What features and functionalities are required?
- Page for each model and review  
- Page for overview and comparing
- Page for best model

### Who is the target audience?
- Personal project possibly some employers.

## 2. Analyze and Understand the Requirements
- Break down the features into detailed requirements.
  - Have a page for each model and review
  - Have a page for overview and comparing each model
  - Have a page for the best model
  - Each page has a description and reasoning for why its bad or good
- Consider user needs, business logic, and technical constraints. (TBD)
- Document everything clearly for future reference.

## 3. Choose the Right Technology Stack
- **Front end**: HTML, CSS, Javascript, and Chart.js
- **Back end**: Python, Flask for web framework, MySQL for databases
- Consider the scalability, maintainability, and community support of each technology.
  - Few base databases will be set; automatic updating databases could be added in the future
  - More models can be added as time goes

## 4. Create a Work Breakdown Structure (WBS)
- Divide the project into smaller, manageable tasks.
  - **Project Planning**
    1. Define Scope and Objectives: 2 days
    2. Analyze and Understand Requirements: 3 days
    3. Choose Technology Stack: 1 day
    4. Design Architecture: 3 days
    5. Develop Timeline and Budget: 2 days
    6. Plan for Testing and Deployment: 2 days
    7. Address Legal and Compliance: 2 days
    8. Risk Management Plan: 1 day
    9. Collaboration and Communication: Ongoing
    10. Documentation: Ongoing
  - **Front-End Development**
    1. Design UI/UX: 5 days
       - Sketch Layout: 1 day
       - Design Pages: 2 days
       - Implement Charting (e.g., Chart.js): 2 days
    2. Develop Pages: 7 days
       - Model Review Pages: 3 days
       - Overview Page: 2 days
       - Best Model Page: 2 days
    3. Testing and Quality Assurance: 3 days
  - **Back-End Development**
    1. Set Up Development Environment: 1 day
    2. Implement Web Framework (Flask): 3 days
    3. Database Design and Implementation (MySQL): 5 days
    4. Develop APIs: 5 days
       - Implement Model Logic: 3 days
       - Implement Comparison Logic: 2 days
    5. Integration with Front-End: 2 days
    6. Testing and Quality Assurance: 3 days
  - **Deployment**
    1. Select Hosting Platform: 1 day
    2. Prepare for Deployment: 2 days
    3. Deploy Application: 1 day
    4. Monitor and Maintain: Ongoing
  - **Documentation and Reporting**
    1. Document Code: 2 days
    2. Create User Guide: 3 days
    3. Prepare Final Report: 2 days

### Dependencies and Potential Bottlenecks

#### Dependencies:
- **Front-End Development** depends on:
  - Completion of **Project Planning**, particularly:
    - Define Scope and Objectives
    - Analyze and Understand Requirements
    - Choose Technology Stack
    - Design Architecture
- **Back-End Development** depends on:
  - Completion of **Project Planning**, particularly:
    - Choose Technology Stack
    - Database Design and Implementation (MySQL)
- **Integration with Front-End** depends on:
  - Completion of both **Front-End Development** and **Back-End Development**.
- **Deployment** depends on:
  - Completion of **Front-End Development**, **Back-End Development**, and **Testing and Quality Assurance**.
- **Documentation and Reporting** is ongoing and should be parallel to all stages.

#### Potential Bottlenecks:
- **Design Architecture**: If the architecture is not properly defined, it may lead to confusion in both Front-End and Back-End Development.
- **Database Design and Implementation**: This task can become a bottleneck if not properly executed, as it might hold up the development of APIs and the integration of Front-End and Back-End.
- **Testing and Quality Assurance**: Insufficient testing can delay the Deployment phase.
- **Integration with Front-End**: Problems in integrating the Front-End and Back-End can lead to delays in the final Deployment.

## 5. Design the Architecture
### Back-End Architecture
- **Database Schema**: Utilizing MySQL, the database is designed to store information about the various stock prediction models and their results.
  - `Models` table: Contains details about each model, such as name, type, and description.
  - `Results` table: Stores the accuracy, MSE, and other metrics for each model.
  - `Comparisons` table: Holds data for comparing different models.
- **API Design**: The back end will expose several endpoints to interact with the database:
  - `/models`: Fetch all models.
  - `/model/<id>`: Fetch a specific model's details.
  - `/results`: Fetch the results for all models.
  - `/compare`: Compare different models.
- **Web Framework**: Flask will be used to develop the back-end server and handle requests.

### Front-End Architecture
- **User Interface (UI)**:
  - **Home Page**: Provides an overview of the application and links to different sections.
  - **Model Pages**: Displays details about individual models and their performance metrics.
  - **Comparison Page**: Allows users to compare different models visually using charts (e.g., Chart.js).
  - **Best Model Page**: Highlights the best-performing model.
- **User Experience (UX) Principles**: Focus on a clean, intuitive design, with easy navigation and visually engaging elements such as graphs and tables.

### Interaction Between Front-End and Back-End
- **Data Fetching**: The front end will interact with the back-end APIs to fetch and display the required data.
- **Data Visualization**: Charts and graphs will be created using Chart.js, based on the data retrieved from the back end.
- **Error Handling**: Proper error handling mechanisms will be put in place to gracefully handle any issues with the back-end requests.
- **Responsiveness**: The design will be responsive, ensuring a seamless experience across different devices and screen sizes.

## 6. Develop a Timeline and Budget

### Timeline
The project is divided into several phases, and the timeline is created considering dependencies and required tasks. All estimated times are indicative and may be adjusted based on progress.

1. **Project Planning**: 2 weeks
   - Define Scope, Analyze Requirements, etc.
2. **Front-End Development**: 3 weeks
   - Design UI/UX, Develop Pages, Testing, etc.
3. **Back-End Development**: 4 weeks
   - Set Up Environment, Implement Framework, Develop APIs, etc.
4. **Deployment**: 1 week
   - Select Hosting, Prepare and Deploy Application
5. **Documentation and Reporting**: Ongoing
   - Document Code, User Guide, Final Report
6. **Maintenance**: Ongoing
   - Monitor and maintain the application.

### Budget
The budget outlines the expected costs associated with the project.

- **Hosting**: $15/month (e.g., AWS or other cloud services)
- **Third-Party Services**: $0 (as we plan to use free libraries like Chart.js)
- **Licenses**: $0 (using open-source technologies)
- **Development Tools**: $0 (utilizing free development tools)
- **Total Estimated Cost**: $15/month, excluding potential labor costs if not a personal project

Note: The budget is illustrative and may vary based on actual choices of hosting, services, and additional resources required.


## 7. Plan for Testing and Deployment
- Decide on testing methodologies and tools.
- Plan how and where the application will be deployed.

## 8. Consider Legal and Compliance Issues
- Address any legal requirements, such as privacy policies or data protection regulations.

## 9. Create a Risk Management Plan
- Identify potential risks and develop strategies to mitigate them.

## 10. Collaborate and Communicate
- If working with a team, establish clear roles and responsibilities.
- Set up regular communication channels to ensure everyone stays aligned.

## 11. Documentation
- Maintain detailed documentation of everything planned.
- Consider creating a project wiki or similar resource that all team members can access.

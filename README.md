This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## **Getting Started**

Development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## **Hosted Version**
Open [https://hotels-co-rust.vercel.app/]
To see the Vercel Hosted version.


## **Strategy**

<!-- Output copied to clipboard! -->

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.389 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Fri Jan 06 2023 10:26:20 GMT-0800 (PST)
* Source doc: RSSB: Strategy
----->




* **Step 1: Initial assessment and planning**
    * Gather information about the existing legacy application, including the technologies used, architecture, and codebase.
    * Identify the scope and objectives of the project, including the business requirements, target audience, and any constraints or limitations.
    * Define the project timeline and milestones, including the go-live date.
    * Decide as a team how the collaboration and project implementation is going to be managed and implemented Involving:
        * Designers
        * Engineers
        * Product owner | Product manager
    * Set up tools to track progress, issues, and communication within product development.
        * project management tools such Jira, Asama
        * Communication tools such as Slack 
    * Even though, it would be early to worry about these tools since some of them might be needed right before the start of deployment process, but there is a need to setup dev-ops tools based on how engineers work either for continuous integration or continuous delivery or continuous deployment (**CI/CD**).
        * Tools for automating deployment and builds such as 
            * Github Actions
            * Jenkins, 
            * CircleCI
            * Bitbucket Pipelines
            * GitLab CI/CD e.t.c
            * Travis CI 
            * e.t.c
    <br/><br/>    
* **Step 2: Base designing and prototyping**
    * Work with the UX/UI designers to create fundamental wireframes and mockups for the new application. \
Have a Design System to follow in place to help quicken the development process.
    * Iterate on the design with the business team to ensure that the application meets their needs and expectations.  \
If the fundamental layout and architecture is figured out, it would be ideal for the engineers to start working on the product while focusing on the agile methodology for better iteration.
    * Continuously review the prototype with the business team and make any necessary revisions. <br/><br/>    
* **Step 3: Development and testing**
    * Divide the work into smaller tasks and assign them to the appropriate team members.
    * Follow agile development practices, including daily stand-ups, sprint planning, and reviews.
    * The frontend team might need to early work with the backend team to design the API (Either Rest or GraphQL)
        * The good thing about this that the frontend might start implementation by creating a mock-api hence not waiting for the main api to finish \
This makes the development process parallel and fast.
    * Test the application thoroughly at each stage of development to ensure it is stable, user-friendly, and performs well.
    * Collaborate with the back-end team to ensure that the front-end and back-end are properly integrated progressively.<br/><br/>    
* **Step 4: Deployment and improvements**
    * Based on the DevOps CI\CD methodologies in place, execute deployments of the application to the production environment. \
Preferably the deployment can start from 
        * staging (alpha, beta e.t.c)
        * later on production.
    * Monitor the performance and usage of the application in production.
    * If the app is running over multiple microservices it would also be nice to have status pages with tools such as [https://www.atlassian.com/software/statuspage](https://www.atlassian.com/software/statuspage) 
    * For hyper CDN and prevention of DDOS e.t.c one could use \
[https://aws.amazon.com/cloudfront/](https://aws.amazon.com/cloudfront/)  \
Or  [https://www.cloudflare.com/](https://www.cloudflare.com/) 
    * Fix any issues or bugs that are discovered.
    * Continuously improve and iterate on the application based on user feedback and business needs.<br/><br/>    
* **Step 5: Communication and documentation**
    * Keep all relevant stakeholders informed of the progress and status of the project.
    * Document the design, architecture, and codebase of the new application.
    * Create user guides and documentation for the new application to help users understand its features and functionality.
    * Provide training to users and support staff on the new application as needed.<br/><br/>    
* **Step 6: Migration and transition**
    * Plan and execute the migration of the existing data from the legacy application to the new application. \
You might need to focus on creating scripts from moving the data from one DB to another. \
Putting into consideration aspects like _<span style="text-decoration:underline;">downtime</span>_.
    * Coordinate with the business team to ensure a smooth transition and minimize disruption to users.
    * Test the migration process and fix any issues that arise.
    * Release the new version of the app once the migration is complete.<br/><br/>    
* **Step 7: Continuous improvement**
    * Continuously monitor and measure the performance and usage of the new application. \
AWS has tools to help with monitoring of applications like cloudWatch. \
You can also integrate other monitoring and feedback tools.
    * Gather and analyze user feedback to identify areas for improvement.
    * Implement updates and new features to enhance the functionality and user experience of the application. \
This also includes tracking and fixing bugs.
    * Ensure that the application is maintained and supported in the long term.
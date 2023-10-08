const jobs = [
	{
		"job_id": 1,
		"job_title": "Software Engineer",
		"company": "TechCo Inc.",
		"location": "San Francisco, CA",
		"job_description": "TechCo Inc. is seeking a talented Software Engineer to join our dynamic team...",
		"requirements": [
		  "Bachelor's degree in Computer Science or related field",
		  "3+ years of experience in software development",
		  "Proficiency in Java, Python, or C++",
		  "Strong problem-solving skills",
		  "Excellent communication skills"
		],
		"responsibilities": [
		  "Design and implement software solutions",
		  "Collaborate with cross-functional teams",
		  "Troubleshoot and debug software issues",
		  "Participate in code reviews",
		  "Stay updated with the latest industry trends"
		],
		"application_instructions": "To apply, please send your resume and cover letter to hr@techco.com",
		"posted_date": "2023-10-07",
		"application_deadline": "2023-10-21"
	  },
	  {
		"job_id": 2,
		"job_title": "Data Scientist",
		"company": "DataTech Solutions",
		"location": "New York, NY",
		"job_description": "DataTech Solutions is looking for a Data Scientist to analyze and interpret complex data sets...",
		"requirements": [
		  "Master's or Ph.D. in Data Science, Statistics, or a related field",
		  "Experience with machine learning algorithms",
		  "Proficiency in Python and data analysis tools",
		  "Strong analytical and problem-solving skills",
		  "Excellent communication and data visualization skills"
		],
		"responsibilities": [
		  "Develop and implement data models and algorithms",
		  "Analyze large datasets to uncover insights",
		  "Collaborate with cross-functional teams",
		  "Create data visualizations and reports",
		  "Stay up-to-date with data science trends"
		],
		"application_instructions": "Please submit your CV and a brief statement of interest to careers@datatechsolutions.com",
		"posted_date": "2023-10-07",
		"application_deadline": "2023-10-21"
	  },
	  {
		"job_id": 51,
		"job_title": "Frontend Developer",
		"company": "WebTech Solutions",
		"location": "Seattle, WA",
		"job_description": "WebTech Solutions is looking for a skilled Frontend Developer to create engaging user interfaces...",
		"requirements": [
		  "Bachelor's degree in Computer Science or related field",
		  "2+ years of experience in frontend development",
		  "Proficiency in HTML, CSS, and JavaScript",
		  "Experience with modern frontend frameworks (e.g., React, Angular)",
		  "Strong problem-solving skills"
		],
		"responsibilities": [
		  "Design and implement user interfaces",
		  "Collaborate with UI/UX designers",
		  "Optimize website performance",
		  "Fix frontend bugs and issues",
		  "Stay updated with frontend trends"
		],
		"application_instructions": "Interested candidates, please send your portfolio and resume to careers@webtechsolutions.com",
		"posted_date": "2023-10-08",
		"application_deadline": "2023-10-22"
	  },
	  {
		"job_id": 52,
		"job_title": "DevOps Engineer",
		"company": "Cloud Innovations",
		"location": "Austin, TX",
		"job_description": "Cloud Innovations is hiring a DevOps Engineer to streamline our development and deployment processes...",
		"requirements": [
		  "Bachelor's degree in Computer Science or related field",
		  "3+ years of experience in DevOps or system administration",
		  "Experience with CI/CD tools (e.g., Jenkins, Travis CI)",
		  "Proficiency in scripting languages (e.g., Bash, Python)",
		  "Knowledge of cloud platforms (e.g., AWS, Azure)"
		],
		"responsibilities": [
		  "Automate and optimize deployment pipelines",
		  "Monitor system performance and troubleshoot issues",
		  "Collaborate with development teams",
		  "Implement security best practices",
		  "Manage and maintain infrastructure as code"
		],
		"application_instructions": "To apply, please send your resume and cover letter to hr@cloudinnovations.com",
		"posted_date": "2023-10-08",
		"application_deadline": "2023-10-22"
	  },{
		"job_id": 123,
		"job_title": "Machine Learning Engineer",
		"company": "AI Innovations Inc.",
		"location": "Remote",
		"job_description": "AI Innovations Inc. is looking for a talented Machine Learning Engineer to join our team. In this role, you will work on cutting-edge projects in the field of artificial intelligence and machine learning.",
		"requirements": [
		  "Master's or Ph.D. in Computer Science or a related field",
		  "2+ years of experience in machine learning and deep learning",
		  "Proficiency in Python and popular machine learning libraries (e.g., TensorFlow, PyTorch)",
		  "Strong mathematical and statistical skills",
		  "Experience with natural language processing (NLP) is a plus"
		],
		"responsibilities": [
		  "Develop and implement machine learning models for various applications",
		  "Collaborate with data scientists and researchers to solve complex problems",
		  "Collect and preprocess large datasets",
		  "Evaluate and fine-tune machine learning models for optimal performance",
		  "Stay updated with the latest advancements in AI and ML"
		],
		"application_instructions": "If you are passionate about machine learning and want to be part of a dynamic team, please submit your resume, a cover letter, and any relevant work/portfolio to careers@aiinnovations.com. Please include 'Machine Learning Engineer Application' in the subject line.",
		"posted_date": "2023-10-10",
		"application_deadline": "2023-10-31"
	  },{
		"job_id": 124,
		"job_title": "Full Stack Developer",
		"company": "WebTech Solutions",
		"location": "Austin, TX",
		"job_description": "WebTech Solutions is seeking a skilled Full Stack Developer to join our fast-growing team. As a Full Stack Developer, you will have the opportunity to work on a wide range of web development projects and contribute to our innovative solutions.",
		"requirements": [
		  "Bachelor's degree in Computer Science or a related field",
		  "3+ years of experience in web development",
		  "Proficiency in JavaScript, HTML, CSS, and one or more backend languages (e.g., Node.js, Python, Ruby)",
		  "Experience with modern front-end frameworks (e.g., React, Angular, Vue.js)",
		  "Strong problem-solving and debugging skills"
		],
		"responsibilities": [
		  "Design and develop web applications from concept to production",
		  "Collaborate with UX/UI designers to create user-friendly interfaces",
		  "Optimize web applications for performance and responsiveness",
		  "Implement and maintain RESTful APIs",
		  "Stay up-to-date with industry best practices and emerging web technologies"
		],
		"application_instructions": "If you're passionate about web development and want to be part of our innovative team, please send your resume and a brief cover letter to careers@webtechsolutions.com. Include 'Full Stack Developer Application' in the email subject line.",
		"posted_date": "2023-10-10",
		"application_deadline": "2023-10-28"
	  },
	  {
		"job_id": 125,
		"job_title": "Cybersecurity Analyst",
		"company": "SecureNet Systems",
		"location": "Washington, D.C.",
		"job_description": "SecureNet Systems is looking for a dedicated Cybersecurity Analyst to strengthen our organization's security posture. As a Cybersecurity Analyst, you will play a critical role in safeguarding our digital assets and sensitive information.",
		"requirements": [
		  "Bachelor's degree in Cybersecurity, Information Security, or a related field",
		  "2+ years of experience in cybersecurity",
		  "Knowledge of cybersecurity frameworks and standards (e.g., NIST, ISO 27001)",
		  "Experience with security assessment tools and vulnerability scanning",
		  "Strong understanding of network security and threat detection"
		],
		"responsibilities": [
		  "Conduct regular security assessments and audits",
		  "Identify and mitigate security vulnerabilities and threats",
		  "Monitor network traffic for suspicious activities",
		  "Respond to security incidents and breaches",
		  "Educate staff on cybersecurity best practices"
		],
		"application_instructions": "If you are passionate about cybersecurity and want to contribute to our organization's security efforts, please submit your resume and a cover letter detailing your relevant experience to careers@securenetsystems.com. Mention 'Cybersecurity Analyst Application' in the subject line.",
		"posted_date": "2023-10-10",
		"application_deadline": "2023-10-30"
	  },{
		"job_id": 126,
		"job_title": "AI Research Scientist",
		"company": "InnoAI Labs",
		"location": "San Jose, CA",
		"job_description": "InnoAI Labs is seeking an AI Research Scientist to conduct groundbreaking research in artificial intelligence and machine learning.",
		"requirements": [
		  "Ph.D. in Computer Science or a related field",
		  "Expertise in deep learning and neural networks",
		  "Strong programming skills in Python and TensorFlow/PyTorch",
		  "Publication record in AI research conferences/journals",
		  "Ability to work in a collaborative research environment"
		],
		"responsibilities": [
		  "Conduct AI research and experiments",
		  "Develop novel machine learning algorithms",
		  "Collaborate with interdisciplinary teams",
		  "Publish research findings",
		  "Stay current with AI advancements"
		],
		"application_instructions": "Interested candidates, please send your CV and research portfolio to careers@innoailabs.com.",
		"posted_date": "2023-10-11",
		"application_deadline": "2023-10-31"
	  },{
		"job_id": 127,
		"job_title": "Cloud Solutions Architect",
		"company": "CloudScape Technologies",
		"location": "Seattle, WA",
		"job_description": "CloudScape Technologies is hiring a Cloud Solutions Architect to design and implement cloud-based solutions for our clients.",
		"requirements": [
		  "Bachelor's degree in Computer Science or equivalent",
		  "5+ years of experience in cloud architecture and deployment",
		  "Certifications in AWS, Azure, or GCP (preferred)",
		  "Strong knowledge of cloud computing best practices",
		  "Excellent communication and client-facing skills"
		],
		"responsibilities": [
		  "Design scalable and cost-effective cloud solutions",
		  "Work closely with clients to understand their requirements",
		  "Lead cloud migration and deployment projects",
		  "Provide technical guidance to project teams",
		  "Stay updated with cloud technology trends"
		],
		"application_instructions": "To apply, please send your resume and a cover letter to hr@cloudscapetech.com.",
		"posted_date": "2023-10-11",
		"application_deadline": "2023-10-28"
	  },
	  {
		"job_id": 128,
		"job_title": "UI/UX Designer",
		"company": "PixelCraft Studios",
		"location": "Los Angeles, CA",
		"job_description": "PixelCraft Studios is looking for a creative UI/UX Designer to shape the user experience of our digital products.",
		"requirements": [
		  "Bachelor's degree in Design or a related field",
		  "3+ years of UI/UX design experience",
		  "Proficiency in design software (e.g., Adobe XD, Sketch)",
		  "Strong portfolio showcasing design projects",
		  "Excellent collaboration and communication skills"
		],
		"responsibilities": [
		  "Create intuitive and visually appealing user interfaces",
		  "Conduct user research and usability testing",
		  "Collaborate with cross-functional teams",
		  "Iterate on designs based on feedback",
		  "Stay updated with design trends"
		],
		"application_instructions": "To apply, please submit your portfolio and cover letter to careers@pixelcraftstudios.com.",
		"posted_date": "2023-10-11",
		"application_deadline": "2023-10-31"
	  },
	  {
		"job_id": 129,
		"job_title": "Database Administrator",
		"company": "DataMaster Inc.",
		"location": "Chicago, IL",
		"job_description": "DataMaster Inc. is seeking a skilled Database Administrator to manage and optimize our data systems.",
		"requirements": [
		  "Bachelor's degree in Computer Science or a related field",
		  "3+ years of experience in database administration",
		  "Proficiency in SQL and database management systems (e.g., MySQL, PostgreSQL)",
		  "Strong problem-solving and troubleshooting skills",
		  "Knowledge of data security best practices"
		],
		"responsibilities": [
		  "Administer and maintain databases",
		  "Optimize database performance and efficiency",
		  "Backup and recover data when necessary",
		  "Collaborate with data analysts and developers",
		  "Ensure data integrity and security"
		],
		"application_instructions": "Interested candidates, please send your resume and cover letter to hr@datamasterinc.com.",
		"posted_date": "2023-10-12",
		"application_deadline": "2023-10-31"
	  },
	  {
		"job_id": 130,
		"job_title": "Mobile App Developer",
		"company": "AppGenius Tech",
		"location": "San Diego, CA",
		"job_description": "AppGenius Tech is looking for a talented Mobile App Developer to create innovative and user-friendly mobile applications.",
		"requirements": [
		  "Bachelor's degree in Computer Science or a related field",
		  "2+ years of experience in mobile app development",
		  "Proficiency in iOS and Android development (Swift, Kotlin)",
		  "Strong problem-solving and debugging skills",
		  "Experience with app publishing on App Store and Google Play"
		],
		"responsibilities": [
		  "Design and develop mobile applications",
		  "Collaborate with UI/UX designers to create engaging interfaces",
		  "Optimize app performance for various devices",
		  "Stay updated with mobile app development trends",
		  "Conduct code reviews and testing"
		],
		"application_instructions": "To apply, please send your resume and a link to your portfolio or published apps to careers@appgeniustech.com.",
		"posted_date": "2023-10-12",
		"application_deadline": "2023-10-30"
	  },{
		"job_id": 131,
		"job_title": "Network Engineer",
		"company": "NetConnect Solutions",
		"location": "Dallas, TX",
		"job_description": "NetConnect Solutions is seeking a Network Engineer to design, implement, and maintain our network infrastructure.",
		"requirements": [
		  "Bachelor's degree in Network Engineering or a related field",
		  "3+ years of experience in network engineering",
		  "Certifications such as CCNA or CCNP are a plus",
		  "Strong knowledge of network protocols and technologies",
		  "Excellent problem-solving and troubleshooting skills"
		],
		"responsibilities": [
		  "Design and configure network solutions",
		  "Implement and maintain network security measures",
		  "Troubleshoot network issues and outages",
		  "Collaborate with IT teams to support network requirements",
		  "Stay updated with network technology advancements"
		],
		"application_instructions": "If you're passionate about network engineering, please send your resume and cover letter to hr@netconnectsolutions.com.",
		"posted_date": "2023-10-12",
		"application_deadline": "2023-10-28"
	  },
	  {
		"job_id": 132,
		"job_title": "Software Quality Assurance Analyst",
		"company": "QualityTech Systems",
		"location": "Boston, MA",
		"job_description": "QualityTech Systems is hiring a Software Quality Assurance Analyst to ensure the reliability and performance of our software products.",
		"requirements": [
		  "Bachelor's degree in Computer Science or a related field",
		  "2+ years of experience in software quality assurance",
		  "Strong knowledge of QA methodologies and tools",
		  "Experience in test case design and execution",
		  "Excellent attention to detail"
		],
		"responsibilities": [
		  "Develop and execute test plans and test cases",
		  "Identify and document software defects",
		  "Collaborate with development teams to resolve issues",
		  "Automate test scripts when applicable",
		  "Contribute to continuous improvement of QA processes"
		],
		"application_instructions": "Interested candidates, please send your resume and a brief cover letter to careers@qualitytechsystems.com.",
		"posted_date": "2023-10-13",
		"application_deadline": "2023-10-31"
	  },{
		"job_id": 133,
		"job_title": "Blockchain Developer",
		"company": "BlockChain Innovations",
		"location": "New York, NY",
		"job_description": "BlockChain Innovations is seeking a skilled Blockchain Developer to work on cutting-edge blockchain projects.",
		"requirements": [
		  "Bachelor's degree in Computer Science or a related field",
		  "2+ years of experience in blockchain development",
		  "Proficiency in blockchain platforms (e.g., Ethereum, Binance Smart Chain)",
		  "Strong understanding of smart contracts and decentralized applications",
		  "Knowledge of cryptographic algorithms"
		],
		"responsibilities": [
		  "Design and develop blockchain solutions",
		  "Implement and deploy smart contracts",
		  "Collaborate with cross-functional teams",
		  "Research and experiment with blockchain technologies",
		  "Stay updated with blockchain industry trends"
		],
		"application_instructions": "To apply, please send your resume and a cover letter to hr@blockchaininnovations.com.",
		"posted_date": "2023-10-13",
		"application_deadline": "2023-10-30"
	  },{
		"job_id": 134,
		"job_title": "Frontend Developer",
		"company": "Frontend Masters",
		"location": "San Francisco, CA",
		"job_description": "Frontend Masters is looking for a talented Frontend Developer to create engaging and responsive web interfaces.",
		"requirements": [
		  "Bachelor's degree in Computer Science or a related field",
		  "3+ years of experience in frontend development",
		  "Proficiency in HTML, CSS, JavaScript, and popular frontend frameworks (e.g., React, Vue.js)",
		  "Strong problem-solving skills",
		  "Experience with UI/UX design principles is a plus"
		],
		"responsibilities": [
		  "Develop and maintain web applications",
		  "Collaborate with UI/UX designers to implement designs",
		  "Optimize web performance and responsiveness",
		  "Conduct code reviews and testing",
		  "Stay updated with frontend trends and best practices"
		],
		"application_instructions": "If you're passionate about frontend development, please send your resume and portfolio to careers@frontendmasters.com.",
		"posted_date": "2023-10-13",
		"application_deadline": "2023-10-31"
	  },{
		"job_id": 135,
		"job_title": "Data Analyst",
		"company": "DataTech Insights",
		"location": "Chicago, IL",
		"job_description": "DataTech Insights is seeking a Data Analyst to extract actionable insights from data and contribute to data-driven decision-making.",
		"requirements": [
		  "Bachelor's degree in Data Science, Statistics, or a related field",
		  "2+ years of experience in data analysis",
		  "Proficiency in data analysis tools (e.g., Python, R)",
		  "Strong analytical and problem-solving skills",
		  "Experience with data visualization tools (e.g., Tableau) is a plus"
		],
		"responsibilities": [
		  "Collect, clean, and analyze data sets",
		  "Generate reports and visualizations for stakeholders",
		  "Identify trends and patterns in data",
		  "Collaborate with business teams to define data requirements",
		  "Contribute to data quality improvement efforts"
		],
		"application_instructions": "Interested candidates, please send your resume and a cover letter to hr@datatechinsights.com.",
		"posted_date": "2023-10-14",
		"application_deadline": "2023-10-30"
	},{
		"job_id": 136,
		"job_title": "Software Development Manager",
		"company": "CodeCraft Innovations",
		"location": "Austin, TX",
		"job_description": "CodeCraft Innovations is seeking a Software Development Manager to lead and mentor our development teams.",
		"requirements": [
		  "Bachelor's degree in Computer Science or a related field",
		  "5+ years of experience in software development",
		  "Strong leadership and project management skills",
		  "Experience with Agile and Scrum methodologies",
		  "Excellent communication and teamwork abilities"
		],
		"responsibilities": [
		  "Manage and lead software development teams",
		  "Set development priorities and goals",
		  "Oversee project timelines and budgets",
		  "Collaborate with stakeholders to define project requirements",
		  "Ensure high-quality software delivery"
		],
		"application_instructions": "To apply, please send your resume and a cover letter outlining your leadership experience to careers@codecraftinnovations.com.",
		"posted_date": "2023-10-14",
		"application_deadline": "2023-10-31"
	  },{
		"job_id": 137,
		"job_title": "Cloud Security Engineer",
		"company": "CloudGuard Solutions",
		"location": "Seattle, WA",
		"job_description": "CloudGuard Solutions is hiring a Cloud Security Engineer to enhance the security of our cloud-based infrastructure.",
		"requirements": [
		  "Bachelor's degree in Cybersecurity, Information Security, or a related field",
		  "3+ years of experience in cloud security",
		  "Certifications in cloud security (e.g., CCSK, CCSP) are a plus",
		  "Strong knowledge of cloud security best practices",
		  "Experience with security compliance and audits"
		],
		"responsibilities": [
		  "Implement and manage cloud security measures",
		  "Conduct security assessments and penetration testing",
		  "Monitor cloud environments for vulnerabilities and threats",
		  "Collaborate with IT and development teams on security issues",
		  "Stay updated with cloud security trends"
		],
		"application_instructions": "Interested candidates, please send your resume and a cover letter to hr@cloudguardsolutions.com.",
		"posted_date": "2023-10-14",
		"application_deadline": "2023-10-30"
	  },
	  {
		"job_id": 138,
		"job_title": "Backend Developer",
		"company": "Backend Solutions Ltd.",
		"location": "San Francisco, CA",
		"job_description": "Backend Solutions Ltd. is looking for a skilled Backend Developer to design and maintain server-side applications.",
		"requirements": [
		  "Bachelor's degree in Computer Science or a related field",
		  "3+ years of experience in backend development",
		  "Proficiency in backend languages (e.g., Java, Python, Node.js)",
		  "Experience with RESTful API design",
		  "Strong database management skills"
		],
		"responsibilities": [
		  "Develop and maintain server-side applications",
		  "Optimize application performance and scalability",
		  "Collaborate with frontend developers to integrate APIs",
		  "Troubleshoot and resolve backend issues",
		  "Stay updated with backend development trends"
		],
		"application_instructions": "To apply, please send your resume and a brief cover letter to careers@backendsolutions.com.",
		"posted_date": "2023-10-15",
		"application_deadline": "2023-10-31"
	  },{
		"job_id": 139,
		"job_title": "Network Security Analyst",
		"company": "NetSecure Systems",
		"location": "New York, NY",
		"job_description": "NetSecure Systems is seeking a Network Security Analyst to monitor and enhance our network security.",
		"requirements": [
		  "Bachelor's degree in Cybersecurity, Information Security, or a related field",
		  "2+ years of experience in network security",
		  "Certifications such as CompTIA Security+ or CISSP are a plus",
		  "Strong understanding of network protocols and firewalls",
		  "Experience with intrusion detection systems (IDS/IPS)"
		],
		"responsibilities": [
		  "Monitor network traffic for security threats",
		  "Analyze and investigate security incidents",
		  "Implement and configure security tools",
		  "Collaborate with IT teams to implement security measures",
		  "Conduct security awareness training for employees"
		],
		"application_instructions": "Interested candidates, please send your resume and a cover letter to hr@netsecuresystems.com.",
		"posted_date": "2023-10-15",
		"application_deadline": "2023-10-30"
	  },{
		"job_id": 140,
		"job_title": "AI Ethics Researcher",
		"company": "EthicalAI Labs",
		"location": "Cambridge, MA",
		"job_description": "EthicalAI Labs is looking for an AI Ethics Researcher to explore the ethical implications of artificial intelligence.",
		"requirements": [
		  "Ph.D. in Ethics, Philosophy, or a related field",
		  "Strong interest and knowledge in artificial intelligence",
		  "Experience in ethical AI research is a plus",
		  "Excellent research and writing skills",
		  "Ability to analyze complex ethical dilemmas"
		],
		"responsibilities": [
		  "Research and write about AI ethics topics",
		  "Contribute to ethical AI guidelines and policies",
		  "Collaborate with AI researchers and ethicists",
		  "Participate in AI ethics discussions and conferences",
		  "Stay updated with AI and ethics developments"
		],
		"application_instructions": "To apply, please send your CV and a writing sample on an AI ethics topic to careers@ethicalailabs.com.",
		"posted_date": "2023-10-15",
		"application_deadline": "2023-10-31"
	  },{
		"job_id": 141,
		"job_title": "Frontend Developer",
		"company": "FrontTech Innovations",
		"location": "Los Angeles, CA",
		"job_description": "FrontTech Innovations is seeking a talented Frontend Developer to create responsive and user-friendly web interfaces.",
		"requirements": [
		  "Bachelor's degree in Computer Science or a related field",
		  "3+ years of experience in frontend development",
		  "Proficiency in HTML, CSS, JavaScript, and popular frontend frameworks (e.g., React, Angular)",
		  "Strong problem-solving skills",
		  "Experience with responsive design principles"
		],
		"responsibilities": [
		  "Develop and maintain web interfaces for various devices",
		  "Collaborate with UX designers to implement designs",
		  "Optimize web performance and usability",
		  "Conduct code reviews and testing",
		  "Stay updated with frontend best practices"
		],
		"application_instructions": "If you're passionate about frontend development, please send your resume and portfolio to careers@fronttechinnovations.com.",
		"posted_date": "2023-10-16",
		"application_deadline": "2023-10-31"
	}	   
	
  ]


  module.exports = jobs
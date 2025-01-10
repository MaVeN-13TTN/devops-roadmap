const roadmapData = [
    {
        id: 1,
        title: "1. Git",
        description: "Git is a free tool used for source code management, enabling multiple developers to work together on non-linear development. The two most popular Git platforms are GitLab and GitHub.",
        resources: [
            { name: "Pro Git Book", url: "https://git-scm.com/book/en/v2", type: "FREE" },
            { name: "Learn Git by Atlassian", url: "https://www.atlassian.com/git", type: "FREE" },
            { name: "Learn Git Branching", url: "https://learngitbranching.js.org/", type: "FREE" },
            { name: "Learn Git & GitHub on CodeAcademy", url: "https://www.codecademy.com/learn/learn-git", type: "FREE" },
            { name: "Git Command Explorer", url: "https://gitexplorer.com/", type: "FREE" },
            { name: "Git Immersion", url: "https://gitimmersion.com/index.html", type: "FREE" },
            { name: "A Visual Git Reference", url: "http://marklodato.github.io/visual-git-guide/index-en.html", type: "FREE" }
        ],
        subtopics: [
            "Git basics and installation",
            "Repository management",
            "Branching and merging",
            "Pull requests",
            "Collaboration workflows",
            "Advanced Git commands"
        ]
    },
    {
        id: 2,
        title: "2. Programming Language",
        description: "As an engineer, it's recommended to know at least one programming language for automation scripts. Popular choices include Python, Go, and JavaScript.",
        resources: [
            { name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/", type: "FREE" },
            { name: "Python Crash Course", url: "https://ehmatthes.github.io/pcc/", type: "FREE" },
            { name: "The Modern JavaScript Tutorial", url: "https://javascript.info/", type: "FREE" },
            { name: "JavaScript Crash Course For Beginners", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c", type: "FREE" },
            { name: "Eloquent JavaScript, 3rd edition", url: "https://eloquentjavascript.net/", type: "FREE" },
            { name: "Go by Example", url: "https://gobyexample.com/", type: "FREE" }
        ],
        subtopics: [
            "Basic syntax and data types",
            "Control structures (if/else, loops)",
            "Functions and modules",
            "Object-oriented programming",
            "Error handling",
            "Package management"
        ]
    },
    {
        id: 3,
        title: "3. Linux & Scripting",
        description: "Most servers use Linux OS. You need to be comfortable with Linux CLI and scripting for automation tasks.",
        resources: [
            { name: "Operating System - Overview", url: "https://www.tutorialspoint.com/operating_system/os_overview.htm", type: "FREE" },
            { name: "Shell Scripting Tutorial", url: "https://www.shellscript.sh/", type: "FREE" },
            { name: "Powershell Tutorial for Beginners", url: "https://www.guru99.com/powershell-tutorial.html", type: "FREE" },
            { name: "Bash Reference Manual", url: "https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html", type: "FREE" },
            { name: "Ultimate Guide: Getting Started With Ubuntu", url: "https://itsfoss.com/getting-started-with-ubuntu/", type: "FREE" },
            { name: "FreeBSD Handbook", url: "https://docs.freebsd.org/en/books/handbook/", type: "FREE" },
            { name: "Linux command handbook", url: "https://www.freecodecamp.org/news/the-linux-commands-handbook/", type: "FREE" }
        ],
        subtopics: [
            "Basic Linux commands",
            "File system navigation",
            "Process management",
            "Shell scripting",
            "System administration",
            "Package management"
        ]
    },
    {
        id: 4,
        title: "4. Networking & Security",
        description: "Understanding network protocols and security is crucial for DevOps. Learn how devices communicate and how to secure them.",
        resources: [
            { name: "OSI Model Explained", url: "https://www.cloudflare.com/en-gb/learning/ddos/glossary/open-systems-interconnection-model-osi/", type: "FREE" },
            { name: "Computer Networking: A Top-Down Approach", url: "#", type: "Book" },
            { name: "TCP/IP and Networking Fundamentals", url: "https://www.pluralsight.com/courses/tcpip-networking-it-pros", type: "Course" },
            { name: "DevSecOps: Master Securing CI/CD", url: "https://www.udemy.com/course/devsecops/", type: "Course" },
            { name: "Hands-On Security in DevOps", url: "#", type: "Book" },
            { name: "Securing DevOps: Security in the Cloud", url: "#", type: "Book" }
        ],
        subtopics: [
            "OSI model",
            "TCP/IP protocols",
            "DNS and DHCP",
            "Firewalls configuration",
            "SSL/TLS",
            "Security best practices"
        ]
    },
    {
        id: 5,
        title: "5. Server Management",
        description: "Learn to manage infrastructure for reliable and optimal server performance.",
        resources: [
            { name: "What is a reverse proxy?", url: "https://www.cloudflare.com/en-gb/learning/cdn/glossary/reverse-proxy/", type: "FREE" },
            { name: "Cache Server", url: "https://networkencyclopedia.com/cache-server/", type: "FREE" },
            { name: "Reverse Proxy vs. Forward Proxy", url: "https://oxylabs.io/blog/reverse-proxy-vs-forward-proxy", type: "FREE" },
            { name: "What is load balancing?", url: "https://www.cloudflare.com/en-gb/learning/performance/what-is-load-balancing/", type: "FREE" },
            { name: "The NGINX Handbook", url: "https://www.freecodecamp.org/news/the-nginx-handbook/", type: "FREE" },
            { name: "Learn Apache Server", url: "https://www.twaino.com/en/blog/website-creation/apache-server-2/", type: "FREE" },
            { name: "Learn IIS", url: "https://www.dnsstuff.com/windows-iis-server-tools", type: "FREE" }
        ],
        subtopics: [
            "Forward and reverse proxies",
            "Caching servers",
            "Load balancing",
            "Web server configuration",
            "Server monitoring",
            "Performance optimization"
        ]
    },
    {
        id: 6,
        title: "6. Containers",
        description: "Learn Docker and container technologies for consistent application deployment.",
        resources: [
            { name: "What are Containers?", url: "https://cloud.google.com/learn/what-are-containers", type: "FREE" },
            { name: "Learning Containers From The Bottom Up", url: "https://iximiuz.com/en/posts/container-learning-path/", type: "FREE" },
            { name: "Docker Tutorial for Beginners", url: "https://www.youtube.com/watch?v=3c-iBn73dDE", type: "FREE" },
            { name: "Docker Mastery with Kubernetes", url: "https://www.udemy.com/course/docker-mastery/", type: "Course" },
            { name: "What is Service Mesh?", url: "https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh", type: "FREE" },
            { name: "DevOps with Kubernetes", url: "https://devopswithkubernetes.com/", type: "FREE" }
        ],
        subtopics: [
            "Docker basics",
            "Container networking",
            "Volumes and storage",
            "Dockerfile creation",
            "Docker Compose",
            "Container security"
        ]
    },
    {
        id: 7,
        title: "7. Container Orchestration",
        description: "Learn Kubernetes for automating deployment, scaling, and management of containerized applications.",
        resources: [
            { name: "Kubernetes Crash Course", url: "https://www.youtube.com/watch?v=s_o8dwzRlu4", type: "FREE" },
            { name: "Kubernetes Primer", url: "https://thenewstack.io/primer-how-kubernetes-came-to-be-what-it-is-and-why-you-should-care/", type: "Article" },
            { name: "CKA with Practice Tests", url: "https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/", type: "Course" },
            { name: "Learn Kubernetes", url: "https://kodekloud.com/learning-path-kubernetes/", type: "Course" },
            { name: "Kubernetes Gateway API", url: "https://gateway-api.sigs.k8s.io", type: "FREE" },
            { name: "Service Mesh with Linkerd", url: "https://linkerd.io/2.12/features/", type: "FREE" },
            { name: "Kubernetes Learning Path", url: "https://azure.microsoft.com/en-us/resources/kubernetes-learning-path/", type: "FREE" }
        ],
        subtopics: [
            "Kubernetes architecture",
            "Pod management",
            "Service deployment",
            "Scaling applications",
            "Configuration management",
            "Cluster administration"
        ]
    },
    {
        id: 8,
        title: "8. Infrastructure as Code",
        description: "Learn to manage infrastructure using code with tools like Terraform and Ansible.",
        resources: [
            { name: "Infrastructure-as-Code Basics", url: "https://thenewstack.io/guis-cli-apis-learn-basic-terms-of-infrastructure-as-code/", type: "FREE" },
            { name: "Official Terraform Tutorials", url: "https://learn.hashicorp.com/terraform", type: "FREE" },
            { name: "Comprehensive Guide to Terraform", url: "https://blog.gruntwork.io/a-comprehensive-guide-to-terraform-b3d32832baca", type: "FREE" },
            { name: "Terraform Documentation Guide", url: "https://medium.com/google-cloud/automate-terraform-documentation-like-a-pro-ed3e19998808", type: "FREE" },
            { name: "Getting Started With Ansible", url: "https://docs.ansible.com/ansible/latest/getting_started/", type: "FREE" },
            { name: "Puppet Courses", url: "https://training.puppet.com/", type: "FREE/PAID" },
            { name: "Learn Chef", url: "https://learn.chef.io/", type: "FREE" }
        ],
        subtopics: [
            "Infrastructure provisioning",
            "Configuration management",
            "State management",
            "Module development",
            "Best practices",
            "Version control integration"
        ]
    },
    {
        id: 9,
        title: "9. CI/CD",
        description: "Learn to implement continuous integration and deployment pipelines.",
        resources: [
            { name: "Continuous Integration", url: "https://martinfowler.com/articles/continuousIntegration.html", type: "FREE" },
            { name: "CI/CD Pipeline Introduction", url: "https://semaphoreci.com/blog/cicd-pipeline", type: "FREE" },
            { name: "GitLab CI/CD Tutorial", url: "https://docs.gitlab.com/ee/ci/quick_start/", type: "FREE" },
            { name: "Jenkins Zero To Hero", url: "https://www.udemy.com/course/jenkins-from-zero-to-hero", type: "Course" },
            { name: "GitHub Actions", url: "https://learn.microsoft.com/en-us/users/githubtraining/collections/n5p4a5z7keznp5", type: "FREE" },
            { name: "Azure DevOps Guide", url: "https://milan.milanovic.org/post/ci-cd-with-azure-devops-yaml/", type: "FREE" }
        ],
        subtopics: [
            "Pipeline creation",
            "Build automation",
            "Test automation",
            "Deployment strategies",
            "Environment management",
            "Pipeline security"
        ]
    },
    {
        id: 10,
        title: "10. Monitoring & Observability",
        description: "Learn to monitor applications and infrastructure in production.",
        resources: [
            { name: "Observability Guide", url: "https://devopscube.com/what-is-observability/", type: "FREE" },
            { name: "Monitoring Microservices", url: "https://thenewstack.io/the-hows-whys-and-whats-of-monitoring-microservices/", type: "FREE" },
            { name: "DevOps Monitoring", url: "https://www.atlassian.com/devops/devops-tools/devops-monitoring", type: "FREE" },
            { name: "Learn Prometheus", url: "https://prometheus.io/docs/tutorials/getting_started/", type: "FREE" },
            { name: "Learn Grafana", url: "https://grafana.com/tutorials/", type: "FREE" },
            { name: "Elastic Stack", url: "https://www.elastic.co/guide/index.html", type: "FREE" }
        ],
        subtopics: [
            "Metrics collection",
            "Log aggregation",
            "Alert management",
            "Dashboard creation",
            "Performance monitoring",
            "Troubleshooting"
        ]
    },
    {
        id: 11,
        title: "11. Cloud Providers",
        description: "Learn to work with major cloud platforms like AWS, Azure, or Google Cloud.",
        resources: [
            { name: "Azure Fundamentals (AZ-900)", url: "https://learn.microsoft.com/en-us/certifications/exams/az-900", type: "FREE" },
            { name: "Azure Fundamentals Course", url: "https://www.youtube.com/watch?v=NKEFWyqJ5XA", type: "FREE" },
            { name: "AWS Cloud Practitioner", url: "https://www.udemy.com/course/aws-certified-cloud-practitioner-new", type: "Course" },
            { name: "AWS Developer Path", url: "https://acloudguru.com/learning-paths/aws-developer", type: "Course" }
        ],
        subtopics: [
            "Cloud architecture",
            "Identity management",
            "Network configuration",
            "Storage solutions",
            "Serverless computing",
            "Cost optimization"
        ]
    },
    {
        id: 12,
        title: "12. Software Engineering Practices",
        description: "Learn Agile methodologies and software development practices.",
        resources: [
            { name: "What is Scrum?", url: "https://www.atlassian.com/agile/scrum", type: "FREE" },
            { name: "Ways To Learn Scrum", url: "https://www.scrum.org/resources/ways-learn-about-scrum", type: "FREE" },
            { name: "SDLC Guide", url: "https://www.guru99.com/software-development-life-cycle-tutorial.html", type: "FREE" },
            { name: "Agile in Jira", url: "https://university.atlassian.com/student/page/1117976", type: "FREE" },
            { name: "Learn SAFe", url: "https://www.scaledagileframework.com/", type: "FREE" },
            { name: "GitLab DevOps Guide", url: "https://page.gitlab.com/resources-ebook-beginners-guide-devops.html", type: "FREE" }
        ],
        subtopics: [
            "Agile methodologies",
            "Scrum framework",
            "SDLC phases",
            "Version control",
            "Code review practices",
            "Documentation"
        ]
    }
];

class ProgressTracker {
    constructor() {
        this.topicsContainer = document.querySelector('.topics-container');
        this.overallProgress = document.getElementById('overall-progress');
        this.progressText = document.getElementById('overall-progress-text');
        this.searchInput = document.getElementById('search-input');
        this.modal = document.getElementById('resource-modal');
        this.themeToggleBtn = document.getElementById('theme-toggle-btn');
        
        // Initialize theme from localStorage or default to light
        const savedTheme = localStorage.getItem('theme');
        this.currentTheme = savedTheme || 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Load and render topics
        this.loadProgress();
        this.renderTopics();
        this.updateOverallProgress();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.currentTheme = newTheme;
    }

    loadProgress() {
        this.progress = JSON.parse(localStorage.getItem('devopsProgress')) || {};
    }

    saveProgress() {
        localStorage.setItem('devopsProgress', JSON.stringify(this.progress));
    }

    renderTopics(filter = 'all') {
        let html = '';
        roadmapData.forEach(topic => {
            const topicProgress = this.progress[topic.id] || {
                completed: false,
                subtopics: new Array(topic.subtopics.length).fill(false)
            };

            // Apply filters
            if (filter === 'completed' && !topicProgress.completed) return;
            if (filter === 'in-progress' && (topicProgress.completed || !topicProgress.subtopics.some(st => st))) return;

            html += this.createTopicCard(topic, topicProgress);
        });
        this.topicsContainer.innerHTML = html;
    }

    createTopicCard(topic, topicProgress) {
        const subtopicsHtml = topic.subtopics.map((subtopic, index) => `
            <li class="subtopic-item">
                <input type="checkbox" 
                    class="subtopic-checkbox" 
                    data-topic="${topic.id}" 
                    data-index="${index}"
                    ${topicProgress.subtopics[index] ? 'checked' : ''}>
                <span>${subtopic}</span>
            </li>
        `).join('');

        const completedSubtopics = topicProgress.subtopics.filter(Boolean).length;
        const progress = Math.round((completedSubtopics / topic.subtopics.length) * 100);
        const status = topicProgress.completed ? 'completed' : progress > 0 ? 'in-progress' : 'not-started';

        return `
            <div class="topic-card ${status}" data-topic="${topic.id}">
                <div class="topic-header">
                    <h3 class="topic-title">${topic.title}</h3>
                    <div class="status-controls">
                        <span class="status-badge ${status}">${status.replace('-', ' ')}</span>
                        <button class="mark-complete-btn ${topicProgress.completed ? 'completed' : ''}"
                            data-topic="${topic.id}">
                            ${topicProgress.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                    </div>
                </div>
                
                <div class="topic-content">
                    <div class="topic-info">
                        <p class="topic-description">${topic.description}</p>
                        <button class="resources-button" data-topic="${topic.id}">View Resources</button>
                    </div>
                    
                    <div class="topic-progress">
                        <div class="progress-info">
                            <div class="progress-bar-container">
                                <div class="progress-bar" style="width: ${progress}%"></div>
                            </div>
                            <span class="progress-text">${progress}%</span>
                        </div>
                        
                        <div class="subtopics-section">
                            <h4>Subtopics (${completedSubtopics}/${topic.subtopics.length})</h4>
                            <ul class="subtopics-list">
                                ${subtopicsHtml}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    showResourcesModal(topicId) {
        const topic = roadmapData.find(t => t.id === topicId);
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        
        const resourcesByType = topic.resources.reduce((acc, resource) => {
            const type = resource.type.toLowerCase();
            if (!acc[type]) acc[type] = [];
            acc[type].push(resource);
            return acc;
        }, {});

        modalTitle.textContent = `${topic.title} Resources`;
        
        const content = `
            <div class="modal-description">${topic.description}</div>
            <div class="resources-grid">
                ${Object.entries(resourcesByType).map(([type, resources]) => `
                    <div class="resource-category">
                        <h3 class="resource-category-title">
                            <span class="resource-type ${type.toLowerCase()}">${type}</span>
                            <span class="resource-count">${resources.length} resources</span>
                        </h3>
                        <div class="resources-list">
                            ${resources.map(resource => `
                                <a href="${resource.url}" target="_blank" class="resource-link">
                                    <div class="resource-info">
                                        <span class="resource-name">${resource.name}</span>
                                        <span class="resource-description">${resource.description || ''}</span>
                                    </div>
                                    <div class="resource-icon">
                                        <i class="fas fa-external-link-alt"></i>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        modalContent.innerHTML = content;
        this.modal.style.display = 'block';
    }

    updateOverallProgress() {
        const totalSubtopics = roadmapData.reduce((total, topic) => total + topic.subtopics.length, 0);
        const completedSubtopics = Object.values(this.progress).reduce((total, topicProgress) => {
            return total + topicProgress.subtopics.filter(Boolean).length;
        }, 0);
        
        const progress = Math.round((completedSubtopics / totalSubtopics) * 100);
        const progressBar = document.getElementById('overall-progress');
        const progressText = document.getElementById('overall-progress-text');
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
    }

    setupEventListeners() {
        // Theme toggle
        this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        
        // Check for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                this.currentTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', this.currentTheme);
            }
        });

        // Topic completion toggle
        this.topicsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('mark-complete-btn')) {
                const topicId = parseInt(e.target.dataset.topic);
                const isCompleted = e.target.classList.contains('completed');
                this.toggleTopicCompletion(topicId, !isCompleted);
            } else if (e.target.classList.contains('resources-button')) {
                const topicId = parseInt(e.target.dataset.topic);
                this.showResourcesModal(topicId);
            }
        });

        // Subtopic checkboxes
        this.topicsContainer.addEventListener('change', (e) => {
            if (e.target.classList.contains('subtopic-checkbox')) {
                const topicId = parseInt(e.target.dataset.topic);
                const subtopicIndex = parseInt(e.target.dataset.index);
                this.toggleSubtopicCompletion(topicId, subtopicIndex, e.target.checked);
            }
        });

        // Modal close button
        document.querySelector('.close-modal').addEventListener('click', () => {
            this.modal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.modal.style.display = 'none';
            }
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderTopics(btn.dataset.filter);
            });
        });

        // Search functionality
        this.searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('.topic-card').forEach(card => {
                const title = card.querySelector('.topic-title').textContent.toLowerCase();
                const subtopics = Array.from(card.querySelectorAll('.subtopic-item'))
                    .map(item => item.textContent.toLowerCase());
                
                const matches = title.includes(searchTerm) || 
                    subtopics.some(subtopic => subtopic.includes(searchTerm));
                
                card.style.display = matches ? 'block' : 'none';
            });
        });
    }

    toggleTopicCompletion(topicId, completed) {
        const topic = this.progress[topicId] || { subtopics: [] };
        topic.completed = completed;
        
        // If marking as complete, fill all subtopics
        if (completed) {
            const topicData = roadmapData.find(t => t.id === topicId);
            topic.subtopics = new Array(topicData.subtopics.length).fill(true);
            
            // Get button position for confetti
            const button = document.querySelector(`[data-topic="${topicId}"] .mark-complete-btn`);
            if (button) {
                const rect = button.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                confetti.shoot(x, y);
            }
        }
        
        this.progress[topicId] = topic;
        this.saveProgress();
        this.renderTopics();
        this.updateOverallProgress();
    }

    toggleSubtopicCompletion(topicId, subtopicIndex, completed) {
        if (!this.progress[topicId]) {
            this.progress[topicId] = {
                completed: false,
                subtopics: new Array(roadmapData.find(t => t.id === topicId).subtopics.length).fill(false)
            };
        }
        this.progress[topicId].subtopics[subtopicIndex] = completed;
        
        // Update topic completion based on subtopics
        this.progress[topicId].completed = this.progress[topicId].subtopics.every(Boolean);
        
        this.saveProgress();
        this.renderTopics();
        this.updateOverallProgress();
    }
}

// Initialize the progress tracker when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ProgressTracker();
});

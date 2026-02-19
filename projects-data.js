const projectsData = {
    'stockmaster': {
        name: 'StockMaster',
        tagline: 'Inventory Management System',
        description: 'A comprehensive inventory management system built with ASP.NET Core, implementing Clean Architecture principles with Repository Pattern and Unit of Work for optimal performance and maintainability.',
        githubUrl: 'https://github.com/Eng-ahmed-dev1/StockMaster',
        technologies: [
            { name: 'ASP.NET Core 8', color: 'blue' },
            { name: 'SQL Server', color: 'purple' },
            { name: 'Entity Framework Core', color: 'green' },
            { name: 'Repository Pattern', color: 'pink' },
            { name: 'LINQ', color: 'red' }
        ],
        mainImage: './Images/Projects_Images/StockMaster/Images/Dark-ModeTransactionDashBoard.png',
        gallery: [
            {
                image: './Images/Projects_Images/StockMaster/Images/Dark-ModeTransactionDashBoard.png',
                title: 'Transaction Dashboard',
                description: 'Real-time inventory tracking with comprehensive transaction management and analytics'
            },
            {
                image: './Images/Projects_Images/StockMaster/Images/Light-ModeProfile.png',
                title: 'User Profile',
                description: 'All supplier information and some quick actions'
            },
            {
                image: './Images/Projects_Images/StockMaster/Images/PDF.png',
                title: 'Reports & Analytics',
                description: 'Comprehensive reporting system with data visualization'
            }
        ],
        features: [
            {
                icon: 'package',
                title: 'Inventory Tracking',
                description: 'Real-time stock level monitoring with automated alerts for low inventory',
                color: 'blue'
            },
            {
                icon: 'bar-chart',
                title: 'Analytics & Reports',
                description: 'Comprehensive reporting system with data visualization and insights',
                color: 'purple'
            },
            {
                icon: 'database',
                title: 'Layerd Architecture',
                description: 'Built with Repository Pattern and Layerd Architecture maintainability',
                color: 'green'
            },
            {
                icon: 'shield',
                title: 'Security',
                description: 'Role-based access control with secure authentication and authorization',
                color: 'orange'
            },
            {
                icon: 'zap',
                title: 'Performance',
                description: 'Optimized queries and caching strategies for fast response times',
                color: 'pink'
            },
            {
                icon: 'smartphone',
                title: 'Responsive Design',
                description: 'Fully responsive interface that works seamlessly on all devices',
                color: 'yellow'
            }
        ],
        implementation: [
            {
                title: 'Architecture Pattern',
                description: 'StockMaster follows Layerd Architecture principles, ensuring separation of concerns and maintaining high code quality. The project is structured into distinct layers: DAl ,PL , BLL',
                color: 'blue'
            },
            {
                title: 'Repository Pattern',
                description: 'Implements the Repository Pattern for data access abstraction and  enabling better testability and maintainability of the codebase.',
                color: 'purple'
            },
            {
                title: 'Database Design',
                description: 'Utilizes Entity Framework Core with SQL Server for robust data persistence. The database schema is optimized with proper indexing and relationships to ensure fast query execution and data integrity.',
                color: 'green'
            }
        ]
    },

    'management-system': {
        name: 'Management System',
        tagline: 'Project & Task Management Platform',
        description: 'A comprehensive project and task management system designed to help teams organize their work efficiently. The main idea is creating projects, assigning tasks within them, and allowing team members to collaborate seamlessly.',
        githubUrl: 'https://github.com/Eng-ahmed-dev1/Managment_SYS',
        technologies: [
            { name: 'ASP.NET Core', color: 'blue' },
            { name: 'SQL Server', color: 'purple' },
            { name: 'Entity Framework Core', color: 'green' },
            { name: 'LINQ', color: 'red' }
        ],
        mainImage: './Images/Projects_Images/Managment_System/Images/All Projects.png',
        gallery: [
            {
                image: './Images/Projects_Images/Managment_System/Images/All Projects.png',
                title: 'Projects Dashboard',
                description: 'Overview of all projects with status tracking and quick access'
            },
            {
                image: './Images/Projects_Images/Managment_System/Images/All Tasks.png',
                title: 'Task Assignment',
                description: 'Easy task creation and assignment to team members'
            },
            {
                image: './Images/Projects_Images/Managment_System/Images/All TeamMembers.png',
                title: 'Team Collaboration',
                description: 'Real-time collaboration features for better team productivity'
            }
        ],
        features: [
            {
                icon: 'folder',
                title: 'Project Management',
                description: 'Create and manage multiple projects with detailed tracking',
                color: 'blue'
            },
            {
                icon: 'check-square',
                title: 'Task Assignment',
                description: 'Assign tasks to team members with priority levels and deadlines',
                color: 'purple'
            },
            {
                icon: 'users',
                title: 'Team Collaboration',
                description: 'Enable seamless collaboration between team members',
                color: 'green'
            },
            {
                icon: 'calendar',
                title: 'Deadline Tracking',
                description: 'Monitor task deadlines and project milestones',
                color: 'orange'
            },
            {
                icon: 'trending-up',
                title: 'Progress Monitoring',
                description: 'Track project progress and team performance',
                color: 'pink'
            },
        ],
        implementation: [
            {
                title: 'View Models',
                description: 'To ensurt transfer the data betweent the classes.',
                color: 'blue'
            },
            {
                title: 'Database Structure',
                description: 'Normalized database design with Entity Framework Core for efficient data management and relationships.',
                color: 'purple'
            },
            {
                title: 'MVC Development',
                description: 'MVC Action Result for seamless integration and frontend communication.',
                color: 'green'
            }
        ]
    },

    'appointment-system': {
        name: 'Appointment Management System',
        tagline: 'Professional Appointment Scheduling',
        description: 'A robust appointment management system with desktop interface, designed to streamline scheduling and booking processes for clinics and medical centers.',
        githubUrl: 'https://github.com/Eng-ahmed-dev1/Appoiment-Project-WPF',
        technologies: [
            { name: 'WPF', color: 'red' },
            { name: 'XAML', color: 'blue' },
            { name: 'SQL Server', color: 'purple' },
            { name: 'Entity Framework Core', color: 'green' },
            { name: 'C#', color: 'orange' }
        ],
        mainImage: './Images/Projects_Images/Appoiment_Managment_System/Images/Dashboard.png',
        gallery: [
            {
                image: './Images/Projects_Images/Appoiment_Managment_System/Images/Dashboard.png',
                title: 'Main Dashboard',
                description: 'Comprehensive dashboard showing all appointments and schedules'
            },
            {
                image: './Images/Projects_Images/Appoiment_Managment_System/Images/Reception.png',
                title: 'Reception Interface',
                description: 'User-friendly reception interface for quick appointment scheduling'
            },
            {
                image: './Images/Projects_Images/Appoiment_Managment_System/Images/Login.png',
                title: 'Login Page',
                description: 'Secure login page for authentication and access control'
            }
        ],
        features: [
            {
                icon: 'calendar-check',
                title: 'Appointment Scheduling',
                description: 'Easy-to-use appointment booking and scheduling system',
                color: 'orange'
            },
            {
                icon: 'monitor',
                title: 'WPF Desktop App',
                description: 'Full-featured desktop application for advanced management',
                color: 'red'
            },
            {
                icon: 'clock',
                title: 'Time Slot Management',
                description: 'Flexible time slot configuration and availability management',
                color: 'purple'
            },
            {
                icon: 'user-check',
                title: 'Patient Management',
                description: 'Comprehensive patient database with appointment history',
                color: 'green'
            },
        ],
        implementation: [
            {
                title: 'WPF Architecture',
                description: 'Built with WPF and XAML for rich desktop user experience with modern UI/UX design.',
                color: 'red'
            },
            {
                title: 'MVVM Pattern',
                description: 'Implements Model-View-ViewModel pattern for separation of concerns and testability.',
                color: 'blue'
            },
            {
                title: 'Data Management',
                description: 'Entity Framework Core with SQL Server for reliable data persistence and management.',
                color: 'purple'
            }
        ]
    },

    'grade-system': {
        name: 'Grades Management System',
        tagline: 'Academic Performance Tracking',
        description: 'A professional grade initialization and management system with average calculation capabilities to monitor student performance across multiple courses and assignments.',
        githubUrl: 'https://github.com/Eng-ahmed-dev1/Grades-Management-System',
        technologies: [
            { name: 'WPF', color: 'red' },
            { name: 'XAML', color: 'blue' },
            { name: 'SQL Server', color: 'purple' },
            { name: 'Entity Framework Core', color: 'green' },
            { name: 'C#', color: 'orange' }
        ],
        mainImage: './Images/Projects_Images/Assigment_Initilization/Images/Teacher Dashboard.png',
        gallery: [
            {
                image: './Images/Projects_Images/Assigment_Initilization/Images/Teacher Dashboard.png',
                title: 'Teacher Dashboard',
                description: 'Comprehensive dashboard showing all students and students in specific courses with grade management'
            },
            {
                image: './Images/Projects_Images/Assigment_Initilization/Images/Student Dashboard.png',
                title: 'Student Dashboard',
                description: 'Student dashboard displaying all enrolled courses with current grades and performance'
            },
            {
                image: './Images/Projects_Images/Assigment_Initilization/Images/Login.png',
                title: 'Login Page',
                description: 'Secure authentication system for teachers and students'
            }
        ],
        features: [
            {
                icon: 'graduation-cap',
                title: 'Grade Management',
                description: 'Complete grade initialization and management for assignments and exams',
                color: 'blue'
            },
            {
                icon: 'calculator',
                title: 'Average Calculation',
                description: 'Automatic calculation of student averages and performance metrics',
                color: 'purple'
            },
            {
                icon: 'book-open',
                title: 'Course Tracking',
                description: 'Track student performance across multiple courses',
                color: 'green'
            },
            {
                icon: 'bar-chart-2',
                title: 'Performance Analytics',
                description: 'Visual analytics and reports for student performance monitoring',
                color: 'orange'
            },
        ],
        implementation: [
            {
                title: 'WPF Desktop Application',
                description: 'Rich desktop application built with WPF and XAML for advanced features and responsive UI.',
                color: 'red'
            },
            {
                title: 'Role-Based Access',
                description: 'Different dashboards and permissions for teachers and students with secure authentication.',
                color: 'blue'
            },
            {
                title: 'Database Architecture',
                description: 'Normalized database design with Entity Framework Core for efficient grade and student data management.',
                color: 'purple'
            }
        ]
    },

    'course-system': {
        name: 'Course Management System',
        tagline: 'Educational Course Administration',
        description: 'A comprehensive course management system for organizing courses, managing student enrollments, and tracking academic progress in educational institutions.',
        githubUrl: 'https://github.com/Eng-ahmed-dev1/Course-Management-System',
        technologies: [
            { name: 'WPF', color: 'red' },
            { name: 'XAML', color: 'blue' },
            { name: 'SQL Server', color: 'purple' },
            { name: 'Entity Framework Core', color: 'green' },
            { name: 'C#', color: 'orange' }
        ],
        mainImage: './Images/Projects_Images/Course_Managment/Images/Teacher Dashboard.png',
        gallery: [
            {
                image: './Images/Projects_Images/Course_Managment/Images/Teacher Dashboard.png',
                title: 'Course Dashboard',
                description: 'Main dashboard for course management and student enrollment tracking'
            },
            {
                image: './Images/Projects_Images/Course_Managment/Images/Login.png',
                title: 'Login Interface',
                description: 'Secure login system for course administrators and instructors'
            },
            {
                image: './Images/Projects_Images/Course_Managment/Images/Student Dashboard.png',
                title: 'Student View',
                description: 'Student interface showing enrolled courses and academic information'
            }
        ],
        features: [
            {
                icon: 'book',
                title: 'Course Creation',
                description: 'Create and manage multiple courses with detailed information',
                color: 'blue'
            },
            {
                icon: 'users',
                title: 'Student Enrollment',
                description: 'Manage student enrollments and course registrations',
                color: 'purple'
            },
            {
                icon: 'calendar',
                title: 'Schedule Management',
                description: 'Organize course schedules and academic calendar',
                color: 'green'
            },
            {
                icon: 'file-text',
                title: 'Course Materials',
                description: 'Manage course content and educational materials',
                color: 'orange'
            },
        ],
        implementation: [
            {
                title: 'WPF Framework',
                description: 'Built with WPF for rich desktop experience with modern Material Design UI.',
                color: 'red'
            },
            {
                title: 'Data Management',
                description: 'Entity Framework Core with SQL Server for robust course and student data handling.',
                color: 'purple'
            },
            {
                title: 'MVVM Architecture',
                description: 'Clean architecture following MVVM pattern for maintainability and scalability.',
                color: 'blue'
            }
        ]
    },

    'E-Commerce-system': {
        name: 'E-Commerce Management System',
        tagline: 'Complete Online Store Solution',
        description: 'A professional e-commerce management system with product catalog, shopping cart, inventory management, and order processing capabilities for online business operations.',
        githubUrl: 'https://github.com/Eng-ahmed-dev1/E-Commerce-Management-System',
        technologies: [
            { name: 'WPF', color: 'red' },
            { name: 'XAML', color: 'blue' },
            { name: 'SQL Server', color: 'purple' },
            { name: 'Entity Framework Core', color: 'green' },
            { name: 'C#', color: 'orange' }
        ],
        mainImage: './Images/Projects_Images/E_commerce_WPF/Images/Product Managment Dashboard.png',
        gallery: [
            {
                image: './Images/Projects_Images/E_commerce_WPF/Images/Product Managment Dashboard.png',
                title: 'Product Management',
                description: 'Comprehensive product management dashboard with inventory control'
            },
            {
                image: './Images/Projects_Images/E_commerce_WPF/Images/Product Catalog Dashboard.png',
                title: 'Product Catalog',
                description: 'Browse and manage product catalog with categories and pricing'
            },
            {
                image: './Images/Projects_Images/E_commerce_WPF/Images/Cart Dashboard.png',
                title: 'Shopping Cart',
                description: 'User-friendly shopping cart interface for order management'
            },
            {
                image: './Images/Projects_Images/E_commerce_WPF/Images/Login.png',
                title: 'Login System',
                description: 'Secure authentication for customers and administrators'
            }
        ],
        features: [
            {
                icon: 'shopping-bag',
                title: 'Product Catalog',
                description: 'Complete product catalog management with categories and variations',
                color: 'orange'
            },
            {
                icon: 'shopping-cart',
                title: 'Shopping Cart',
                description: 'Full-featured shopping cart with quantity management and totals',
                color: 'blue'
            },
            {
                icon: 'package',
                title: 'Inventory Management',
                description: 'Real-time inventory tracking and stock level monitoring',
                color: 'purple'
            },
            {
                icon: 'credit-card',
                title: 'Order Processing',
                description: 'Complete order management and checkout system',
                color: 'green'
            },
        ],
        implementation: [
            {
                title: 'WPF Desktop Platform',
                description: 'Rich desktop e-commerce application built with WPF for offline and online operations.',
                color: 'red'
            },
            {
                title: 'Product Management',
                description: 'Advanced product catalog system with dynamic pricing and inventory management.',
                color: 'orange'
            },
            {
                title: 'Database Design',
                description: 'Optimized database schema with Entity Framework Core for products, orders, and customers.',
                color: 'purple'
            }
        ]
    },

    'Inventory-system': {
        name: 'Inventory Management System',
        tagline: 'Professional Stock Control Solution',
        description: 'A comprehensive inventory management system designed for warehouses and stock clerks to efficiently manage products, track stock levels, and handle shipping operations.',
        githubUrl: 'https://github.com/Eng-ahmed-dev1/Inventory-Management-System',
        technologies: [
            { name: 'WPF', color: 'red' },
            { name: 'XAML', color: 'blue' },
            { name: 'SQL Server', color: 'purple' },
            { name: 'Entity Framework Core', color: 'green' },
            { name: 'C#', color: 'orange' }
        ],
        mainImage: './Images/Projects_Images/Inventory_Managment_System/Images/Admin Dashboard.png',
        gallery: [
            {
                image: './Images/Projects_Images/Inventory_Managment_System/Images/Admin Dashboard.png',
                title: 'Admin Dashboard',
                description: 'Comprehensive admin panel for complete inventory oversight and management'
            },
            {
                image: './Images/Projects_Images/Inventory_Managment_System/Images/Stock Clerk Dashboard.png',
                title: 'Stock Clerk Dashboard',
                description: 'Specialized dashboard for stock clerks to manage daily operations and shipping'
            },
            {
                image: './Images/Projects_Images/Inventory_Managment_System/Images/Login.png',
                title: 'Login System',
                description: 'Role-based authentication for admins and stock clerks'
            }
        ],
        features: [
            {
                icon: 'package',
                title: 'Stock Management',
                description: 'Complete stock level tracking with real-time updates and alerts',
                color: 'blue'
            },
            {
                icon: 'truck',
                title: 'Shipping Operations',
                description: 'Manage product shipping and distribution efficiently',
                color: 'green'
            },
            {
                icon: 'alert-triangle',
                title: 'Low Stock Alerts',
                description: 'Automatic alerts for low stock levels and reorder notifications',
                color: 'orange'
            },
            {
                icon: 'users',
                title: 'Role-Based Access',
                description: 'Different access levels for administrators and stock clerks',
                color: 'purple'
            },
        ],
        implementation: [
            {
                title: 'WPF Application',
                description: 'Powerful desktop application built with WPF for warehouse and inventory management.',
                color: 'red'
            },
            {
                title: 'Multi-Role System',
                description: 'Separate dashboards and permissions for admins and stock clerks with role-based authentication.',
                color: 'blue'
            },
            {
                title: 'Inventory Tracking',
                description: 'Real-time inventory tracking with Entity Framework Core and optimized database queries.',
                color: 'purple'
            }
        ]
    }
};

// دالة لجلب بيانات المشروع من الـ URL
function getProjectFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    return projectsData[projectId] || null;
}

// دالة لعرض بيانات المشروع في الصفحة
function displayProjectDetails() {
    const project = getProjectFromUrl();

    if (!project) {
        // لو المشروع مش موجود، نرجع للصفحة الرئيسية
        window.location.href = 'index.html';
        return;
    }

    // تحديث عنوان الصفحة
    document.title = `${project.name} - Project Details | Eng Ahmed Alaa`;

    // عرض المعلومات الأساسية
    document.getElementById('project-tagline').textContent = project.tagline;
    document.getElementById('project-name').innerHTML = project.name.includes('Master')
        ? project.name.replace('Master', '<span class="text-blue-500">Master</span>')
        : project.name;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('github-link').href = project.githubUrl;

    // عرض التقنيات
    const techStackContainer = document.getElementById('tech-stack');
    techStackContainer.innerHTML = project.technologies.map(tech =>
        `<span class="px-4 py-2 bg-${tech.color}-500/10 text-${tech.color}-400 rounded-full text-sm font-medium border border-${tech.color}-500/20">${tech.name}</span>`
    ).join('');

    // عرض معرض الصور
    const galleryContainer = document.getElementById('gallery-grid');
    galleryContainer.innerHTML = project.gallery.map(item => `
        <div class="reveal-section tilt-card group relative bg-[#0f0f0f] rounded-2xl border border-white/10 p-1 overflow-hidden cursor-active image-zoom-trigger">
            <div class="bg-[#0a0a0a] rounded-xl overflow-hidden">
                <div class="relative overflow-hidden">
                    <img src="${item.image}" 
                         alt="${item.title}" 
                         class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 zoomable-image"
                         data-zoom-src="${item.image}">
                    <!-- Zoom Icon Overlay -->
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                        <div class="bg-blue-500 rounded-full p-3">
                            <i data-lucide="zoom-in" class="w-6 h-6 text-white"></i>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                    <p class="text-gray-400 text-sm">${item.description}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    // إضافة Image Zoom Modal
    initImageZoom();

    // عرض المميزات
    const featuresContainer = document.getElementById('features-grid');
    featuresContainer.innerHTML = project.features.map(feature => `
        <div class="reveal-section bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-${feature.color}-500/30 transition-all cursor-active">
            <div class="p-3 bg-${feature.color}-500/10 rounded-lg text-${feature.color}-500 w-fit mb-4">
                <i data-lucide="${feature.icon}" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">${feature.title}</h3>
            <p class="text-gray-400 text-sm">${feature.description}</p>
        </div>
    `).join('');

    // عرض التنفيذ التقني
    const implementationContainer = document.getElementById('implementation-content');
    implementationContainer.innerHTML = project.implementation.map(impl => `
        <div>
            <h3 class="text-xl font-bold mb-3 text-${impl.color}-400">${impl.title}</h3>
            <p class="text-gray-400 leading-relaxed">${impl.description}</p>
        </div>
    `).join('');

    // تفعيل الأيقونات
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // تفعيل الـ reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));
}

// تحميل البيانات عند تحميل الصفحة
if (window.location.pathname.includes('project-details.html')) {
    document.addEventListener('DOMContentLoaded', displayProjectDetails);
}

// ============================================
// IMAGE ZOOM MODAL FUNCTIONALITY
// ============================================
function initImageZoom() {
    // Create modal HTML
    const modalHTML = `
        <div id="image-zoom-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-black/95 backdrop-blur-sm">
            <!-- Close Button -->
            <button id="close-zoom" class="absolute top-6 right-6 z-[10000] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all">
                <i data-lucide="x" class="w-6 h-6 text-white"></i>
            </button>
            
            <!-- Image Container -->
            <div class="relative w-full h-full flex items-center justify-center p-8">
                <img id="zoomed-image" src="" alt="" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl">
            </div>
            
            <!-- Image Info -->
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full">
                <p id="zoom-image-title" class="text-white text-sm font-medium"></p>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const modal = document.getElementById('image-zoom-modal');
    const zoomedImage = document.getElementById('zoomed-image');
    const imageTitle = document.getElementById('zoom-image-title');
    const closeBtn = document.getElementById('close-zoom');
    
    // Add click listeners to all zoomable images
    document.querySelectorAll('.zoomable-image').forEach(img => {
        img.addEventListener('click', () => {
            const imgSrc = img.getAttribute('data-zoom-src') || img.src;
            const title = img.alt;
            
            zoomedImage.src = imgSrc;
            imageTitle.textContent = title;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
            
            // Fade in animation
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        });
    });
    
    // Close modal function
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }, 300);
    };
    
    // Close on button click
    closeBtn.addEventListener('click', closeModal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    // Initialize Lucide icons for modal
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}


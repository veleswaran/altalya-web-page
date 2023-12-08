const data = [
    {
        name:"java",
        img: "java.png",
        title: "Java",
        price: 49.00,
        lesson: 8,
        students: 16,
        coursedetail:
            {
                overview:`Java, a versatile and widely used programming language, offers portability, performance, and security. With its "write once, run anywhere" approach, Java applications can run on various platforms. It excels in object-oriented programming, featuring strong memory management, multi-threading, and robust libraries. Java powers enterprise-level systems, Android mobile apps, and web applications through frameworks like Spring and Hibernate. Its vast ecosystem includes tools like Eclipse and IntelliJ IDEA, fostering a rich developer community. Known for its stability and scalability, Java remains integral in industries spanning finance, e-commerce, and beyond, driving innovation and powering complex software solutions globally.`,
                syllabus:{
                    Introduction:["Java Introduction","Java Syntax","Java Ouput/Print Statement","Java Comments","Variables"],
                    "Datatypes and Scanner":["Primitive Datatypes","Non-Primitive Datatypes","Scanner Methods"],
                    Operator:["Unary","Binary","Arithmetic Operator","Assignment Operator","Relational Operator","Logical Operator","Bitwise Operator","Ternary"],
                    "Conditional Statement":["if","if else","if else if","nested if","switch"],
                    "Loops Statement":["While Loop","Do While Loop","For Loop","Break","Continue"],
                    Arrays:["Single Dimennsional Array","Multi-Dimensional Array"],
                    Functions:["String Functions","Array Functions","Math Functions","User-Defined Functions"],
                    Typecast:["Implicit Method","Explicit Method"],
                    "OOPs - Object Oriented Programming":["Class","Object","Abstraction","Inheritance","Polymorphism",'Encapsulation']
                }
            }   
    },
    {
        name:"php",
        img: "php_image.png",
        title: "PHP",
        price: 49.00,
        lesson: 8,
        students: 16,
        coursedetail:
            {
                overview:"PHP, a popular server-side scripting language, fuels dynamic web development. Known for its ease of use and embedded HTML, PHP empowers websites with interactive features and database connectivity. It integrates seamlessly with various databases like MySQL and scales well for web applications. PHP frameworks like Laravel and Symfony streamline development, offering MVC architecture and robust security measures. Its open-source nature and extensive community contribute to continuous enhancement and support. PHP's versatility powers content management systems (CMS) like WordPress, underpinning a vast array of websites, from small-scale blogs to enterprise-level platforms, making it a cornerstone of web development for over two decades.",
                syllabus:{
                    Introduction:["php Introduction ","php Syntax","php echo/Print Statement","php Comments","Variables"],
                    "Datatypes and readline ":["String","Integer","Float" ,"Boolean","Array","Object","NULL","Resource","readline() Function"],
                    Operator:["Arithmetic Operator","Assignment Operator","Relational of comparision Operator","Logical Operator","Bitwise Operator","Ternary","unary (Increment/Decrement) oparator"],
                    "Conditional Statement":["if","if else","if else if","nested if","switch"],
                    "Loops Statement":["While Loop","Do While Loop","For Loop","foreach","Break","Continue"],
                    Arrays:["Single Dimennsional Array","Multi-Dimensional Array","Associative arrays"],
                    Functions:["String Functions","Array Functions","Math Functions","User-Defined Functions"],
                    Typecast:["Implicit Method","Explicit Method"],
                    "OOPs - Object Oriented Programming":["Class","Object","Abstraction","Inheritance","Polymorphism",'Encapsulation']
                }
            }   
        
    },
    {
        name:"python",
        img: "python_developer.png",
        title: "Python",
        price: 49.00,
        lesson: 8,
        students: 16,
        coursedetail:
            {
                overview:"Python, a versatile and high-level programming language, emphasizes simplicity, readability, and ease of use. Renowned for its clear syntax and extensive libraries, Python excels in web development, data analysis, machine learning, and automation. Its dynamic typing and strong support for integration facilitate rapid prototyping and development. Python frameworks like Django and Flask empower web applications, while NumPy, Pandas, and TensorFlow drive data science and AI. Its community-driven ecosystem, supported by a rich package repository (PyPI), fosters innovation. Python's cross-platform compatibility and scalability make it a go-to choice for beginners, experts, and diverse industries, shaping the modern technological landscape.",
                syllabus:{
                    Introduction:["Python Introduction","Python Syntax","Python Print Statement","Python Comments","Python Variables"],

                    "Datatype categories and input()":["Text Type","Numeric Types","Sequence Types","Mapping Type","Set Types","Boolean Type","Binary Types","input() Function","raw_input() Function"],

                    Operator:["Arithmetic Operator","Assignment Operator","Relational Operator","Logical Operator","Bitwise Operator","Identity Operator","Membership Operator"],

                    "Conditional Statement":["if","if else","elif","nested if","short hand if","short hadn if else","switch"],

                    "Loops Statement":["While Loop","For Loop","Break","Continue"],

                    "List, Tuple, Sets & Dictionaries":["Add","Remove","Access","Change"],

                    Arrays:["Single Dimennsional Array","Multi-Dimensional Array"],

                    Functions:["String Methods","Array Methods","Math Methods","List Methods","Tuple Methods","Set Methods","Dictionaries Methods","Lambda Methods","Date Methods","user-defined Methods"],

                    Typecast:["Implicit Method","Explicit Method"],

                    RegExp:["RegEx Modules","RegEx Functions"],

                    Modules:["Variables in Module","Bulit-In Module","Import from Module","dir() Function"],

                    "OOPs - Object Oriented Programming":["Class","Object","Abstraction","Inheritance","Polymorphism",'Encapsulation'],
                }
            }   
    },
    {
        name:"reacjs",
        img: "react.png",
        title: "React Js",
        price: 49.00,
        lesson: 8,
        students: 16,
        coursedetail:
            {
                overview:"React.js, a powerful JavaScript library, revolutionizes front-end development by simplifying UI creation and management. Its component-based architecture allows reusable, declarative building blocks, enhancing scalability and maintainability. React's virtual DOM optimizes rendering, improving performance for dynamic web applications. Coupled with JSX, it seamlessly integrates HTML within JavaScript, streamlining development workflows. React's one-way data flow and state management through Context API or libraries like Redux enable efficient data handling. Supported by a vibrant community and comprehensive ecosystem, React powers interactive user interfaces in web and mobile apps, with frameworks like React Native enabling cross-platform development, driving innovation in modern app development paradigms.",
                syllabus:{
                    Introduction:["JIntroduction to React","Client and server side application","Setting up React Project","How React Works?","Useful VS code extensions","Understanding React Components & JSX"],
                    "Deep Dive into React Components":["Types of React Components","Class based component","Props in React","Nesting Components","Component Life Cycle"],
                    "Understanding State & Hooks":["Functional component","Introduction to state","Introduction to Hooks","Hooks Deep dive","Implementing Global State(use Context)"],
                    "Event handling, HOC, Styling in React":["Embedding JS expressions in JSX","Conversion of component","Event Handling","Higher Order Components","React Tools: Component Check","Using Vanilla CSS","Using Inline Styles","Using CSS Modules","Using Popular UI Libraries"],
                    "React Router":["Setting Up the Routing","Link Component","Query Strings","Navigation and history","Passing Data with Route Parameters","Getting data about the current Routes","Nested Routes","Handling Errors(useRouteError)","Protected Routes","Layout Routes"],
                    "From Handling and API Calls":["Introduction","Building a Form","Handling Form Submission","Accessing Input Fields","Controlled Components","Managing Forms With React Hook Form","Applying Validation","React toastify","SWR (stale-while-revalidate)","React Query","Axios","RTK Query"],
                    "Redux Toolkit":["Flux","Introduction to Redux","Redux Toolkit - The New Way of Writing Redux","Redux deep dive","How to build a react app"]
                }
            }   
    },
    {
        name:"mern",
        img: "mern_stack.png",
        title: "MERN stack developer",
        price: 49.00,
        lesson: 8,
        students: 16,
        coursedetail:
            {
                overview:"A MERN (MongoDB, Express.js, React, Node.js) stack developer course covers full-stack web development using these technologies: MongoDB for database management, Express.js for server-side web app development, React for building interactive user interfaces, and Node.js for server-side scripting. The course dives into creating scalable, modern web applications, teaching data handling, server setup, front-end design, and deployment, empowering learners to build robust, real-world projects through hands-on experience and understanding the entire development cycle.",
                syllabus:{
                    Introduction:
                    ["NodeJS & V8 engine","NodeJS Architecture and working, Concept of thread","Introduction to NodeJS Module System","Global Object, Modules, creation and loading of modules","Path Module, OS Module and File System Module"],
                    Web_server:
                    ["HTTP & HTTPS module","Events in NodeJs","Basic server built using NodeJs","Introduction to Node Package Manager (NPM)","Working with Files"],
                    Express_js:
                    ["RESTful Services & API","Introduction to Express","Building Your First Express Web Server","Automate server","Environment Variables (.env)","Parameters","Handling HTTP Request & Calling Endpoints Using Postman","Middleware","CORS"],
                    MongoDB:["Introduction To Database","DBMS & Classification: Relational & Non relational","Installation & Setup","Model and Schema","Creating & Saving a Document","Querying Documents","Mongo - Data Validation"],
                    CRUD_API:["Mongoose setup","Mongoose Model","Performing CRUD with ODM","Sorting, Pagination & Filtering"],
                    "Authentication and Authorisation":[
                        "Securely storing passwords","One-way & two way encryption","JSON web tokens","Authentication vs Authorizations","Practice task","Oauth implementation"
                    ]
                }
            }   
        
    },
    {
        name:"database",
        img: "database.png",
        title: "Database",
        price: 49.00,
        lesson: 8,
        students: 16,
        coursedetail:
            {
                overview:"Databases organize and manage structured information, storing and retrieving data for applications. Relational databases like MySQL use tables and SQL for structured data, while NoSQL databases like MongoDB offer flexible, unstructured data models. They're managed by Database Management Systems (DBMS) providing secure data handling, retrieval, and modification, serving as vital backbones for various applications' data storage and organization.",
                syllabus:{
                    Introduction:["Java Introduction","Java Syntax","Java Ouput/Print Statement","Java Comments","Variables"],
                    "Datatypes and Scanner":["Primitive Datatypes","Non-Primitive Datatypes","Scanner Methods"],
                    Operator:["Unary","Binary","Arithmetic Operator","Assignment Operator","Relational Operator","Logical Operator","Bitwise Operator","Ternary"],
                    "Conditional Statement":["if","if else","if else if","nested if","switch"],
                    "Loops Statement":["While Loop","Do While Loop","For Loop","Break","Continue"],
                    Arrays:["Single Dimennsional Array","Multi-Dimensional Array"],
                    Functions:["String Functions","Array Functions","Math Functions","User-Defined Functions"],
                    Typecast:["Implicit Method","Explicit Method"],
                    "OOPs - Object Oriented Programming":["Class","Object","Abstraction","Inheritance","Polymorphism",'Encapsulation']
                }
            }   
    }
];
export default data;
export const unit1Cards = [
  {
    id: 1,

    title: "1. Fundamentals of Android Application Development",

    short:
      "Overview of mobile computing and mobile application development.",

    subtopics: [

      {
        heading: "1. What is Mobile Computing?",

        notes: `
Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless-enabled device without being connected to a fixed physical link. It refers to the use of portable computing devices (such as smartphones, tablets, and laptops) in conjunction with mobile communication technologies, enabling users to access and process information from anywhere, at any time.

In simple terms, mobile computing = Mobility + Computing + Wireless Communication.
`,
      },

      {
        heading: "2. Characteristics / Features of Mobile Computing",

        notes: `
Portability – Devices are small and light enough to carry anywhere.
Connectivity – Ability to stay connected via cellular networks, Wi-Fi, Bluetooth, etc.
Interactivity – Users can communicate with networks, servers, and other devices in real time.
Individuality – Devices can be configured and personalized to suit individual user needs.
Mobility – The device and the user can move freely while computing continues.
Broad reach – Users can be reached regardless of their current location.
`,
      },

      {
        heading: "3. Components / Architecture of Mobile Computing",

        notes: `
Mobile computing systems are generally built on three core components:

1. Mobile Hardware – Physical devices such as smartphones, tablets, laptops, wearables, sensors, etc.
2. Mobile Software (Mobile OS + Applications) – The operating system and apps that run on the device (e.g., Android, iOS, mobile apps).
3. Mobile Communication Infrastructure – The wireless network through which data travels — cellular networks (GSM/CDMA/LTE/5G), Wi-Fi, satellite, Bluetooth, infrared, etc.
`,
      },

      {
        heading: "4. Generations of Mobile Communication",

        notes: `
Generation | Approx. Era | Key Feature | Speed (approx.)
1. 1G | 1980s | Analog voice calls only          | ~2 kbps
2. 2G | 1990s | Digital voice, SMS               | ~64 kbps
3. 3G | 2000s | Mobile internet video calls      | ~2 Mbps
4. 4G (LTE) | 2010s | High-speed internet, streaming | ~100 Mbps
5. 5G | 2020s | Ultra-low latency, IoT, AR/VR support | 1–10+ Gbps
`,
      },

      {
        heading: "5. Applications of Mobile Computing",

        notes: `
1. Business – Mobile banking, e-commerce, stock trading apps.
2. Education – E-learning apps, virtual classrooms.
3. Healthcare – Remote patient monitoring, telemedicine apps.
4. Navigation – GPS-based maps and tracking systems.
5. Entertainment – Streaming services, mobile gaming.
6. Communication – Messaging apps, video calling.
7. Emergency Services – Location-based alerts, vehicle tracking.
`,
      },

      {
        heading: "6. Advantages of Mobile Computing",

        notes: `
1. Increases productivity by enabling work from any location.
2. Provides real-time access to information and services.
3. Enhances communication and collaboration.
4. Supports location-based and context-aware services.
5. Enables flexibility and faster decision-making.
`,
      },

      {
        heading: "7. Limitations / Challenges of Mobile Computing",

        notes: `
1. Limited battery life of portable devices.
2. Bandwidth constraints and network variability/signal loss.
3. Security and privacy risks (data interception, device theft).
4. Limited processing power and storage compared to desktops.
5. Device heterogeneity – varying screen sizes, OS versions, hardware capability.
6. Disconnections – frequent handoffs between networks/cells.
`,
      },

      {
        heading: "8. Introduction to Mobile Application Development",

        notes: `
1. Mobile Application Development is the process of designing, creating, programming, 
and deploying software applications specifically intended to run on mobile devices such as smartphones and tablets.

2. Unlike traditional software development, it must account for limited screen size, 
touch-based input, varying hardware, intermittent connectivity, and power constraints.
`,
      },

      {
        heading: "9. Types of Mobile Applications",

        notes: `
1. Native Applications-
Native applications are mobile apps that are developed specifically for a particular operating system, such as Android or iOS. They are created using the programming languages and development tools recommended for that platform, such as Kotlin/Java for Android and Swift for iOS.

Advantages:
-High performance and speed
-Better user experience
-Full access to device hardware features such as camera, GPS, microphone, and sensors
Examples: Instagram, Google Maps

2. Web Applications-
Web applications are applications that run inside a mobile web browser. They are developed using web technologies such as HTML, CSS, and JavaScript and do not need to be installed from an app store.

Advantages:
-No installation required
-Accessible from any device with a browser
-Easy to update and maintain
Examples: Mobile versions of websites such as online banking portals or e-commerce websites

3. Hybrid Applications-
Hybrid applications combine features of both web and native applications. They are developed using web technologies but are packaged inside a native application container, allowing them to be installed on mobile devices and access certain hardware features.

Advantages:
-Single codebase for multiple platforms
-Lower development cost
-Faster development process
Examples: Applications developed using Ionic or Apache Cordova

4. Cross-Platform Applications-
Cross-platform applications are built using a single codebase that can run on multiple operating systems such as Android and iOS. Special frameworks are used to create these applications.

Advantages:
-Code can be reused across platforms
-Reduced development time and cost
-Consistent user experience across devices
Examples: Applications developed using Flutter and React Native

5. Progressive Web Applications (PWA)-
Progressive Web Applications (PWAs) are web applications that provide an experience similar to native mobile apps. They can work offline, send push notifications, and can be added to the device's home screen without downloading them from an app store.

Advantages:
-No app store installation required
-Offline functionality
-Faster loading and improved performance
Examples: Twitter Lite, Starbucks PWA
`,
      },
    ],
  },
  {
  id: 2,

  title: "2. Evolution of Mobile Devices and Mobile Operating Systems",

  short:
    "History and evolution of mobile devices and operating systems.",

  subtopics: [
    {
  heading: "Introduction",

  notes: `

Mobile devices have evolved from bulky analog phones used only for voice communication into powerful handheld computers capable of internet access, multimedia processing, artificial intelligence, and cloud connectivity.

This evolution occurred alongside the development of mobile operating systems, which transformed basic communication devices into programmable smart platforms capable of running thousands of applications.

Modern smartphones have become an essential part of everyday life, supporting communication, education, business, entertainment, healthcare, and mobile commerce.
`,
},

{
  heading: "1. Evolution of Mobile Devices",

  notes: `

The evolution of mobile devices can be divided into multiple phases based on technological advancements and user requirements.

Major stages include:

• First Mobile Phones
• Feature Phones
• Early Smartphones
• Modern Smartphones
• Advanced Smartphones
• Current Generation Devices

Each generation introduced new capabilities such as messaging, internet connectivity, touch interfaces, high-speed networking, and artificial intelligence.
`,
},

{
  heading: "2. Phase-wise Evolution of Mobile Devices",

  notes: `

First Mobile Phones (1970s–1980s)
• Large and heavy analog devices
• Operated on first-generation (1G) networks
• Supported only voice communication
Example: Motorola DynaTAC 8000X (1983)

Feature Phones (1990s–Early 2000s)
• Smaller and more affordable devices
• Operated on digital 2G networks
• Supported SMS messaging and simple applications
Examples: Nokia 3310 | Motorola RAZR

Early Smartphones (Mid-2000s)
• Combined phone and PDA (personal digital assistant) functionality
• Supported email and limited applications
• Used physical keyboards or stylus input
Examples: BlackBerry Devices | Palm Treo

Modern Smartphones (2007 Onwards)
• Full touchscreen interfaces
• Application ecosystem through app stores
• High-speed internet connectivity
Examples: Apple iPhone (2007) | HTC Dream (2008)

Advanced Smartphones (2010s)
• HD displays
• Multi-core processors
• Multiple cameras
• 4G LTE support
Examples: iPhone 6 | Samsung Galaxy S Series

Current Generation Smartphones (2020s)
• 5G connectivity
• Foldable displays
• AI-powered features
• Wearable integration
Examples: Samsung Galaxy Fold | Huawei Mate X
`,
},

{
  heading: "3. Key Milestone Devices",

  notes: `
Several devices played an important role in shaping modern mobile technology.

1983 – Motorola DynaTAC 8000X
• First commercially available handheld mobile phone

1992 – IBM Simon
• Considered the first smartphone
• Combined telephone and PDA functions

1996 – Nokia 9000 Communicator
• Supported email and web browsing

1999 – BlackBerry 850
• Popularized mobile email communication

2007 – Apple iPhone
• Introduced multi-touch technology
• Revolutionized smartphone design

2008 – HTC Dream (T-Mobile G1)
• First commercial Android smartphone

2010 – Apple iPad
• Popularized tablet computing

2019 Onwards – Foldable Phones
• Introduced flexible display technology
`,
},

{
  heading: "4. Evolution of Mobile Operating Systems",

  notes: `

As mobile hardware evolved, operating systems also became more powerful and user-friendly.

Mobile operating systems provide:
• User Interface
• Application Support
• Hardware Management
• Security Services
• Network Connectivity
The development of mobile operating systems transformed mobile devices into fully functional computing platforms.
`,
},

{
  heading: "5. Early Mobile Operating Systems",

  notes: `

Palm OS (1996)-
• Designed for Personal Digital Assistants (PDAs)
• Touch and stylus-based interface
• Lightweight operating system

Symbian OS (1997)-
• Widely adopted by Nokia devices
• Dominated the smartphone market before Android and iOS

BlackBerry OS (1999)-
• Focused on enterprise communication
• Secure email and messaging services

Windows Mobile / Windows Phone-
• Developed by Microsoft
• Supported productivity applications
• Later redesigned with a tile-based user interface
• Eventually discontinued
`,
},

{
  heading: "6. Modern Mobile Operating Systems",

  notes: `

iOS (2007)
• Developed by Apple Inc.
• Used exclusively in iPhone and iPad devices
• Closed-source operating system
• Known for security, performance, and hardware integration

Android (2008)
• Developed by Google
• Based on the Linux Kernel
• Open-source platform
• Supports devices from multiple manufacturers

Examples:
Samsung
Xiaomi
OnePlus
Realme

Android currently holds the largest share of the global smartphone market.
`,
},

{
  heading: "7. Other Mobile Operating Systems",

  notes: `

HarmonyOS
• Developed by Huawei
• Introduced in 2019
• Designed for smartphones and IoT devices

KaiOS
• Lightweight operating system
• Designed for feature phones
• Supports essential smart features

Examples:
WhatsApp
Google Assistant
YouTube
`,
},

{
  heading: "8. General Mobile Operating System Architecture",

  notes: `

A mobile operating system generally follows a layered architecture.

Applications Layer
• User applications and graphical interface

Application Framework
• APIs and services for developers

Libraries and Runtime
• Graphics engines
• Databases
• Runtime environments

Operating System Kernel
• Process management
• Memory management
• Device management

Hardware Layer
• CPU
• Sensors
• Camera
• Radio modules
`,
},

{
  heading: "9. Functions of Mobile OS Layers",

  notes: `

Kernel
• Controls hardware resources
• Manages memory and processes

Libraries and Runtime
• Provide reusable software functions
• Support graphics, databases, and multimedia

Application Framework
• Offers APIs for developers
• Simplifies application development

Applications
• End-user programs installed on the device
`,
},

{
  heading: "10. Android vs iOS Comparison",

  notes: `

Developer
Android:- Google
iOS:- Apple

Source Model
Android:- Open Source (AOSP)
iOS:- Closed Source

Hardware Support
Android:- Multiple Manufacturers
iOS:- Apple Devices Only

Customization
Android:- High
iOS:- Limited

Application Store
Android:- Google Play Store
iOS:- Apple App Store

Programming Languages
Android:- Kotlin, Java
iOS:- Swift, Objective-C

Market Reach
Android:- Larger Global Market Share
iOS:- Strong Premium Segment Presence
`,
},

{
  heading: "11. Future Trends in Mobile Devices and Operating Systems",

  notes: `

The future of mobile computing is driven by emerging technologies and user demands.

Major trends include:
• Foldable and rollable displays
• 5G and future 6G connectivity
• Artificial Intelligence integration
• Enhanced privacy and security mechanisms
• Edge computing support
• Integration with wearable devices
• Internet of Things (IoT) connectivity
• Cloud-based mobile services
These technologies will continue to shape the next generation of mobile devices and operating systems.
`,
},

{
  heading: "12. Quick Revision Points",

  notes: `

• Mobile devices evolved from analog phones to AI-powered smartphones.
• Feature phones introduced SMS and basic applications.
• The iPhone (2007) and Android (2008) initiated the modern smartphone era.
• Early operating systems included Palm OS, Symbian OS, BlackBerry OS, and Windows Mobile.
• Modern operating systems are Android and iOS.

• Mobile OS architecture consists of:
Hardware
Kernel
Libraries and Runtime
Application Framework
Applications

• Future trends include foldables, AI integration, 5G/6G connectivity, and IoT ecosystems.
`,
},

  ],
},
{
  id: 3,

  title: "3. Types of Mobile Applications (Native, Hybrid, Web Apps)",

  short:
    "Introduction to various categories of mobile applications.",

  subtopics: [

    {
      heading: "01 — Native Applications",

      notes: `
A Native App is built specifically for one mobile OS (Operating System) — the base software that manages a device's hardware. Examples of an OS: Android (by Google) and iOS — iPhone Operating System (by Apple).
How they're built:

Android apps → written in Java or Kotlin, developed using Android Studio (an IDE — Integrated Development Environment, i.e. the software tool where programmers write and test code)
iOS apps → written in Swift or Objective-C, developed using Xcode (Apple's IDE)
Distributed through the Google Play Store (Android) or Apple App Store (iOS)

Key concept — SDK: Developers use an SDK (Software Development Kit) — a package of tools and pre-written code provided by the platform (Android/Apple) to help build apps for it.
Key concept — API: Native apps communicate with device hardware (camera, GPS — Global Positioning System, microphone, contacts) through APIs (Application Programming Interfaces) — sets of rules that allow one software to talk to another.
Advantages: Fastest performance, best UI (User Interface) feel, full hardware access, works offline.
Disadvantages: Requires two separate codebases (one for Android, one for iOS), higher development cost and time.
Real examples: WhatsApp, Google Maps, Instagram — all have separate native builds for each platform.
`,
    },

    {
      heading: "02 — Hybrid Applications",

      notes: `
A Hybrid App is a combination of a native app and a web app. The core is built with web technologies — HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JS (JavaScript) — but it is wrapped inside a native shell, allowing it to be installed like a native app.
The WebView concept: At the heart of a hybrid app is a WebView — an embedded mini-browser inside the native shell. Think of it as a picture frame (native shell) holding a web page (picture) inside it. The web code runs inside this WebView, while the shell gives access to device hardware.
Popular Frameworks (pre-built tools that make development faster):

Apache Cordova, Ionic, React Native, Flutter, Xamarin

Cross-Platform: One codebase works on both Android and iOS — this is called being cross-platform.
Advantages: Single codebase saves cost, partial device hardware access via APIs, faster time to market.
Disadvantages: Slightly slower than native, the UX (User Experience) may not feel as smooth as a pure native app.
Real examples: Early Uber, Microsoft Teams, some features of Instagram (React Native).
`,
    },

    {
      heading: "03 — Web Applications (PWA)",

      notes: `
A Web App is essentially a website designed to look and behave like a mobile app. It runs inside a web browser (Chrome, Safari, Firefox) and requires no installation.
PWA — Progressive Web App: The modern evolution of web apps. A PWA uses advanced browser features — including a Service Worker (a background JavaScript script) — to:

Cache data locally so parts work offline
Send push notifications
Be "installed" (pinned to the home screen) without going through an app store

Users access web apps through a URL (Uniform Resource Locator) — the full web address, like https://www.example.com.
APK: Worth noting here — native Android apps are distributed as an APK (Android Package Kit) file, the Android equivalent of a Windows .exe installer. Web apps require no APK at all.
Advantages: No app store approval needed, works on any device with a browser, instant updates (just update the server).
Disadvantages: Limited hardware access, generally slower performance, mostly needs internet.
Real examples: Twitter Lite (PWA), Starbucks PWA, Flipkart Lite.
`,
    },

  ],
},
{
  id: 4,

  title: "4. Introduction to Object-Oriented Programming (OOP)",

  short:
    "Comparison and characteristics of mobile application types.",

  subtopics: [

    {
      heading: "1. Why Do We Need OOP?",

      notes: `
Imagine you're writing a program to manage a school. You need to keep track of students, teachers, and classrooms — their names, ages, grades, subjects, etc. — and also perform actions like "enroll student," "assign grade," "calculate average marks."

The old way (Procedural Programming):
You'd write a bunch of separate variables and functions:

student1_name = "Riya"
student1_age = 16
student1_marks = [85, 90, 78]

def calculate_average(marks):
    return sum(marks) / len(marks)

This works fine for one student. But what about 500 students? You'd end up with messy, repeated code, and no clean way to bundle a student's data (name, age, marks) with their behavior (calculate average) together.

The OOP way:
We bundle data + behavior into a single unit called an Object, modeled on a blueprint called a Class.

class Student:
    def __init__(self, name, age, marks):
        self.name = name
        self.age = age
        self.marks = marks

    def calculate_average(self):
        return sum(self.marks) / len(self.marks)

riya = Student("Riya", 16, [85, 90, 78])
print(riya.calculate_average())

Now every student is a self-contained, reusable "thing." That's the heart of OOP — modeling real-world entities as objects.
`,
    },

    {
      heading: "2. The Two Foundational Words: Class & Object",

      notes: `
Class-
A Class is a blueprint, template, or prototype that defines the properties (data) and behaviors (functions) that 
objects of that class will have.

In simple words, a class is a design or plan from which objects are created.

Key Points
A class does not occupy memory until an object is created.
It defines the structure and behavior of objects.
It contains variables (attributes) and methods (functions).
One class can create many objects.

Object-
An Object is a real-world instance of a class.

It is created using the blueprint provided by the class and occupies memory.

Key Points
Objects are actual entities.
Memory is allocated when an object is created.
Each object has its own values.
Multiple objects can be created from the same class.
`,
    },

  ],
},
{
  id: 5,

  title: "5. OOP Concepts: Classes, Objects, Encapsulation, Inheritance, Polymorphism",

  short:
    "Fundamentals of object-oriented programming.",

  subtopics: [

    {
      heading: "1 — Classes",

      notes: `
A **class** is a blueprint. It defines what an object will look like and what it will be able to do — but it is not the object itself. Think of a class the way you'd think of an architectural drawing for a house. The drawing describes the number of rooms, the layout, the dimensions — but the drawing is not a house. You can build a hundred houses from one drawing, and each house is its own independent structure.

In code, a class defines:

- **Attributes** (also called fields or properties) — the data the object will hold, like name, age, or speed
- **Methods** — the functions the object can perform, like drive(), stop(), or calculateSalary()

A class costs nothing by itself. It sits in memory as a definition. No data is stored in a class — data lives in the objects created from it.
`,
    },

    {
      heading: "2 — Objects",

      notes: `
An **object** is a concrete instance of a class. When you take the class blueprint and actually create something from it in memory, that thing is an object. This process is called **instantiation**.

If Car is a class, then myCar, yourCar, and taxiCar are three separate objects — each with their own color, speed, and fuel level. Changing myCar's speed does not affect yourCar's speed, even though both were created from the exact same class.

Every object has three fundamental characteristics:

- **State** — the current values of its attributes (e.g., speed = 60, color = "red")
- **Behavior** — what it can do via its methods (e.g., accelerate(), brake())
- **Identity** — each object is a unique entity in memory, distinct from all others
`,
    },

    {
      heading: "3 — Encapsulation",

      notes: `
Encapsulation is the principle of **bundling data and the methods that operate on that data together inside a class, and hiding the internal details from the outside world.**

The word "encapsulate" literally means to enclose in a capsule. That's exactly what you're doing — you wrap the data inside the object and control how the outside world can interact with it.

Think about your smartphone. You press a button and the volume changes. You have no idea what happens electrically inside — and you don't need to. The internals are hidden. You're given a clean interface (the button) to interact with. That's encapsulation in everyday life.

In code, encapsulation is enforced using **access modifiers**:

- private — only accessible within the same class. No one outside can touch it directly.
- protected — accessible within the class and its subclasses.
- public — accessible from anywhere.

The standard pattern is to make attributes private and provide controlled access through getters and setters — methods that read or write the value with whatever validation you choose to apply.

For example, a BankAccount class would keep balance private. You would never let external code set balance = -50000 directly. Instead, you'd provide a deposit(amount) method that validates the amount before adding it, and a withdraw(amount) method that checks sufficient funds first. The data is protected; the logic lives in one place.

The two key benefits this gives you are **data integrity** (nobody can corrupt your object's state from outside) and **maintainability** (you can change the internal implementation without breaking any code that uses your class).
`,
    },

    {
      heading: "4 — Inheritance",

      notes: `
Inheritance is the mechanism by which **one class can acquire the properties and methods of another class.** The class being inherited from is called the **parent class** (or superclass or base class). The class doing the inheriting is called the **child class** (or subclass or derived class).

The relationship is always an **"is-a" relationship**. A Dog is an Animal. A SavingsAccount is a BankAccount. A Car is a Vehicle. If you can say that sentence naturally, inheritance is probably the right tool.

Why does this matter? Without inheritance, if you had a Dog class and a Cat class, you'd write the eat(), sleep(), and breathe() methods twice — once in each class. That's code duplication. With inheritance, you write those methods once in an Animal class, and both Dog and Cat inherit them automatically.

The child class gets everything from the parent, and then adds its own unique stuff on top:

- Dog might add fetch() and bark()
- Cat might add purr() and climbTree()

The parent class's code is reused entirely — not copied, not pasted, but genuinely shared. This makes your codebase dramatically shorter, easier to fix, and easier to extend.

There is also **multi-level inheritance**, where class C inherits from class B, which itself inherits from class A. The chain can go multiple levels deep. And in languages like Python and C++, there is **multiple inheritance** — a class inheriting from more than one parent — though Java restricts this to a single parent class (but allows multiple interfaces).

A crucial rule: a child class can **override** a parent's method — meaning it can redefine what that method does. The parent's makeSound() might do nothing, but Dog's overridden makeSound() prints "Woof" and Cat's prints "Meow."
`,
    },

    {
      heading: "5 — Polymorphism",

      notes: `
Polymorphism comes from Greek: *poly* (many) + *morphe* (forms). It means **one thing can take many forms.** In OOP, it means a single method name can behave differently depending on the object it is called on.

This is where OOP becomes truly powerful. Imagine you have an array of Animal objects — some are Dog, some are Cat, some are Bird. You loop through the array and call makeSound() on each one. The dog barks, the cat meows, the bird chirps. You called the same method name on every object, but each responded in its own way. That's polymorphism.

There are two types to understand clearly.

#### Compile-time Polymorphism — Method Overloading

This happens when a class has **multiple methods with the same name but different parameters.** The compiler decides at compile time which version to call, based on what arguments you pass.

For example, a Calculator class might have:

- add(int a, int b) — adds two integers
- add(double a, double b) — adds two decimals
- add(int a, int b, int c) — adds three integers

All three are named add. The compiler looks at what you pass in and routes to the right one. This is called **overloading**, and it is resolved statically — before the program even runs.

#### Runtime Polymorphism — Method Overriding

This is the more interesting and powerful type. It happens when a **child class provides its own implementation of a method that already exists in the parent class.** The decision of which version to run happens at runtime — while the program is executing.

The classic setup:

- Animal has a method makeSound() that does nothing (or is declared abstract)
- Dog overrides it to print "Woof"
- Cat overrides it to print "Meow"

Now you write code that holds an Animal reference but assigns a Dog object to it. When you call makeSound(), it calls the Dog's version — not the Animal's. The correct method is resolved at runtime based on the actual object type, not the reference type. This is called **dynamic dispatch**.

This is extremely useful because it allows you to write code that works generically against a parent type, while still getting the specific behavior of each child. You can add a Parrot class tomorrow, override makeSound() to say "Polly wants a cracker," and all your existing code still works — no changes needed anywhere else. This property is called the **Open/Closed Principle**: your system is open for extension but closed for modification.
`,
    },

  ],
},
{
  id: 6,

  title: "6. Introduction to Software Engineering and SDLC",

  short:
    "Software engineering principles and SDLC overview.",

  subtopics: [

    {
      heading: "Overview of Chain of Custody",

      notes: `
The chain of custody (CoC) is the chronological and documented record of:

• seizure
• control
• transfer
• analysis
• disposition

of physical and digital evidence.

It establishes that the evidence presented in court is:
• authentic
• unaltered
• uncontaminated
• continuously accounted for

In drone forensics, chain of custody is especially complex because investigations may involve:
• multiple drone components
• onboard memory
• cloud evidence
• mobile devices
• cross-jurisdiction investigations

A broken chain of custody creates a legal presumption that evidence could have been compromised.
`,
    },

    {
      heading: "Core Principles of Chain of Custody",

      notes: `
Integrity:
Evidence must remain in the same condition from collection to court presentation.

Continuity:
There must be an unbroken record of possession and handling.

Accountability:
Every individual handling evidence becomes responsible for its condition during custody.

Authenticity:
Evidence must be provably genuine through:
• exhibit numbers
• tamper seals
• cryptographic hashes
• photographs

Admissibility:
Courts require chain of custody documentation before evidence can be accepted legally.
`,
    },

    {
      heading: "Evidence Identification and Labelling",

      notes: `
Every evidence item must receive a unique identifier immediately upon collection.

Label information includes:

• exhibit number
• item description
• manufacturer and model
• serial number
• recovery location
• GPS coordinates
• collection date and time
• examiner identity
• case reference number

Labels must:
• use permanent ink
• remain moisture resistant
• be attached to evidence packaging
• avoid direct marking on evidence itself
`,
    },

    {
      heading: "Barcode and RFID Tracking",

      notes: `
Modern evidence systems use:

• barcodes
• RFID tags
• digital scanning systems

These technologies provide:
• automated evidence tracking
• reduced transcription errors
• real-time custody logging
• digital audit trails
`,
    },

    {
      heading: "Chain of Custody Documentation",

      notes: `
The chain of custody form is the primary legal record accompanying the evidence.

Standard form sections include:

• case information
• exhibit number
• collection details
• seal numbers
• transfer records
• examination logs
• disposition records

Every entry must be:
• contemporaneous
• signed
• indelible
• properly timestamped
`,
    },

    {
      heading: "Evidence Ownership and Custodianship",

      notes: `
At every moment, one person or institution is legally responsible for the evidence.

Primary Custodian:
Usually the first officer or forensic examiner who recovered the evidence.

Institutional Custody:
When evidence enters a laboratory, legal custody transfers to the institution.

Multiple Custodians:
If evidence is split across agencies, each item requires its own independent chain of custody documentation.
`,
    },

    {
      heading: "Timestamps and Temporal Integrity",

      notes: `
Timestamps form the chronological backbone of forensic investigations.

Every event must be timestamped including:

• collection
• transfer
• imaging
• examination
• reporting

UTC (Coordinated Universal Time) should be used to avoid timezone ambiguity.

Investigators must compare:
• workstation clocks
• drone clocks
• mobile device clocks
• cloud timestamps

Clock offsets must be documented and adjusted during analysis.
`,
    },

    {
      heading: "Timeline Reconstruction",

      notes: `
Timestamp correlation helps investigators reconstruct:

• drone power events
• flight activity
• media recording
• file deletion
• seizure timelines
• examiner handling events

Master timelines are critical for:
• forensic reconstruction
• event sequencing
• courtroom presentation
`,
    },

    {
      heading: "Digital Chain of Custody",

      notes: `
Digital chain of custody ensures electronic evidence remains:
• authentic
• unmodified
• verifiable

This is achieved through:
• forensic imaging
• cryptographic hashing
• read-only analysis
• documented verification procedures

SHA-256 hashing is the industry standard for digital evidence verification.
`,
    },

    {
      heading: "Cryptographic Hashing",

      notes: `
A cryptographic hash acts as a mathematical fingerprint for digital evidence.

Any change to the data produces a completely different hash value.

Hashes are recorded in:
• acquisition logs
• chain of custody forms
• forensic reports
• image metadata

Common algorithms include:
• MD5
• SHA-1
• SHA-256
`,
    },

    {
      heading: "Hash Verification Events",

      notes: `
Hashes must be verified during:

• forensic acquisition
• working copy creation
• evidence transfer
• tool loading
• courtroom presentation

Every verification event must include:
• timestamp
• examiner identity
• verification result
`,
    },

    {
      heading: "Digital Evidence Management Systems",

      notes: `
Modern investigations use Digital Evidence Management Systems (DEMS).

Examples include:
• Magnet REVIEW
• Magnet AUTOMATE
• Forensic Explorer
• CJIS-compliant platforms

These systems manage:
• evidence tracking
• access logs
• audit records
• hash verification
• secure storage
`,
    },

    {
      heading: "Metadata Preservation",

      notes: `
Digital metadata must remain preserved in its original state.

Important metadata includes:
• file timestamps
• EXIF metadata
• GPS records
• database timestamps
• telemetry records

Evidence files must always be opened in:
• read-only mode
`,
    },

    {
      heading: "Handling Records and Examination Logs",

      notes: `
Every examination session must be documented.

Logs include:
• examiner identity
• workstation details
• tools used
• software versions
• methodology
• findings
• anomalies
• timestamps

The methodology must be reproducible by another competent examiner.
`,
    },

    {
      heading: "Transfer Procedures",

      notes: `
Evidence transfers represent high-risk custody events.

Transfer documentation includes:
• transfer timestamps
• sender details
• receiver details
• reason for transfer
• seal integrity status

Transfer types include:
• in-person transfer
• courier transfer
• international transfer
• electronic forensic image transfer
`,
    },

    {
      heading: "International and Electronic Transfers",

      notes: `
Cross-border evidence transfers may require:
• MLAT procedures
• legal authorisation
• inter-agency coordination

Electronic transfers require:
• encrypted transmission
• hash verification
• secure protocols
• documented timestamps
`,
    },

    {
      heading: "Tamper-Evident Packaging",

      notes: `
Tamper-evident packaging provides visible proof of evidence integrity.

Examples include:
• evidence bags
• tamper tape
• security seals
• serialized labels

Seal numbers must match documentation records exactly.
`,
    },

    {
      heading: "Seal Integrity Checks",

      notes: `
Every receiving custodian must inspect:
• seal condition
• seal numbers
• packaging integrity

Any anomaly must be:
• documented
• reported
• investigated immediately
`,
    },

    {
      heading: "Legal Accountability and Court Proceedings",

      notes: `
Chain of custody is regularly challenged during court proceedings.

Common defence challenges include:
• custody gaps
• unsigned transfers
• seal anomalies
• timestamp discrepancies
• tool validation issues

Investigators must demonstrate:
• procedural compliance
• evidence integrity
• reliable forensic methodology
`,
    },

    {
      heading: "Expert Witness Responsibilities",

      notes: `
Forensic examiners presenting evidence in court must:

• disclose all findings
• acknowledge limitations
• distinguish facts from opinions
• explain methodology clearly
• defend forensic procedures scientifically

Professional certifications may include:
• EnCE
• GCFE
• CCFP
`,
    },

    {
      heading: "Retention and Disposition",

      notes: `
Drone evidence retention depends on:
• court proceedings
• appeals
• agency policy
• legal regulations

Possible outcomes include:
• long-term retention
• return to owner
• lawful destruction
• inter-agency transfer

Disposal actions must be documented with:
• destruction certificates
• witness signatures
• return receipts
`,
    },

    {
      heading: "Drone Evidence Preservation Flowchart",

      notes: `
                 DRONE INCIDENT / RECOVERY
                               ⬇

                    SCENE SECURING
             (Restrict access, ensure safety)

                               ⬇

                  INITIAL DOCUMENTATION
      (Photographs, videos, GPS location, notes)

                               ⬇

                 EVIDENCE IDENTIFICATION
   (Drone, battery, SD card, controller, mobile device)

                               ⬇

                    EVIDENCE LABELING
        (Unique ID, date, time, case number)

                               ⬇

                    EVIDENCE PACKAGING
(Anti-static bags, Faraday bags, fire-safe battery storage)

                               ⬇

           CHAIN OF CUSTODY FORM INITIATION
      (Collector name, signature, condition)

                               ⬇

                    EVIDENCE TRANSPORT
                 (Secure and sealed transfer)

                               ⬇

                     EVIDENCE STORAGE
            (Access-controlled evidence locker)

                               ⬇

                   FORENSIC EXAMINATION
             (Logged access, purpose recorded)

                               ⬇

                DIGITAL EVIDENCE IMAGING
            (Write blockers, hash generation)

                               ⬇

              CoC UPDATE AFTER EACH HANDLING
         (Date, time, handler, reason)

                               ⬇

                   ANALYSIS & REPORTING
        (Findings documented, integrity verified)

                               ⬇

                    COURT PRESENTATION
         (CoC records submitted with evidence)

                               ⬇

              EVIDENCE RETENTION / DISPOSAL
                 (As per legal guidelines)
`,
    },

  ],
},
{
  id: 7,

  title: "7. Software Development Models (Waterfall, Agile, Spiral)",

  short:
    "Advantages, disadvantages and applications of SDLC models.",
  subtopics: [

    {
      heading: "Overview of Anti-Forensics",

      notes: `
Anti-forensics refers to any technique, tool, or method used to:
• prevent
• hinder
• delay
• invalidate

a forensic investigation.

In drone investigations, anti-forensic techniques are used to:
• hide operator identity
• destroy evidence
• manipulate logs
• evade attribution
• obstruct legal proceedings

Anti-forensics in drone investigations generally falls into six categories:

• Data destruction
• Data concealment
• Data falsification
• Identity obfuscation
• Hardware modification
• Operational security practices

Understanding these techniques is essential for investigators to:
• detect concealment attempts
• recover hidden evidence
• prove consciousness of guilt
`,
    },

    {
      heading: "Data Destruction",

      notes: `
Data destruction involves permanently removing forensic evidence before investigators can access it.

Common techniques include:
• SD card formatting
• secure erase operations
• flight log deletion
• physical destruction of components
• battery destruction

Quick formatting removes only filesystem references while leaving underlying data recoverable through carving.

Full formatting overwrites storage clusters using:
• zero filling
• pseudorandom patterns

Recovery success depends on:
• overwrite completion
• NAND wear levelling
• garbage collection timing
`,
    },

    {
      heading: "SD Card Formatting and Recovery",

      notes: `
Quick format erases:
• FAT tables
• directory entries

but often leaves data physically present.

Investigators recover data using:
• PhotoRec
• Autopsy
• Magnet AXIOM

These tools identify files through binary signatures such as:

JPEG:
FF D8 FF

MP4:
66 74 79 70

Forensic indicators of formatting include:
• zero-filled sectors
• reset volume serial numbers
• recent filesystem timestamps
`,
    },

    {
      heading: "Secure Erase and Physical Destruction",

      notes: `
Secure erase tools overwrite storage repeatedly using pseudorandom data.

Examples include:
• DBAN
• Eraser
• firmware secure erase commands

Physical destruction methods include:
• crushing
• burning
• water immersion
• cutting storage devices

Investigators may still recover evidence using:
• chip-off acquisition
• clean-room recovery
• NAND reconstruction
• SEM analysis
`,
    },

    {
      heading: "Flight Controller Log Deletion",

      notes: `
Advanced operators may delete internal DJI DAT logs through:
• DJI Assistant 2 developer mode
• modified firmware
• NAND garbage collection manipulation

Deleted logs may remain recoverable because NAND pages are:
• marked invalid
• not immediately erased

Chip-off acquisition combined with:
• ECC reconstruction
• page-level analysis

may recover deleted flight records.
`,
    },

    {
      heading: "Data Concealment",

      notes: `
Instead of destroying evidence, operators may hide it.

Concealment techniques include:
• encryption
• hidden partitions
• steganography
• metadata stripping
• disguised files

These methods attempt to:
• delay forensic discovery
• hide operational records
• conceal attribution evidence
`,
    },

    {
      heading: "Encryption of Drone Storage",

      notes: `
Modern drones may encrypt:
• SD card contents
• internal logs
• media storage

DJI enterprise drones use:
• hardware security modules
• secure enclaves
• device-linked encryption

Investigative responses include:
• logical acquisition while powered on
• live acquisition
• JTAG debugging
• secure element analysis

Open-source platforms:
• ArduPilot
• PX4
• Betaflight

usually store logs in plaintext.
`,
    },

    {
      heading: "Hidden Partitions and File Manipulation",

      notes: `
Operators may create hidden partitions not visible in normal filesystem listings.

Forensic imaging captures:
• active partitions
• hidden sectors
• unallocated space
• partition anomalies

Investigators perform:
• sector-by-sector analysis
• raw image examination
• partition table validation
`,
    },

    {
      heading: "Steganography and Metadata Stripping",

      notes: `
Steganography hides data inside:
• images
• videos
• multimedia files

Detection tools include:
• StegExpose
• StegSpy
• Stegdetect

Metadata stripping removes:
• EXIF GPS coordinates
• timestamps
• camera identifiers
• serial numbers

Investigators detect stripping through:
• unallocated space recovery
• JPEG structure analysis
• generation-loss examination
`,
    },

    {
      heading: "Data Falsification",

      notes: `
Some operators attempt to alter evidence rather than destroy it.

Examples include:
• GPS spoofing
• Remote ID spoofing
• clock manipulation
• log editing
• firmware modification

The objective is to create:
• false alibis
• misleading timelines
• inaccurate flight paths
`,
    },

    {
      heading: "GPS Spoofing",

      notes: `
GPS spoofing transmits false GNSS signals causing the drone to record incorrect locations.

Detection methods include:
• IMU-GPS comparison
• barometric altitude comparison
• radar correlation
• CCTV analysis
• RF triangulation

Indicators include:
• abnormal satellite geometry
• unrealistic signal strength
• inconsistent movement data
`,
    },

    {
      heading: "Remote ID Spoofing and Clock Manipulation",

      notes: `
Operators may broadcast false:
• serial numbers
• operator IDs
• location data

Clock manipulation alters:
• flight timestamps
• media timestamps
• operational timelines

Investigators compare:
• EXIF timestamps
• cloud timestamps
• mobile device logs
• SD card timestamps
• flight controller logs

to identify inconsistencies.
`,
    },

    {
      heading: "Firmware Modification and Log Editing",

      notes: `
Modified firmware may:
• reduce logging
• falsify telemetry
• disable geofencing
• alter Remote ID broadcasts

Investigators analyse:
• firmware binaries
• version mismatches
• CRC failures
• log structure anomalies

Tools include:
• Ghidra
• IDA Pro
• DatCon
`,
    },

    {
      heading: "Identity Obfuscation",

      notes: `
Operators may attempt to disconnect themselves from the drone.

Methods include:
• serial number removal
• cash purchases
• stolen drones
• anonymous SIM cards
• spoofed registration records
`,
    },

    {
      heading: "Serial Number Removal",

      notes: `
Serial numbers may be:
• ground off
• chemically removed
• physically altered

Recovery methods include:
• oblique lighting
• chemical etching
• scanning electron microscopy

Subsurface serial impressions may still remain detectable.
`,
    },

    {
      heading: "Anonymous Acquisition and Stolen Drones",

      notes: `
Operators may:
• purchase drones anonymously
• use cryptocurrency
• buy through private sales
• operate stolen drones

Investigators analyse:
• CCTV records
• activation history
• cloud sync records
• marketplace communications
• manufacturer registration databases
`,
    },

    {
      heading: "Hardware Modification",

      notes: `
Physical modifications alter the drone's operational and forensic characteristics.

Examples include:
• RF transmission boosters
• geofence bypass firmware
• payload modifications
• FPV conversion
• Remote ID disabling
`,
    },

    {
      heading: "RF Boosters and Geofence Bypass",

      notes: `
High-power RF modules extend operational range beyond legal VLOS limits.

Modified firmware may disable:
• airport geofencing
• prison restrictions
• government exclusion zones

Detection methods include:
• RF fingerprinting
• firmware hash comparison
• spectrum analysis
`,
    },

    {
      heading: "Payload and Remote ID Modifications",

      notes: `
Custom payload systems may support:
• smuggling
• surveillance
• contraband delivery

Remote ID modules may be:
• physically disconnected
• disabled through firmware
• spoofed electronically

Investigators compare:
• stock hardware configuration
• firmware behaviour
• broadcast records
`,
    },

    {
      heading: "Operational Security (OPSEC) Practices",

      notes: `
Sophisticated operators reduce forensic exposure through:
• remote launch sites
• short flights
• controller disposal
• generic components
• flying without SD cards
• rapid evidence wiping

These techniques reduce:
• RF exposure
• trace evidence
• digital artifact generation
`,
    },

    {
      heading: "Flying Without SD Cards",

      notes: `
Some operators intentionally avoid SD cards to eliminate the most accessible evidence source.

However:
• internal NAND logs
• flight controller telemetry
• cloud synchronisation

may still preserve evidence.

A missing SD card is itself:
• suspicious
• forensically significant
`,
    },

    {
      heading: "Detecting Anti-Forensic Activity",

      notes: `
Indicators of anti-forensic activity include:

Storage anomalies:
• wiped media
• hidden partitions
• missing logs

Log anomalies:
• CRC mismatches
• inconsistent timestamps
• missing sequences

Hardware anomalies:
• altered serial numbers
• aftermarket RF hardware
• modified firmware

Metadata anomalies:
• stripped EXIF
• inconsistent GPS data

Behavioural anomalies:
• missing SD cards
• Faraday pouches
• disposable SIM cards
`,
    },

    {
      heading: "Legal Significance of Anti-Forensics",

      notes: `
Anti-forensic behaviour demonstrates:
• consciousness of guilt
• intent to conceal evidence
• deliberate obstruction

Courts may treat:
• evidence destruction
• spoofing
• log falsification
• firmware tampering

as incriminating conduct.

Investigators must document:
• missing evidence
• concealment indicators
• expected evidence profiles
• forensic inconsistencies
`,
    },

    {
      heading: "Investigative Framework for Anti-Forensic Cases",

      notes: `
When anti-forensics is suspected, investigators should:

• expand evidence sources
• pursue cloud artifacts
• analyse paired devices
• correlate third-party evidence
• use RF triangulation
• perform NAND analysis
• document concealment attempts

Specialist resources may include:
• chip-off laboratories
• SEM-EDX analysis
• firmware reverse engineering
• RF fingerprinting experts
`,
    },

    {
      heading: "Key Principles Summary",

      notes: `
• Anti-forensics ranges from physical destruction to subtle falsification
• Missing evidence is itself significant
• Multi-source corroboration defeats falsification
• Chip-off NAND recovery is critical against data destruction
• Anti-forensic activity demonstrates consciousness of guilt
• Investigators must document concealment attempts as evidence
`,
    },

  ],
},
{
  id: 8,

  title: "8. Introduction to Android: History, Features, Versions, Android Ecosystem",

  short:
    "Overview of Android operating system.",
  subtopics: [

    {
      heading: "Overview of Cloud Forensics in UAV Systems",

      notes: `
Cloud forensics in UAV investigations refers to the:
• identification
• preservation
• extraction

of evidence stored on remote servers operated by:
• drone manufacturers
• enterprise fleet platforms
• third-party services

When onboard storage is:
• wiped
• encrypted
• destroyed

cloud records frequently provide an independent evidence trail.

Unlike onboard storage, cloud evidence exists outside the operator's direct control once uploaded, making it resilient against many anti-forensic techniques.
`,
    },

    {
      heading: "Why Cloud Evidence Matters",

      notes: `
Modern drones such as:
• DJI
• Skydio
• Autel
• Parrot

automatically synchronize flight records whenever the paired device connects to the internet.

Cloud evidence is important because:

• cloud records survive even if the drone is destroyed
• timestamps are server-side and resistant to clock manipulation
• cloud systems may store hidden operational data unknown to the operator

Examples include:
• device pairing history
• geofence unlock requests
• account activity
• synchronization logs
`,
    },

    {
      heading: "Flight Records Stored in the Cloud",

      notes: `
Cloud flight records may contain:

• aircraft serial number
• operator account ID
• flight start and end time
• maximum altitude
• maximum distance
• total flight duration
• home point coordinates

Enterprise systems may additionally store:
• full GPS tracks
• payload sensor outputs
• video stream metadata
`,
    },

    {
      heading: "Account and Registration Data",

      notes: `
Manufacturer accounts may store:

• user names
• email addresses
• phone numbers
• payment methods
• IP addresses
• account creation records

This data assists investigators in:
• attribution
• ownership identification
• account correlation
• geographic tracing
`,
    },

    {
      heading: "Device Activation Records",

      notes: `
Most drones activate against manufacturer servers during first-time setup.

Activation records may include:

• serial number
• firmware version
• activation timestamp
• associated account

Even if ownership later changes, original activation records remain stored on manufacturer systems.
`,
    },

    {
      heading: "Geofence Unlock Requests",

      notes: `
Manufacturers like DJI restrict flights near:
• airports
• prisons
• government areas

Operators requesting geofence unlocks submit:
• account information
• drone serial numbers
• flight locations

These records provide strong evidence that the operator intended to fly in restricted airspace.
`,
    },

    {
      heading: "Remote ID Broadcast Logs",

      notes: `
Under FAA and EASA regulations, drones broadcast:

• serial number
• location
• altitude
• operator position

Third-party Remote ID receivers independently log these broadcasts.

These logs provide:
• independent evidence
• timeline validation
• location verification
• attribution support
`,
    },

    {
      heading: "Firmware Update History",

      notes: `
Cloud systems often store firmware update records including:

• previous firmware version
• update timestamps
• installed firmware versions

Investigators use this data to:
• identify downgraded firmware
• detect unauthorized firmware modifications
• reconstruct device history
`,
    },

    {
      heading: "DJI Cloud Ecosystem",

      notes: `
DJI is the most significant cloud evidence source in commercial drone forensics.

Relevant systems include:

• DJI Fly
• DJI GO 4
• DJI FlightHub
• DJI Developer API

These systems may store:
• flight summaries
• mission data
• telemetry
• pilot identity
• cloud synchronization records
`,
    },

    {
      heading: "Skydio, Autel, and Parrot Platforms",

      notes: `
Skydio Fleet stores:
• mission logs
• flight paths
• telemetry

Parrot and Autel systems may store:
• activation records
• account history
• cloud flight summaries

Data availability varies between manufacturers and platform maturity.
`,
    },

    {
      heading: "Third-Party Mission Planning Platforms",

      notes: `
Platforms such as:

• AirMap
• Aloft
• DroneDeploy

store:
• mission plans
• LAANC approvals
• flight authorizations
• operational records

These records help establish:
• operator intent
• pre-flight planning
• regulatory compliance
`,
    },

    {
      heading: "Legal Acquisition from Manufacturers",

      notes: `
Cloud evidence is typically acquired through:

• subpoenas
• search warrants
• court orders
• MLAT requests

Investigators should request:

• flight records
• account information
• activation history
• geofence requests
• telemetry data

Preservation letters should be sent immediately to prevent automatic deletion.
`,
    },

    {
      heading: "Extraction from Paired Mobile Devices",

      notes: `
Paired smartphones and tablets often contain locally cached cloud data.

Extraction tools include:
• Cellebrite UFED
• Magnet AXIOM
• Oxygen Forensic Detective

Locally cached records may include:
• SQLite flight databases
• synchronized telemetry
• cached map tiles
• account session tokens
`,
    },

    {
      heading: "App-Level Forensic Extraction",

      notes: `
Drone applications may contain:

• flight history databases
• map caches
• downloaded mission plans
• authentication tokens

Android extraction may require:
• root access
• ADB backup

iOS extraction typically requires:
• full filesystem extraction
`,
    },

    {
      heading: "Passive Capture and Remote ID Collection",

      notes: `
Remote ID broadcasts may be captured using:

• Remote ID receivers
• Software Defined Radio (SDR)
• RF monitoring systems

Historical records may also be obtained from:
• airports
• stadium operators
• national monitoring systems
`,
    },

    {
      heading: "Retention Periods and Preservation",

      notes: `
Manufacturers do not retain cloud evidence indefinitely.

Retention periods vary by:
• account type
• subscription tier
• platform policy

Investigators must:
• issue preservation requests quickly
• begin acquisition immediately
• document deletion schedules
`,
    },

    {
      heading: "Server-Side Timestamps",

      notes: `
Cloud timestamps are highly reliable because they are assigned by:
• remote servers
• independent infrastructure

These timestamps are resistant to:
• clock manipulation
• local device tampering

UTC should always be used for forensic correlation.
`,
    },

    {
      heading: "Chain of Custody for Cloud Evidence",

      notes: `
Cloud evidence must be:
• documented
• hashed
• securely stored
• authenticated

Evidence may be produced as:
• CSV files
• JSON exports
• PDF reports

Manufacturers typically provide:
• certificates of authenticity
• production affidavits
• custodian statements
`,
    },

    {
      heading: "Admissibility of Cloud Records",

      notes: `
Cloud records are generally treated as:
• business records

Courts require proof that:
• records were created routinely
• records were generated near event time
• data is authentic
• production is accurate

Custodian certifications are essential for admissibility.
`,
    },

    {
      heading: "Cross-Border and Jurisdictional Challenges",

      notes: `
Cloud evidence may be stored across:
• multiple countries
• international data centres
• foreign jurisdictions

DJI data may involve:
• US servers
• Chinese servers

Cross-border access may require:
• MLAT procedures
• international legal cooperation
• jurisdictional review
`,
    },

    {
      heading: "Limitations of Cloud Evidence",

      notes: `
Cloud evidence may be limited by:

• disabled synchronization
• offline operation
• account anonymity
• retention expiration
• foreign legal barriers

Consumer users may disable:
• cloud syncing
• telemetry uploads
• flight record sharing
`,
    },

    {
      heading: "Integration with Other Evidence Sources",

      notes: `
Cloud evidence becomes most powerful when correlated with:

• internal flight logs
• Remote ID broadcasts
• GPS telemetry
• mobile device records
• CCTV footage
• RF monitoring
• physical evidence

Cross-validation strengthens:
• attribution
• timeline reconstruction
• operational analysis
`,
    },

    {
      heading: "Key Principles Summary",

      notes: `
• Preservation requests must be issued immediately
• Cloud evidence should be pursued alongside physical acquisition
• Paired mobile devices often contain cloud-equivalent evidence
• Server-side timestamps are highly reliable
• Certificates of authenticity are mandatory
• Cross-border evidence acquisition may be slow
• Missing cloud records may itself be forensically significant
`,
    },

  ],
},
{
  id: 9,

  title: "9. Android Architecture Overview and Android Application Components",

  short:
    "Android architecture layers and components.",

  subtopics: [

    {
      heading: "Drone Investigation Workflow Flowchart",

      notes: `
                    DRONE INCIDENT / RECOVERY
                                   ⬇
                         SCENE SECURING
                  (Restrict access, ensure safety)
                                   ⬇
                     INITIAL DOCUMENTATION
           (Photographs, videos, GPS location, notes)
                                   ⬇
                    EVIDENCE IDENTIFICATION
      (Drone, battery, SD card, controller, mobile device)
                                   ⬇
                        EVIDENCE LABELING
            (Unique ID, date, time, case number)
                                   ⬇
                        EVIDENCE PACKAGING
 (Anti-static bags, Faraday bags, fire-safe battery storage)
                                   ⬇
               CHAIN OF CUSTODY FORM INITIATION
           (Collector name, signature, condition)
                                   ⬇
                        EVIDENCE TRANSPORT
                     (Secure and sealed transfer)
                                   ⬇
                         EVIDENCE STORAGE
                (Access-controlled evidence locker)
                                   ⬇
                       FORENSIC EXAMINATION
                 (Logged access, purpose recorded)
                                   ⬇
                    DIGITAL EVIDENCE IMAGING
                 (Write blockers, hash generation)
                                   ⬇
                  CoC UPDATE AFTER EACH HANDLING
              (Date, time, handler, reason)
                                   ⬇
                       ANALYSIS & REPORTING
            (Findings documented, integrity verified)
                                   ⬇
                        COURT PRESENTATION
             (CoC records submitted with evidence)
                                   ⬇
                  EVIDENCE RETENTION / DISPOSAL
                     (As per legal guidelines)
`,
    },

    {
      heading: "Purpose of the Investigation Workflow",

      notes: `
The drone forensic workflow provides a structured methodology for:

• evidence preservation
• forensic acquisition
• integrity maintenance
• timeline reconstruction
• legal admissibility

The workflow ensures that every forensic action remains:
• documented
• repeatable
• scientifically reliable
`,
    },

    {
      heading: "Importance of Workflow Standardization",

      notes: `
Standardized forensic workflows help investigators:

• reduce evidence contamination
• maintain chain of custody
• ensure procedural consistency
• support courtroom admissibility

Professional workflows are critical in:
• criminal investigations
• counter-terrorism operations
• accident reconstruction
• cyber-forensic analysis
`,
    },

  ],
},

{
  id: 9,

  title: "10. Android Development Environment Overview (Android Studio, SDK, Emulator) + Unit 1 Revision",

  short:
    "Android Studio, SDK, Emulator and complete revision.",

  subtopics: [

    {
      heading: "Drone Investigation Workflow Flowchart",

      notes: `
                    DRONE INCIDENT / RECOVERY
                                   ⬇
                         SCENE SECURING
                  (Restrict access, ensure safety)
                                   ⬇
                     INITIAL DOCUMENTATION
           (Photographs, videos, GPS location, notes)
                                   ⬇
                    EVIDENCE IDENTIFICATION
      (Drone, battery, SD card, controller, mobile device)
                                   ⬇
                        EVIDENCE LABELING
            (Unique ID, date, time, case number)
                                   ⬇
                        EVIDENCE PACKAGING
 (Anti-static bags, Faraday bags, fire-safe battery storage)
                                   ⬇
               CHAIN OF CUSTODY FORM INITIATION
           (Collector name, signature, condition)
                                   ⬇
                        EVIDENCE TRANSPORT
                     (Secure and sealed transfer)
                                   ⬇
                         EVIDENCE STORAGE
                (Access-controlled evidence locker)
                                   ⬇
                       FORENSIC EXAMINATION
                 (Logged access, purpose recorded)
                                   ⬇
                    DIGITAL EVIDENCE IMAGING
                 (Write blockers, hash generation)
                                   ⬇
                  CoC UPDATE AFTER EACH HANDLING
              (Date, time, handler, reason)
                                   ⬇
                       ANALYSIS & REPORTING
            (Findings documented, integrity verified)
                                   ⬇
                        COURT PRESENTATION
             (CoC records submitted with evidence)
                                   ⬇
                  EVIDENCE RETENTION / DISPOSAL
                     (As per legal guidelines)
`,
    },

    {
      heading: "Purpose of the Investigation Workflow",

      notes: `
The drone forensic workflow provides a structured methodology for:

• evidence preservation
• forensic acquisition
• integrity maintenance
• timeline reconstruction
• legal admissibility

The workflow ensures that every forensic action remains:
• documented
• repeatable
• scientifically reliable
`,
    },

    {
      heading: "Importance of Workflow Standardization",

      notes: `
Standardized forensic workflows help investigators:

• reduce evidence contamination
• maintain chain of custody
• ensure procedural consistency
• support courtroom admissibility

Professional workflows are critical in:
• criminal investigations
• counter-terrorism operations
• accident reconstruction
• cyber-forensic analysis
`,
    },

  ],
},

];
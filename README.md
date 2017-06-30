# Project RedConnect and ICD Repository #

This README would normally document whatever steps are necessary to get this application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up

+ Layers of Redconnect
    * Front-end as Client to ICD: [Angular]()
    * Middle-layer as API/Front to ICD: [NodeJs]()
    * Back-end as DB/Application Server for IntegraCheck: [Marklogic]()
    
+  Technologies

    * [NodeJS v8.0.0](https://nodejs.org/en/) 

        Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

    * [Angular](https://angular.io/)

        For representation layer or client side we used Angular and make advantage of the angular-cli
        
    * [Express 4.x](https://expressjs.com/)
        
        Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
        
    * [MarkLogic 9](http://www.marklogic.com/) 
        
        This provides the fastest way to import, export, and copy data to MarkLogic databases.

    * [Docker](https://www.docker.com/)

        An open-source platform for developer and sysadmins to build, ship, and run distributed application.
        Note, specs:{Version:1.12.1, API version:1.24,Go version:go1.6.3,Git commit:23cf638,Built:,OS/Arch:linux/amd64}
        
    * [Origin's Kubernetes](https://kubernetes.io/)

        An open-source system for automating deployment, scaling, and management of containerized applications.
    
    * [Jenkins](https://jenkins.io/)
    
        An open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.
        
    * [Gogs](https://gogs.io/)
        
        An open source self-hosted GIT service. The project will use this as its repository in the DEVTESt environment.    

+ Dependencies
    * Java 8 recommended version
    * [Git 1.8](https://git-scm.com/) or greater
    * [Ruby 1.9.3](http://www.ruby-lang.org/en/) or greater

+ Database configuration
    
    RedConnect uses MarkLogic an operational and transactional Enterprise NoSQL database designed for large-scale, and integration. It store, manage, search and the database for integrating data from silos. With Roxy the deployment tool for configuring and deploying application. Using Roxy you can defined app servers, databases, forests, groups, tasks, etc.

    ### Requirements ###
    * Latest version of Java 8, download this in the official site of oracle.
    + MLCP MarkLogic Content Pump, download the mlcp-9.0.1-bin.zip
        * MarkLogic Content Pump is an open-source, Java-based command-line tool. This provides the fastest way to import, export, and copy data to MarkLogic databases. For download,detailed and other features see [MarkLogic Content Pump](https://developer.marklogic.com/products/mlcp).

    For detailed database configuration see [IntegraCheck Database]().
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* [DEVTEST Environment Configuration and CICD automation](DEV.LOCAL/README.md)
* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

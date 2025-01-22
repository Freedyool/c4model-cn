---
layout: doc
title: 2. 容器
---

# 容器

不是 Docker！在 C4 模型中，容器代表一个 __应用程序__ 或 __数据存储__。容器是为了使整个软件系统正常工作而需要运行的东西。实际上，容器类似于：

- __服务器端 Web 应用程序__：在 Apache Tomcat 上运行的 Java EE Web 应用程序，在 Microsoft IIS 上运行的 ASP.NET MVC 应用程序，在 WEBrick 上运行的 Ruby on Rails 应用程序，Node.js 应用程序等。
- __客户端 Web 应用程序__：在使用 Angular、Backbone.JS、jQuery 等的 Web 浏览器中运行的 JavaScript 应用程序。
- __客户端桌面应用程序__：使用 WPF 编写的 Windows 桌面应用程序，使用 Objective-C 编写的 OS X 桌面应用程序，使用 JavaFX 编写的跨平台桌面应用程序等。
- __移动应用__：Apple iOS 应用，Android 应用，Microsoft Windows Phone 应用等。
- __服务器端控制台应用程序__：独立的（例如 "public static void main"）应用程序，批处理进程等。
- __无服务器函数__：单个无服务器函数（例如 Amazon Lambda，Azure Function 等）。
- __数据库__：关系数据库管理系统中的模式或数据库，文档存储，图数据库等，例如 MySQL，Microsoft SQL Server，Oracle Database，MongoDB，Riak，Cassandra，Neo4j 等。
- __Blob 或内容存储__：Blob 存储（例如 Amazon S3，Microsoft Azure Blob Storage 等）或内容分发网络（例如 Akamai，Amazon CloudFront 等）。
- __文件系统__：完整的本地文件系统或更大网络文件系统的一部分（例如 SAN，NAS 等）。
- __Shell 脚本__：用 Bash 等编写的单个 Shell 脚本。
- 等等

容器本质上是围绕一些正在执行的代码或正在存储的数据的运行时边界。选择“容器”这个名称是因为我想要一个不暗示该容器如何执行的物理性质的名称。例如，一个像 Apache Tomcat 这样的单个 Java EE 服务器可以在单个 Java 虚拟机中运行多个 Web 应用程序，尽管每个 Web 应用程序本质上是相互隔离的。在开发时，我可能在单个 Apache Tomcat 服务器上运行三个 Web 应用程序，而在实际环境中，每个 Web 应用程序可能会部署到一个专用的 Apache Tomcat 服务器上。在这种情况下，每个 Web 应用程序都是一个“C4 容器”，部署是一个单独的关注点。

## 常见问题

### 为什么叫“容器”？

像“进程”、“应用程序”、“应用”、“服务器”、“可部署单元”等术语都有相关的含义，所以选择了“容器”这个名称作为描述组件所在的东西的一种通用方式。从某种角度来看，容器化变得流行是不幸的，因为许多软件开发人员现在将“容器”一词与 Docker 联系在一起。但从另一个角度来看，C4 模型中的容器与基础设施（例如 Docker）容器之间有时存在很好的对应关系。

虽然许多团队成功地按原样使用 C4 模型，但如果需要，请随意更改术语。

### Web 应用程序；一个容器还是两个？

如果你正在构建一个服务器端 Web 应用程序（例如 Spring MVC，ASP.NET，Ruby on Rails，Django 等），主要生成静态 HTML 内容，那么这是一个容器。如果服务器端 Web 应用程序提供了大量的 JavaScript（例如使用 Angular 构建的单页应用程序），那么这是两个容器。

虽然在部署时，服务器端 Web 应用程序包括服务器端和客户端代码，但将客户端和服务器视为两个独立的容器可以明确表示这是两个独立的进程空间，通过进程间/远程通信机制（例如 JSON/HTTPS）进行通信。这也为分别放大每个容器以显示其中的组件提供了基础。

### Java JAR、C# 程序集、DLL、模块等是容器吗？

通常不是。容器是一个运行时构造，类似于应用程序；而 Java JAR 文件、C# 程序集、DLL、模块等用于组织这些应用程序中的代码。

### 数据存储服务应显示为软件系统还是容器？

一个常见的问题是，像 Amazon S3、Amazon RDS、Azure SQL Database、内容分发网络等服务应显示为软件系统还是容器。毕竟，这些是我们大多数人不拥有或运行的外部服务。

如果你正在构建一个使用 Amazon S3 存储数据的软件系统，虽然你自己不运行 S3，但你确实拥有和负责你使用的存储桶。同样，对于 Amazon RDS，你对创建的任何数据库模式拥有（或多或少）完全控制权。因此，将它们视为容器，因为它们是你软件架构的一个组成部分，尽管它们托管在其他地方。
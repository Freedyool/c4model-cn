---
layout: doc
title: 部署图
---
# 部署图

部署图允许您说明静态模型中的软件系统和/或容器实例如何部署到给定__部署环境__中的基础设施上（例如生产、预发布、开发等）。它基于[UML部署图](https://en.wikipedia.org/wiki/Deployment_diagram)。

__部署节点__表示运行软件系统/容器实例的位置；可能是物理基础设施（例如物理服务器或设备）、虚拟化基础设施（例如IaaS、PaaS、虚拟机）、容器化基础设施（例如Docker容器）、执行环境（例如数据库服务器、Java EE Web/应用服务器、Microsoft IIS）等。部署节点可以嵌套。

您可能还希望包括__基础设施节点__，例如DNS服务、负载均衡器、防火墙等。

请随意使用Amazon Web Services、Azure等提供的图标来补充您的部署图……只需确保您使用的任何图标都包含在图表的键/图例中。

## 示例 1

[![A deployment diagram](https://static.structurizr.com/workspace/36141/diagrams/LiveDeployment.png)](https://static.structurizr.com/workspace/36141/diagrams/LiveDeployment.png)

### 图表键

[![A diagram key](https://static.structurizr.com/workspace/36141/diagrams/LiveDeployment-key.png)](https://static.structurizr.com/workspace/36141/diagrams/LiveDeployment-key.png)

## 示例 2

[![A deployment diagram](https://static.structurizr.com/workspace/54915/diagrams/AmazonWebServicesDeployment.png)](https://static.structurizr.com/workspace/54915/diagrams/AmazonWebServicesDeployment.png)

### 图表键

[![A diagram key](https://static.structurizr.com/workspace/54915/diagrams/AmazonWebServicesDeployment-key.png)](https://static.structurizr.com/workspace/54915/diagrams/AmazonWebServicesDeployment-key.png)

## 范围

单个部署环境（例如生产、预发布、开发等）中的一个或多个软件系统。

## 主要和支持元素

部署节点、软件系统实例和容器实例。

## 支持元素

用于部署软件系统的基础设施节点。

## 目标受众

软件开发团队内外的技术人员；包括软件架构师、开发人员、基础设施架构师和运营/支持人员。

## 推荐？

是的。
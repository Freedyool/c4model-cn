---
layout: doc
title: 2. 容器框图
---

# 容器框图

一旦你了解了你的系统如何融入整体IT环境，接下来的一个非常有用的步骤是使用容器图放大系统边界。"容器"类似于服务器端的Web应用程序、单页应用程序、桌面应用程序、移动应用程序、数据库模式、文件系统等。本质上，容器是一个可以单独运行/部署的单元（例如，一个单独的进程空间），它执行代码或存储数据。

容器图展示了软件架构的高层次形状以及职责如何分布。它还展示了主要的技术选择以及容器之间如何通信。这是一个简单的、高层次的技术聚焦图，对于软件开发人员和支持/运维人员都很有用。

## 示例

[![A container diagram](https://static.structurizr.com/workspace/36141/diagrams/Containers.png)](https://static.structurizr.com/workspace/36141/diagrams/Containers.png)

### 图例

[![A diagram key](https://static.structurizr.com/workspace/36141/diagrams/Containers-key.png)](https://static.structurizr.com/workspace/36141/diagrams/Containers-key.png)

## 范围

单个软件系统。

## 主要元素

软件系统范围内的容器。

## 支持元素

与容器直接连接的人和软件系统。

## 目标受众

软件开发团队内外的技术人员，包括软件架构师、开发人员和运维/支持人员。

## 推荐？

是的，推荐所有软件开发团队使用容器图。

## 备注

此图不涉及集群、负载均衡、复制、故障切换等内容，因为这些内容在不同环境（例如生产、预发布、开发等）中可能会有所不同。这些信息最好通过一个或多个[部署图](/diagrams/07-deployment)来捕获。
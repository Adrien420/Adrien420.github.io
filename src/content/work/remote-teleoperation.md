---
title: Teleoperation of a robotic arm (Industrial project)
publishDate: 2025-09-15 12:00:00
img: /assets/minia_proj_indus_ytb.jpg
img_alt: Picture of the UR3e and the Haply
description: |
  This is an industrial project whose goal was to enable real-time teleoperation using a robot arm and a 3D haptic system.
tags:
  - Robot / ROS2
  - Industrial project
  - Network
---

During my second year of graduate studies in robotics engineering, I worked on an industrial project focused on real-time teleoperation. This project involved the use of a 3D haptic system (Haply Inverse 3) and a collaborative robot arm (UR3e), with the objective of controlling the robot arm remotely, with minimal latency, high precision, accurate feedback and good intuitiveness.

In a team of 4, we worked on integrating ROS2 to control the robots and communicate with them, as well as MoveIt Servo for smooth and real-time motion. We improved the handling ability by implementing the feedback (making use of the force sensors of the UR3e and the haptic interface), applying filters, and modeling a spring-damper system to handle contacts. For the network, we ensured a low latency by using the UDP protocol and by encoding data to reduce the transmitted volume.

&#8594; Link to the youtube video showing the robot in action : https://www.youtube.com/watch?v=rmuLo5c6fpI
---
title: AI Agent-Assisted End-to-End Software Development
description: "6-hour lecture: use AI agents such as Claude Code across the full development workflow, from requirements and task splitting to implementation and review."
order: 1
---

![Illustration: an AI agent supports requirements, design, code, tests and deployment](/images/workshops/ai-software-development.svg)

AI agents can already write most of the code, but many teams find that once a task gets big, the agent starts making careless mistakes, and when requirements are unclear, the result drifts off course. This 6-hour lecture presents a field-tested end-to-end development workflow in which AI agents work reliably at every step: requirements, task splitting, implementation, review and maintenance. The engineer's focus shifts from writing code by hand to orchestrating agents.

The lecture combines our own development practice with Matt Pocock's workshop [Full Walkthrough: Workflow for AI Coding](https://github.com/shanraisshan/claude-code-best-practice/blob/main/videos/claude-matt-pocock-24-apr-26.md). The core idea: software engineering fundamentals such as small steps, test-driven development and good module design matter just as much in the AI era, if not more.

## The four stages of the workflow

- **Analysis and specification**: a "grill me" conversation in which the AI keeps asking questions until you share the same understanding of the requirements, then written up as a product requirements document (PRD).
- **AFK implementation (away from keyboard)**: split the requirements into small, independently grabbable tasks and let agents implement them automatically and test-first in an isolated environment, in parallel where possible.
- **Architectural improvement**: keep an eye on the overall shape of the codebase and replace shallow modules with deep ones, so both people and AI can understand and change the code more easily.
- **Maintenance and resolution**: issues found in review and testing become new tasks on the board, and the cycle continues.

## What you will learn

- Two key limits of large language models: they get "dumber" as the context grows, and they "forget" everything in each new session, and how to size tasks accordingly
- Aligning on requirements with the AI through a "grill me" conversation and writing a concise PRD
- Splitting requirements into vertical-slice tasks, mapping their dependencies and letting several agents work in parallel
- Letting agents implement AFK: task loops, test-driven development (red, green, refactor), feedback loops and container isolation
- Improving code architecture with deep modules, and using review and testing to keep generating new tasks
- Giving agents persistent memory and shared team knowledge with a second brain, and automating with scheduled tasks, skills and workflow tools
- The role of forward deployed engineers (FDE) and development team culture in the era of AI agents
- Practical tips for everyday development with Claude

## Schedule (6 hours, including breaks)

1. **The changing workflow and demo** (45 min): from writing code to orchestrating agents, overview of the four stages, product demo
2. **Two limits of large language models** (30 min): the "smart zone" and "dumb zone" of the context, clearing versus compacting context, sizing tasks
3. **Aligning on and splitting requirements** (60 min): "grill me" conversations, the PRD, vertical-slice tasks and dependencies, hands-on exercise
4. **AFK implementation** (75 min): agent task loops, test-driven development, container and worktree isolation, running several agents in parallel, hands-on exercise
5. **Architecture and review** (45 min): deep versus shallow modules, improving architecture, code review and quality checks, coding standards
6. **Memory, automation and team** (45 min): second brain and shared knowledge, three ways to automate, forward deployed engineers, a team culture of AI-first thinking, continuous learning and pragmatic execution
7. **Practical tips and wrap-up** (30 min): restarting sessions and handoffs, plugins and hooks, testing, Git workflow, containers, summary and Q&A

## Who it is for

Software developers and technical leads who want to use AI agents such as Claude Code systematically in their daily development work. Participants should be comfortable with Git and the command line.

**Fee:** EUR 800 (6-hour lecture). To book or ask questions, please [contact us](/en/contact/).

# Slides Directory Structure

This directory contains all presentation slides organized into logical subdirectories for better maintainability and navigation.

## Directory Structure

### 📁 `core/`
**Core presentation infrastructure**
- `hero-slide.tsx` - Main title slide with project information
- `navigation-slide.tsx` - Presentation navigation overview

### 📁 `introduction/`
**Introduction and context slides**
- `introduction-title-slide.tsx` - Chapter 1 title slide
- `project-context-slide.tsx` - Project context and motivation
- `what-is-devops-slide.tsx` - DevOps definition and explanation
- `devops-global-impact-slide.tsx` - DevOps transformation impact

### 📁 `company-context/`
**Company presentation slides**
- `company-presentation-title-slide.tsx` - Company chapter title
- `company-overview-slide.tsx` - Maison du Web company overview

### 📁 `problem-analysis/`
**Problem definition and analysis**
- `current-architecture-problems-slide.tsx` - Current monolithic architecture issues

### 📁 `project-management/`
**Project planning and methodology**
- `project-objectives-slide.tsx` - Project goals and objectives
- `project-scope-progress-slide.tsx` - Project scope and progress tracking
- `development-methodology-slide.tsx` - Agile/Scrum methodology

### 📁 `technical-implementation/`
**Technical architecture and stack**
- `microservices-architecture-slide.tsx` - Microservices architecture overview
- `tech-stack-overview-slide.tsx` - Technology stack presentation

### 📁 `development-sprints/`
**Sprint-by-sprint development progress**
- `sprint1-slide.tsx` - Sprint 1 deliverables
- `sprint2-slide.tsx` - Sprint 2 deliverables
- `sprint34-slide.tsx` - Sprint 3-4 combined deliverables
- `sprint5-slide.tsx` - Sprint 5 deliverables
- `sprint6-slide.tsx` - Sprint 6 deliverables

### 📁 `system-features/`
**System features and capabilities**
- `security-implementation-slide.tsx` - Security measures and implementation
- `performance-benchmarks-slide.tsx` - Performance metrics and benchmarks
- `mobile-app-features-slide.tsx` - Mobile application features
- `monitoring-observability-slide.tsx` - Monitoring and observability stack

### 📁 `results-conclusion/`
**Results and conclusion**
- `challenges-resolved-slide.tsx` - Challenges faced and resolved
- `project-results-slide.tsx` - Final project results and achievements
- `conclusion-slide.tsx` - Conclusion and future work

## Usage

Each subdirectory contains an `index.ts` file for easier importing:

```typescript
// Import from subdirectory
import { HeroSlide, NavigationSlide } from '@/components/presentation/slides/core'

// Or import directly
import HeroSlide from '@/components/presentation/slides/core/hero-slide'
```

## Benefits

- **🗂️ Organized Structure**: Logical grouping of related slides
- **🔍 Easy Navigation**: Clear directory names for quick file location
- **🔧 Maintainable**: Easier to maintain and update specific sections
- **📦 Modular**: Each section can be developed independently
- **🎯 Professional**: Clean structure suitable for graduation defense presentation

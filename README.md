# Hilbi React Interview Task – Project Documentation

> **Version:** 1.0  
> **Author:** Firas Dabbabi | FirasDabbabi@gmail.com  
> **Project:** Hilbi React Interview Assignment  
> **Date:**  _Tuesday, Nov 2025_

# 📘 Introduction

This document provides a full technical and architectural overview of my completed solution for the **Hilbi React Interview Task**. The goal of this documentation is to clearly explain:

-   The technologies used and why they were chosen
-   How the project is structured internally
-   How each major feature works
-   Decisions, patterns, and optimizations applied
-   Notes for future extension and maintenance
    

I have also included **placeholder sections for screenshots**, which I will replace with real visuals later.


# 🚀 Project Overview

The project implements two required features:

### **1. Dashboard (Homepage)**

-   Displays key user statistics (total, active, inactive)
-   Shows breadcrumbs and welcome message
-   Includes a "Last Active Users" section with the 5 latest active users
-   Includes a quick link to navigate to the full users list
-   Fully responsive UI matching the provided design
-   Data fetched in real-time using the API endpoints
    

![enter image description here](https://raw.githubusercontent.com/fifolio/Hilbi-Dashboard/refs/heads/main/docs/Screenshots/HomePage.png)

----------

### **2. Users List Page with Filtering**

-   Displays a paginated list of all system users
-   Includes filtering by user status (Active, Inactive, Pending)
-   Supports very large datasets
-   Each row contains:
    -   Full name
    -   Email
    -   Status
    -   Address
    -   Account balance
    -   Created date
        

![enter image description here](https://raw.githubusercontent.com/fifolio/Hilbi-Dashboard/refs/heads/main/docs/Screenshots/UserslistPage.png)

# 🗂️ Project Structure

Below is the main structure of `/src`:

```
src/
 ├── assets/                // Static files like images, icons, fonts, and other media used across the app
 ├── components/            // Reusable UI components grouped by feature or type
 │    ├── common/           // Shared components used throughout the project
 │    │     ├── header/     // The main application header component
 │    │     └── index.ts    // Barrel file exporting common components
 │    ├── dashboard/        // Components specific to the dashboard pages
 │    ├── users-list/       // Components specific to the users list feature
 │    └── index.ts          // Barrel file exporting all main components
 ├── helpers/               // Utility/helper functions used globally (e.g., formatters)
 │    ├── formatDate.ts     // Formats dates in a consistent way
 │    └── index.ts          // Exports all helper functions
 ├── integrations/          // Setup for third-party tools, SDKs, analytics, etc.
 ├── interfaces/            // TypeScript interfaces and types for app structure
 │    ├── dashboard/        // Types related to dashboard data
 │    ├── stores/           // Types used in Zustand stores
 │    ├── user/             // Types for users and user-related responses
 │    └── index.ts          // Re-exports all interfaces
 ├── layouts/               // Layout components that wrap pages (e.g., main layout)
 ├── locales/               // i18n translation files for multi-language support
 ├── routes/                // App routing configuration
 │    └── routes.tsx        // Defines all app routes and their components
 ├── services/              // API calls and backend communication logic
 │    ├── users/            // User-related API service functions
 │    └── index.ts          // Re-exports all service modules
 ├── stores/                // Zustand state management files
 │    ├── filters/          // Filter-related store state and actions
 │    ├── users/            // User list or user-related store logic
 │    └── index.ts          // Barrel file exporting stores
 └── main.tsx               // App entry point; initializes React and renders root component

```


# 📊 Dashboard – Implementation Details

### **Sections implemented:**

-   Welcome message + breadcrumbs
-   Statistics boxes
-   Last Active Users list
-   Button linking to Users List page
    

### **Optimizations:**

-   React Query parallel requests
-   Combined loading state
-   Stateless UI components for reusability
    

![enter image description here](https://raw.githubusercontent.com/fifolio/Hilbi-Dashboard/refs/heads/main/docs/Screenshots/Cards.png)


# 📋 Users Table – Implementation Details

### **Features implemented:**

-   Pagination (server-side)
-   Fully typed API responses
-   Responsive layout
-   Status highlighting
-   Reusable table component

### **Filtering Logic:**

-   Zustand store syncs
    

----------

This documentation represents a full breakdown of the architecture, implementation decisions, and technology usage in my finished Hilbi assignment.  
The project was built with scalability, maintainability, and clarity in mind while following modern React standards and best practices.
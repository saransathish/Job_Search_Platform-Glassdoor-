# Job_Search_Platform-GlassDoor

Welcome to the Job Search Platform, a comprehensive job search solution inspired by Glassdoor. This platform allows users to search for jobs, view company details, and apply for positions, all within a user-friendly interface.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Screenshots](#screenshots)
5. [Installation](#installation)
   - [Frontend](#frontend)
   - [Backend](#backend)
6. [Usage](#usage)
7. [Environment Variables](#environment-variables)
   - [Frontend](#frontend)
   - [Backend](#backend)
8. [API Documentation](#api-documentation)
9. [Deployment](#deployment)

## Overview

This project is built using modern web development technologies to ensure a robust and scalable application. It consists of a React-based frontend and a NestJS-based backend, utilizing GraphQL for API communication and Prisma as the ORM. Firebase handles user authentication, while AWS S3 stores images, and AWS RDS PostgreSQL is used for the database.

## Features

- Job search functionality
- Company reviews and ratings
- User authentication with Firebase
- Job application management
- Image storage using AWS S3
- API documentation with Swagger
- Secure and scalable architecture

## Technologies Used

### Frontend

- React
- TypeScript
- React Toastify for notifications
- Firebase for authentication
- AWS Aplify for hosting

### Backend

- NestJS
- TypeScript
- GraphQL
- Prisma ORM
- AWS S3 for image storage
- AWS RDS PostgreSQL for database
- Swagger for API documentation

## Screenshots

![Homepage](screenshots/homepage.png)
![Job Search](screenshots/job-search.png)

![Company](screenshots/company-reviews.png)
![Profile](screenshots/profile.png)

![GraphQL Playground](screenshots/graphql.png)


## Installation

### Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/job-search-platform.git
    cd job-search-platform/client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:
    ```bash
    npm run build
    npm run dev
    ```

### Backend

1. Navigate to the backend directory:
    ```bash
    cd ..
    cd api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Run Prisma migrations:
    ```bash
    npx prisma migrate dev
    npx prisma migrate deploy
    ```

5. Start the NestJS server:
    ```bash
    npm run build
    npm run start
    ```

## Usage

- Visit `http://localhost:5173/` to access the frontend.
- API documentation is available at `http://localhost:3000/api`.

## Environment Variables

### Frontend

Create a `.env` file in the client directory and add the following variables:

```env
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
VITE_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_FIREBASE_APP_ID=your_firebase_app_id
```


### backend

Create a `.env` file in the api directory and add the following variables:

```env
DATABASE_URL=postgresql://username:password@host:port/database
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_S3_BUCKET_NAME=your_aws_s3_bucket_name
AWS_S3_REGION=your_aws_s3_region
```
## api-documentation
Swagger is used for API documentation. The Swagger UI can be accessed for detailed API information [here](https://glassdoor.koyeb.app/api).


![Swagger UI](screenshots/swagger.png)


## deployment
Frontend
The frontend is deployed on AWS Amplify. You can access the deployed frontend [here](https://main.d6owqsm1ibqgv.amplifyapp.com).



Backend
The backend is deployed on Koyeb. You can access the deployed backend [here](https://glassdoor.koyeb.app).



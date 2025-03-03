# JobNest - Job Portal Backend Application

Welcome to **JobNest**, a robust and scalable backend application for a job portal built using **NestJS**, **Prisma**, and **MongoDB**. This application provides RESTful APIs to manage users, jobs, companies, applications, and favourites, making it a perfect backend for any job portal platform.

## Features
- **User Management:** Register and manage users with roles (Student, Recruiter).
- **Job Posting:** Recruiters can post jobs with details like title, description, salary, location, and more.
- **Company Profiles:** Recruiters can create and manage company profiles.
- **Job Applications:** Students can apply to jobs and track their application status (Pending, Accepted, Rejected).
- **Favorites:** Users can save their favorite jobs for easy access later.
- **Authentication:** Secure user authentication and authorization.
- **RESTful APIs:** Clean and well-structured APIs for seamless integration with frontend applications.

## Technologies Used
- **Node.js:** Runtime environment for building the backend.
- **NestJS:** A progressive Node.js framework for building efficient and scalable server-side applications.
- **Prisma:** Next-generation ORM for database management.
- **MongoDB**: NoSQL database for storing application data.
- **RESTful APIs:** Standardized APIs for communication between client and server.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Prisma CLI (`npm install -g prisma`)

### Installation
1. **Clone the Repository:**
```
  git clone https://github.com/your-username/JobNest.git
  cd JobNest
```

2. **Install Dependencies:**
```
  npm install
```

3. **Set Up Environment Variables:**

Create a `.env` file in the root directory and add the following:
```
  PORT=5000
  DATABASE_URL="mongodb://127.0.0.1:27017/job_portal"
  SECRET_KEY=
```

4. **Generate Prisma Client:**
```
  npx prisma generate
```

5. **Run Database Migrations:**
```
  npx prisma migrate dev --name init
```

6. **Start the Application:**
```
  npm run start / nest start
```

7. **Access the Application:**

The server will be running at `http://localhost:5000`.

## API Endpoints
### Base URL
  ```
  http://localhost:5000
  ```
### Authentication
  ```
  Authorization: Bearer <token>
  ```


#### Register a User -
- Endpoint: `POST /user/register`
- Request Body:
  ```
  {
      "fullname": "ABC",
      "email": "abc@gmail.com",
      "phoneNumber": "546585497515",
      "password": "123456",
      "profileBio": "abc",
      "profileSkills": ["nestjs", "nodejs"],
      "profileResume": "https://resume.pdf",
      "profileResumeOriginalName": "Myname",
      "profilePhoto": "https://abc.com"
  }
  ```

#### Login User -
- Endpoint: `POST /user/login`
- Request Body:
  ```
  {
      "email": "abc@gmail.com",
      "password": "123456",
      "role": "student"
  }
  ```

#### Create a Company -
- Endpoint: `POST /company/register`
- Request Body:
  ```
  {
      "name": "ABC",
      "description": "ABC",
      "website": "http://abc.com",
      "location": "Pune",
      "logo": "http://abc.com"
  }
  ```

#### Create a Job -
- Endpoint: `POST /job`
- Request Body:
  ```
  {
      "title": "ABC",
      "description": "ABC",
      "requirements": ["ABC","ABC"],
      "salary": 60000,
      "location": "Pune",
      "jobType": "ABC",
      "experienceLevel": "2",
      "position": 2,
      "companyId": "1256131231uhbjn"
  }
  ```

### API Responses - 
#### **Users Endpoint -**

| HTTP Verbs | Endpoints           | Action                            |
| ---------- | ------------------- | --------------------------------- |
| POST       | /user/register      | To register a new user            |
| POST       | /user/login         | To login an existing user account |
| PUT        | /user/updateProfile | Update a existing user            |
| GET        | /user/logout        | User Logout                       |

#### **Company Endpoint -**
| HTTP Verbs | Endpoints         | Action                  |
| ---------- | ----------------- | ----------------------- |
| POST       | /company/register | To create company       |
| PUT        | /company/:id      | To update company by id |
| GET        | /company          | Get list of companies   |
| GET        | /company/:id      | To get specific company |
| DELETE     | /company/:id      | Delete company by id    |

#### **Job Endpoint -**
| HTTP Verbs | Endpoints         | Action                   |
| ---------- | ----------------- | ------------------------ |
| POST       | /job              | To create a new job      |
| GET        | /job?keyword=full | Get all jobs             |
| GET        | /job/:id          | Get specific job details |
| POST       | /job/:userId      | Jobs of particular user  |
| DELETE     | /job/:id          | Delete specific job      |

#### **Application Endpoint -**
| HTTP Verbs | Endpoints        | Action                       |
| ---------- | ---------------- | ---------------------------- |
| POST       | /application/:id | Apply for job                |
| PUT        | /application/:id | Update application           |
| GET        | /application     | Get applied jobs             |
| GET        | /application/:id | To get applicant information |

#### **Favourite Endpoint -**
| HTTP Verbs | Endpoints     | Action                 |
| ---------- | ------------- | ---------------------- |
| POST       | /favorite/:id | To save job            |
| POST       | /favorites    | Get list of saved favourites |

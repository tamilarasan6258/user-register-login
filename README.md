# Task Management System

A full-stack task management application built with Angular and Node.js, featuring a modern UI with Angular Material and comprehensive task organization capabilities.

## 🚀 Project Overview

This Task Management System allows users to create, organize, and track their tasks efficiently. The application provides a user-friendly interface for managing projects and tasks with features like user authentication, task prioritization, status tracking, and visual analytics.

## 🛠️ Tech Stack

### Frontend
- **Angular 19** - Modern frontend framework
- **Angular Material** - UI component library
- **TypeScript** - Type-safe JavaScript
- **Chart.js** - Data visualization
- **Highcharts** - Advanced charting library
- **ECharts** - Interactive charting library
- **RxJS** - Reactive programming

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing
- **Nodemailer** - Email service
- **Swagger** - API documentation

## 📁 Project Structure

```
Task-Management-System-Project-main/
├── Frontend/
│   └── Task-Management-System/
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/
│       │   │   │   ├── dashboard/
│       │   │   │   ├── login/
│       │   │   │   ├── register/
│       │   │   │   ├── kanban-board/
│       │   │   │   ├── task-card/
│       │   │   │   ├── project-dialog/
│       │   │   │   ├── add-task-dialog/
│       │   │   │   ├── task-details-dialog/
│       │   │   │   ├── profile/
│       │   │   │   ├── header/
│       │   │   │   ├── footer/
│       │   │   │   ├── loading-spinner/
│       │   │   │   ├── chartjs-summary/
│       │   │   │   ├── echarts-summary/
│       │   │   │   ├── highcharts-summary/
│       │   │   │   └── reset-password/
│       │   │   ├── services/
│       │   │   │   ├── auth/
│       │   │   │   ├── projects/
│       │   │   │   ├── tasks/
│       │   │   │   └── password-reset/
│       │   │   ├── guards/
│       │   │   ├── interceptors/
│       │   │   ├── models/
│       │   │   └── app.routes.ts
│       │   └── assets/
│       ├── package.json
│       └── angular.json
└── Backend/
    ├── config/
    │   ├── db.js
    │   └── swagger.js
    ├── controllers/
    │   ├── authController.js
    │   ├── projectController.js
    │   ├── taskController.js
    │   └── passwordResetController.js
    ├── middleware/
    │   └── authMiddleware.js
    ├── models/
    │   ├── userModel.js
    │   ├── projectModel.js
    │   └── taskModel.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── projectRoutes.js
    │   ├── taskRoutes.js
    │   ├── passwordResetRoutes.js
    │   └── healthRoutes.js
    ├── services/
    ├── docs/
    ├── package.json
    └── index.js
```

## ✨ Features

### 🔐 Authentication & Security
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Password reset functionality with email verification
- Route guards for protected pages
- Auth interceptors for API requests

### 📊 Project Management
- Create, read, update, and delete projects
- Project categorization and description
- Due date tracking
- User-specific project isolation

### ✅ Task Management
- Comprehensive task CRUD operations
- Task prioritization (Low, Medium, High)
- Status tracking (Backlog, To-Do, In Progress, Done)
- Task assignment to projects
- Due date management
- Task descriptions and details

### 📈 Analytics & Visualization
- Multiple chart libraries integration:
  - Chart.js for basic charts
  - Highcharts for advanced visualizations
  - ECharts for interactive charts
- Task status distribution
- Project progress tracking
- Priority-based analytics

### 🎨 User Interface
- Modern Material Design UI
- Responsive layout
- Kanban board view
- Interactive task cards
- Modal dialogs for task/project management
- Loading spinners and user feedback
- Clean header and footer components

### 🔧 Additional Features
- Email notifications
- API documentation with Swagger
- Error handling and validation
- CORS configuration
- Environment-based configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Angular CLI
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Task-Management-System-Project-main/Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the Backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/taskmanagement
   JWT_SECRET=your-jwt-secret-key
   PORT=5000
   FRONTEND_URL=http://localhost:4200
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   ```

4. **Start the backend server**
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../Frontend/Task-Management-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

   The frontend will run on `http://localhost:4200`

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/send-otp` - Send OTP for password reset
- `POST /api/auth/verify-otp` - Verify OTP
- `PUT /api/auth/change-password` - Change password
- `POST /api/auth/check-username` - Check username availability
- `PUT /api/auth/update-username` - Update username

### Projects
- `POST /api/projects` - Create new project
- `GET /api/projects/user/:userId` - Get user's projects
- `GET /api/projects/:projectId` - Get project by ID
- `PUT /api/projects/:projectId` - Update project
- `DELETE /api/projects/:projectId` - Delete project

### Tasks
- `POST /api/tasks` - Create new task
- `GET /api/tasks` - Get all tasks (with optional project filter)
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Password Reset
- `POST /api/password/forgot` - Initiate password reset
- `POST /api/password/reset` - Reset password with token

## 📚 API Documentation

Once the backend is running, you can access the Swagger API documentation at:
`http://localhost:5000/api-docs`

## 🗄️ Database Schema

### User Model
```javascript
{
  uname: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  resetPasswordToken: String,
  resetPasswordExpires: Date
}
```

### Project Model
```javascript
{
  projectName: String (required),
  projectDesc: String (required),
  dueDate: Date (required),
  user: ObjectId (reference to User),
  createdAt: Date,
  updatedAt: Date
}
```

### Task Model
```javascript
{
  taskName: String (required),
  taskDesc: String,
  priority: String (enum: ['low', 'medium', 'high']),
  dueDate: Date (required),
  status: String (enum: ['backlog', 'to-do', 'in-progress', 'done']),
  project: ObjectId (reference to Project),
  completedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation and sanitization
- Protected routes with authentication middleware
- Secure password reset flow with time-limited tokens

## 📱 Frontend Components

### Core Components
- **Dashboard** - Main application dashboard
- **Login/Register** - User authentication
- **Kanban Board** - Task visualization and management
- **Task Card** - Individual task display
- **Project Dialog** - Project creation/editing
- **Add Task Dialog** - Task creation interface
- **Task Details Dialog** - Detailed task view
- **Profile** - User profile management

### UI Components
- **Header** - Navigation and user menu
- **Footer** - Application footer
- **Loading Spinner** - Loading states
- **Confirmation Dialog** - User confirmations

### Chart Components
- **Chart.js Summary** - Basic charts
- **Highcharts Summary** - Advanced charts
- **ECharts Summary** - Interactive charts

## 🛡️ Guards and Interceptors

### Guards
- **Auth Guard** - Protects authenticated routes
- **Login Guard** - Prevents access to login page when authenticated

### Interceptors
- **Auth Interceptor** - Adds JWT token to requests
- **Error Interceptor** - Handles API errors globally

## 🧪 Testing

### Frontend Testing
```bash
cd Frontend/Task-Management-System
ng test
```

### Backend Testing
```bash
cd Backend
npm test
```

## 📦 Build and Deployment

### Frontend Build
```bash
cd Frontend/Task-Management-System
ng build --prod
```

### Backend Production
```bash
cd Backend
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Support

For support, email [your-email@domain.com] or create an issue in the repository.

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality
  - User authentication
  - Project and task management
  - Basic UI with Angular Material
  - API documentation with Swagger

## 🚧 Future Enhancements

- [ ] Real-time notifications
- [ ] Team collaboration features
- [ ] File attachments for tasks
- [ ] Advanced reporting
- [ ] Mobile app development
- [ ] Integration with third-party services
- [ ] Dark mode support
- [ ] Drag and drop functionality
- [ ] Task dependencies
- [ ] Time tracking

---

**Made with ❤️ using Angular and Node.js**

# UPF Frontend

Welcome to **UsePayFul Frontend** – a modern web application built with **Next.js** and **TypeScript**. This repository is designed to help you quickly set up and deploy a high-performance web app with ease.

---

## 🚀 Features

- **Next.js 15**: Built on the latest version of Next.js for server-side rendering, static site generation, and API routes.
- **React 19**: Utilizes the cutting-edge React features for building dynamic and interactive UIs.
- **TypeScript Support**: Ensures type safety and enhances developer productivity with robust type-checking.
- **PNPM Package Manager**: Optimized dependency management with fast installs and efficient disk usage.
- **Linting Tools**: Pre-configured linting to maintain clean and consistent code quality.

---

## 📦 Installation

### Prerequisites
- Node.js (v20 or higher)
- PNPM (v8 or higher)

### Steps to Run Locally

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/my-app.git
   cd my-app
   ```

2. **Install Dependencies**  
   Use `pnpm` to install all required dependencies:  
   ```bash
   pnpm install
   ```

3. **Run in Development Mode**  
   Start the development server:  
   ```bash
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for Production**  
   To create an optimized production build:  
   ```bash
   pnpm build
   ```

5. **Start the Production Server**  
   After building, start the app in production mode:  
   ```bash
   pnpm start
   ```

6. **Run Linting**  
   Check your code for potential issues:  
   ```bash
   pnpm lint
   ```

---

## 🛠️ Scripts

Here’s a quick overview of the available scripts:

| Command       | Description                                      |
|---------------|--------------------------------------------------|
| `pnpm dev`    | Starts the app in development mode.              |
| `pnpm build`  | Builds the app for production.                   |
| `pnpm start`  | Runs the app in production mode (requires build). |
| `pnpm lint`   | Runs linting checks on the codebase.             |

---

## 📂 Project Structure

```
src/
  ├── app/          # App-level settings, providers, and configuration
  ├── entities/     # Business entities (e.g., User, Post)
  ├── features/     # Application features (e.g., Auth, Profile)
  ├── shared/       # Shared components, utils, styles, etc.
  ├── pages/        # Top-level routes and layout components
  ├── widgets/      # UI widgets for composition
```

---

## 🌟 Why Use This Setup?

- **Speed & Efficiency**: Next.js ensures blazing-fast performance with features like SSR, SSG, and ISR.
- **Developer-Friendly**: TypeScript and ESLint provide a smooth development experience with fewer runtime errors.
- **Scalability**: Designed for small projects but easily scalable for larger applications.
- **Eco-Friendly Dependency Management**: PNPM reduces disk space usage and speeds up installations.

---

## 🤝 Contributing

We welcome contributions! If you’d like to improve this project, feel free to fork the repository and submit a pull request. Please ensure your changes align with the project's coding standards.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository or contact us directly. We’re happy to help!

---

Happy coding! 🎉

# Marketplace V2

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm 8.x or later

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

### Coding Standards

Please read our [Frontend Coding Standards](./docs/FRONTEND_CODING_STANDARDS.md) before contributing. This document covers:

- Code quality standards
- File organization structure
- Component development standards
- State management
- Form handling
- Internationalization
- Performance optimization
- Error handling
- Development workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/user-authentication`)
- `fix/` - Bug fixes (e.g., `fix/login-validation`)
- `docs/` - Documentation changes (e.g., `docs/api-endpoints`)
- `refactor/` - Code improvements (e.g., `refactor/redux-store`)
- `test/` - Test improvements (e.g., `test/user-service`)

### Development Workflow

1. **Fork & Clone**

   ```bash
   git clone https://github.com/yourusername/marketplace-v2.git
   cd marketplace-v2
   ```

2. **Create Branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make Changes**

   - Follow coding standards
   - Write meaningful commit messages
   - Add tests if applicable
   - Update documentation as needed

4. **Test Changes**

   ```bash
   pnpm test    # Run unit tests
   pnpm lint    # Check code style
   ```

5. **Submit PR**

   - Push changes to your fork
   - Create PR against `main` branch
   - Fill out PR template
   - Link related issues

6. **Code Review**
   - Request review from team member
   - Address review comments
   - Wait for required approvals
   - Maintainers will merge approved PRs

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial

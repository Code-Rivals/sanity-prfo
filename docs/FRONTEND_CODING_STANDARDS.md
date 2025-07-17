````markdown
# Frontend Development Standards

## Project Overview

**Tech Stack**:

- **Framework**: Next.js 15.3.3 (SSR only)
- **Language**: TypeScript 5.x (strict mode)
- **UI Library**: Radix UI base components
- **Styling**: Tailwind CSS v3 
- **Icons**: Lucide React
- **Internationalization**: next-i18next + react-i18next (English & Chinese)
- **Package Manager**: pnpm
- **Code Standards**: @antfu/eslint-config + React

## 1. Code Quality Standards

### 1.1 TypeScript Standards

```typescript
// ✅ Good practice
interface UserProfile {
  id: string;
  name: string;
  email: string;
  preferences?: UserPreferences;
}

type Status = "idle" | "loading" | "success" | "error";

// ❌ Avoid
const userData: any = {};
```
````

**Rules**:

- All new files must use TypeScript
- Enable strict mode (`strict: true`)
- Prefer type inference
- Use `interface` for object types, `type` for union/intersection types
- Avoid `any`, use `unknown` instead
- Add JSDoc comments for complex functions

### 1.2 Code Line Limits

- **Functions**: Max 50 lines
- **Components**: Max 200 lines
- **Files**: Max 500 lines
- **Single Line**: Max 120 characters

Split into smaller units when exceeding limits.

### 1.3 Naming Conventions

```typescript
// File naming
user - profile.tsx; // Component file (kebab-case)
auth - utils.ts; // Utility functions (kebab-case)
api - types.ts; // Type definitions (kebab-case)

// Component naming
export function UserProfile() {} // PascalCase
export default UserProfile;

// Variable/function naming
const userName = "john"; // camelCase
const isLoggedIn = true; // camelCase
const USER_ROLES = ["admin", "user"]; // SCREAMING_SNAKE_CASE (constants)

// Type naming
interface UserData {} // PascalCase
interface ApiResponse<T> {} // PascalCase
```

## 2. File Organization Structure

```
app/                          # Next.js App Router pages
├── (auth)/                   # Route group - auth-related pages
│   ├── login/
│   │   ├── page.tsx
│   │   └── loading.tsx
│   ├── register/
│   └── layout.tsx
├── (dashboard)/              # Route group - dashboard pages
│   ├── analytics/
│   ├── settings/
│   └── layout.tsx
├── api/                      # API routes (SSR data fetching only)
│   └── revalidate/
├── globals.css               # Global styles
├── layout.tsx                # Root layout
├── loading.tsx               # Global loading page
├── not-found.tsx             # 404 page
└── page.tsx                  # Home page

components/                   # Reusable components
├── ui/                       # Base UI component library
│   ├── button.tsx
│   ├── input.tsx
│   ├── dialog.tsx
│   └── index.ts              # Unified export
├── layout/                   # Layout components
│   ├── header/
│   │   ├── header.tsx
│   │   ├── nav-menu.tsx
│   │   └── index.ts
│   ├── sidebar/
│   ├── footer/
│   └── index.ts
├── forms/                    # Form components
│   ├── auth/
│   │   ├── login-form.tsx
│   │   ├── register-form.tsx
│   │   └── index.ts
│   ├── user/
│   └── index.ts
├── features/                 # Feature module components
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   ├── dashboard/
│   └── user-management/
└── common/                   # Common business components
    ├── error-boundary.tsx
    ├── loading-spinner.tsx
    ├── theme-provider.tsx
    └── index.ts

hooks/                        # Custom Hooks
├── common/                   # Common Hooks
│   ├── use-local-storage.ts
│   ├── use-debounce.ts
│   ├── use-media-query.ts
│   └── index.ts
├── auth/                     # Auth-related Hooks
│   ├── use-auth.ts
│   ├── use-login.ts
│   └── index.ts
├── api/                      # API-related Hooks
│   ├── use-fetch.ts
│   ├── use-mutation.ts
│   └── index.ts
└── index.ts                  # Unified hooks export

lib/                          # Utility functions and configs
├── utils/                    # Utility functions
│   ├── cn.ts                 # Classname merging utility
│   ├── format.ts             # Formatting utilities
│   ├── validation.ts         # Validation utilities
│   └── index.ts
├── constants/                # Constant definitions
│   ├── app.ts                # App constants
│   ├── api.ts                # API constants
│   ├── routes.ts             # Route constants
│   └── index.ts
├── validations/              # Zod Schemas
│   ├── auth.ts
│   ├── user.ts
│   ├── common.ts
│   └── index.ts
├── stores/                   # State management
│   ├── auth-store.ts
│   ├── theme-store.ts
│   ├── user-store.ts
│   └── index.ts
├── config/                   # Configuration files
│   ├── env.ts                # Environment variables
│   ├── i18n.ts               # i18n config
│   └── site.ts               # Site config
└── services/                 # Service layer (API calls)
    ├── api.ts                # API base config
    ├── auth.ts               # Auth service
    ├── user.ts               # User service
    └── index.ts

types/                        # Global type definitions
├── api.ts                    # API types
├── auth.ts                   # Auth types
├── user.ts                   # User types
├── common.ts                 # Common types
├── env.ts                    # Env variable types
└── index.ts                  # Unified types export

styles/                       # Style files
├── globals.css               # Global styles
├── components.css            # Component styles
└── utilities.css             # Utility styles

public/                       # Static assets
├── locales/                  # i18n files
│   ├── en/
│   │   ├── common.json
│   │   ├── auth.json
│   │   ├── dashboard.json
│   │   └── errors.json
│   └── zh/
│       ├── common.json
│       ├── auth.json
│       ├── dashboard.json
│       └── errors.json
├── images/                   # Images
│   ├── logos/
│   ├── avatars/
│   └── placeholders/
├── icons/                    # Icons
│   ├── logo.svg
│   └── favicon.ico
└── fonts/                    # Font files (if needed)

docs/                         # Project documentation
├── FRONTEND_CODING_STANDARDS.md
├── API.md
└── DEPLOYMENT.md
```

### 2.1 Component File Organization

#### Base UI Components (`components/ui/`)

```typescript
// components/ui/button.tsx
import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };

// components/ui/index.ts
export { Button } from "./button";
export { Input } from "./input";
export { Dialog } from "./dialog";
```

#### Feature Module Components (`components/features/`)

```typescript
// components/features/auth/components/login-card.tsx
import { Card } from "@/components/ui";
import { LoginForm } from "@/components/forms/auth";

export function LoginCard() {
  return (
    <Card className="w-full max-w-md">
      <LoginForm />
    </Card>
  );
}

// components/features/auth/hooks/use-login.ts
import { useState } from "react";
import { loginService } from "@/lib/services";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (credentials: LoginInput) => {
    setIsLoading(true);
    try {
      return await loginService.login(credentials);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
}

// components/features/auth/index.ts
export { LoginCard } from "./components/login-card";
export { useLogin } from "./hooks/use-login";
```

#### Layout Components (`components/layout/`)

```typescript
// components/layout/header/header.tsx
import type { ReactNode } from "react";
import { NavMenu } from "./nav-menu";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <NavMenu />
        {children}
      </div>
    </header>
  );
}

// components/layout/header/index.ts
export { Header } from "./header";
export { NavMenu } from "./nav-menu";

// components/layout/index.ts
export { Header } from "./header";
export { Sidebar } from "./sidebar";
export { Footer } from "./footer";
```

### 2.2 Directory Structure Best Practices

#### File Import Priority Rules

```typescript
// 1. React and related libraries
import type { ComponentProps, ReactNode } from "react";
// 4. Type definitions
import type { User } from "@/types";

// 2. Third-party libraries (alphabetical order)
import { cva } from "class-variance-authority";
import { forwardRef, useState } from "react";

import { z } from "zod";
import { Header } from "@/components/layout";

// 5. Components
import { Button } from "@/components/ui";

import { API_ENDPOINTS } from "@/lib/constants";
// 3. Internal utilities and configs
import { cn } from "@/lib/utils";
```

#### Feature Module Organization Principles

1. **Group by feature**: Related components, Hooks, services in same feature directory
2. **Colocation**: Components used only in specific features stay in that directory
3. **Clear layering**: Separate UI layer, business logic layer, data layer
4. **Unified exports**: Each directory has `index.ts` for unified exports

#### File and Directory Naming Conventions

```typescript
// Directory naming - kebab-case
components/
├── user-profile/          // ✅ Correct
├── data-table/            // ✅ Correct
└── userProfile/           // ❌ Incorrect

// File naming - kebab-case
user-profile.tsx          // ✅ Component file
auth-service.ts           // ✅ Service file
api-types.ts              // ✅ Type file
use-local-storage.ts      // ✅ Hook file

// Component export naming - PascalCase
export function UserProfile() {}     // ✅ Correct
export function userProfile() {}     // ❌ Incorrect

// Hook export naming - camelCase (starts with "use")
export function useLocalStorage() {} // ✅ Correct
export function UseLocalStorage() {} // ❌ Incorrect

// Constant naming - SCREAMING_SNAKE_CASE
export const API_BASE_URL = 'https://api.example.com'
export const MAX_RETRY_COUNT = 3

// Type naming - PascalCase
export interface UserProfile {}      // ✅ Correct
export type ApiResponse<T> = {}      // ✅ Correct
export interface userProfile {}      // ❌ Incorrect
```

#### File Organization Best Practices

```typescript
// ✅ Good organization
components/
├── ui/
│   ├── button.tsx
│   ├── input.tsx
│   └── index.ts
├── features/
│   └── auth/
│       ├── components/
│       │   ├── login-form.tsx
│       │   └── index.ts
│       ├── hooks/
│       │   ├── use-auth.ts
│       │   └── index.ts
│       └── index.ts
└── layout/
    ├── header/
    │   ├── header.tsx
    │   ├── nav-menu.tsx
    │   └── index.ts
    └── index.ts

// ❌ Avoid this organization
components/
├── Button.tsx             // Should be in ui/
├── LoginForm.tsx          // Should be in features/auth/
├── useAuth.ts             // Hooks should be in hooks/
└── authTypes.ts           // Types should be in types/
```

#### Service Layer Organization (`lib/services/`)

```typescript
// lib/services/api.ts - API base config
// lib/services/auth.ts - Auth service
import type { LoginInput, User } from "@/types";
import { apiClient } from "./api";

export class ApiClient {
  private baseURL = process.env.NEXT_PUBLIC_API_URL;

  async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }
}

export const apiClient = new ApiClient();

export const authService = {
  async login(credentials: LoginInput): Promise<User> {
    return apiClient.request("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  },

  async logout(): Promise<void> {
    return apiClient.request("/auth/logout", { method: "POST" });
  },
};

// lib/services/index.ts
export { apiClient } from "./api";
export { authService } from "./auth";
export { userService } from "./user";
```

### 2.3 Zod Schema Storage

```typescript
// lib/validations/auth.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

// lib/validations/index.ts
export * from "./auth";
export * from "./user";
```

## 3. Component Development Standards

### 3.1 Component Structure Template

```typescript
"use client"; // Only for client-side interactions

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Style variants definition
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Component Props interface
interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Component implementation
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
```

### 3.2 Style Management

Use `class-variance-authority` for component style variants:

```typescript
import { cva } from 'class-variance-authority'

// Define style variants
const cardVariants = cva(
  'rounded-lg border bg-card text-card-foreground shadow-sm', // Base styles
  {
    variants: {
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      variant: {
        default: 'border-border',
        destructive: 'border-destructive',
        warning: 'border-yellow-500',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
)

// Use style variants
<div className={cardVariants({ size: 'lg', variant: 'warning' })} />
```

### 3.3 State Management Standards

#### State Management Tool Selection:

- **Simple state**: React useState/useReducer
- **Complex global state**: Zustand (recommended) or MobX
- **No changes allowed once selected**

#### Zustand Usage Example:

```typescript
// lib/stores/auth-store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);

// Usage
function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header>
      <span>{user?.name}</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
}
```

## 4. Form Handling Standards

Use React Hook Form + Zod:

```typescript
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validations";

export function LoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      // Handle submission
      console.log(data);
    } catch (error) {
      // Error handling
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...form.register("email")}
          className="w-full p-2 border rounded"
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
```

## 5. Hook Development Standards

### 5.1 Custom Hook Template

```typescript
// hooks/use-local-storage.ts
import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        typeof value === "function" ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
```

### 5.2 Hook Naming and Export

```typescript
// Usage
import { useDebounce, useLocalStorage } from "@/hooks";

// hooks/index.ts
export { useAuth } from "./use-auth";
export { useDebounce } from "./use-debounce";
export { useLocalStorage } from "./use-local-storage";
```

## 6. Internationalization Standards

### 6.1 Translation File Organization

```json
// public/locales/en/common.json
{
  "buttons": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete"
  },
  "messages": {
    "success": "Operation successful",
    "error": "Operation failed"
  }
}

// public/locales/zh/common.json
{
  "buttons": {
    "save": "保存",
    "cancel": "取消",
    "delete": "删除"
  },
  "messages": {
    "success": "操作成功",
    "error": "操作失败"
  }
}
```

### 6.2 Using Internationalization

```typescript
import { useTranslation } from "react-i18next";

export function ActionButtons() {
  const { t } = useTranslation("common");

  return (
    <div>
      <button>{t("buttons.save")}</button>
      <button>{t("buttons.cancel")}</button>
    </div>
  );
}
```

## 7. Code Quality Assurance

### 7.1 ESLint Configuration

Project uses `@antfu/eslint-config` + React plugin:

```javascript
// eslint.config.mjs
import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  react: true,
  rules: {
    // Project-specific rules
    "react/prop-types": "off", // TypeScript provides type checking
    "max-lines-per-function": ["error", { max: 50 }],
    "max-lines": ["error", { max: 500 }],
  },
});
```

### 7.2 Code Formatting

- Use ESLint built-in formatting
- Auto-format on save
- Must pass lint check before commit

## 8. Performance Optimization Standards

### 8.1 Component Optimization

```typescript
import { memo, useMemo, useCallback } from "react";

// Use memo for pure display components
export const UserCard = memo(function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
});

// Use useMemo for expensive calculations
function ExpensiveComponent({ items }: { items: Item[] }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return <div>{expensiveValue}</div>;
}

// Use useCallback for function references
function Parent() {
  const handleClick = useCallback(() => {
    // Handle click
  }, []);

  return <Child onClick={handleClick} />;
}
```

### 8.2 Code Splitting

```typescript
// Lazy load components
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./heavy-component"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Dynamic imports
const handleImport = async () => {
  const { heavyFunction } = await import("./heavy-utils");
  heavyFunction();
};
```

## 9. Error Handling Standards

### 9.1 Error Boundary

```typescript
"use client";

import { Component, type ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
```

### 9.2 Async Error Handling

```typescript
// Unified error handling utility
export class ApiError extends Error {
  constructor(message: string, public status: number, public code?: string) {
    super(message);
    this.name = "ApiError";
  }
}

// Usage in components
function DataComponent() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getData();
      // Process data
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return <div>{/* Normal content */}</div>;
}
```

## 10. Development Workflow

### 10.1 Development Commands

```bash
# Dev environment (using Turbopack)
pnpm dev

# Build production version
pnpm build

# Lint code
pnpm lint

# Type checking
pnpm type-check
```

### 10.2 Git Commit Standards

```bash
# Commit format
<type>(<scope>): <description>

# Examples
feat(auth): add login form validation
fix(ui): resolve button styling issue
refactor(hooks): optimize useLocalStorage hook
docs(readme): update installation guide
```

### 10.3 Code Review Checklist

- [ ] TypeScript types properly defined
- [ ] Components follow single responsibility principle
- [ ] Appropriate error handling
- [ ] Loading states considered
- [ ] Unnecessary re-renders avoided
- [ ] Internationalization properly implemented
- [ ] Styles managed with CVA
- [ ] Naming conventions followed

## 11. Best Practices

### 11.1 Component Design Principles

1. **Single Responsibility**: Each component handles one responsibility
2. **Reusability**: Control behavior through props
3. **Composability**: Support children and slot patterns
4. **Type Safety**: Complete TypeScript type definitions

### 11.2 Code Organization Principles

1. **Colocation**: Keep related files together
2. **Layering**: Separate UI layer, business layer, data layer
3. **Modularity**: Clear boundaries and interfaces between modules
4. **Testability**: Easy unit and integration testing

### 11.3 Performance Principles

1. **Avoid Premature Optimization**: Ensure correctness before optimizing
2. **User Experience First**: Optimize user-perceivable performance first
3. **Progressive Optimization**: Optimize based on actual usage
4. **Monitor and Measure**: Use tools to measure performance impact

---

This document establishes the foundational standards for project development. All team members must strictly adhere to these standards. Any deviations require justification during code review and formal approval.

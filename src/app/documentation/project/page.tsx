export default function ProjectDocsPage() {
  return (
    <div className="p-6 sm:p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center my-10">
        Project Documentation
      </h1>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
        {/* Tech Stack */}
        <div className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">🧱 Tech Stack</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
            <li>Next.js 15 (App Router)</li>
            <li>React 19 with TypeScript</li>
            <li>Tailwind CSS v4 with custom OKLCH tokens</li>
            <li>shadcn/ui and radix-ui for accessible components</li>
            <li>class-variance-authority (CVA) for styling variants</li>
            <li>Dark mode enabled via <code>class</code></li>
            <li>Redux Toolkit + React Redux</li>
            <li>next-themes for theme switching</li>
            <li>tailwind-variants + tailwind-merge for dynamic class handling</li>
            <li>Lucide Icons for UI visuals</li>
            <li>tw-animate-css for basic animations</li>
          </ul>
        </div>

        {/* Project Structure */}
        <div className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">📦 Project Structure</h2>
          <p className="text-sm mb-3">
            The design system is organized into the following main folders:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
            <li><code>components/ui/</code>: Reusable UI components built with shadcn/ui</li>
            <li><code>components/icons/</code>: Icon management (Lucide icons and custom SVGs)</li>
            <li><code>features/ui/</code>: Global UI-related Redux slices or logic</li>
            <li><code>lib/</code>: Utility functions, context providers, and internal tools</li>
            <li><code>styles/</code>: Global stylesheets including themes and design tokens</li>
            <li><code>app/</code>: Next.js app directory with routes for docs and pages</li>
          </ul>
        </div>

        {/* Project Status */}
        <div className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">🚧 Project Status</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
            <li>✅ Tailwind CSS and basic dark mode via Next.js configured</li>
            <li>✅ Initial UI components created: Button, Select, Icon examples</li>
            <li>✅ Color mode table (light/dark) implemented for theme testing</li>
            <li>🕐 In progress: Internal documentation and component playground</li>
            <li>🕐 Planned: Redux integration for global UI state (e.g. dark mode control)</li>
            <li>🕐 Waiting: Design team mockups to expand component set</li>
          </ul>
        </div>

        {/* Internal Guidelines */}
        <div className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">📌 Internal Guidelines</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
            <li>Use `@/` aliases for importing components, utils and constants</li>
            <li>Keep one component per file, colocating styles and logic if needed</li>
            <li>Prefer reusable, accessible components (use native elements as base)</li>
            <li>Use `class-variance-authority` (CVA) for managing Tailwind variants</li>
            <li>Place icons in `components/icons`, including custom ones in `icons/custom`</li>
          </ul>
        </div>

        {/* What is Next.js */}
        <div className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">🚀 What is Next.js?</h2>
          <p className="text-sm leading-relaxed mb-2">
            Next.js is a full-stack React framework that enables server-side rendering (SSR), static site generation (SSG), API routes, and powerful routing with the App Router. It’s ideal for building modern, fast, and scalable web apps.
          </p>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary underline"
          >
            → Official Documentation
          </a>
        </div>

        {/* What is Redux */}
        <div className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">🗂 What is Redux?</h2>
          <p className="text-sm leading-relaxed mb-2">
            Redux is a state management library often used with React. It provides a predictable way to manage shared state across the application, especially helpful for UI state that needs to persist or be accessed by multiple components.
          </p>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary underline"
          >
            → Official Documentation
          </a>
        </div>

        {/* What is ChatCN */}
        <div className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">💬 What is shadcn?</h2>
          <p className="text-sm leading-relaxed mb-2">
            Shadcn is an internal AI assistant that helps developers by generating code, writing documentation, and speeding up repetitive tasks. It integrates into the dev flow of this Design System for faster delivery.
          </p>
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary underline"
          >
            → Learn more on shadcn
          </a>
        </div>
      </div>
    </div>
  );
}

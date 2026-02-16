import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900">
      <h1 className="text-5xl font-extrabold text-white">
        Hello World - Redeploy Test 2
      </h1>
    </main>
  );
}

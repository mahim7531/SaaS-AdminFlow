import TestCard from "@/components/TestCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <span className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
              ✨ Modern Test Platform
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white">
              Practice. Improve.
              <span className="block text-indigo-400">Achieve More.</span>
            </h1>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Test your skills, track your progress, and prepare yourself
              for your next challenge.
            </p>
          </div>

         
           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
  <TestCard
    title="Frontend Test 1"
    description="Test your frontend skills with a series of challenging questions and tasks."
    link="/test/frontend"
  />

  <TestCard
    title="Backend Test 2"
    description="Evaluate your backend knowledge and problem-solving abilities."
    link="/test/backend"
  />

  <TestCard
    title="Fullstack Test 3"
    description="Assess your fullstack capabilities with comprehensive tests."
    link="/test/fullstack"
  />
</div>
        </div>
      </div>
    </main>
  );
}
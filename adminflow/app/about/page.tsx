export default function AICodeRoomPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold">
          AI CodeRoom
        </h1>

        <p className="mt-3 text-slate-400">
          Real-time AI Code Review & Pair Programming Platform
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              Real-time Collaboration
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Collaborate with your team in real time.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              AI Code Review
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Get instant AI feedback on your code.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              Security Detection
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Detect bugs and security vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
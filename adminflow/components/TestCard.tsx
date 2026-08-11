export default function TestCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">
        AdminFlow Test
      </h1>

      <p className="mt-2 text-gray-600">
        TestCard component is working successfully.
      </p>

      <button
        type="button"
        className="mt-4 rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800"
      >
        Test Button
      </button>
    </div>
  );
}
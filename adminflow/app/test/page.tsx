import Link from "next/link";

interface TestCardProps {
  title: string;
  description: string;
  link: string;
}

export default function TestCard({
  title,
  description,
  link,
}: TestCardProps) {
  return (
    <div className="flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-lg">
          🎯
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
          Available
        </span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-lg font-bold leading-6 text-gray-900">
          {title}
        </h2>

        <p className="mt-2 min-h-[60px] text-sm leading-5 text-gray-600">
          {description}
        </p>
      </div>

      {/* Button */}
      <Link
        href={link}
        className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Start Test →
      </Link>
    </div>
  );
}
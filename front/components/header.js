import Link from "next/link";

export default function Header() {
  return (
    <div className="relative bg-white header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 mb-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span>ドリルジェネレータ(α)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

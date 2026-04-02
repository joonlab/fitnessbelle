import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-primary-200 mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}

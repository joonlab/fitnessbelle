import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: '프로그램',
  description: '피트니스벨의 다양한 프로그램을 소개합니다. 시설권, 원더우먼 패키지, PT, 앰플PT, 시너지PT.',
  path: '/programs',
});

export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-600">프로그램</h1>
      <p className="mt-4 text-gray-400">페이지 준비 중입니다.</p>
    </main>
  );
}

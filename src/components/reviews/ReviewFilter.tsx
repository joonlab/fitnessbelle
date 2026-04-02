'use client';

interface ReviewFilterProps {
  branchFilter: string;
  sourceFilter: string;
  onBranchChange: (value: string) => void;
  onSourceChange: (value: string) => void;
}

const BRANCH_OPTIONS = [
  { value: 'all', label: '전체' },
  { value: 'gurae', label: '구래동 본점' },
  { value: 'hwajeong', label: '화정점' },
];

const SOURCE_OPTIONS = [
  { value: 'all', label: '전체' },
  { value: 'naver', label: '네이버' },
  { value: 'kakao', label: '카카오' },
];

export default function ReviewFilter({
  branchFilter,
  sourceFilter,
  onBranchChange,
  onSourceChange,
}: ReviewFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex gap-2">
        <span className="text-sm font-medium text-gray-500 self-center mr-1">
          지점
        </span>
        {BRANCH_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onBranchChange(opt.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              branchFilter === opt.value
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <span className="text-sm font-medium text-gray-500 self-center mr-1">
          출처
        </span>
        {SOURCE_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSourceChange(opt.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              sourceFilter === opt.value
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

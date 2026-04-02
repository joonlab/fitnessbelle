import type { Review } from '@/types';
import StarRating from './StarRating';

interface ReviewCardProps {
  review: Review;
}

const SOURCE_STYLES: Record<string, { label: string; className: string }> = {
  naver: { label: '네이버', className: 'bg-green-100 text-green-700' },
  kakao: { label: '카카오', className: 'bg-yellow-100 text-yellow-700' },
  direct: { label: '직접 후기', className: 'bg-gray-100 text-gray-600' },
};

const BRANCH_LABELS: Record<string, string> = {
  gurae: '구래동 본점',
  hwajeong: '화정점',
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const source = SOURCE_STYLES[review.source] ?? SOURCE_STYLES.direct;
  const branchLabel = BRANCH_LABELS[review.branch] ?? review.branch;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
      <div className="flex items-center justify-between mb-3">
        <StarRating rating={review.rating} />
        <div className="flex gap-2">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${source.className}`}
          >
            {source.label}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
            {branchLabel}
          </span>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">{review.content}</p>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <span className="font-medium text-gray-600">{review.author}</span>
        <span>{review.date}</span>
      </div>
    </div>
  );
}

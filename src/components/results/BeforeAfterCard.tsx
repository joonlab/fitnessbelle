import type { BeforeAfterResult } from '@/types';

interface BeforeAfterCardProps {
  result: BeforeAfterResult;
}

export default function BeforeAfterCard({ result }: BeforeAfterCardProps) {
  const weightLoss = result.weightBefore - result.weightAfter;
  const fatLoss = result.bodyFatBefore - result.bodyFatAfter;

  const weightPercent = (result.weightAfter / result.weightBefore) * 100;
  const fatPercent = (result.bodyFatAfter / result.bodyFatBefore) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
      {/* Before/After 이미지 영역 */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-500 font-medium text-sm">Before</span>
        </div>
        <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
          <span className="text-white font-medium text-sm">After</span>
        </div>
      </div>

      {/* 인바디 데이터 바 차트 */}
      <div className="space-y-3 mb-5">
        {/* 체중 바 */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">체중</span>
            <span className="font-semibold text-primary-600">
              -{weightLoss.toFixed(1)}kg
            </span>
          </div>
          <div className="h-6 bg-gray-100 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gray-300 rounded-full absolute inset-y-0 left-0"
              style={{ width: '100%' }}
            />
            <div
              className="h-full bg-primary-500 rounded-full absolute inset-y-0 left-0 transition-all duration-500"
              style={{ width: `${weightPercent}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-between px-3 text-xs font-medium">
              <span className="text-gray-600">{result.weightBefore}kg</span>
              <span className="text-white">{result.weightAfter}kg</span>
            </div>
          </div>
        </div>

        {/* 체지방 바 */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">체지방률</span>
            <span className="font-semibold text-pink-500">
              -{fatLoss}%
            </span>
          </div>
          <div className="h-6 bg-gray-100 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gray-300 rounded-full absolute inset-y-0 left-0"
              style={{ width: '100%' }}
            />
            <div
              className="h-full bg-pink-400 rounded-full absolute inset-y-0 left-0 transition-all duration-500"
              style={{ width: `${fatPercent}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-between px-3 text-xs font-medium">
              <span className="text-gray-600">{result.bodyFatBefore}%</span>
              <span className="text-white">{result.bodyFatAfter}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 뱃지 + 후기 */}
      <div className="flex gap-2 mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
          {result.duration}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-700">
          {result.program}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        <span className="font-semibold text-gray-800">{result.memberInitial}</span>
        {' '}{result.testimonial}
      </p>
    </div>
  );
}

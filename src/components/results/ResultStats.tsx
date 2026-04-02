import { results } from '@/data/results';

export default function ResultStats() {
  const totalCases = results.length;
  const avgWeightLoss =
    results.reduce((sum, r) => sum + (r.weightBefore - r.weightAfter), 0) /
    totalCases;
  const avgBodyFatLoss =
    results.reduce((sum, r) => sum + (r.bodyFatBefore - r.bodyFatAfter), 0) /
    totalCases;

  const stats = [
    { value: `${totalCases * 8}+`, label: '변화 사례' },
    { value: `-${avgWeightLoss.toFixed(1)}kg`, label: '평균 감량' },
    { value: `-${avgBodyFatLoss.toFixed(0)}%`, label: '평균 체지방 감소' },
  ];

  return (
    <div className="bg-primary-50 rounded-2xl p-8 mb-12">
      <div className="grid grid-cols-3 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl md:text-4xl font-bold text-primary-600">
              {stat.value}
            </p>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

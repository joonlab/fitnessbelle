'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { reviews } from '@/data/reviews';
import ReviewFilter from './ReviewFilter';
import ReviewCard from './ReviewCard';

const INITIAL_COUNT = 6;

export default function ReviewList() {
  const [branchFilter, setBranchFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    return reviews.filter((r) => {
      if (branchFilter !== 'all' && r.branch !== branchFilter) return false;
      if (sourceFilter !== 'all' && r.source !== sourceFilter) return false;
      return true;
    });
  }, [branchFilter, sourceFilter]);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div>
      {/* 평균 별점 */}
      <div className="text-center mb-8">
        <span className="text-4xl font-bold text-primary-600">
          {avgRating.toFixed(1)}
        </span>
        <span className="text-lg text-gray-500 ml-2">/ 5.0</span>
        <p className="text-sm text-gray-400 mt-1">
          총 {reviews.length}개의 후기
        </p>
      </div>

      <ReviewFilter
        branchFilter={branchFilter}
        sourceFilter={sourceFilter}
        onBranchChange={(v) => {
          setBranchFilter(v);
          setShowAll(false);
        }}
        onSourceChange={(v) => {
          setSourceFilter(v);
          setShowAll(false);
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${branchFilter}-${sourceFilter}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {visible.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-12">
          해당 조건에 맞는 후기가 없습니다.
        </p>
      )}

      {!showAll && filtered.length > INITIAL_COUNT && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition"
          >
            더 보기 ({filtered.length - INITIAL_COUNT}개)
          </button>
        </div>
      )}
    </div>
  );
}

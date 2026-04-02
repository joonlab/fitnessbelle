'use client';

import { motion } from 'framer-motion';
import { results } from '@/data/results';
import BeforeAfterCard from './BeforeAfterCard';

export default function ResultsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {results.map((result, index) => (
        <motion.div
          key={result.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <BeforeAfterCard result={result} />
        </motion.div>
      ))}
    </div>
  );
}

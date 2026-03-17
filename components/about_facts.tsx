'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faUsersCog, faUsers, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

// Counter Function Component
const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
   
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const stats = [
  { id: 1, icon: faCertificate, number: 25, label: "Years Experience" },
  { id: 2, icon: faUsersCog, number: 135, label: "Team Members" },
  { id: 3, icon: faUsers, number: 957, label: "Happy Clients" },
  { id: 4, icon: faCheckDouble, number: 1839, label: "Projects Done" },
];

export default function AboutFacts() {
  return (
    <section className="bg-[#002147] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center border border-gray-700 p-10 hover:bg-white/5 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={stat.icon} className="fa-3x text-white" />
              </div>
              <h2 className="text-6xl font-extrabold text-orange-500 mb-2">
                <Counter value={stat.number} />
              </h2>
              <span className="text-white text-xl font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
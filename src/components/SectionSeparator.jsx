import React from 'react';
import { motion } from 'framer-motion';

const SectionSeparator = () => {
    return (
        <motion.div
            className="w-full py-24 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="h-px bg-loki-green relative"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ maxWidth: '600px' }}
            >
                {/* Optional: Traveling dot */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-loki-green shadow-[0_0_10px_rgba(80,200,120,0.8)]"
                    initial={{ left: '0%' }}
                    whileInView={{ left: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                />
            </motion.div>
        </motion.div>
    );
};

export default SectionSeparator;

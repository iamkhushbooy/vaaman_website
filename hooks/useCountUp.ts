'use client';

import { useState, useEffect } from 'react';

export function useCountUp(target: number, active: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let cur = 0;
        const step = Math.ceil(target / (1800 / 16));
        const t = setInterval(() => {
            cur += step;
            if (cur >= target) { setCount(target); clearInterval(t); }
            else setCount(cur);
        }, 16);
        return () => clearInterval(t);
    }, [active, target]);
    return count;
}

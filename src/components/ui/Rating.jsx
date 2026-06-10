import { Star } from 'lucide-react';

export default function Rating({ value = 0, count, size = 16 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(value) ? 'fill-blush-400 text-blush-400' : 'text-plum-200'}
        />
      ))}
      {count != null && <span className="text-xs text-plum-400 ml-1">({value?.toFixed?.(1) ?? value})</span>}
    </div>
  );
}

export function TechBadge({ label, size = 'md' }: { label: string; size?: 'sm' | 'md' }) {
  const sizeClass = size === 'sm' ? 'text-[11.5px] px-2.5 py-1' : 'text-[13px] px-4 py-2';

  return (
    <span
      className={`inline-block font-mono ${sizeClass} rounded-full bg-cyan-50 text-cyan-600 border border-cyan-200 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_8px_16px_rgba(8,145,178,0.2)] hover:border-cyan-600`}
    >
      {label}
    </span>
  );
}

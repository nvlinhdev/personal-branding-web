interface TimelineItemProps {
  time: string;
  title: string;
  meta: string;
  desc: string;
}

export function TimelineItem({ time, title, meta, desc }: TimelineItemProps) {
  return (
    <div className="relative pb-10">
      <div className="absolute -left-[34px] top-0.5 w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 border-[3px] border-[#f5f9ff] shadow-[0_0_0_3px_rgba(37,99,235,0.15)]" />
      <div className="font-mono text-[12.5px] font-semibold text-blue-600 mb-1.5">{time}</div>
      <div className="text-lg font-bold text-slate-900">{title}</div>
      <div className="text-[13.5px] text-slate-500 my-1">{meta}</div>
      <p className="text-[14.5px] leading-relaxed text-slate-700 mt-2.5">{desc}</p>
    </div>
  );
}

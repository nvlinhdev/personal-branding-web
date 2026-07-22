interface ContactLinkProps {
  href: string;
  icon: string;
  label: string;
  value: string;
}

export function ContactLink({ href, icon, label, value }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-center gap-5 px-7 py-6 border border-gray-200 rounded-2xl no-underline bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(37,99,235,0.16)] hover:border-blue-300"
    >
      <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center font-mono font-bold text-base flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[13px] font-semibold text-slate-500">{label}</div>
        <div className="text-[17px] font-bold text-slate-900">{value}</div>
      </div>
    </a>
  );
}

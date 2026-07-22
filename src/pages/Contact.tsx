import { useTranslation } from 'react-i18next';
import { ContactLink } from '../components/ContactLink';

export function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section className="max-w-[760px] mx-auto px-6 sm:px-12 pt-24 pb-6 text-center">
        <div className="font-mono text-[13px] font-semibold text-blue-600 mb-4">{t('contact.eyebrow')}</div>
        <h1 className="text-[38px] font-extrabold mb-4 inline-block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {t('contact.title')}
        </h1>
        <p className="text-base text-slate-700 mb-14">{t('contact.subtitle')}</p>
      </section>

      <section className="max-w-[760px] mx-auto px-6 sm:px-12 pb-24">
        <div className="flex flex-col gap-4">
          <ContactLink href="mailto:linhnv.work.dev@gmail.com" icon="@" label={t('contact.emailLabel')} value="linhnv.work.dev@gmail.com" />
          <ContactLink href="https://github.com/nvlinhdev" icon="GH" label={t('contact.githubLabel')} value="github.com/nvlinhdev" />
          <ContactLink href="https://linkedin.com/in/nvlinhdev" icon="in" label={t('contact.linkedinLabel')} value="linkedin.com/in/nvlinhdev" />
        </div>
      </section>
    </>
  );
}

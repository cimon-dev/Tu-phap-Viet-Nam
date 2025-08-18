import { FeaturedNews, LegalDocuments, EventBanner, LegalSupportAndNewsEvents, QuickLinks } from './home';

export default function Home() {
  return (
    <div>
      <div className='mx-[6%]'>
        {/* tin nổi bật */}
        <FeaturedNews />
        {/* ngạch ngang */}
        <div className='w-full h-[1px] border border-[var(--color-primary)] my-10'></div>
        {/* văn bản pháp luật */}
        <LegalDocuments />
      </div>
      {/* banner */}
      <EventBanner />
      {/* ngạch ngang */}

      <div className='mx-[6%]'>
        <div className='w-full h-[1px] border border-[var(--color-primary)] my-10'></div>
        <LegalSupportAndNewsEvents />

        <div className='w-full h-[1px] border border-[var(--color-primary)] my-10'></div>
        <QuickLinks />

        <div className='w-full h-[1px] border border-[var(--color-primary)] my-10'></div>
      </div>
    </div>
  );
}

import { PortfolioHero } from '@/components/portfolio-hero'
import { PortfolioNav } from '@/components/portfolio-nav'
import { PortfolioContent } from '@/components/portfolio-content'
import { BackToTop } from '@/components/back-to-top'
import { PageLoader } from '@/components/page-loader'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <PortfolioNav />
      <PortfolioHero />
      <PortfolioContent />
      <BackToTop />
    </div>
  )
}

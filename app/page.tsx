import { PortfolioSidebar } from '@/components/portfolio-sidebar'
import { PortfolioContent } from '@/components/portfolio-content'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:flex lg:gap-16 lg:px-16">
        <PortfolioSidebar />
        <PortfolioContent />
      </div>
    </div>
  )
}

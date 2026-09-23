import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function LegalLayout({ title, updated, children }) {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-text-mid hover:text-cyan">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
      <h1 className="mb-2 font-head text-3xl font-bold text-text-hi sm:text-4xl">{title}</h1>
      {updated && <p className="mb-10 text-sm text-text-lo">Last updated: {updated}</p>}
      <div className="flex flex-col gap-8 text-sm leading-relaxed text-text-mid [&_h2]:font-head [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-hi [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
        {children}
      </div>
    </div>
  )
}

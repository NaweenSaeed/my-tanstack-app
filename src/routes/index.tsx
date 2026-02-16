import { Link } from '@tanstack/react-router'

// 1) Primitive + union types
type FeatureTone = 'primary' | 'neutral'

// 2) interface for object shape
interface Feature {
  title: string
  description: string
  tone: FeatureTone
}

// 3) Union type that makes invalid CTA states unrepresentable
type CallToAction =
  | { kind: 'internal'; label: string; href: `/${string}` }
  | { kind: 'external'; label: string; href: `https://${string}` }

// 4) Arrow function + typed props
const FeatureCard = ({ feature }: { feature: Feature }) => {
  const ringClass =
    feature.tone === 'primary'
      ? 'ring-2 ring-indigo-500'
      : 'ring-1 ring-slate-200'

  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ${ringClass}`}>
      <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {feature.description}
      </p>
    </div>
  )
}

export default function IndexRoute() {
  // Type annotations (explicit)
  const companyName: string = 'SkyLaunch'
  const yearFounded: number = 2025
  const isHiring: boolean = true

  // Type inference (TS figures this out automatically)
  const tagline = 'Launch faster with confidence.'

  // Typed array of typed objects
  const features: Feature[] = [
    {
      title: 'Instant setup',
      description: 'Start building in minutes with TanStack Start.',
      tone: 'primary',
    },
    {
      title: 'TypeScript reliability',
      description: 'Catch mistakes early with typed props and data.',
      tone: 'neutral',
    },
    {
      title: 'Tailwind speed',
      description: 'Design quickly using utility classes and responsive layout.',
      tone: 'neutral',
    },
  ]

  // Typed CTA using union rules
  const cta: CallToAction = {
    kind: 'internal',
    label: 'Request a Demo',
    href: '/demo',
  }

  // Template literal example
  const metaLine = `${companyName} • Founded ${yearFounded} • Hiring: ${isHiring ? 'Yes' : 'No'}`

  // Intentional type error (uncomment to see TS error, then fix it)
  // features[0].tone = 'loud' // Error: must be 'primary' | 'neutral'

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="text-center">
          <p className="text-sm font-semibold tracking-wide text-indigo-600">
            Startup Landing Page
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {companyName}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {tagline}
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500">
            {metaLine}
          </p>

          <div className="mt-8 flex justify-center gap-3">
            {cta.kind === 'internal' ? (
              <Link
                to={cta.href}
                className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {cta.label}
              </Link>
            ) : (
              <a
                href={cta.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {cta.label}
              </a>
            )}

            <a
              href="#features"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100"
            >
              View Features
            </a>
          </div>
        </header>

        <section id="features" className="mt-14">
          <h2 className="sr-only">Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

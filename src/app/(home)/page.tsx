import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI-Powered Task Management
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Taskly.AI
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-foreground/90">
                Supercharge Your Productivity
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform complex projects into actionable tasks with AI. 
              Track progress with beautiful analytics. Stay organized with smart prioritization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                href="/docs" 
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="https://taskly-ai-five.vercel.app/tasks"
                target="_blank"
                className="px-8 py-4 border-2 border-border bg-background/50 backdrop-blur-sm rounded-xl font-bold text-lg hover:bg-accent transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                Try Live Demo
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto mt-20">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl bg-card">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
              <Image
                src="/images/dashboard.png"
                alt="Taskly.AI Dashboard Preview"
                width={1400}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-24 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage tasks like a pro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🤖",
                title: "AI Subtask Generation",
                description: "Break down complex projects into actionable steps with AI-powered suggestions and realistic timelines",
                gradient: "from-cyan-500/10 to-blue-500/10"
              },
              {
                icon: "📊",
                title: "Smart Dashboard",
                description: "Visualize productivity with real-time analytics, completion trends, and priority insights",
                gradient: "from-blue-500/10 to-purple-500/10"
              },
              {
                icon: "🎯",
                title: "Priority Management",
                description: "Focus on what matters with intelligent priority levels and status tracking",
                gradient: "from-purple-500/10 to-pink-500/10"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Built with modern tech for instant responsiveness and seamless user experience",
                gradient: "from-yellow-500/10 to-orange-500/10"
              },
              {
                icon: "🔒",
                title: "Secure API",
                description: "Token-based authentication and secure endpoints keep your data protected",
                gradient: "from-green-500/10 to-emerald-500/10"
              },
              {
                icon: "🎨",
                title: "Beautiful Design",
                description: "Sleek dark mode interface with smooth animations and intuitive navigation",
                gradient: "from-pink-500/10 to-rose-500/10"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative space-y-4">
                  <div className="text-5xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI-Powered
              </div>
              <p className="text-muted-foreground">Intelligent Task Breakdown</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Real-Time
              </div>
              <p className="text-muted-foreground">Analytics & Insights</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Secure
              </div>
              <p className="text-muted-foreground">API Authentication</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join developers and teams using Taskly.AI to stay organized and productive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/docs/getting-started" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Read Documentation
            </Link>
            <Link 
              href="/docs/api" 
              className="px-8 py-4 border-2 border-border bg-background/50 backdrop-blur-sm rounded-xl font-bold text-lg hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              View API Reference
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 px-4 py-16">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Taskly API
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          A powerful task management backend built with Django. 
          Simple, secure, and ready to integrate with your applications.
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Link 
            href="/docs" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
          <Link 
            href="/docs/api" 
            className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
          >
            API Reference
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-6 border border-border rounded-lg">
            <h3 className="font-semibold mb-2">🚀 Easy to Use</h3>
            <p className="text-sm text-muted-foreground">
              RESTful API with intuitive endpoints and comprehensive documentation
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg">
            <h3 className="font-semibold mb-2">🔒 Secure</h3>
            <p className="text-sm text-muted-foreground">
              Token-based authentication to keep your data safe and secure
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg">
            <h3 className="font-semibold mb-2">⚡ Fast</h3>
            <p className="text-sm text-muted-foreground">
              Built with Django for high performance and scalability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

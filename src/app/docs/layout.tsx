import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions()}
      sidebar={{
        defaultOpenLevel: 1,
        collapsible: true,
        banner: (
          <div className="px-3 py-3 border-b border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                T
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">Taskly API</p>
                <p className="text-xs text-muted-foreground truncate">Documentation</p>
              </div>
            </div>
          </div>
        ),
        footer: (
          <div className="px-3 py-3 border-t border-border/50 text-xs text-muted-foreground">
            <p>© 2025 Taskly</p>
          </div>
        ),
      }}
      containerProps={{
        className: 'max-w-full overflow-x-hidden'
      }}
    >
      <div className="max-w-full overflow-x-hidden px-4 md:px-6">
        {children}
      </div>
    </DocsLayout>
  );
}

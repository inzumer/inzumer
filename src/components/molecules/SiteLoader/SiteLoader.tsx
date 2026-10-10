import { Loader } from '@inzumer/ui-library';
import { LoaderMark } from '@components/atoms/LoaderMark';

export interface SiteLoaderProps {
  /** What is loading, for screen readers. */
  label: string;
  /** Friendly questions that take turns under the mark. */
  messages: readonly string[];
}

/** Full-screen wait: the lib's Loader with our mark and the questions, blocking the page behind. */
export const SiteLoader = ({ label, messages }: SiteLoaderProps) => (
  // Above the dialogs too: a link inside a project can start the wait.
  <div className="relative z-[60]">
    <Loader
      screen
      label={label}
      messages={messages}
      mark={<LoaderMark />}
      size="lg"
      speed="slow"
      className="[&>span:last-child]:max-w-[32rem] [&>span:last-child]:text-[1.8rem] [&>span:last-child]:font-light [&>span:last-child]:tracking-[-0.01em]"
    />
  </div>
);

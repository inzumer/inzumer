/** Thin ring that spins around a dot that pulses; white, for the Loader's dark screen. */
export const LoaderMark = () => (
  <span className="relative block">
    <span className="absolute inset-0 rounded-full border border-white/20 border-t-white" />
    <span className="absolute inset-[38%] animate-pulse rounded-full bg-white motion-reduce:animate-none" />
  </span>
);

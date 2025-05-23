interface QuotesProps {
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const Quotes: React.FC<QuotesProps> = ({ width = 24, height = 24, className, accessibility = 'Quotes' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="-1 0 19 19"
    fill="#E0E0E0"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="iconTitle"
  >
    <title id="iconTitle">{accessibility}</title>
    <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-8.758.15a3.333 3.333 0 0 0-.362-2.507 2.543 2.543 0 0 0-.908-.851 2.504 2.504 0 0 0-1.364-.278 2.259 2.259 0 0 0-1.297 3.99 2.23 2.23 0 0 0 2.515.211 3.335 3.335 0 0 1-1.655 1.403 3.942 3.942 0 0 1-.485.164 1.84 1.84 0 0 0-.445.128.567.567 0 0 0 .32 1.059 2.496 2.496 0 0 0 .5-.113 5.2 5.2 0 0 0 .475-.161A4.37 4.37 0 0 0 7.57 10.07q.053-.167.09-.337zm6.34 0a3.331 3.331 0 0 0-.362-2.507 2.54 2.54 0 0 0-.908-.851 2.502 2.502 0 0 0-1.364-.278 2.259 2.259 0 0 0-1.297 3.99 2.229 2.229 0 0 0 2.515.211 3.334 3.334 0 0 1-1.654 1.403 3.96 3.96 0 0 1-.486.164 1.847 1.847 0 0 0-.445.128.568.568 0 0 0 .32 1.059 2.496 2.496 0 0 0 .5-.113q.241-.07.475-.161a4.37 4.37 0 0 0 2.617-2.708q.052-.167.089-.337z" />
  </svg>
);

export default Quotes;
interface PortfolioProps {
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ width = 16, height = 16, className, accessibility = 'Portfolio' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="iconTitle"
  >
    <title id="iconTitle">{accessibility}</title>
    <g>
      <path
        d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
        style={{
          fill: "#A8A8A8",
        }}
      />
      <g>
        <path
          d="M368,208.5h-16.5v160H368c8.844,0,15.5-7.656,15.5-16.5V224C383.5,215.156,376.844,208.5,368,208.5z"
          style={{
            fill: "#A8A8A8",
          }}
        />
        <rect
          x={175.5}
          y={208.5}
          width={160}
          height={160}
          style={{
            fill: "#A8A8A8",
          }}
        />
        <path
          d="M159.5,208.5H144c-8.836,0-16.5,6.656-16.5,15.5v128c0,8.844,7.664,16.5,16.5,16.5h15.5V208.5z"
          style={{
            fill: "#A8A8A8",
          }}
        />
      </g>
      <g>
        <path
          d="M288,144.5h-64c-8.836,0-16.5,6.656-16.5,15.5v32.5h16V168c0-4.422,4.078-7.5,8.5-7.5h48c4.422,0,7.5,3.078,7.5,7.5v24.5 h16V160C303.5,151.156,296.844,144.5,288,144.5z"
          style={{
            fill: "#A8A8A8",
          }}
        />
      </g>
    </g>
  </svg>
);

export default Portfolio;
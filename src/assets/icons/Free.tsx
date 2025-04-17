interface FreeProps {
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const Free: React.FC<FreeProps> = ({ width = 24, height = 24, className, accessibility = 'Free' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    fill="#A8A8A8"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="iconTitle"
  >
    <title id="iconTitle">{accessibility}</title>
    <g>
      <g>
        <polygon points="389.565,205.913 389.565,172.522 300.522,172.522 300.522,339.478 389.565,339.478 389.565,306.087  333.913,306.087 333.913,272.696 389.565,272.696 389.565,239.304 333.913,239.304 333.913,205.913  " />
      </g>
    </g>
    <g>
      <g>
        <polygon points="100.174,205.913 100.174,172.522 0,172.522 0,339.478 33.391,339.478 33.391,272.696 100.174,272.696  100.174,239.304 33.391,239.304 33.391,205.913  " />
      </g>
    </g>
    <g>
      <g>
        <polygon points="512,205.913 512,172.522 422.957,172.522 422.957,339.478 512,339.478 512,306.087 456.348,306.087  456.348,272.696 512,272.696 512,239.304 456.348,239.304 456.348,205.913  " />
      </g>
    </g>
    <g>
      <g>
        <path d="M133.565,172.522v166.957h33.391v-66.783h33.391v33.391h33.391v-33.391H256V172.522H133.565z M222.609,239.304h-55.652 v-33.391h55.652V239.304z" />
      </g>
    </g>
    <g>
      <g>
        <rect x={233.739} y={306.087} width={33.391} height={33.391} />
      </g>
    </g>
  </svg>
);

export default Free;
export default function BagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 24 24"
      className="transition hover:scale-110"
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.853 21H11.15c-3.933 0-5.899 0-7.065-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"
        ></path>
        <circle cx={15} cy={9} r={1} fill="currentColor"></circle>
        <circle cx={9} cy={9} r={1} fill="currentColor"></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M9 6V5a3 3 0 1 1 6 0v1"
        ></path>
      </g>
    </svg>
  );
}

const CloudLogo = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-2"
    >
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5AC8FA" />
          <stop offset="50%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#5856D6" />
        </linearGradient>
      </defs>
      <path
        d="M35.5 18.5C35.5 13.5 31.5 9.5 26.5 9.5C23.5 9.5 20.8 11 19.2 13.3C18.3 12.8 17.2 12.5 16 12.5C12.4 12.5 9.5 15.4 9.5 19C9.5 19.3 9.5 19.6 9.6 19.9C6.4 20.7 4 23.6 4 27C4 31.1 7.4 34.5 11.5 34.5H33C37.1 34.5 40.5 31.1 40.5 27C40.5 23.2 37.6 20 33.9 19.5C34.6 18.6 35 17.6 35 16.5C35.3 17.1 35.5 17.8 35.5 18.5Z"
        fill="url(#cloudGradient)"
      />
    </svg>
  );
};

export default CloudLogo;

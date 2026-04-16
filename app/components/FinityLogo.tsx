export default function FinityLogo({ color = "white" }: { color?: "white" | "black" }) {
  const fill = color === "white" ? "#ffffff" : "#000000";
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="18"
        height="20"
        viewBox="0 0 28.8741 33.0593"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3752 16.5605C12.3752 25.6718 19.7628 33.0593 28.8741 33.0593V0C19.7628 0 12.3752 7.38756 12.3752 16.5605Z"
          fill={fill}
        />
        <path
          d="M4.12507 16.5602C4.12507 22.4702 7.26478 27.8878 12.3745 30.8428V2.27759C7.26478 5.17105 4.12507 10.6501 4.12507 16.5602Z"
          fill={fill}
        />
        <path
          d="M0 16.5606C0 20.5622 1.47751 24.4406 4.12472 27.3957V16.5606V5.66393C1.47751 8.68051 0 12.559 0 16.5606Z"
          fill={fill}
        />
      </svg>
      <span
        className="font-bold text-[1.25rem] tracking-tight leading-none"
        style={{ color: fill }}
      >
        Finity
      </span>
    </div>
  );
}

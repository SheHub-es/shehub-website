import { SVGProps } from "react";

export default function LinkedinLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.79 53.79 0 1 1 0-107.58 53.79 53.79 0 0 1 0 107.58zm384 341h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.6 0-37.6 15.8-43.8 31.1-2.3 5.6-2.9 13.3-2.9 21.1V448h-92.6s1.2-269.5 0-297.1h92.6v42.1c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.3-46.2 83.5-46.2 60.9 0 106.6 39.8 106.6 125.4V448z" />
    </svg>
  );
}

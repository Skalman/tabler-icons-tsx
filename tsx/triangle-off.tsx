function IconTriangleOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-triangle-off"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width={stroke}
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 19h14m1.986 -2.014a2 2 0 0 0 -.146 -.736l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.825 1.424m-1.467 2.53l-4.808 8.296a2 2 0 0 0 1.75 2.75" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

export default IconTriangleOff;

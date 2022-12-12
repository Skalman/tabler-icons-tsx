function IconBoxSeam({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-box-seam"
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
      <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
      <path d="M12 12l8 -4.5" />
      <path d="M8.2 9.8l7.6 -4.6" />
      <path d="M12 12v9" />
      <path d="M12 12l-8 -4.5" />
    </svg>
  );
}

export default IconBoxSeam;

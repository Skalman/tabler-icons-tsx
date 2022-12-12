function IconDeviceWatchStats2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-watch-stats-2"
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
      <rect x={6} y={6} width={12} height={12} rx={3} />
      <path d="M9 18v3h6v-3" />
      <path d="M9 6v-3h6v3" />
      <path d="M12 10a2 2 0 1 0 2 2" />
    </svg>
  );
}

export default IconDeviceWatchStats2;

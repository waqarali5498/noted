export default function CircularColor({ color, onClick }: any) {
  let circleStyle = `w-8 h-8 rounded-full m-2
  list-none  ${color} `;

  if (onClick)
    circleStyle =
      circleStyle + ` focus:ring focus:ring-offset-2 focus:ring-rose-900`;

  return (
    <button className={circleStyle} onClick={() => onClick(color)}></button>
  );
}

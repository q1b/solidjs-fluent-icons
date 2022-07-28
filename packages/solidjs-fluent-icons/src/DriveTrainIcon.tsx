
import { splitProps, ComponentProps, JSX } from "solid-js";

function DriveTrainIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 4a2 2 0 114 0v1h1.59a1.5 1.5 0 012.82 0H13V4a2 2 0 114 0v3a2 2 0 11-4 0V6h-1.59a1.5 1.5 0 01-.91.91v6.18c.43.15.76.48.91.91H13v-1a2 2 0 114 0v3a2 2 0 11-4 0v-1h-1.59a1.5 1.5 0 01-2.82 0H7v1a2 2 0 11-4 0v-3a2 2 0 114 0v1h1.59c.15-.43.48-.76.91-.91V6.9A1.5 1.5 0 018.59 6H7v1a2 2 0 11-4 0V4zm2-1a1 1 0 00-1 1v3a1 1 0 002 0V4a1 1 0 00-1-1zm10 0a1 1 0 00-1 1v3a1 1 0 102 0V4a1 1 0 00-1-1zM5 12a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm9 1v3a1 1 0 102 0v-3a1 1 0 10-2 0z"/>
</svg>

  );
}
export default DriveTrainIcon;
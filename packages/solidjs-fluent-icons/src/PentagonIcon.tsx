
import { splitProps, ComponentProps, JSX } from "solid-js";

function PentagonIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.4 1.65a2.5 2.5 0 013.36 0l5.43 4.99c.73.67 1 1.7.68 2.64l-2.03 6.02a2.5 2.5 0 01-2.36 1.7H6.65c-1.05 0-2-.66-2.35-1.65L2.15 9.4a2.5 2.5 0 01.67-2.7L8.4 1.65zm2.69.74a1.5 1.5 0 00-2.03 0L3.5 7.44a1.5 1.5 0 00-.4 1.62l2.15 5.95c.21.6.78.99 1.4.99h6.84a1.5 1.5 0 001.42-1.02l2.02-6.02a1.5 1.5 0 00-.4-1.58l-5.43-4.99z"/>
</svg>

  );
}
export default PentagonIcon;
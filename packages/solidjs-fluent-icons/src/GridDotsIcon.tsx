
import { splitProps, ComponentProps, JSX } from "solid-js";

function GridDotsIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.25 4a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm12 12a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM16 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM17.25 4a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM10 17.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM11.25 10a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM10 5.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM5.25 16a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM4 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>
</svg>

  );
}
export default GridDotsIcon;
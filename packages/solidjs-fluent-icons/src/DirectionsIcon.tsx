
import { splitProps, ComponentProps, JSX } from "solid-js";

function DirectionsIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 8.5C9.67 8.5 9 9.17 9 10v2.5a.5.5 0 11-1 0V10a2.5 2.5 0 012.5-2.5h.8l-.65-.65a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 11-.7-.7l.64-.65h-.79zM8.23 3.06a2.5 2.5 0 013.54 0l5.17 5.17a2.5 2.5 0 010 3.54l-5.17 5.17a2.5 2.5 0 01-3.54 0l-5.17-5.17a2.5 2.5 0 010-3.54l5.17-5.17zm2.83.7a1.5 1.5 0 00-2.12 0L3.77 8.95a1.5 1.5 0 000 2.12l5.17 5.17a1.5 1.5 0 002.12 0l5.17-5.17a1.5 1.5 0 000-2.12l-5.17-5.17z"/>
</svg>

  );
}
export default DirectionsIcon;
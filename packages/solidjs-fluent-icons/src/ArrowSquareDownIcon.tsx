
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowSquareDownIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 6.5a.5.5 0 00-1 0v5.8L6.85 9.64a.5.5 0 10-.7.7l3.5 3.5c.2.2.5.2.7 0l3.5-3.5a.5.5 0 10-.7-.7l-2.65 2.64V6.5zM5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zM4 5a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/>
</svg>

  );
}
export default ArrowSquareDownIcon;
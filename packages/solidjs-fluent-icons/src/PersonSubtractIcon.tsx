
import { splitProps, ComponentProps, JSX } from "solid-js";

function PersonSubtractIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8a9.14 9.14 0 005.13 1.2 5.5 5.5 0 01-.66-1 7.87 7.87 0 01-3.93-1.05A3.36 3.36 0 014 13a1 1 0 011-1h4.6c.18-.36.4-.7.66-1H5zm14 3.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-7 0c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5z"/>
</svg>

  );
}
export default PersonSubtractIcon;

import { splitProps, ComponentProps, JSX } from "solid-js";

function ColumnIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.5 17a.5.5 0 100-1H16a1 1 0 01-1-1V5a1 1 0 011-1h.5a.5.5 0 000-1H16a2 2 0 00-2 2v10c0 1.1.9 2 2 2h.5zM7 5c0-1.1.9-2 2-2h2a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V5zm5 10V5a1 1 0 00-1-1H9a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1zm-8 2a2 2 0 002-2V5a2 2 0 00-2-2h-.5a.5.5 0 000 1H4a1 1 0 011 1v10.1a1 1 0 01-1 .9h-.5a.5.5 0 100 1H4z"/>
</svg>

  );
}
export default ColumnIcon;
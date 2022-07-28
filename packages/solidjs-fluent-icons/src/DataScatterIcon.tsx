
import { splitProps, ComponentProps, JSX } from "solid-js";

function DataScatterIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 2.5a.5.5 0 00-1 0v15c0 .28.22.5.5.5h15a.5.5 0 000-1H3V2.5zm3 5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM7.5 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm7-1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 5.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm-1 7a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/>
</svg>

  );
}
export default DataScatterIcon;
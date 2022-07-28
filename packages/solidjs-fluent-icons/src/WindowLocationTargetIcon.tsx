
import { splitProps, ComponentProps, JSX } from "solid-js";

function WindowLocationTargetIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3h8a3 3 0 013 3v4.76c-.3-.2-.64-.38-1-.5V7H4v7c0 1.1.9 2 2 2h4.26c.12.36.3.7.5 1H6a3 3 0 01-3-3V6a3 3 0 013-3zM4 6h12a2 2 0 00-2-2H6a2 2 0 00-2 2zm11.06 9.33a1 1 0 11-1.12-1.66 1 1 0 011.12 1.66zM17.95 14h.55a.5.5 0 010 1h-.55A3.49 3.49 0 0115 17.95v.55a.5.5 0 01-1 0v-.55A3.49 3.49 0 0111.05 15h-.55a.5.5 0 010-1h.55A3.49 3.49 0 0114 11.05v-.55a.5.5 0 011 0v.55A3.49 3.49 0 0117.95 14zm-3.2 2.99a2.5 2.5 0 10-.5-4.98 2.5 2.5 0 00.5 4.98z"/>
</svg>

  );
}
export default WindowLocationTargetIcon;
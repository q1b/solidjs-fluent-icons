
import { splitProps, ComponentProps, JSX } from "solid-js";

function DualScreenPaginationIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h5.5V5H4zm12 10a1 1 0 001-1V6a1 1 0 00-1-1h-5.5v10H16zm-4.5-1a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1z"/>
</svg>

  );
}
export default DualScreenPaginationIcon;
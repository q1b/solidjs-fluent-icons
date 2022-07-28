
import { splitProps, ComponentProps, JSX } from "solid-js";

function AlignSpaceBetweenHorizontalIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V6a2 2 0 00-2-2H3zM2 6a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6z"/>
  <path d="M16 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V6a2 2 0 00-2-2h-1zm-1 2a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z"/>
</svg>

  );
}
export default AlignSpaceBetweenHorizontalIcon;
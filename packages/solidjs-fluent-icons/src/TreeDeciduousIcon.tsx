
import { splitProps, ComponentProps, JSX } from "solid-js";

function TreeDeciduousIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a3.5 3.5 0 00-3.39 2.61A3.5 3.5 0 004.05 8.6 3.5 3.5 0 006 15h2v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h2a3.5 3.5 0 001.95-6.4 3.52 3.52 0 00-2.56-3.99A3.5 3.5 0 0010 2zm1 13v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25V15h2zM7.53 5.11a2.5 2.5 0 014.94 0c.03.22.2.39.42.42A2.5 2.5 0 0114.9 8.7a.5.5 0 00.25.58A2.5 2.5 0 0114 14H6a2.5 2.5 0 01-1.15-4.72.5.5 0 00.25-.58A2.5 2.5 0 017.1 5.53a.5.5 0 00.42-.42z"/>
</svg>

  );
}
export default TreeDeciduousIcon;
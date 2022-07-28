
import { splitProps, ComponentProps, JSX } from "solid-js";

function SquareEraserIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.08 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2.08c.37.09.71.26 1 .5V6a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h2.6a2.47 2.47 0 01-.52-1zm1.36.47a1.5 1.5 0 010-2.13l4.9-4.9a1.5 1.5 0 012.12 0l2.1 2.1a1.5 1.5 0 010 2.13L14.22 18h2.53a.5.5 0 010 1h-4.1a1.5 1.5 0 01-1.12-.44l-2.1-2.1zm5.61-6.32l-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 000-.71l-2.1-2.1a.5.5 0 00-.7 0zm-1.5 7.1l-2.8-2.8-.6.6a.5.5 0 000 .71l2.1 2.1a.5.5 0 00.7 0l.6-.6z"/>
</svg>

  );
}
export default SquareEraserIcon;
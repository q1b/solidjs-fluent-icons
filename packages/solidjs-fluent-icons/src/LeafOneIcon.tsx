
import { splitProps, ComponentProps, JSX } from "solid-js";

function LeafOneIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.07 2.46l3.24 3.3A6.03 6.03 0 0110.5 16v1.5a.5.5 0 11-1 0V16A6.03 6.03 0 015.69 5.76l3.24-3.3a1.5 1.5 0 012.14 0zm-.57 12.53a5.03 5.03 0 003.1-8.52l-3.24-3.31a.5.5 0 00-.72 0L6.4 6.46A5.03 5.03 0 009.5 15v-5.5a.5.5 0 111 0V15z"/>
</svg>

  );
}
export default LeafOneIcon;
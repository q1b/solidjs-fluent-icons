
import { splitProps, ComponentProps, JSX } from "solid-js";

function AlignSpaceBetweenVerticalIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 1a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2V3a2 2 0 00-2-2H6zM5 3a1 1 0 011-1h8a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1V3z"/>
  <path d="M6 14a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2v-1a2 2 0 00-2-2H6zm-1 2a1 1 0 011-1h8a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1z"/>
</svg>

  );
}
export default AlignSpaceBetweenVerticalIcon;
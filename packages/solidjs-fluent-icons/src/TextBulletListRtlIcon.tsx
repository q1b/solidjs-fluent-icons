
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextBulletListRtlIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 6.5a1 1 0 110-2 1 1 0 010 2zm-3-1a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5zm0 5a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5zm-.5 4.5a.5.5 0 010 1h-11a.5.5 0 010-1h11zm2.5.5a1 1 0 102 0 1 1 0 00-2 0zm1-4a1 1 0 110-2 1 1 0 010 2z"/>
</svg>

  );
}
export default TextBulletListRtlIcon;
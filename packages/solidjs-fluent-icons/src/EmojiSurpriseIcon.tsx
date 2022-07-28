
import { splitProps, ComponentProps, JSX } from "solid-js";

function EmojiSurpriseIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 9.5a1 1 0 100-2 1 1 0 000 2zm4.25 3a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zm.75-3a1 1 0 100-2 1 1 0 000 2zM10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z"/>
</svg>

  );
}
export default EmojiSurpriseIcon;

import { splitProps, ComponentProps, JSX } from "solid-js";

function EmojiSmileSlightIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.5 8.5a1 1 0 10-2 0 1 1 0 002 0zm-5 0a1 1 0 10-2 0 1 1 0 002 0zm-.03 4.55a.5.5 0 10-.44.9c.58.29 1.28.43 1.97.43s1.39-.14 1.97-.43a.5.5 0 10-.44-.9c-.42.21-.97.32-1.53.32a3.5 3.5 0 01-1.53-.32zM18 10a8 8 0 10-16 0 8 8 0 0016 0zM3 10a7 7 0 1114 0 7 7 0 01-14 0z"/>
</svg>

  );
}
export default EmojiSmileSlightIcon;
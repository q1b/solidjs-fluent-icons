
import { splitProps, ComponentProps, JSX } from "solid-js";

function EmojiEditIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a8 8 0 017.95 7.12c-.33-.1-.68-.14-1.02-.11a7 7 0 10-7.7 7.95l-.17.7c-.03.09-.04.18-.05.28A8 8 0 0110 2zM7.15 12.43a4.01 4.01 0 004.57.8l-1.38 1.37a5 5 0 01-3.9-1.47.5.5 0 01.71-.7zM12.5 7.5a1 1 0 110 2 1 1 0 010-2zm-5 0a1 1 0 110 2 1 1 0 010-2zm3.48 7.88l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z"/>
</svg>

  );
}
export default EmojiEditIcon;
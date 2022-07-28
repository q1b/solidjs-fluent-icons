
import { splitProps, ComponentProps, JSX } from "solid-js";

function FeedIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 7a.5.5 0 100-1 .5.5 0 000 1zM5 10c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3A.5.5 0 015 10zm.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 17h8.47c.65.02 1.31-.36 1.5-1.18L14.4 14h2.11c.83 0 1.5-.67 1.5-1.5V7.58c0-.98-.75-1.56-1.52-1.58H12V4.5c0-.83-.67-1.5-1.5-1.5h-7C2.67 3 2 3.67 2 4.5V15c0 1.1.9 2 2 2zM3 4.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v10.98c0 .2.03.36.08.52H4a1 1 0 01-1-1V4.5zM16.5 13h-1.87l1.28-5.54c.15-.64 1.09-.53 1.09.12v4.92a.5.5 0 01-.5.5zM12 7h3.01a1.8 1.8 0 00-.07.23L13 15.6c-.14.58-1 .48-1-.12V7z"/>
</svg>

  );
}
export default FeedIcon;
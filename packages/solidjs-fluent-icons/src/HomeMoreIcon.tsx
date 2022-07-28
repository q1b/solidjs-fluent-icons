
import { splitProps, ComponentProps, JSX } from "solid-js";

function HomeMoreIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 11a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm-7 4a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zM9 2.38a1.5 1.5 0 012 0l5.5 4.95c.32.28.5.69.5 1.11v7.06c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 15.5V8.44c0-.42.18-.83.5-1.11L9 2.38zm1.33.75a.5.5 0 00-.66 0l-5.5 4.94a.5.5 0 00-.17.37v7.06c0 .28.22.5.5.5h11a.5.5 0 00.5-.5V8.44a.5.5 0 00-.17-.37l-5.5-4.94z"/>
</svg>

  );
}
export default HomeMoreIcon;
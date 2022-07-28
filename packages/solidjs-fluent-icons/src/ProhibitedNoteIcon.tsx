
import { splitProps, ComponentProps, JSX } from "solid-js";

function ProhibitedNoteIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 10v.17a3 3 0 00-1-.17c0-1.75-.64-3.36-1.7-4.58l-9.88 9.87A6.97 6.97 0 009 16.93V17a3 3 0 00.16.96A8 8 0 1118 10zM4.7 14.58l9.88-9.87a7 7 0 00-9.87 9.87zM12 11a2 2 0 00-2 2v4c0 1.1.9 2 2 2h5a2 2 0 002-2v-4a2 2 0 00-2-2h-5zm.5 5h4a.5.5 0 110 1h-4a.5.5 0 110-1zm-.5-2.5c0-.28.22-.5.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5z"/>
</svg>

  );
}
export default ProhibitedNoteIcon;
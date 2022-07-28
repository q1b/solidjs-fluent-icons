
import { splitProps, ComponentProps, JSX } from "solid-js";

function HdrOffIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l1.41 1.42A2.75 2.75 0 002 6.75v6.5A2.75 2.75 0 004.75 16h10.54l1.86 1.85a.5.5 0 00.7-.7l-15-15zM14.3 15H4.75C3.78 15 3 14.22 3 13.25v-6.5c0-.83.57-1.52 1.34-1.7l2.72 2.72A.5.5 0 007 8v1.5H5V8a.5.5 0 00-1 0v4a.5.5 0 001 0v-1.5h2V12a.5.5 0 001 0V8.7l1 1V12c0 .28.22.5.5.5h.25c.57 0 1.09-.21 1.48-.56L14.3 15zM10 10.7l.52.53c-.15.12-.32.2-.52.24v-.76zm-.38-3.2L12 9.88v-.13c0-1.24-1-2.25-2.25-2.25h-.13zM13 10.88l1 1V10.5h.4l.63 1.68a.5.5 0 00.94-.36l-.6-1.6a1.5 1.5 0 00-.87-2.72h-1a.5.5 0 00-.5.5v2.88zm4 2.37c0 .45-.17.86-.45 1.18l.7.7c.47-.49.75-1.15.75-1.88v-6.5A2.75 2.75 0 0015.25 4H6.12l1 1h8.13c.97 0 1.75.78 1.75 1.75v6.5zM14 9.5h.5a.5.5 0 000-1H14v1z"/>
</svg>

  );
}
export default HdrOffIcon;
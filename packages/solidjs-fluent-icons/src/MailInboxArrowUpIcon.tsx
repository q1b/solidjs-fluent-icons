
import { splitProps, ComponentProps, JSX } from "solid-js";

function MailInboxArrowUpIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.15-2.35A.5.5 0 0013.5 3a.5.5 0 00-.35.15l-2 2a.5.5 0 00.7.7L13 4.71V7.5a.5.5 0 101 0V4.7l1.15 1.15a.5.5 0 00.7-.7l-2-2zM8.02 5H6a2 2 0 00-2 2v4h3.5c.28 0 .5.22.5.5v.01a1.68 1.68 0 00.03.3c.04.2.1.46.23.72.13.25.3.49.57.66.26.18.63.31 1.17.31.54 0 .9-.13 1.17-.3.26-.18.44-.42.57-.67A2.42 2.42 0 0012 11.5v-.01c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66V15a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h2.2c-.08.32-.15.66-.18 1zm-.97 7H4v3c0 1.1.9 2 2 2h8a2 2 0 002-2v-3h-3.05c-.05.26-.14.62-.32.97a2.7 2.7 0 01-.9 1.06c-.45.29-1.02.47-1.73.47s-1.28-.18-1.72-.47a2.7 2.7 0 01-.91-1.06c-.18-.35-.27-.7-.32-.97z"/>
</svg>

  );
}
export default MailInboxArrowUpIcon;
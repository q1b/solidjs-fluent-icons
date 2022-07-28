import { splitProps } from "solid-js";
function MailWarningIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.6 1.55l-3.5 7A1 1 0 0011 10h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM15 3.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zM14.5 9a.5.5 0 110-1 .5.5 0 010 1zm3.5 2h-6.16l-1.59.93a.5.5 0 01-.5 0L2 7.37v7.13A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5V11zM9.22 8.1L11.27 4H4.5a2.5 2.5 0 00-2.48 2.22l7.98 4.7.17-.1a2 2 0 01-.95-2.72z"/>
    </svg>);
}
export default MailWarningIcon;

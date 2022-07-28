import { splitProps } from "solid-js";
function MentionBracketsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 3C3.67 3 3 3.67 3 4.5v11c0 .83.67 1.5 1.5 1.5h2a.5.5 0 010 1h-2A2.5 2.5 0 012 15.5v-11A2.5 2.5 0 014.5 2h2a.5.5 0 010 1h-2zm11 14c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 010-1h2A2.5 2.5 0 0118 4.5v11a2.5 2.5 0 01-2.5 2.5h-2a.5.5 0 010-1h2zm-4-7a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM10 7.5c.56 0 1.08.19 1.5.5a.5.5 0 011 0v2.75a.75.75 0 001.5 0V10a4 4 0 10-4.24 4h.02a3.99 3.99 0 001.58-.23c.3-.1.64.11.64.43 0 .23-.14.45-.36.53A5 5 0 1115 10v.75a1.75 1.75 0 01-3.2.98A2.5 2.5 0 017.5 10 2.5 2.5 0 0110 7.5z"/>
    </svg>);
}
export default MentionBracketsIcon;

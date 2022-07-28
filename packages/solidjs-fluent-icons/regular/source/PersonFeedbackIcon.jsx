import { splitProps } from "solid-js";
function PersonFeedbackIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 12c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h7zm0 1h-7a.5.5 0 00-.5.5v.5c0 1.44 1.43 3 4 3 2.57 0 4-1.56 4-3v-.5a.5.5 0 00-.5-.5zM7 5.5A2.75 2.75 0 117 11a2.75 2.75 0 010-5.5zM16 2a2 2 0 012 1.85V6a2 2 0 01-1.85 2H14.5l-1.2 1.6a1 1 0 01-1.78-.38l-.01-.1V9l-.01-1.07-.08-.01a2 2 0 01-1.4-1.6l-.01-.17L10 6V4a2 2 0 011.85-2H16zM7 6.5A1.75 1.75 0 107 10a1.75 1.75 0 000-3.5zM16 3h-4a1 1 0 00-1 .88V6a1 1 0 00.88 1h.62v2L14 7h2a1 1 0 001-.88V4a1 1 0 00-.88-1H16z"/>
    </svg>);
}
export default PersonFeedbackIcon;

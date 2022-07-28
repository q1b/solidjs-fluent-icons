import { splitProps } from "solid-js";
function ExpandUpLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 6a2 2 0 00-2-2h-2.5a.5.5 0 010-1H14a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.5a.5.5 0 011 0V14c0 1.1.9 2 2 2h4v-4c0-1.1.9-2 2-2h4V6zm-4 5a1 1 0 00-1 1v4h3a2 2 0 002-2v-3h-4zM9 3.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v5a.5.5 0 001 0V4.7l4.15 4.15a.5.5 0 10.7-.7L4.71 4H8.5a.5.5 0 00.5-.5z"/>
    </svg>);
}
export default ExpandUpLeftIcon;

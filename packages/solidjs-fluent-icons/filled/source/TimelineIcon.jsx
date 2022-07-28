import { splitProps } from "solid-js";
function TimelineIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 3C2.67 3 2 3.67 2 4.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9zm0 8c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9zM17 12.44a2 2 0 01-1-3.88 2 2 0 011 3.88zM16.5 3c.28 0 .5.22.5.5v4.04a3.02 3.02 0 00-1 0V3.5c0-.28.22-.5.5-.5zm0 10.5c-.17 0-.34-.01-.5-.04v4.04a.5.5 0 001 0v-4.04c-.16.03-.33.04-.5.04z"/>
    </svg>);
}
export default TimelineIcon;

import { splitProps } from "solid-js";
function ShareScreenStartIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 14a.5.5 0 01-.5-.5V7.7L7.85 9.36a.5.5 0 11-.7-.7l2.5-2.5c.2-.2.5-.2.7 0l2.5 2.5a.5.5 0 01-.7.7L10.5 7.71v5.79a.5.5 0 01-.5.5zM2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H4z"/>
    </svg>);
}
export default ShareScreenStartIcon;

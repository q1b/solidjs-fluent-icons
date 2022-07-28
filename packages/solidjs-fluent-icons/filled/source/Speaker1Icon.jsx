import { splitProps } from "solid-js";
function Speaker1Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12 3a1 1 0 00-1.68-.73l-3.87 3.6A.5.5 0 016.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 01.35.13l3.87 3.6a1 1 0 001.68-.74V3.01zm2.08 9.93a.5.5 0 01-.19-.68 4.5 4.5 0 000-4.5.5.5 0 11.87-.5 5.5 5.5 0 010 5.5.5.5 0 01-.68.18z"/>
    </svg>);
}
export default Speaker1Icon;

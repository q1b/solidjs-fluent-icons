import { splitProps } from "solid-js";
function Speaker1Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12 3a1 1 0 00-1.68-.73l-3.88 3.6A.5.5 0 016.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 01.34.13l3.88 3.6a1 1 0 001.68-.74V3.01zM7.12 6.6L11 3v14l-3.88-3.6A1.5 1.5 0 006.1 13H3.5a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5h2.6c.38 0 .75-.14 1.02-.4zm6.96 6.33a.5.5 0 01-.18-.68 4.5 4.5 0 000-4.5.5.5 0 01.86-.5 5.5 5.5 0 010 5.5.5.5 0 01-.68.18z"/>
    </svg>);
}
export default Speaker1Icon;

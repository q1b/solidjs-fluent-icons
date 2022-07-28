import { splitProps } from "solid-js";
function XboxConsoleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 6.5a.75.75 0 100-1.5.75.75 0 000 1.5zM4 2.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v15a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-15zm4 7V17h7V3H5v14h2V9.5a.5.5 0 011 0z"/>
    </svg>);
}
export default XboxConsoleIcon;

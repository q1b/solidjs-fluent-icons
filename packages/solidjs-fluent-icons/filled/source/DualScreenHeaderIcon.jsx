import { splitProps } from "solid-js";
function DualScreenHeaderIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 16h-5.5V8H18v6a2 2 0 01-2 2zm2-9V6a2 2 0 00-2-2h-5.5v3H18zM9.5 7V4H4a2 2 0 00-2 2v1h7.5zM2 8v6c0 1.1.9 2 2 2h5.5V8H2z"/>
    </svg>);
}
export default DualScreenHeaderIcon;

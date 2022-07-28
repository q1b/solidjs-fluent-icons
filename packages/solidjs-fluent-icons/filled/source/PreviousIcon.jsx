import { splitProps } from "solid-js";
function PreviousIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 4.25c0-1-1.12-1.6-1.95-1.04l-8.5 5.71c-.73.5-.73 1.57 0 2.07l8.5 5.8c.83.56 1.95-.03 1.95-1.04V4.25zM3 3.5a.5.5 0 011 0v13a.5.5 0 01-1 0v-13z"/>
    </svg>);
}
export default PreviousIcon;

import { splitProps } from "solid-js";
function CopyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 4c0-1.1.9-2 2-2h6a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V4zM4 6a2 2 0 011-1.73V14.5A2.5 2.5 0 007.5 17h6.23A2 2 0 0112 18H7.5A3.5 3.5 0 014 14.5V6z"/>
    </svg>);
}
export default CopyIcon;

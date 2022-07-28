import { splitProps } from "solid-js";
function SubtractSquareMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 5.27c.6.34 1 .99 1 1.73v6a4 4 0 01-4 4H7a2 2 0 01-1.73-1H13a3 3 0 003-3V5.27zM15 5a2 2 0 00-2-2H5a2 2 0 00-2 2v8c0 1.1.9 2 2 2h8a2 2 0 002-2V5zm-3 4a.5.5 0 01-.5.5h-5a.5.5 0 110-1h5c.28 0 .5.22.5.5z"/>
    </svg>);
}
export default SubtractSquareMultipleIcon;

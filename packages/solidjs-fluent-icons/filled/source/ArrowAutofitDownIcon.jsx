import { splitProps } from "solid-js";
function ArrowAutofitDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.71 14.77l-.7.73V2.75a.75.75 0 10-1.5 0v12.76l-.72-.74a.75.75 0 00-1.08 1.04l1.82 1.88a1 1 0 001.44 0l1.82-1.88a.75.75 0 00-1.08-1.04zM5 17a2 2 0 01-2-2V5c0-1.1.9-2 2-2h6.25a.75.75 0 010 1.5H5a.5.5 0 00-.5.5v10c0 .28.22.5.5.5h4.25a.75.75 0 010 1.5H5z"/>
    </svg>);
}
export default ArrowAutofitDownIcon;

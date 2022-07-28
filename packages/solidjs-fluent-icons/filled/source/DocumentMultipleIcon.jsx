import { splitProps } from "solid-js";
function DocumentMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 6.5V2H5.5C4.67 2 4 2.67 4 3.5v11c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 019 6.5zm1 0V2.25L14.75 7H10.5a.5.5 0 01-.5-.5zM17 9a1 1 0 00-1-1v6a3 3 0 01-3 3H6a1 1 0 001 1h6.06A3.94 3.94 0 0017 14.06V9z"/>
    </svg>);
}
export default DocumentMultipleIcon;

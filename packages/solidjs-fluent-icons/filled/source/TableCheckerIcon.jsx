import { splitProps } from "solid-js";
function TableCheckerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 3v4H3V5.5A2.5 2.5 0 015.5 3H7zm5 5H8v4h4V8zm1 5h4v1.5a2.5 2.5 0 01-2.5 2.5H13v-4zM8 4h6.5c.83 0 1.5.67 1.5 1.5V12h1V5.5A2.5 2.5 0 0014.5 3H8v1zM5.5 16H12v1H5.5A2.5 2.5 0 013 14.5V8h1v6.5c0 .83.67 1.5 1.5 1.5z"/>
    </svg>);
}
export default TableCheckerIcon;

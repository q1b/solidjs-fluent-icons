import { splitProps } from "solid-js";
function TableCopyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 13.5A3.5 3.5 0 006.5 17h7.83c-.77.63-1.76 1-2.83 1h-5A4.5 4.5 0 012 13.5v-5c0-1.07.37-2.06 1-2.83v7.83zM15.5 16H14v-4h4v1.5a2.5 2.5 0 01-2.5 2.5zM14 7v4h4V7h-4zm-5 4h4V7H9v4zm4 1H9v4h4v-4zM8 7v4H4V7h4zm0 5H4v1.5A2.5 2.5 0 006.5 16H8v-4zm10-6h-4V2h1.5A2.5 2.5 0 0118 4.5V6zm-5 0V2H9v4h4zM8 6V2H6.5A2.5 2.5 0 004 4.5V6h4z"/>
    </svg>);
}
export default TableCopyIcon;

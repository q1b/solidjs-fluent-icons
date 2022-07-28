import { splitProps } from "solid-js";
function TableCellEditIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.98 13c.1-.12.19-.23.3-.33l.66-.67H8V8h4v2.94l1-1V8h1.94l.16-.16c.26-.26.55-.45.86-.6A2 2 0 0015 7H5a2 2 0 00-2 2v2c0 1.1.9 2 2 2h4.98zM7 8v4H5a1 1 0 01-1-1V9a1 1 0 011-1h2zm8.8.55l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z"/>
    </svg>);
}
export default TableCellEditIcon;

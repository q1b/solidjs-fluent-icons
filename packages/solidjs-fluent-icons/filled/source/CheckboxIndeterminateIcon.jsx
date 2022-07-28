import { splitProps } from "solid-js";
function CheckboxIndeterminateIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zM4.5 6c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H6A1.5 1.5 0 014.5 14V6zM7 6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1H7z"/>
    </svg>);
}
export default CheckboxIndeterminateIcon;

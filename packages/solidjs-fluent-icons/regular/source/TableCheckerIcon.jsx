import { splitProps } from "solid-js";
function TableCheckerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 5.5V11h1V5.5A2.5 2.5 0 0014.5 3H9v1h5.5c.83 0 1.5.67 1.5 1.5zM3 9v5.5A2.5 2.5 0 005.5 17H11v-1H5.5A1.5 1.5 0 014 14.5V9H3zm2.5-6H8v4h5v5h4v2.5a2.5 2.5 0 01-2.5 2.5H12v-4H7V8H3V5.5A2.5 2.5 0 015.5 3zm9 13c.78 0 1.42-.6 1.5-1.36V13h-3v3h1.5zM12 8H8v4h4V8zM4 7h3V4H5.5c-.78 0-1.42.6-1.5 1.36V7z"/>
    </svg>);
}
export default TableCheckerIcon;

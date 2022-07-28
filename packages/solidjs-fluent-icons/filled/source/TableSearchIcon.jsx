import { splitProps } from "solid-js";
function TableSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13 17h1.5a2.5 2.5 0 002.5-2.5V13h-4v4z"/>
  <path d="M13 12V8h4v4h-4z"/>
  <path d="M12 12H8.74A4.5 4.5 0 008 10.67V8h4v4z"/>
  <path d="M8.56 15.44L10.12 17H12v-4H8.97a4.55 4.55 0 01-.4 2.44z"/>
  <path d="M4.5 9c.93 0 1.78.28 2.5.76V8H3v1.26A4.5 4.5 0 014.5 9z"/>
  <path d="M13 7h4V5.5A2.5 2.5 0 0014.5 3H13v4z"/>
  <path d="M12 3v4H8V3h4z"/>
  <path d="M7 3v4H3V5.5A2.5 2.5 0 015.5 3H7z"/>
  <path d="M4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L7.3 15.6A3.5 3.5 0 104.5 17zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
    </svg>);
}
export default TableSearchIcon;

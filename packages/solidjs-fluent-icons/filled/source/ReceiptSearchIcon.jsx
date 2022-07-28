import { splitProps } from "solid-js";
function ReceiptSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3h-2.08c-.08-.2-.2-.4-.36-.56l-2-2A4.5 4.5 0 009.25 10h1.25a.5.5 0 000-1H8.33A4.5 4.5 0 003 8.76V5zm11 11a2 2 0 002-2v-1h-2v3zM6.5 6a.5.5 0 000 1h4a.5.5 0 000-1h-4zm1.1 9.3a3.48 3.48 0 01-4.27-.06 3.5 3.5 0 114.97-.64l2.56 2.54a.5.5 0 01-.71.71L7.6 15.3zm-3.49-.72a2.5 2.5 0 102.78-4.16 2.5 2.5 0 00-2.78 4.16z"/>
    </svg>);
}
export default ReceiptSearchIcon;

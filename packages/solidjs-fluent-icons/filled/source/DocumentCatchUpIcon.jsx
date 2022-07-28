import { splitProps } from "solid-js";
function DocumentCatchUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5V13h1.5a1.5 1.5 0 001.34-.83l.04-.07 1.24 2.98a1.5 1.5 0 002.72.1L11.93 13h.57a1.5 1.5 0 000-3H11a1.5 1.5 0 00-1.34.83l-.04.07-1.24-2.98a1.5 1.5 0 00-2.72-.1L4.57 10H4V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM7.46 8.31a.5.5 0 00-.9-.03L5.18 11H3.5a.5.5 0 000 1h2a.5.5 0 00.45-.28l1-2.02 2.09 5a.5.5 0 00.9.02L11.32 12h1.19a.5.5 0 000-1H11a.5.5 0 00-.45.28l-1 2.02-2.09-5z"/>
    </svg>);
}
export default DocumentCatchUpIcon;

import { splitProps } from "solid-js";
function DocumentRibbonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H8v-2.35a4 4 0 00-4-6.52V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM8 13a3 3 0 11-6 0 3 3 0 016 0zm-1 3.46a3.98 3.98 0 01-4 0v2.29c0 .2.21.31.38.21L5 18l1.62.96c.17.1.38-.02.38-.21v-2.29z"/>
    </svg>);
}
export default DocumentRibbonIcon;

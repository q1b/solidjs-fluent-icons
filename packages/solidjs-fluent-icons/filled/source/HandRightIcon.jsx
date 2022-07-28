import { splitProps } from "solid-js";
function HandRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 8.5V2.75a.75.75 0 011.5 0V8.5a.5.5 0 001 0V3.75a.75.75 0 011.5 0v6.5c.66-.43 1.4-.75 2-.75.97 0 1.79.32 1.98 1.12.02.04.02.1.02.14 0 .15-.07.3-.2.38l-1.3.99c-1.07.8-2.07 1.86-2.76 2.99-.38.6-.72 1.23-1.06 1.86-.36.68-.59 1.02-1.68 1.02H6.95C6 18 5.64 17.47 5 16a11.7 11.7 0 01-1-3.5V5.25a.75.75 0 011.5 0V9a.5.5 0 001 0V3.75a.75.75 0 011.5 0V8.5a.5.5 0 001 0z"/>
    </svg>);
}
export default HandRightIcon;

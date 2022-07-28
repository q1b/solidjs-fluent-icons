import { splitProps } from "solid-js";
function NumberSymbolSquareIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.45 9l-.43 2H8.55l.43-2h2.47zM5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9zm3.6 3.01a.5.5 0 01.39.6L9.19 8h2.48L12 6.4a.5.5 0 01.98.2l-.3 1.4h.81a.5.5 0 010 1h-1.02l-.43 2H13a.5.5 0 010 1h-1.17l-.34 1.6a.5.5 0 11-.98-.2l.3-1.4H8.33L8 13.6a.5.5 0 11-.98-.2l.3-1.4H6.5a.5.5 0 010-1h1.02l.43-2H7a.5.5 0 010-1h1.17l.34-1.6a.5.5 0 01.6-.39z"/>
    </svg>);
}
export default NumberSymbolSquareIcon;

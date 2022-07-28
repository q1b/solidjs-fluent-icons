import { splitProps } from "solid-js";
function NumberSymbolDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.99 2.88a.75.75 0 00-1.48-.26L6.84 6.5H3.75a.75.75 0 000 1.5h2.83l-.68 4H2.75a.75.75 0 000 1.5h2.89L5 17.12a.75.75 0 101.48.26l.67-3.88H9.1c.1-.53.27-1.04.51-1.5H7.42l.69-4h4.47l-.24 1.44c.5-.21 1.03-.35 1.59-.41L14.11 8h3.14a.75.75 0 100-1.5h-2.88l.62-3.62a.75.75 0 00-1.48-.26l-.67 3.88H8.37l.62-3.62zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z"/>
    </svg>);
}
export default NumberSymbolDismissIcon;

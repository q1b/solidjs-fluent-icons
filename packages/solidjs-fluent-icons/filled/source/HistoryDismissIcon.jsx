import { splitProps } from "solid-js";
function HistoryDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.37 2.03A8 8 0 0118 10.25a5.5 5.5 0 00-1.53-.89 6.5 6.5 0 00-11.4-3.6l-.2.24h1.88l.1.01a.75.75 0 010 1.49h-3.7a.75.75 0 01-.64-.64V2.66c.04-.34.3-.6.64-.65h.2c.34.05.6.3.65.64v2.06a7.98 7.98 0 015.37-2.68zm0 14.44c.2.56.51 1.07.88 1.53A8 8 0 012 9.74a.75.75 0 111.5.04 6.5 6.5 0 005.86 6.69zm.89-5.47a5.52 5.52 0 011.95-1.5H10.5V6.65a.75.75 0 00-.65-.64h-.2c-.34.05-.6.3-.64.64l-.01.1v3.6c.05.33.31.6.65.64l.1.01h.5zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z"/>
    </svg>);
}
export default HistoryDismissIcon;

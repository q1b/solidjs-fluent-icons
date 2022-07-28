import { splitProps } from "solid-js";
function PlugConnectedAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.96 2.3a.5.5 0 00-.82-.15l-2.7 2.7a4.04 4.04 0 00-5.33.33l-.6.61a1.05 1.05 0 000 1.49l2.76 2.76c.28-.2.58-.37.89-.52L9.52 6.88a.5.5 0 010-.7l.3-.3a3.03 3.03 0 014.29 0v.02a3.04 3.04 0 01.73 3.11c.34.02.68.07 1 .16a4.03 4.03 0 00-.69-3.62l2.7-2.7a.5.5 0 00.11-.54zM7.28 8.5l2.77 2.77c-.2.28-.38.57-.53.88L6.9 9.52a.49.49 0 00-.7 0l-.3.3a3.04 3.04 0 000 4.29h.01a3.03 3.03 0 003.11.73c.02.34.07.68.15 1a4.03 4.03 0 01-3.6-.69l-2.7 2.7a.5.5 0 11-.71-.7l2.7-2.7a4.03 4.03 0 01.33-5.34l.3-.3.31-.31a1.05 1.05 0 011.49 0zM17 18.24a4.5 4.5 0 11-5-7.48 4.5 4.5 0 015 7.48zm-2.15-6.1a.5.5 0 00-.85.36V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5a.5.5 0 00-.15-.35z"/>
    </svg>);
}
export default PlugConnectedAddIcon;

import { splitProps } from "solid-js";
function ColumnTripleEditIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm3 0H4v12h2V4zm2 0a1 1 0 011-1h2a1 1 0 011 1v8.94l-1 1V4H9v12h.47l-.04.16-.21.84H9a1 1 0 01-1-1V4zm9 0v5c-.34.02-.68.1-1 .23V4h-2v6.94l-1 1V4a1 1 0 011-1h2a1 1 0 011 1zm-6.02 11.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z"/>
    </svg>);
}
export default ColumnTripleEditIcon;

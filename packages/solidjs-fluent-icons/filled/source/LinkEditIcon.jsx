import { splitProps } from "solid-js";
function LinkEditIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 8a4 4 0 00-4-4h-2.1a.75.75 0 00.1 1.5h2.16A2.5 2.5 0 0116.5 8v.02c.52.07 1.02.28 1.45.63.03-.21.05-.43.05-.65zM8.75 4.75A.75.75 0 008 4H5.8a4 4 0 00.2 8h2.1a.75.75 0 00-.1-1.5H5.84a2.5 2.5 0 01.16-5h2.1a.75.75 0 00.65-.75zm5 2.5h-7.6a.75.75 0 00.1 1.5h7.6a.75.75 0 00-.1-1.5zm-3.77 7.13l4.83-4.83a1.87 1.87 0 012.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01z"/>
    </svg>);
}
export default LinkEditIcon;

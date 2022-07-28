import { splitProps } from "solid-js";
function SlideMultipleSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a4 4 0 00-4 4v2.76c.58-.4 1.27-.65 2-.73V8a3 3 0 013-3h8a2 2 0 00-2-2H6zm10 14h-5.88l-1.56-1.56A4.5 4.5 0 005 9.03V8c0-1.1.9-2 2-2h9a2 2 0 012 2v7a2 2 0 01-2 2zM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L7.3 15.6A3.5 3.5 0 104.5 17zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
    </svg>);
}
export default SlideMultipleSearchIcon;

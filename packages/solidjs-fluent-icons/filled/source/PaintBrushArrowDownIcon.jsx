import { splitProps } from "solid-js";
function PaintBrushArrowDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.57 17.24A.5.5 0 004 18h1.7l.02-.03c.26-.54.55-1.14.79-1.71.3-.73.49-1.35.49-1.76a.5.5 0 011 0c0 .63-.27 1.41-.57 2.14-.19.46-.4.92-.61 1.36H8c.2-.39.43-.8.61-1.21.24-.54.39-.99.39-1.29a.5.5 0 011 0c0 .53-.23 1.15-.48 1.7-.12.27-.25.54-.39.8h2.75l-.44-.44A1.5 1.5 0 0113 15.1V13.5a1.5 1.5 0 012-1.41V11H5v.5a12.57 12.57 0 01-1.42 5.72v.02zM5 10h10V9a2 2 0 00-2-2h-1V4a2 2 0 10-4 0v3H7a2 2 0 00-2 2v1zm10 3.5a.5.5 0 00-1 0v3.8l-1.15-1.15a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 00-.7-.7L15 17.29V13.5z"/>
    </svg>);
}
export default PaintBrushArrowDownIcon;

import { splitProps } from "solid-js";
function SquareArrowForwardIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v3.6c-.32-.16-.65-.3-1-.4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 01-3-3V6zm11.5 13a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm.9-6.4l.9.9h-1.55A2.75 2.75 0 0012 16.25v.25a.5.5 0 001 0v-.25c0-.97.78-1.75 1.75-1.75h1.54l-.9.9a.5.5 0 00.71.7l1.76-1.75a.5.5 0 000-.7L16.1 11.9a.5.5 0 00-.7.7z"/>
    </svg>);
}
export default SquareArrowForwardIcon;

import { splitProps } from "solid-js";
function ClosedCaptionIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm1.4 3.24c.82-.41 1.8-.24 2.45.4a.5.5 0 01-.7.71 1.12 1.12 0 00-1.3-.22C6.44 8.34 6 8.9 6 10s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 11.7.7c-.65.65-1.63.82-2.45.41C5.56 12.34 5 11.39 5 10c0-1.39.56-2.34 1.4-2.76zm7.95.4a.5.5 0 01-.7.71 1.12 1.12 0 00-1.3-.22c-.41.21-.85.76-.85 1.87s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 01.7.7c-.65.65-1.63.82-2.45.41-.84-.42-1.4-1.37-1.4-2.76 0-1.39.56-2.34 1.4-2.76.82-.41 1.8-.24 2.45.4z"/>
    </svg>);
}
export default ClosedCaptionIcon;

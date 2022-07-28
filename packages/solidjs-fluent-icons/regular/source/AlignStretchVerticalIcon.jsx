import { splitProps } from "solid-js";
function AlignStretchVerticalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.5 3a.5.5 0 000 1h15a.5.5 0 000-1h-15z"/>
  <path d="M2.5 16a.5.5 0 000 1h15a.5.5 0 000-1h-15z"/>
  <path d="M4 13c0 1.1.9 2 2 2h1a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6zm2 1a1 1 0 01-1-1V7a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1H6z"/>
  <path d="M13 15h1a2 2 0 002-2V7a2 2 0 00-2-2h-1a2 2 0 00-2 2v6c0 1.1.9 2 2 2zm-1-2V7a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1z"/>
    </svg>);
}
export default AlignStretchVerticalIcon;

import { splitProps } from "solid-js";
function CopyAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 4c0-1.1.9-2 2-2h6a2 2 0 012 2v5.2A5.5 5.5 0 009.2 16H8a2 2 0 01-2-2V4zm4.26 14a5.5 5.5 0 01-.66-1H7.5A2.5 2.5 0 015 14.5V4.27A2 2 0 004 6v8.5A3.5 3.5 0 007.5 18h2.76zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z"/>
    </svg>);
}
export default CopyAddIcon;

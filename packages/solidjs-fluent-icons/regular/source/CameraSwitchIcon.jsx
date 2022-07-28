import { splitProps } from "solid-js";
function CameraSwitchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.85 2.15a.5.5 0 00-.7.7L15.29 4H4a2 2 0 00-2 2v6.5a.5.5 0 001 0V6a1 1 0 011-1h11.3l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2zM16 15a1 1 0 001-1V7.5a.5.5 0 011 0V14a2 2 0 01-2 2H4.7l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7L4.71 15H16zm-3-5a3 3 0 11-6 0 3 3 0 016 0zm-1 0a2 2 0 10-4 0 2 2 0 004 0z"/>
    </svg>);
}
export default CameraSwitchIcon;

import { splitProps } from "solid-js";
function MidiIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.5 4a.5.5 0 00-.5.5v11c0 .28.22.5.5.5h15a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-15zm.5 6h2v3.5a.5.5 0 001 0V10h2v3.5a.5.5 0 001 0V10h2v3.5a.5.5 0 001 0V10h2v3.5a.5.5 0 001 0V10h2v5H3v-5zm2.75-2.5a.75.75 0 110-1.5.75.75 0 010 1.5zm6.25-1c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm-3 .25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
    </svg>);
}
export default MidiIcon;

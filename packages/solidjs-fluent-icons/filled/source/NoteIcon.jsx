import { splitProps } from "solid-js";
function NoteIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14 3a3 3 0 013 2.82V10h-4.18a3 3 0 00-2.81 2.82L10 13v4H6a3 3 0 01-3-2.82V6a3 3 0 012.82-3H14zm2.9 8a2 2 0 01-.36.65l-.13.14-4.62 4.62a2 2 0 01-.79.5V12.84a2 2 0 011.84-1.84L13 11h3.9z"/>
    </svg>);
}
export default NoteIcon;

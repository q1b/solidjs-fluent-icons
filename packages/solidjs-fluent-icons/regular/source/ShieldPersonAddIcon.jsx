import { splitProps } from "solid-js";
function ShieldPersonAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.28 2.08a.5.5 0 00-.56 0 15.05 15.05 0 01-6.3 2.43A.5.5 0 003 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 00.36 0l.04-.02a5.5 5.5 0 01-.74-1.2C5.8 15.15 4 12.75 4 9.5V5.43a15.97 15.97 0 005.6-2.08l.4-.25.4.25A15.97 15.97 0 0016 5.43V9.2c.35.1.68.23 1 .39V5a.5.5 0 00-.43-.5 15.05 15.05 0 01-6.3-2.42zM9 14.42a5.48 5.48 0 011.73-3.92H8c-.83 0-1.5.67-1.5 1.5 0 1.07.73 2.13 2.5 2.42zm3-6.92a2 2 0 11-4 0 2 2 0 014 0zm7 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z"/>
    </svg>);
}
export default ShieldPersonAddIcon;

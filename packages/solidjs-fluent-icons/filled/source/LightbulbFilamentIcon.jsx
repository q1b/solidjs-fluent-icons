import { splitProps } from "solid-js";
function LightbulbFilamentIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.07 15l-.38 1.6a1.84 1.84 0 01-1.67 1.4H9.13c-.82 0-1.54-.52-1.78-1.26l-.04-.14-.38-1.6h6.14zM10 2c3.31 0 6 2.6 6 5.8 0 1.68-.75 3.22-2.2 4.6a.6.6 0 00-.15.2l-.02.09L13.3 14H10.5V9.5a.5.5 0 10-1 0V14H6.69l-.31-1.31a.6.6 0 00-.17-.3A6.32 6.32 0 014 8.04L4 7.8v-.2A5.91 5.91 0 0110 2zm-.5 4.5v1a.5.5 0 001 0v-1a.5.5 0 00-1 0zm3.35.94a.5.5 0 00-.7 0l-.71.71a.5.5 0 00.7.7l.71-.7a.5.5 0 000-.7zm-5 0a.5.5 0 10-.7.71l.7.7a.5.5 0 10.71-.7l-.7-.7z"/>
    </svg>);
}
export default LightbulbFilamentIcon;

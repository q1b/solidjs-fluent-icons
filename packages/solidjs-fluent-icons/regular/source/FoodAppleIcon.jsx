import { splitProps } from "solid-js";
function FoodAppleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.22 8.34a.5.5 0 01-.31.63c-.28.1-.54.27-.72.6-.18.36-.31.93-.2 1.87a.5.5 0 01-.99.12c-.13-1.06 0-1.86.3-2.45.33-.6.82-.93 1.3-1.08a.5.5 0 01.62.31zm4.94-5.37a.5.5 0 00-.32-.94 3.18 3.18 0 00-1.86 1.9c-.05.11-.1.23-.13.34A4 4 0 006.2 2.14c-.58.01-1.05.48-1.06 1.06a3.99 3.99 0 001.2 2.97A4 4 0 003.2 9.76v.07a8.5 8.5 0 001 4.75l.36.66a.5.5 0 00.03.05l1 1.4a2.69 2.69 0 004.09.34.46.46 0 01.64 0 2.69 2.69 0 004.09-.34l1-1.4a.51.51 0 00.03-.05l.36-.66a8.5 8.5 0 001-4.75v-.07a4 4 0 00-4.64-3.63l-1.66.28c.01-.68.13-1.45.4-2.1.28-.67.7-1.15 1.26-1.34zM8.72 6.28l-.16-.03a2.98 2.98 0 01-2.42-3.02c0-.05.04-.09.09-.1a2.99 2.99 0 013.08 3.1c0 .04-.04.08-.09.08-.17 0-.34 0-.5-.03zm-.33.96l.17.03.78.13a4 4 0 001.32 0l1.66-.28a3 3 0 013.49 2.72v.07a7.5 7.5 0 01-.9 4.2l-.33.62-.99 1.38c-.6.85-1.82.95-2.56.21a1.46 1.46 0 00-2.06 0c-.74.74-1.96.64-2.56-.21l-.99-1.38-.34-.63a7.5 7.5 0 01-.9-4.19l.01-.07a3 3 0 013.49-2.72l.71.12z"/>
    </svg>);
}
export default FoodAppleIcon;

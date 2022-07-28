import { splitProps } from "solid-js";
function MentionBracketsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.75 2A2.75 2.75 0 002 4.75v10.5A2.75 2.75 0 004.75 18h1.5a.75.75 0 000-1.5h-1.5c-.69 0-1.25-.56-1.25-1.25V4.75c0-.69.56-1.25 1.25-1.25h1.5a.75.75 0 000-1.5h-1.5zm7 5.25c.41 0 .75.34.75.75v2.75a.75.75 0 001.5 0V10a4 4 0 10-4.24 4 4.1 4.1 0 001.29-.13c.35-.1.75.05.89.39.17.43-.03.93-.47 1.05A5.5 5.5 0 1115.5 10v.74c0 .46-.14.88-.37 1.24l-.13.3v-.13a2.25 2.25 0 01-3.58-.1 2.5 2.5 0 11-.37-4.33c.1-.28.38-.48.7-.48zM10 9a1 1 0 100 2 1 1 0 000-2zm8-4.25A2.75 2.75 0 0015.25 2h-1.5a.75.75 0 000 1.5h1.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25h-1.5a.75.75 0 000 1.5h1.5A2.75 2.75 0 0018 15.25V4.75z"/>
    </svg>);
}
export default MentionBracketsIcon;

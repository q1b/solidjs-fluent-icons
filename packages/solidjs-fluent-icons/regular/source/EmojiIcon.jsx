import { splitProps } from "solid-js";
function EmojiIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm-2.85 9.43a4.01 4.01 0 005.52.17l.18-.17a.5.5 0 01.76.63l-.06.07-.02.02a5.01 5.01 0 01-7.08-.02.5.5 0 01.7-.7zM12.5 7.5a1 1 0 110 2 1 1 0 010-2zm-5 0a1 1 0 110 2 1 1 0 010-2z"/>
    </svg>);
}
export default EmojiIcon;

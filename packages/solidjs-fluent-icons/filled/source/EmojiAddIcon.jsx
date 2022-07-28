import { splitProps } from "solid-js";
function EmojiAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 1a8 8 0 017.98 8.59 5.48 5.48 0 00-7.64 3 4 4 0 01-3.19-1.16.5.5 0 10-.7.7 5 5 0 003.62 1.48 5.54 5.54 0 00.52 3.37L9 17A8 8 0 119 1zm2.5 5.5a1 1 0 100 2 1 1 0 000-2zm-5 0a1 1 0 100 2 1 1 0 000-2zm12.5 8a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z"/>
    </svg>);
}
export default EmojiAddIcon;
